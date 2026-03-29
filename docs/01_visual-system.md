# TPM Field Guide 시각 시스템

## 1. 시각 방향 요약
- 베이스: 밝고 차가운 종이톤
- 포인트: cobalt blue
- 재질: 거의 solid paper, glass는 제거에 가깝게 최소화
- 구조: feed / rail / module / row 중심
- 금지: card stack, orbit, hero stage, dashboard tile wall

## 2. 컬러 토큰
### Base
- `paper`: `#F6F8FB`
- `paper-strong`: `#EEF3F8`
- `paper-muted`: `#E3EAF2`
- `ink`: `#101827`
- `ink-soft`: `#1D2A42`

### Text
- `text-main`: `#101827`
- `text-sub`: `#556274`
- `text-soft`: `#7A8798`

### Accent
- `cobalt`: `#2F6BFF`
- `cobalt-strong`: `#1E58E8`

### Lines
- `line-default`: `rgba(16,24,39,0.08)`
- `line-strong`: `rgba(16,24,39,0.16)`

## 3. 컬러 사용 규칙
- 화면의 85%는 `paper / ink / neutral line`
- `cobalt`는 링크, 활성 상태, 작은 구조 포인트에만 사용
- 섹션을 색보다 문서 구조와 레일 구조로 구분한다
- gradient wash는 거의 쓰지 않는다

## 4. 타이포 시스템
### 폰트
- 한국어: `Pretendard Variable`
- 영문/숫자/메타: `Figtree Variable`

### Home Intro
- H1 size: `clamp(3rem, 5vw, 5rem)`
- line-height: `0.98`
- letter-spacing: `-0.05em`
- weight: `700`
- 한 문단 또는 두 줄 이내
- 거대한 hero 조형은 금지

### Lead Title
- size: `clamp(2rem, 3.2vw, 3rem)`
- line-height: `1.02`
- letter-spacing: `-0.05em`

### Row Title
- size: `clamp(1.3rem, 1.85vw, 1.75rem)`
- line-height: `1.08`
- letter-spacing: `-0.04em`

### Body
- size: `1.04rem`
- line-height: `1.72`
- `word-break: keep-all`

### Meta
- size: `0.78rem`
- line-height: `1.4`
- font-family: `Figtree`
- letter-spacing: `0.08em`

## 5. 여백 시스템
- shell width: `min(1360px, calc(100vw - 40px))`
- main / rail gap: `64px`
- lead row vertical padding: `32px`
- default row vertical padding: `22px`
- module gap: `28px`

## 6. 재질 규칙
- 전체 기본 표면은 종이 질감
- glass는 기본 금지로 본다
- 꼭 써야 해도 내비게이션 같은 작은 액센트 한 곳만 허용
- 대부분의 표면은 `solid paper + thin line`

## 7. 그림자 / 라인
- 기본은 line 위주
- 그림자는 매우 약한 soft shadow만 허용
- 큰 떠 있는 panel shadow 금지

## 8. 모션 규칙
- hover: `160ms`
- base transition: `240ms`
- 허용:
  - row hover의 미세한 `translateX(2px)`
  - underline reveal
  - sticky rail 정착
- 금지:
  - hero cinematic
  - route swipe
  - large scene transition
  - liquid glass 과시 인터랙션

## 9. 시각적 금지 패턴
- 전체 다크 테마
- 완전한 glassmorphism 랜딩
- AI 블루/퍼플 gradient mood
- 둥근 카드 3개를 나란히 놓는 feature row
- stage 중심 영웅형 홈

## 10. Supanova 적용 방식
- `taste-skill`에서 가져올 것:
  - 큰 한국어 타이포
  - 레이아웃 대비
  - 여백과 읽기성
- `redesign-skill`에서 가져올 것:
  - generic card row 제거
  - hover/spacing/typography polish
- 가져오지 않을 것:
  - 다크 랜딩 기본값
  - 과한 conversion landing 장치

## 11. Supanova 운영 프로필
- `DESIGN_VARIANCE`: `5`
- `MOTION_INTENSITY`: `3`
- `VISUAL_DENSITY`: `3`
- `LANDING_PURPOSE`: `portfolio`

## 12. 강제 규칙
- Inter, Noto Sans KR, Roboto 금지
- `word-break: keep-all` 기본 적용
- 3열 동일 카드 그리드 금지
- adjacent section가 같은 패턴을 반복하는 구조 금지
- glass는 없어도 된다
