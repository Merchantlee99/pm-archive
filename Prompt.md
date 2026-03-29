# Prompt.md

## Working Title

- TPM Field Guide / home editorial rebuild

## Goal

- 기존 React/Vite 기반 프로젝트 위에서 홈 화면을 `TPM Field Guide` 문서 기준의 에디토리얼 랜딩으로 재구성한다.
- `Hero → Lead Writing Stage → Featured Project Stage → Field Notes → Toward TPM → Footer` 구조를 실제 코드와 스타일로 고정한다.

## Non-Goals

- 다중 라우트 전체 확장
- 실제 글/프로젝트 콘텐츠 복원
- 백엔드/CMS 연동
- 고강도 차단형 hooks 도입

## User Problem

- 현재 홈은 centered marketing hero와 단일 focus 섹션 위주라, 문서에서 정의한 `TPM Field Guide`의 에디토리얼 구조와 맞지 않는다.

## Constraints

- 작업 루트는 `06_My web`이다.
- 기존 React/Vite 셸과 liquid glass nav/CTA 훅은 재사용 가능하다.
- 홈은 더미 데이터 기준으로 먼저 완성한다.
- `.codex`는 Phase 1 hooks만 유지한다.

## Inputs We Already Have

- 현재 React/Vite 앱 셸과 `src/` 구현물
- `docs/00~05`의 브랜드/시각/IA/컴포넌트 규칙
- 최신 vibebuilder-framework 정렬 완료 상태

## Unknowns

- 후속 라우트에서 글/프로젝트 우선 순서를 어떻게 확장할지
- glass accent의 최종 강도와 범위를 어디까지 둘지

## Deliverables

- 문서 기준을 반영한 새 홈 레이아웃
- 홈 전용 section 컴포넌트와 fixture 데이터
- 현재 slice를 반영한 root 문서와 runtime

## Done-When

- 홈이 `Hero → Lead Writing → Featured Project → Field Notes → Toward TPM` 구조로 렌더된다.
- 기존 centered marketing hero와 단일 focus 구조가 제거된다.
- 더미 데이터가 section별로 분리되어 있다.
- `npm run build`가 통과한다.

## Notes

- 현재 slice는 `home editorial rebuild`다.
- 후속 라우트 확장은 다음 단계로 미룬다.
