interface HistoryItems {
    company: string,
    title: string,
    period:string,
    desc:string[];
}

export const history: HistoryItems[] = [
  {
    company: "이젠컴퓨터학원",
    title: "웹퍼블리싱 과정 수료",
    period: "2021 · 6개월",
    desc: [
      "HTML · CSS · JavaScript 기초 학습",
      "GTQ 1급 · 워드프로세서 취득",
    ],
  },
  {
    company: "디자인교과서",
    title: "웹퍼블리셔",
    period: "2022.02 ~ 2024.06",
    desc: [
      "Cafe24 · 고도몰 기반 쇼핑몰 운영",
      "고객사 맞춤 홈페이지 제작",
    ],
  },
  {
    company: "올릿",
    title: "웹퍼블리셔",
    period: "2025.03 ~ 현재",
    desc: [
      "브랜드 사이트 리뉴얼 및 운영",
      "SEO · 웹 성능 개선",
      "유지보수 및 UI 개선",
    ],
  },
  {
    company: "PERSONAL PROJECT",
    title: "Frontend 역량 확장",
    period: "2025.08 ~ 현재",
    desc: [
      "React · TypeScript · Tailwind CSS 학습",
      "토이 프로젝트 제작 및 배포",
      "컴포넌트 기반 UI 구조 학습",
    ],
  },
];