# Supanova Skill 적용 노트

## 1. 적용 방식
이번 프로젝트는 Codex가 `taste-skill`과 `redesign-skill`을 직접 읽고, 그 규칙을 문서와 구현에 반영하는 방식으로 진행한다.

설치 경로:
- `/Users/isanginn/.codex/skills/taste-skill/SKILL.md`
- `/Users/isanginn/.codex/skills/redesign-skill/SKILL.md`

## 2. 그대로 가져오는 규칙
### taste-skill
- 큰 한국어 타이포 우선
- 섹션마다 다른 레이아웃 패턴
- mobile-first
- `word-break: keep-all`
- 단순한 hover/active/focus 상태도 필수

### redesign-skill
- 같은 카드 구조 반복 금지
- generic 3열 card row 금지
- 과한 dark gradient, oversaturated accent, AI 무드 제거
- spacing, hover, hierarchy를 더 정밀하게 조정

## 3. 이 프로젝트에서 오버라이드하는 규칙
Supanova는 기본적으로 premium landing page를 강하게 지향한다.  
하지만 이 사이트는 conversion SaaS나 브랜드 광고 페이지가 아니라 `개인 포트폴리오`이므로 아래는 다르게 해석한다.

- Dark mode default 사용 안 함
- 전환 중심 CTA 과장 사용 안 함
- social proof / urgency / logo cloud 같은 전형적 랜딩 장치 사용 안 함
- testimonials를 필수 섹션으로 두지 않음
- glass를 전역 스타일로 확장하지 않음

## 4. 이 프로젝트용 운영값
- `DESIGN_VARIANCE = 6`
- `MOTION_INTENSITY = 4`
- `VISUAL_DENSITY = 2`
- `LANDING_PURPOSE = portfolio`

## 5. 디자인 판단 기준
- 이 화면이 “포트폴리오형 랜딩”처럼 보이는가, 아니면 “SaaS 홍보 랜딩”처럼 보이는가
- 글과 프로젝트의 위계가 분명한가
- 큰 타이포가 시선을 잡되, 내용 읽기를 방해하지 않는가
- glass accent가 한두 곳에만 정제되어 있는가
- 이전 레거시처럼 둥근 카드 모음으로 돌아가고 있지 않은가

## 6. 구현 전에 체크할 것
- Hero 패턴은 split인가
- Lead Writing Stage는 ordinary card가 아닌가
- Featured Project Stage는 stage처럼 보이는가
- 모든 섹션이 row/list/stage/strip 중 어느 패턴인지 명확한가
- 컴포넌트가 아니라 `장면` 중심으로 읽히는가
