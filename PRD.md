# PRD.md

## Problem Statement

- 현재 홈은 랜딩형 구조에 가까워서 최신 글이 첫 증거로 읽히지 않는다.
- 이 상태를 그대로 확장하면 이후 페이지도 ordinary stage/card 문법으로 굳어진다.

## User Pain And Current Workaround

- Pain:
  - 홈 첫 화면에서 최신 글이 첫 증거로 보이지 않는다.
  - 프로젝트가 홈 본문을 먹어버리거나, 반대로 전혀 존재감이 없게 되기 쉽다.
  - 현재 구조는 개인 아카이브보다 포트폴리오 랜딩처럼 보인다.
- Current workaround:
  - 더미 데이터와 section 컴포넌트로 초기 셸만 유지 중이다.
- Why now:
  - 홈을 아카이브형으로 고정하지 않으면 이후 글/프로젝트/소개 페이지도 방향이 흔들린다.

## Target User

- 처음 방문하는 채용 담당자, 협업자, 제품/프로그램 역할 관계자

## User Story

- 사용자는 홈의 첫 스크린과 첫 몇 개의 row만 보고도 “이 사람은 글을 중심으로 기준을 남기고, 프로젝트 사례도 갖고 있는 TPM 지향 인물”이라고 이해할 수 있어야 한다.

## Core Flow

1. 사용자가 홈에 들어온다.
2. Intro와 lead article에서 사이트 성격을 읽는다.
3. 최신 글 rows를 스캔한다.
4. 우측 레일에서 대표 프로젝트와 소개를 본다.
5. 전체적으로 글 중심 아카이브라는 인상을 받는다.

## Scope For This Round

- 홈 레이아웃을 아카이브형 2열 구조로 전환
- feed/rail/module 컴포넌트 도입
- fixture 데이터 재구성
- 스타일 시스템 재정렬
- root 문서/runtime를 새 slice 기준으로 갱신

## Out Of Scope

- 실제 프로젝트/글 콘텐츠 복원
- 다른 라우트 구현
- SEO/릴리즈 마감
- 시네마틱 전환/영상 실험

## Options Considered

- Option:
  - 기존 stage 중심 홈 유지
  - Why not chosen:
    - 최신 글이 첫 증거로 읽히지 않고, 랜딩 감각이 계속 남는다.
- Option:
  - 메인 피드 + 우측 레일 구조로 전환
  - Why chosen:
    - 글 중심 아카이브형 포트폴리오라는 목표에 더 직접적으로 맞는다.

## Acceptance Criteria

- 홈이 `intro + lead article + latest writing rows + sidebar modules` 구조로 구성된다.
- 최신 글이 첫 증거로 읽힌다.
- 우측 레일에 대표 프로젝트 모듈이 있다.
- ordinary card grid 없이 피드/레일 구조가 명확하다.
- 기존 홈보다 아카이브형 위계가 선명하다.

## Key Assumptions

- 더미 데이터로 홈 셸을 먼저 확정하는 것이 맞다.
- glass는 기본 비활성으로 두는 것이 맞다.
- 현재 단계에서는 `solo-pro`가 적절하다.

## Risks

- 피드와 우측 레일의 무게 차이가 약하면 ordinary 블로그처럼 보일 수 있다.
- 프로젝트 모듈이 너무 크면 아카이브 구조를 망칠 수 있다.
- 정보량이 많아지면 다시 카드형 정리 습관으로 돌아갈 수 있다.

## Open Decisions

- 추후 `/writing` 페이지도 홈과 동일한 피드 구조를 얼마나 유지할지
- `/projects` lead case를 홈 프로젝트 모듈과 얼마나 연결할지

## Success Signal

- 홈을 보자마자 랜딩이 아니라 `개인 포트폴리오 아카이브`처럼 느껴진다.
