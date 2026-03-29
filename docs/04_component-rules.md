# 컴포넌트 규칙

## 1. 전역 컴포넌트 철학
- 카드로 모든 걸 해결하지 않는다
- feed, row, rail, module, note 다섯 가지로 제한한다
- 같은 페이지에서 같은 구조를 반복하지 않는다

## 2. 허용 컴포넌트
### Lead Feed Item
- 홈 첫 글
- 날짜 / 제목 / 요약 / 태그
- ordinary card 금지

### Feed Row
- 최신 글 row
- 날짜 / 제목 / 요약 / 태그
- hover는 미세해야 함

### Rail Module
- About
- Featured Project
- Links
- Tags / Signals
- 우측 레일의 보조 정보 단위

### Footer Link Row
- 브랜드 한 줄
- 핵심 링크

### Note
- 날짜
- 카테고리
- read time
- supporting meta

## 3. 금지 컴포넌트
- 3열 동일 카드 그리드
- 큰 rounded panel cluster
- orbit visual widget
- full glass card grid
- carousel
- dashboard tile wall
- hero stage

## 4. 링크 규칙
### Text Link
- underline reveal
- color shift only
- arrow shift는 선택 사항

## 5. 상태 규칙
- hover
  - `translateX(2px)` 또는 underline reveal
  - 그림자 변화는 최소화
- active
  - `scale(0.99)` 이내
- focus
  - 2px cobalt outline
- reduced motion
  - translate 제거
  - opacity only

## 6. 글 컴포넌트 규칙
- 홈 대표 글은 `lead item`
- 나머지 글은 `row`
- featured big card 금지
- tag chip 남발 금지
- category는 작은 meta로만

## 7. 프로젝트 컴포넌트 규칙
- 홈 대표 프로젝트는 `rail module`
- 목록 대표 프로젝트도 과장된 stage보다 lead item에 가깝게
- 나머지 프로젝트는 `row`
- 프로젝트 상세는 `document shell`
- KPI 카드형 대시보드는 초기 MVP에서 금지

## 8. 소개/연락 규칙
- 소개는 카드 모음이 아니라 reading flow
- 연락은 기능성 위주
- glass accent 사용 금지

## 9. Signals 규칙
- row list만 허용
- 외부 정보 + 한 줄 해석
- 메인 홈 진입 금지

## 10. 구현 네이밍 규칙
- 새 구현 네임스페이스는 `archive-*` 사용
- 예:
  - `archive-shell`
  - `archive-feed`
  - `archive-row`
  - `archive-rail`
  - `archive-module`
  - `archive-note`
- 이전 네이밍 혼용 금지

## 11. 기술 구현 기본값
- React/Vite 유지
- 시각 셸 검증 전에는 실제 MDX 연결보다 fixture 우선
- 더미 데이터는 `siteMeta`, `homeFeed`, `sidebarModules`로 분리
- glass accent는 기본 비활성
- Spline/3D는 이 단계에서 넣지 않음

## 12. Supanova skill 활용 규칙
- `taste-skill`
  - 타이포/여백/대비 기준 참고
- `redesign-skill`
  - generic 패턴 감지
  - grid/card 반복 제거
  - hover/state polish

## 13. 최종 체크
- ordinary card처럼 보이는가?
- 아카이브 피드처럼 읽히는가?
- 프로젝트 모듈이 과한가?
- 글과 프로젝트의 무게가 구분되는가?
- 브랜드보다 UI 패턴이 먼저 보이지 않는가?
