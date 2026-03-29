import { useCallback, useEffect, useMemo, useRef } from 'react'

function supportsInteractiveMotion() {
  if (typeof window === 'undefined') return false
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finePointer = window.matchMedia('(pointer: fine)').matches
  return !reduced && finePointer
}

export function useLiquidGlassMotion({ maxTilt = 6, pressScale = 0.985 } = {}) {
  const ref = useRef(null)
  const interactive = useMemo(() => supportsInteractiveMotion, [])
  const frameRef = useRef(null)
  const stateRef = useRef({
    currentX: 50,
    currentY: 50,
    currentRotateX: 0,
    currentRotateY: 0,
    currentShiftX: 0,
    currentShiftY: 0,
    targetX: 50,
    targetY: 50,
    targetRotateX: 0,
    targetRotateY: 0,
    targetShiftX: 0,
    targetShiftY: 0,
  })

  const applyFrame = useCallback(() => {
    const node = ref.current
    if (!node) {
      frameRef.current = null
      return
    }

    const state = stateRef.current
    const lerp = (from, to, amount) => from + (to - from) * amount

    state.currentX = lerp(state.currentX, state.targetX, 0.2)
    state.currentY = lerp(state.currentY, state.targetY, 0.2)
    state.currentRotateX = lerp(state.currentRotateX, state.targetRotateX, 0.18)
    state.currentRotateY = lerp(state.currentRotateY, state.targetRotateY, 0.18)
    state.currentShiftX = lerp(state.currentShiftX, state.targetShiftX, 0.2)
    state.currentShiftY = lerp(state.currentShiftY, state.targetShiftY, 0.2)

    node.style.setProperty('--glass-x', `${state.currentX.toFixed(2)}%`)
    node.style.setProperty('--glass-y', `${state.currentY.toFixed(2)}%`)
    node.style.setProperty('--glass-rotate-x', `${state.currentRotateX.toFixed(2)}deg`)
    node.style.setProperty('--glass-rotate-y', `${state.currentRotateY.toFixed(2)}deg`)
    node.style.setProperty('--glass-shift-x', `${state.currentShiftX.toFixed(2)}px`)
    node.style.setProperty('--glass-shift-y', `${state.currentShiftY.toFixed(2)}px`)

    const active =
      Math.abs(state.currentX - state.targetX) > 0.08 ||
      Math.abs(state.currentY - state.targetY) > 0.08 ||
      Math.abs(state.currentRotateX - state.targetRotateX) > 0.08 ||
      Math.abs(state.currentRotateY - state.targetRotateY) > 0.08 ||
      Math.abs(state.currentShiftX - state.targetShiftX) > 0.08 ||
      Math.abs(state.currentShiftY - state.targetShiftY) > 0.08

    if (active) {
      frameRef.current = window.requestAnimationFrame(applyFrame)
      return
    }

    frameRef.current = null
  }, [])

  const ensureFrame = useCallback(() => {
    if (typeof window === 'undefined') return
    if (frameRef.current !== null) return
    frameRef.current = window.requestAnimationFrame(applyFrame)
  }, [applyFrame])

  const updateSurface = useCallback(
    (event) => {
      if (!interactive()) return
      const node = ref.current
      if (!node) return

      const rect = node.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const px = Math.max(0, Math.min(100, (x / rect.width) * 100))
      const py = Math.max(0, Math.min(100, (y / rect.height) * 100))
      const rotateY = ((px - 50) / 50) * maxTilt
      const rotateX = ((50 - py) / 50) * maxTilt
      const shiftX = ((px - 50) / 50) * 8
      const shiftY = ((py - 50) / 50) * 6

      const state = stateRef.current
      state.targetX = px
      state.targetY = py
      state.targetRotateX = rotateX
      state.targetRotateY = rotateY
      state.targetShiftX = shiftX
      state.targetShiftY = shiftY

      node.style.setProperty('--glass-hover', '1')
      ensureFrame()
    },
    [ensureFrame, interactive, maxTilt],
  )

  const resetSurface = useCallback(() => {
    const node = ref.current
    if (!node) return
    const state = stateRef.current
    state.targetRotateX = 0
    state.targetRotateY = 0
    state.targetShiftX = 0
    state.targetShiftY = 0
    node.style.setProperty('--glass-hover', '0')
    node.style.setProperty('--glass-press-scale', '1')
    ensureFrame()
  }, [ensureFrame])

  const pressSurface = useCallback(() => {
    const node = ref.current
    if (!node || !interactive()) return
    node.style.setProperty('--glass-press-scale', `${pressScale}`)
  }, [interactive, pressScale])

  const releaseSurface = useCallback(() => {
    const node = ref.current
    if (!node) return
    node.style.setProperty('--glass-press-scale', '1')
  }, [])

  useEffect(
    () => () => {
      if (frameRef.current !== null && typeof window !== 'undefined') {
        window.cancelAnimationFrame(frameRef.current)
      }
    },
    [],
  )

  return {
    ref,
    onPointerMove: updateSurface,
    onPointerEnter: updateSurface,
    onPointerLeave: resetSurface,
    onPointerCancel: resetSurface,
    onPointerDown: pressSurface,
    onPointerUp: releaseSurface,
  }
}
