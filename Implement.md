# Implement.md

## Current Slice

- `TPM Field Guide` 홈을 아카이브형 포트폴리오 구조로 재구성한다.

## Write Paths

- src/App.jsx
- src/App.css
- src/index.css
- src/components/*
- src/data/homeData.js
- Prompt.md
- PRD.md
- Plan.md
- Implement.md
- Documentation.md
- .vibebuilder/runtime.json

## Read Paths

- docs/00_brand-definition.md
- docs/01_visual-system.md
- docs/02_ia-and-page-map.md
- docs/03_home-wireframe.md
- docs/04_component-rules.md
- docs/05_supanova-adaptation.md
- package.json

## Planned Changes

- 기존 hero/stage 구조를 제거한다.
- feed + lead item + sidebar rail 구조를 도입한다.
- 더미 데이터를 siteMeta/homeFeed/sidebarModules로 재구성한다.
- 홈 전용 스타일을 archive-* 네임스페이스로 다시 쓴다.
- runtime과 root 문서를 새 slice 기준으로 갱신한다.

## Sprint Contract

- Outcome:
  - 홈이 문서 기준의 새 아카이브 구조로 렌더된다.
- Done definition:
  - intro/lead article/latest rows/sidebar modules가 모두 구현된다.
  - 기존 hero/stage 레이아웃이 제거된다.
  - `npm run build`가 통과한다.
- Evidence to collect:
  - 변경 파일, build 결과, 새 홈 구조 요약
- Failure threshold:
  - ordinary card/grid 문법이 다시 반복되면 실패다.
- Required gate after this slice:
  - review + qa
- Pivot trigger:
  - 홈이 ordinary list처럼만 보이고 개인 포트폴리오 특성이 약할 경우

## Validation Loop

1. fixture 데이터 재구성
2. feed/rail 컴포넌트 교체
3. 스타일 재정렬
4. build 확인

## Risks During Implementation

- 글 리스트가 너무 많아져 첫 화면 집중도가 떨어질 수 있다.
- 프로젝트 모듈이 너무 커져 본문 흐름을 방해할 수 있다.
- 일반 블로그처럼만 보이고 개인 포트폴리오 특성이 약해질 수 있다.

## Gate After This Slice

- review
- qa
- security if needed
- ship if needed
