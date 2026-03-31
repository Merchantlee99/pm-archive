import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function createCspMeta(command) {
  if (command === 'build') {
    return [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "img-src 'self' data: blob:",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "script-src 'self'",
      "connect-src 'self'",
      "form-action 'self' mailto:",
    ].join('; ')
  }

  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "img-src 'self' data: blob: https:",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' http://127.0.0.1:* http://localhost:*",
    "connect-src 'self' http://127.0.0.1:* ws://127.0.0.1:* http://localhost:* ws://localhost:*",
    "form-action 'self' mailto:",
  ].join('; ')
}

function archiveSecurityPlugin(command) {
  const csp = createCspMeta(command)
  const preloadMarkup = [
    '<link rel="preload" href="/pm-archive/fonts/PretendardVariable.ttf" as="font" type="font/ttf" crossorigin>',
    '<link rel="preload" href="/pm-archive/fonts/FigtreeVariable.woff2" as="font" type="font/woff2" crossorigin>',
  ].join('\n    ')

  return {
    name: 'archive-security-plugin',
    transformIndexHtml(html) {
      return html.replace('__ARCHIVE_CSP__', csp)
    },
    async closeBundle() {
      if (command !== 'build') return

      const indexPath = resolve(process.cwd(), 'dist/index.html')
      const html = await readFile(indexPath, 'utf8')
      let patched = html.replace(
        /<meta\s+http-equiv="Content-Security-Policy"\s+content="[^"]*"\s*\/?>/,
        `<meta http-equiv="Content-Security-Policy" content="${csp}">`,
      )

      patched = patched
        .replace(/\s*<link\s+rel="stylesheet"[^>]*cdn\.jsdelivr[^>]*>\s*/g, '\n    ')
        .replace(/\s*<link\s+rel="preconnect"\s+href="https:\/\/fonts\.googleapis\.com"\s*\/?>\s*/g, '\n    ')
        .replace(/\s*<link\s+rel="preconnect"\s+href="https:\/\/fonts\.gstatic\.com"[^>]*>\s*/g, '\n    ')
        .replace(/\s*<link\s+href="https:\/\/fonts\.googleapis\.com[^"]*"\s+rel="stylesheet"\s*\/?>\s*/g, '\n    ')

      if (!patched.includes('/pm-archive/fonts/PretendardVariable.ttf')) {
        patched = patched.replace('</title>', `</title>\n    ${preloadMarkup}`)
      }

      if (patched !== html) {
        await writeFile(indexPath, patched, 'utf8')
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), archiveSecurityPlugin(command)],
  base: command === 'build' ? '/pm-archive/' : '/',
}))
