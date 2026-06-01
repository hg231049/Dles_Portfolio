interface HistoryItems {
    company: string,
    title: string,
    period:string,
    desc:string[];
}

export const history:HistoryItems[] = [
  {
    company: "이젠컴퓨터학원",
    title: "웹퍼블리싱 과정 수료",
    period: "2021 · 6개월",
    desc: ["HTML / CSS / JS 기초 학습", "GTQ 1급, 워드프로세서 취득"],
  },
  {
    company: "디자인교과서",
    title: "웹퍼블리셔 근무",
    period: "2022.02 ~ 2024.06 (28개월)",
    desc: ["카페24 · 고도몰 운영", "고객사 맞춤 홈페이지 제작"],
  },
  {
    company: "올릿",
    title: "웹퍼블리셔 재직중",
    period: "2025.03 ~ 현재",
    desc: ["브랜드 사이트 리뉴얼", "SEO 최적화", "유지보수 및 운영 관리"],
  },
  {
    company: "Self Growth",
    title: "React · Tailwind · TypeScript 학습",
    period: "2025.08 ~ 현재",
    desc: ["토이 프로젝트 제작", "컴포넌트 구조 학습", "배포 경험 축적"],
  },
]; 