import { EtcWork1, EtcWork2, EtcWork3, EtcWork4 } from "../assets/img";

interface DescItems {
  title: string;
  text?:string;
}

interface ToyWorkItems {
  id: number;
  name: string;
  date: string;
  link: string;
  thumb:string;
  badge?:string[];
  desc:DescItems[];
}


export const toyWork:ToyWorkItems[] = [
   {
    id: 1,
    name: "포트폴리오",
    date: "(26.04.24~)",
    link: "https://dles-portfolio.vercel.app/",
    thumb: EtcWork4,
    badge:["React","TypeScipt","Tailwind CSS"],
    desc: [
      {
        title: "React 기반 인터랙티브 포트폴리오",
        text: "React, TypeScript, Tailwind CSS, GSAP, shadcn/ui, Vercel 기반으로 SPA 구조의 포트폴리오를 설계 및 구현"
      },
      {
        title: "스토리 기반 인터랙션 설계",
        text: "GSAP ScrollTrigger를 활용하여 '밤 → 노을 → 낮 → 봄 → 들판 → 땅'으로 이어지는 타임라인형 스크롤 경험을 구현"
      },
       {
        title: "JavaScript → TypeScript 마이그레이션 경험",
        text: "기존 JS 프로젝트를 TS로 전환하며 Props Interface 정의, .jsx → .tsx 변경 및 타입 에러 수정 경험"
      },
      {
        title: "UX 중심 구조 설계",
        text: "단순 정보 나열이 아닌 사용자 흐름 중심의 섹션 구조로 재배치하여 콘텐츠 몰입도를 강화"
      },
      {
        title: "반응형 UI 설계",
        text: "Tailwind CSS Grid 시스템을 기반으로 모바일, 태블릿, 데스크톱 환경에 최적화된 레이아웃 구현"
      },
      {
        title: "컴포넌트 및 데이터 구조 분리",
        text: "섹션별 데이터와 UI를 분리하여 유지보수성과 확장성을 고려한 구조 설계"
      },
      {
        title: "배포 및 운영",
        text: "GitHub–Vercel CI/CD를 구축하여 코드 변경 시 자동 배포가 가능한 환경 구성"
      },
      {
        title: "UI 컴포넌트 활용",
        text: "shadcn/ui 기반 카드 컴포넌트를 활용하여 일관된 디자인 시스템 구축"
      }
    ]
  },
  {
    id: 2,
    name: "사이트 클론 앱",
    date: "(26.04.13 ~ 26.05.18)",
    link: "https://dlesshopping-eight.vercel.app/",
    thumb: EtcWork3,
    badge:["React","TypeScipt","Tailwind CSS"],
    desc: [
      {
        title: "React 토이 프로젝트",
        text: "TypeScript, React, Tailwind CSS, React Router, Vercel,DummyJSON API"
      },
      {
        title: "React · Tailwind CSS · TypeScript 학습을 목표로 제작한 쇼핑몰 클론 프로젝트",
        text: "메인 페이지, 상품 리스트, 검색, 상세 페이지, 장바구니, 모바일 햄버거 메뉴 등을 구현"
      },
      {
        title: "재사용 가능한 컴포넌트 구조 설계",
        text: "하나의 상품 데이터를 다양한 UI 형태(Grid / Horizontal / Search List)로 재사용할 수 있도록 공통 컴포넌트 형태로 구성"
      },
      {
        title: "React Router 기반 페이지 구성",
        text: "홈, 상품 목록, 검색 결과 페이지 등을 라우팅하고 검색어 및 장바구니 상태를 페이지 이동 간 유지"
      },
      {
        title: "Tailwind CSS 기반 UI 구현",
        text: "Variant와 Arbitrary Value 문법을 활용해 반복 스타일을 줄이고 반응형 레이아웃을 구성"
      },
      {
        title: "JavaScript → TypeScript 마이그레이션 경험",
        text: "기존 JS 프로젝트를 TS로 전환하며 Props Interface 정의, .jsx → .tsx 변경 및 타입 에러 수정 경험"
      },
      {
        title: "상태 관리 구조 개선",
        text: "State Lifting 방식으로 상위 컴포넌트에서 상태를 관리하고 Props로 필요한 데이터만 전달하도록 구성"
      },
      {
        title: "사용자 경험 중심 기능 구현",
        text: "로딩 화면, 실시간 검색 필터링, 모바일 슬라이드 메뉴 등 실제 서비스 흐름을 고려한 UI/UX 구현"
      },
      {
        title: "실무형 데이터 연동 및 오픈 API 마이그레이션",
        text: "DummyJSON API를 연동하여 실시간 서버 데이터를 수신하고, 프로젝트 초기 설계 규격에 맞게 데이터를 재가공(Formatting)하여 비동기 데이터 처리 흐름을 구현"
      },
      {
        title: "합법적 오픈소스 활용 및 합리적 라이선스 관리",
        text: "기존 사이트의 에셋 도용을 지양하고 Unsplash, React Icons 등 오픈소스 라이브러리와 무료 에셋을 활용하여 저작권 및 상표권 문제가 없는 안전한 배포 환경 구축"
      },
    ],
  },
  {
    id: 3,
    name: "날씨 대시보드 앱",
    date: "(26.04.22~26.04.24)",
    link: "https://forecast-app-chi-ebon.vercel.app/",
    thumb: EtcWork2,
    badge:["React","Tailwind CSS"],
    desc: [
      {
        title:"React 토이 프로젝트",
        text:"React, Tailwind CSS, Recharts, OpenWeather API, Vercel"
      },
      {
        title:"React & Tailwind CSS 학습을 목적으로 진행한 날씨 대시보드 프로젝트",
      },
      {
        title:"효율적인 상태 관리 및 데이터 연동",
        text:"fetch API와 useEffect를 활용해 OpenWeatherMap의 실시간 날씨 및 5일 예보 데이터를 비동기 호출"
      },
      {
        title:"검색 도시 상태 및 API 응답 데이터를 관리하고 로딩·에러 상태를 처리",
      },
      {
        title:"Recharts를 이용한 데이터 시각화",
        text:"Recharts 라이브러리를 활용해 사용자에게 직관적인 기온 변화 추세 그래프 제공할 수 있도록 구현"
      },
       {
        title:"테마 및 사용자 경험(UX) 최적화",
        text:"new Date() 객체를 활용해 사용자의 현재 시간대를 분석, 주/야간에 따라 배경화면이 자동 전환되는 '자동 다크모드' 시스템 구축했습니다. \n Tailwind CSS의 유틸리티 클래스를 활용하여 다양한 디바이스(Mobile, Desktop)에 대응하는 반응형 레이아웃 설계"
      },
       {
        title:"데이터 관리",
        text:"GitHub와 Vercel을 연동하여 지속적 통합 및 배포(CI/CD) 환경을 구축"
      },
    ],
  },
  {
    id: 4,
    name: "투두리스트 앱",
    date: "(25.10.05~25.10.28)",
    link: "https://todolist-5d758.web.app/",
    thumb: EtcWork1,
    badge:["React"],
    desc: [
      {
        title:"React 토이 프로젝트",
        text:"react,vscode, vercel"
      },
      {
        title:"React의 State 활용 역량을 기르기 위해 진행한 프로젝트",
        text:"단순 기록을 넘어 효율적인 일정 관리가 가능한 기능을 구현"
      },
      {
        title:"효율적인 상태 관리",
        text:"게시글의 생성, 수정, 삭제(CRUD) 로직을 관리하며, 많은 데이터 속에서도 성능 저하 없이 상태를 업데이트하는 원리를 학습"
      },
      {
        title:"사용자 친화적 기능 구현",
         text:"중요 일정을 관리하기 위한 '상단 고정' 기능과 방대한 할 일 목록에서 원하는 항목을 바로 찾는 '실시간 검색' 및 '날짜별 필터링' 기능을 개발"
      },
      {
        title:"테마 시스템 도입",
        text:"사용자의 시력 보호와 디자인 취향을 고려하여 다크모드를 구현"
      },
       {
        title:"데이터 관리",
        text:"localStorage를 연동하여 페이지 새로고침 후에도 사용자의 할 일 목록과 설정값이 유지되도록 구현"
      },
    ],
  },
  
  
 
]; 