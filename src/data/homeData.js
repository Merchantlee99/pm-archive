import { writingArticles, writingTopicOptions } from './writingArticles'

export const writingView = {
  kicker: 'Writing',
  title: '저의 사고와 판단, 행동과 결과를 글로 기록합니다',
  summary: '프로덕트를 처음부터 끝까지 다루는 End to End 역량, 그외 디자인과 기술적인 이해까지 제가 이해하고 실행하는 선에서 정리한 글입니다.',
  items: writingArticles,
}

export const rightPanel = {
  about: {
    kicker: 'About',
    title: '기록과 사례를 남기는 이유',
    description:
      '결과보다 판단이 먼저 읽히는 포트폴리오를 만들고 싶었습니다. 제가 작성한 글은 제가 사고하는 방식을 나타내고, 프로젝트는 그 사고가 어떻게 작동됐는지 결과로 보여줍니다.',
  },
  links: {
    kicker: 'Links',
    items: [
      {
        label: 'Email',
        value: '✉️ Email',
        href: 'mailto:f374800890@gmail.com',
        ariaLabel: 'f374800890@gmail.com로 이메일 보내기',
      },
      {
        label: 'GitHub',
        value: '🐙 GitHub',
        href: 'https://github.com/Merchantlee99',
        ariaLabel: 'Merchantlee99 GitHub 열기',
      },
      {
        label: 'LinkedIn',
        value: '💼 LinkedIn',
        href: 'https://www.linkedin.com/in/%EC%83%81%EC%9D%B8-%EC%9D%B4-aa26a6354/',
        ariaLabel: '이상인 LinkedIn 열기',
      },
    ],
  },
  featuredProject: {
    kicker: 'Featured Project',
    title: 'TripPixel',
    href: 'https://trip-pixel.com',
  },
  tags: {
    kicker: 'Topics',
    items: writingTopicOptions,
  },
}

export const footerData = {
  copyright: '2026 All rights reserved.',
}
