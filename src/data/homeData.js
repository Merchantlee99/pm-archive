import { writingArticles, writingTopicOptions } from './writingArticles'

export const siteMeta = {
  title: 'Sanginn',
  subtitle: '기록, 사례, 방향을 남기는 개인 포트폴리오 아카이브',
}

export const writingView = {
  kicker: 'Writing',
  title: '제가 생각하는 PM의 역량과 기준입니다',
  summary: '문제 재정의, 실행, 데이터, 전략, 기술, 디자인을 PM의 판단 기준으로 정리한 글입니다.',
  items: writingArticles,
}

export const projectView = {
  slug: 'trippixel-service-planning',
  kicker: 'Featured Project',
  meta: 'PM / Service Planning',
  title: 'TripPixel 서비스 기획',
  status: '현재 구축 중',
  timeline: '2025.11 — 2026.03',
  scope: '합의 흐름 / 추천 구조 / 설명 문서',
  summary:
    '여행 일정 합의의 막힘을 AI 조율 경험으로 다시 설계하며, 사용자 합의 흐름과 추천 구조를 함께 정리하는 프로젝트입니다.',
  href: '#/projects/trippixel-service-planning',
  linkLabel: '사례 보기',
  highlights: [
    '사용자의 의견 차이가 어디서 멈춤으로 바뀌는지 다시 정의했습니다.',
    '추천보다 합의 흐름이 먼저라는 기준으로 IA와 설명 방식을 정리했습니다.',
    '화면, 추천 로직, 문서가 같은 판단 기준을 공유하도록 맞췄습니다.',
  ],
  facts: [
    {
      label: 'Role',
      value: 'PM / Service Planning',
    },
    {
      label: 'Focus',
      value: '조율 흐름 재설계',
    },
    {
      label: 'Current',
      value: '추천 입력 구조 정리',
    },
  ],
  sections: [
    {
      title: 'Context',
      body:
        'TripPixel은 여행 동행자들이 각자 다른 우선순위를 갖고 있을 때, 어디서 합의가 끊기는지부터 다시 보는 프로젝트입니다. 일정 수집, 선호 조율, 추천 이해, 최종 선택까지의 흐름을 하나의 사용 맥락으로 정리했습니다.',
    },
    {
      title: 'Problem',
      body:
        '기존 여행 서비스는 장소를 많이 보여주지만, 함께 가는 사람들의 결정을 실제로 좁혀 주지는 못합니다. 사용자는 정보 부족보다 의견 충돌과 비교 피로 때문에 멈추는 경우가 더 많다고 봤습니다.',
    },
    {
      title: 'Approach',
      body:
        '핵심은 추천 자체보다 합의 구조였습니다. 후보지를 빠르게 모으고, 차이를 드러내고, 대화를 줄이는 대신 선택을 돕는 흐름으로 화면과 문서 구조를 다시 설계했습니다.',
    },
    {
      title: 'Current State',
      body:
        '지금은 사용자 조율 흐름, 추천 입력 구조, 결과 정리 방식을 한 세트로 다듬는 단계입니다. 서비스 화면뿐 아니라 문서와 설명 방식도 함께 정리해 다음 판단이 이어지도록 만들고 있습니다.',
    },
  ],
  closing:
    '이 프로젝트는 기능 수를 늘리기보다, 합의가 멈추는 지점을 하나의 사용자 문제로 다시 묶는 작업에 가깝습니다. 그래서 결과 화면보다 앞단의 판단 구조를 더 중요하게 보고 있습니다.',
}

export const rightPanel = {
  title: 'Sanginn',
  description:
    '고객의 언어를 문제 정의로 번역하고, 글과 사례를 함께 남기며 TPM으로 수렴하는 개인 포트폴리오 아카이브입니다.',
  about: {
    kicker: 'About',
    title: '기록과 사례를 남기는 이유',
    description:
      '결과보다 판단이 먼저 읽히는 포트폴리오를 만들고 싶습니다. 글은 기준을 남기고, 프로젝트는 그 기준이 실제로 어떻게 작동했는지를 보여줍니다.',
  },
  links: {
    kicker: 'Links',
    items: [
      {
        label: 'Email',
        value: 'Email',
        href: 'mailto:f374800890@gmail.com',
        ariaLabel: 'f374800890@gmail.com로 이메일 보내기',
      },
      {
        label: 'GitHub',
        value: 'GitHub',
        href: 'https://github.com/Merchantlee99',
        ariaLabel: 'Merchantlee99 GitHub 열기',
      },
    ],
  },
  featuredProject: {
    kicker: 'Featured Project',
    meta: 'PM / Service Planning',
    title: 'TripPixel 서비스 기획',
    description:
      '여행 일정 합의의 막힘을 사용자 조율 흐름과 추천 구조로 다시 설계하는 프로젝트입니다.',
    href: '#/projects/trippixel-service-planning',
    linkLabel: '사례 보기',
  },
  tags: {
    kicker: 'Topics',
    items: writingTopicOptions,
  },
}

export const footerData = {
  tagline: '',
  links: [
    { label: '소개', href: '#about' },
    { label: 'Links', href: '#links' },
    { label: 'Signals', href: '/signals' },
  ],
  copyright: '2026 All rights reserved.',
}
