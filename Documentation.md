# Documentation.md

## Current Status

- 최신 vibebuilder-framework 리트로핏은 끝났다.
- 현재 slice는 홈을 `왼쪽 메인 아카이브 뷰 + 오른쪽 조용한 sidebar rail` 구조로 재구성하는 단계다.
- 홈은 `글 아카이브`를 기본 화면으로 사용하고, 우측 `Featured Project`는 별도 프로젝트 상세 페이지로 연결된다.
- 글 뷰는 `pm-archive-editorial-upgrade.md` 기준으로 다듬은 23편의 로컬 아티클 세트를 사용하고, 홈 안에서 원문 상세까지 보여준다.
- 글 상세는 우선 6편에 한해 Wikimedia Commons 기반 외부 인포그래픽을 붙이고, 이미지 아래에 출처와 라이선스를 함께 표기한다.
- 새 구현은 `archive-*` 네임스페이스와 PM 교재 기반 글 데이터 + 단일 프로젝트 fixture 조합으로 구성되어 있다.
- 우측 `Topics`는 개별 카테고리 나열 대신 그룹형 필터로 축소했고, 프로젝트 상세는 개요 카드와 핵심 포인트를 가진 별도 destination layout으로 보강했다.
- 브라우저 보안 메타는 `dev`와 `prod`를 분리해, 개발 서버는 HMR 친화적으로 두고 배포본은 빌드 산출물(`dist/index.html`)까지 더 엄격한 CSP로 고정한다.

## Decisions Log

- Date: 2026-03-29
  Decision: 홈 방향을 stage 중심 랜딩에서 아카이브형 포트폴리오로 피벗한다.
  Why: 최신 글이 첫 증거로 읽히는 구조가 현재 사이트 목적에 더 맞기 때문이다.

- Date: 2026-03-29
  Decision: 히어로와 메인 타이포를 우측 고정 패널로 옮기고, 왼쪽은 글/프로젝트를 전환하는 메인 판으로 재구성한다.
  Why: 글과 프로젝트를 같은 분류로 보이지 않게 분리하고, 브랜드 메시지는 항상 고정된 오른쪽 패널에서 읽히게 만들기 위해서다.

- Date: 2026-03-29
  Decision: 오른쪽 패널은 single glass hero object로, 왼쪽은 paper editorial archive로 위계를 더 벌린다.
  Why: 좌우가 같은 column처럼 보이던 문제를 줄이고, 오른쪽은 브랜드 오브젝트, 왼쪽은 읽는 영역으로 분리하기 위해서다.

- Date: 2026-03-29
  Decision: 오른쪽 glass hero panel과 `Current Focus` infographic은 hover/reactive motion 없이 정적인 오브젝트로 유지한다.
  Why: 우측 패널은 인터랙션 데모가 아니라 고정된 브랜드 패널이어야 하고, 본문보다 더 눈에 띄는 마우스 반응이 생기면 위계가 다시 흔들리기 때문이다.

- Date: 2026-03-29
  Decision: 홈의 메타 시스템을 분리하고, 왼쪽 intro를 section heading 수준으로 낮추며, 모바일에서도 메인 archive가 먼저 나오도록 순서를 고정한다.
  Why: 작은 메타와 보조 텍스트가 모두 같은 목소리로 들리던 문제를 줄이고, `글/프로젝트 first`라는 홈 전략이 데스크톱과 모바일에서 모두 유지되게 하기 위해서다.

- Date: 2026-03-29
  Decision: 프로젝트 뷰는 같은 list shell을 쓰더라도 태그/메타 배치와 rail 구조를 달리해 글 목록과 다른 사례집처럼 읽히게 만든다.
  Why: 색만 다른 같은 레이아웃으로 보이면 프로젝트가 글의 하위 목록처럼 느껴지기 때문이다.

- Date: 2026-03-29
  Decision: 오른쪽 패널의 hero/title과 `Current Focus`를 제거하고, `About / Links / Featured Project / Topics` 중심의 더 조용한 sidebar rail로 재구성한다.
  Why: `fsck.com`처럼 메인 피드가 주인공이 되려면 우측은 브랜드 hero가 아니라 보조 레일이어야 하고, glass와 정보량도 지금보다 훨씬 적어야 하기 때문이다.

- Date: 2026-03-29
  Decision: footer는 저작권 한 줄만 남기고, 설명문과 보조 링크는 제거한다.
  Why: 현재 홈에선 메인 피드와 우측 레일만으로 정보 구조가 충분하고, 하단 보조 CTA와 설명은 시선을 분산시키기 때문이다.

- Date: 2026-03-29
  Decision: 글 피드의 첫 항목만 별도 lead 컴포넌트를 쓰지 않고, 모든 글을 같은 row 구조로 통일한다.
  Why: 첫 글만 다른 구성으로 보이면 목록 위계가 흔들리고 아카이브 톤이 깨지기 때문이다.

- Date: 2026-03-29
  Decision: 현재 프로젝트의 글 뷰는 이 저장소 안으로 복사한 Astro 원본 MDX를 `?raw`로 읽어 와 홈 내부에서 원문 상세 뷰까지 보여준다.
  Why: 더미 텍스트가 아니라 실제 글 원문을 현재 앱 안에서 이어 보게 만들어야 홈 피드와 글 상세가 자연스럽게 연결되기 때문이다.

- Date: 2026-03-29
  Decision: 상단 `글 / 프로젝트` 네비게이션은 제거하고, 홈은 글 아카이브 고정으로 단순화한다. 우측 `Featured Project`는 해시 라우트 기반의 별도 프로젝트 상세 페이지로 연결한다.
  Why: 프로젝트는 홈 내부 전환보다 별도 페이지 구조로 읽히는 편이 더 분명하고, 상단 탭이 사라져야 홈이 글 중심 아카이브로 더 안정적으로 보이기 때문이다.

