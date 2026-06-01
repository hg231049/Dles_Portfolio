import { dashboardThumb, codeThumb, proposalThumb } from "../assets/img";

interface CompetenciesItems {
    id:number ;
    badge:string;
    title: string;
    subtitle: string;
    thumbs: string,
    points:string[];
}

export const competencies:CompetenciesItemsp[] = [
  {
    id: 1,
    badge: "+5.2x",
    title: "SEO & Performance",
    subtitle:
      "검색 노출 확대 및 웹 성능 지표 개선 \n (메인 키워드 노출 5.2배 달성(GSC기준)",
    thumbs: dashboardThumb,
    link:"./Dashboard",
    points: [
      "시맨틱 마크업 구조 개선 및 메타데이터 최적화",
      "Lighthouse 기준 LCP / CLS 등 핵심 지표 개선",
      "검색 콘솔 데이터를 기반으로 키워드 노출 성과 관리",
    ],
  },
  {
    id: 2,
    badge: "-40%",
    title: "Reusable UI System",
    subtitle: "반복 요소 공통화로 운영 효율 향상",
    thumbs: codeThumb,
    points: [
      "이벤트 / 상품 영역 공통 컴포넌트화",
      "수정 포인트 단일화로 유지보수 시간 절감",
      "일관된 UI 운영으로 휴먼 에러 최소화",
    ],
  },
  {
    id: 3,
    badge: "Lead",
    title: "Strategic Collaboration",
    subtitle: "기획 단계부터 참여하는 퍼블리셔",
    thumbs: proposalThumb,
    points: [
      "디자인 시안 구현 가능성 사전 검토",
      "UX 관점의 개선안 제안",
      "파트너사 협업 및 퍼블리싱 QA 진행",
    ],
  },
];