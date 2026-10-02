import { dashboardThumb, codeThumb, proposalThumb } from "../assets/img";

interface CompetenciesItems {
    id:number ;
    badge:string;
    title: string;
    subtitle: string;
    thumbs: string,
    link?:string;
    linkToolTip?:string;
    points:string[];
}

export const competencies:CompetenciesItems[] = [
  {
    id: 1,
    badge: "+5.2x",
    title: "SEO & Performance",
    subtitle:
      "검색 노출 확대 및 웹 성능 개선\n메인 키워드 노출 5.2배 증가 (GSC 기준)",
    thumbs: dashboardThumb,
    link:"./Dashboard",
    linkToolTip:"대시보드 보러가기",
    points: [
      "시맨틱 마크업 구조 개선 및 메타데이터 최적화",
      "Lighthouse 기준 LCP / CLS 등 핵심 지표 개선",
      "검색 콘솔 데이터를 기반으로 키워드 노출 성과 관리",
    ],
  },
  {
    id: 2,
    badge: "Component",
    title: "Reusable UI Architecture",
    subtitle: "컴포넌트 기반 구조 설계 및 유지보수성 향상",
    thumbs: codeThumb,
    points: [
      "이벤트 / 상품 영역 공통 컴포넌트화",
      "수정 포인트 단일화로 유지보수 시간 절감",
      "일관된 UI 운영으로 휴먼 에러 최소화",
    ],
  },
  {
    id: 3,
    badge: "QA",
    title: "Strategic Collaboration",
    subtitle: "기획 단계부터 참여하는 퍼블리셔",
    thumbs: proposalThumb,
    link:"https://www.figma.com/design/SjVNvAIlA0Fyprz9D92kdF/%EC%BB%A4%EB%A8%B8%EC%8A%A4-%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80-UX-%EA%B0%9C%EC%84%A0-%EA%B8%B0%ED%9A%8D?node-id=0-1&t=KditUneoD3yzTQI7-1",
    linkToolTip:"기획안 보러가기",
    points: [
      "디자인 시안 구현 가능성 사전 검토",
      "UX 관점의 개선안 제안",
      "파트너사 협업 및 퍼블리싱 QA 진행",
    ],
  },
];