- Date: 2026-03-29
  Decision: 홈의 글 데이터는 예전 `01_websites` MDX 원본 의존을 끊고, PM 수업 교재 PDF를 분석해 다시 쓴 로컬 아티클 세트로 교체한다.
  Why: 기존 글과 겹치지 않는 범주를 확보하고, 이 프로젝트 안에서 독립적으로 글 목록과 상세를 유지하기 위해서다.

- Date: 2026-03-29
  Decision: 우측 sidebar rail은 밝은 반투명 카드가 아니라, reference-based liquid glass shell로 재구성하고 rail 뒤에 별도 blue/cyan luminance field를 둔다.
  Why: 기존 구현은 코드상 glass 레이어가 있어도 배경 대비가 약해 `파스텔 그라디언트 카드`처럼 보였기 때문에, 실제 왜곡과 재질감이 보이도록 배경 필드와 쉘/카드/CTA 레이어를 함께 설계해야 했다.

- Date: 2026-03-29
  Decision: 우측 rail 뒤 blue/cyan luminance field는 제거하고, liquid glass 재질은 패널 자체의 레이어로만 유지한다.
  Why: 배경 발광이 glass보다 먼저 읽혀 실제 재질감보다 `파란 그라디언트 배경`처럼 보였기 때문이다.

- Date: 2026-03-29
  Decision: `Topics`는 세부 카테고리 전체를 나열하지 않고 `문제/고객`, `실행/협업`, `제품/경험`, `시스템/기술`, `전략`의 그룹 필터로 축소한다.
  Why: 토픽 수가 많아질수록 조용한 sidebar rail이 아니라 필터 매트릭스처럼 보였기 때문에, 홈에서는 탐색 축만 남기고 세부 분류는 글 목록 안에서 읽히게 하는 편이 더 정돈되기 때문이다.

- Date: 2026-03-29
  Decision: 프로젝트 상세는 단일 요약 패널에서 멈추지 않고, 핵심 fact strip, project snapshot, why-it-matters 패널을 갖춘 destination page로 확장한다.
  Why: 우측 `Featured Project`에서 진입한 이후에도 실제 사례집 페이지처럼 읽혀야 하고, home shell을 그대로 옮긴 좁은 패널로는 도착 페이지의 완성도가 부족했기 때문이다.

- Date: 2026-03-31
  Decision: 외부 인포그래픽은 23편 전체가 아니라 우선 6편에만 적용하고, Wikimedia Commons처럼 파일 단위 라이선스가 명확한 자료만 사용한다.
  Why: 사용자가 실제 완성된 외부 시각 자료를 원했고, 동시에 포트폴리오 사이트에 재배포할 때는 직접 다운로드 가능 여부와 재사용 안전성을 먼저 확인하는 편이 더 안전하기 때문이다.

- Date: 2026-03-31
  Decision: 브라우저 보안 메타는 `index.html`의 고정 문자열 대신 Vite 플러그인으로 주입하고, 개발용 CSP와 배포용 CSP를 분리한다.
  Why: 기존에는 개발 편의 때문에 `unsafe-eval`, `localhost`, `ws` 예외가 배포본에도 같이 남아 있었고, 남은 리스크는 이 경계를 분리하는 것이었기 때문이다.

## Known Issues

- 프로젝트는 자체 git 저장소가 아니어서 Stop hook의 변경 감지는 project-local git status 대신 제한적인 fallback을 사용한다.
- secondary routes(`projects`, `writing`, `about`)는 아직 새 홈 문법으로 확장되지 않았다.
- 현재는 홈과 글 상세가 `#/writing/[slug]` 해시 라우트로 동작하고, `/writing`, `/about` 같은 실제 라우트는 아직 없다.
- `Pretendard Variable`, `Figtree`는 프로젝트 내부 폰트 파일로 self-hosting 하며, 외부 폰트 CDN 의존성은 제거했다.

## How To Run

```bash
cd "/Users/isanginn/Documents/01_Personal/04_Vibe Coding/06_My web"
npm install
npm run dev
```

## How To Verify

- `npm run build`가 통과하는지 확인한다.
- `dist/index.html`의 CSP 메타가 개발용 예외 없이 더 엄격한 값으로 주입되는지 확인한다.
- 홈에 `왼쪽 메인 아카이브 뷰 + 오른쪽 조용한 sidebar rail` 구조가 반영됐는지 확인한다.
- 글 row를 눌렀을 때 홈 안에서 실제 글 원문이 열리는지 확인한다.
- 잘못된 해시 주소로 접근했을 때 홈으로 조용히 떨어지지 않고 `Not found` 화면이 보이는지 확인한다.
- 오른쪽 패널이 또 하나의 본문 column이 아니라 보조 레일처럼 보이는지 확인한다.

## Resume Here

- 다음 단계는 `writing`과 `about`을 실제 라우트로 분리하고, 글 원문 상세를 현재 홈 내부 상태가 아니라 실제 페이지 구조로 끌어올리는 것이다.

## Next Options

- 홈 리빌드 완료 후 `projects`, `writing`, `about` 라우트를 같은 레이아웃 언어로 확장한다.
- 이후 시네마틱 전환이나 영상 에셋은 홈 셸이 잠긴 뒤에 따로 실험한다.
- 외부 폰트 CDN은 제거됐고, 다음 보안 단계는 배포 서버 헤더 수준에서도 동일한 CSP를 강제하는 것이다.
