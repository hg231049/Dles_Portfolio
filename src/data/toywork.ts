import {
  EtcWork1,
  EtcWork2,
  EtcWork3,
  EtcWork4,
} from "../assets/img";

export interface DescItems {
  title: string;
  text?: string;
}

export interface ToyWorkItems {
  id: number;
  name: string;
  date: string;
  link: string;
  thumb: string;
  badge?: string[];
  desc: DescItems[];
}

export const toyWork: ToyWorkItems[] = [
  // =========================================================
  // 포트폴리오
  // =========================================================
  {
    id: 1,

    name: "포트폴리오",

    date: "2026.04.24 ~",

    link: "https://dles-portfolio.vercel.app/",

    thumb: EtcWork4,

    badge: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
    ],

    desc: [
      {
        title: "React 기반 포트폴리오",
        text:
          "React, TypeScript, Tailwind CSS, GSAP, shadcn/ui를 활용해 SPA 구조의 포트폴리오를 구현",
      },
      {
        title: "스토리 기반 인터랙션",
        text:
          "GSAP ScrollTrigger를 활용해 '밤 → 노을 → 낮 → 봄 → 들판 → 땅'으로 이어지는 스크롤 경험 구현",
      },
      {
        title: "컴포넌트 구조 설계",
        text:
          "페이지를 섹션과 컴포넌트 단위로 분리하고 프로젝트 데이터를 별도 파일에서 관리하여 유지보수가 용이하도록 구성",
      },
      {
        title: "TypeScript 적용",
        text:
          "Props와 프로젝트 데이터에 Interface를 정의하고 JavaScript로 작성했던 코드를 TypeScript로 전환하며 타입 관리 경험",
      },
      {
        title: "반응형 UI",
        text:
          "Tailwind CSS의 Grid와 Responsive Utility를 활용해 Mobile, Tablet, Desktop 환경에 대응",
      },
      {
        title: "배포 및 운영",
        text:
          "GitHub와 Vercel을 연동하여 코드 변경 시 자동 배포되는 환경 구성",
      },
    ],
  },

  // =========================================================
  // 사이트 클론
  // =========================================================
  {
    id: 2,

    name: "사이트 클론 앱",

    date: "2026.04.13 ~ 2026.05.18",

    link: "https://dlesshopping-eight.vercel.app/",

    thumb: EtcWork3,

    badge: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    desc: [
      {
        title: "React 쇼핑몰 클론 프로젝트",
        text:
          "React, TypeScript, Tailwind CSS, React Router, Context API, DummyJSON API를 활용해 쇼핑몰 주요 기능 구현",
      },
      {
        title: "상품 탐색 기능",
        text:
          "상품 목록, 검색, 상세 페이지, 장바구니, 모바일 메뉴 등 실제 쇼핑몰의 기본적인 사용자 흐름 구현",
      },
      {
        title: "재사용 가능한 컴포넌트",
        text:
          "하나의 상품 데이터를 Grid, Horizontal, Search List 등 여러 UI에서 재사용할 수 있도록 공통 컴포넌트로 구성",
      },
      {
        title: "React Router",
        text:
          "홈, 상품 목록, 검색 결과, 상품 상세 페이지를 라우팅하고 페이지 간 상태와 검색어를 관리",
      },
      {
        title: "상태 관리",
        text:
          "State Lifting과 Props를 활용해 컴포넌트 간 상태를 공유하고, Context API를 적용하여 장바구니 상태의 Props Drilling을 개선",
      },
      {
        title: "API 데이터 연동",
        text:
          "DummyJSON API에서 상품 데이터를 비동기로 받아 화면에 표시하고 프로젝트 구조에 맞게 필요한 데이터를 가공",
      },
      {
        title: "반응형 UI",
        text:
          "Tailwind CSS를 활용해 Desktop과 Mobile 환경에 대응하는 레이아웃과 메뉴 UI 구현",
      },
    ],
  },

  // =========================================================
  // 날씨 대시보드
  // =========================================================
  {
    id: 3,

    name: "날씨 대시보드 앱",

    date: "2026.04.22 ~ 2026.04.24",

    link: "https://forecast-app-chi-ebon.vercel.app/",

    thumb: EtcWork2,

    badge: [
      "React",
      "Tailwind CSS",
      "OpenWeather API",
    ],

    desc: [
      {
        title: "React 날씨 대시보드",
        text:
          "React, Tailwind CSS, Recharts, OpenWeather API를 활용해 실시간 날씨 정보를 제공하는 대시보드 구현",
      },
      {
        title: "API 데이터 연동",
        text:
          "fetch API와 useEffect를 활용해 현재 날씨와 5일 예보 데이터를 비동기로 호출",
      },
      {
        title: "상태 및 예외 처리",
        text:
          "검색 도시와 API 응답 데이터를 상태로 관리하고 로딩 및 에러 상황에 대응",
      },
      {
        title: "데이터 시각화",
        text:
          "Recharts를 활용해 시간대별 기온 변화를 그래프로 표현하여 날씨 정보를 직관적으로 확인할 수 있도록 구성",
      },
      {
        title: "시간 기반 테마 전환",
        text:
          "현재 시간에 따라 주간과 야간 테마가 자동으로 전환되도록 구현",
      },
      {
        title: "반응형 UI",
        text:
          "Tailwind CSS를 활용해 Mobile과 Desktop 환경에 대응하는 반응형 레이아웃 구현",
      },
    ],
  },

  // =========================================================
  // 투두리스트
  // =========================================================
  {
    id: 4,

    name: "투두리스트 앱",

    date: "2025.10.05 ~ 2025.10.28",

    link: "https://todolist-5d758.web.app/",

    thumb: EtcWork1,

    badge: [
      "React",
    ],

    desc: [
      {
        title: "React 기반 Todo List",
        text:
          "React의 State와 컴포넌트 구조를 학습하기 위해 제작한 Todo List 프로젝트",
      },
      {
        title: "CRUD 기능",
        text:
          "할 일의 생성, 수정, 삭제 및 완료 상태 변경 기능 구현",
      },
      {
        title: "검색 및 필터",
        text:
          "실시간 검색과 날짜별 필터링을 적용해 많은 할 일 중 원하는 항목을 쉽게 찾을 수 있도록 구성",
      },
      {
        title: "상단 고정 기능",
        text:
          "중요한 할 일을 상단에 고정하여 우선순위가 높은 작업을 쉽게 확인할 수 있도록 구현",
      },
      {
        title: "다크모드",
        text:
          "사용자 환경에 따라 화면 테마를 변경할 수 있도록 다크모드 구현",
      },
      {
        title: "데이터 유지",
        text:
          "localStorage를 활용해 새로고침 이후에도 할 일 목록과 사용자 설정이 유지되도록 구현",
      },
    ],
  },
];