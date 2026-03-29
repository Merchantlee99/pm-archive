# Plan.md

## Objective

- 현재 React/Vite 홈을 `최신 글 중심 + 우측 레일 프로젝트 모듈` 구조의 아카이브형 포트폴리오 홈으로 재구성한다.

## Readiness Decision

- Status: go
- Why:
  - framework retrofit은 끝났고, 새 아카이브형 방향도 결정됐다.
  - 이번 slice는 홈 범위 안에서만 작업하므로 write path가 명확하다.

## Oversight Plan

- Mode:
  - solo-pro
- Required lenses:
  - PM, design, implementation
- Optional lenses skipped:
  - security
- Required gates:
  - review, qa
- Evidence needed:
  - 새 홈 구조, build 통과, feed/rail hierarchy
- Pivot triggers:
  - 홈이 ordinary blog list처럼만 보일 경우
  - 프로젝트 모듈이 광고처럼 튈 경우

## Milestones

### Milestone 1
- Outcome:
  - 홈 first-view와 전체 레이아웃을 메인 피드 + 우측 레일 구조로 바꾼다.
- Tasks:
  - 기존 hero/stage 구조 제거
  - intro + lead article + row feed 도입
  - sidebar modules 도입
- Validation:
  - 앱 구조만 봐도 `feed + rail` 모델이 분명하다.

### Milestone 2
- Outcome:
  - 스타일과 데이터 구조를 새 피드/레일 모델에 맞게 재정렬한다.
- Tasks:
  - homeData를 siteMeta/homeFeed/sidebarModules 구조로 교체
  - 새 feed/rail 컴포넌트 추가
  - archive-* CSS로 정리
- Validation:
  - ordinary card grid 없이 글 중심 아카이브 리듬이 보인다.

### Milestone 3
- Outcome:
  - build와 문서를 새 slice 기준으로 맞춘다.
- Tasks:
  - runtime과 root 문서 갱신
  - `npm run build`
- Validation:
  - 빌드가 통과하고 문서가 현재 slice를 설명한다.

## Dependencies

- 현재 React/Vite 앱 상태
- `docs/00~05`

## Plan Review

- Founder lens:
  - 홈 첫 인상이 `개인 포트폴리오 아카이브`로 읽히는가
- Engineering lens:
  - 새 구조가 이후 라우트 확장에 재사용 가능한가
- Design lens:
  - lead article, rows, sidebar modules의 위계가 명확한가

## Risk Register

- Risk:
  - 홈이 그냥 블로그 인덱스처럼만 보인다
  Mitigation:
  - 제목, 레일, 프로젝트 모듈의 차이를 분명히 한다
- Risk:
  - 프로젝트 모듈이 튀어서 본문 흐름을 방해한다
  Mitigation:
  - 정보량과 시각 무게를 줄이고 row 기반 톤을 유지한다

## Validation Plan

1. 피드와 레일의 구조를 확인한다.
2. ordinary card/grid 패턴이 제거됐는지 본다.
3. `npm run build`를 돌린다.

## Exit Criteria

- 홈이 문서 기준의 아카이브 구조로 재구성됐다.
- 더미 데이터로도 feed/rail/module의 차이가 읽힌다.
- 빌드가 통과한다.
