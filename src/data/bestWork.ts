import {
  bestWork1,
  bestWork2,
  bestWork3,
  bestWork4,
  bestWork5,
  bestWork6,
} from "../assets/img";

interface OverviewItems {
    title:string,
    text:string;
}
interface ResultsItems {
    title:string,
    text:string;
}
interface BestWorkItems {
    id: number,
    category: string,
    name: string,
    date: string,
    link: string,
    thumb: string,
    summary: string,
    overview: OverviewItems[];
    stack: string[],
    results: ResultsItems[];
    notice?:string[];
}



export const bestWork:BestWorkItems[] = [
  {
    id: 1,
    category: "리뉴얼",
    name: "슬룸(SLOOM)",
    date: "2025.04 ~ 2025.05",
    link: "https://sleeplab.co.kr/home-backup",
    thumb: bestWork1,
    summary: "SEO 노출 5배 증가 및 반응형 전환",
    overview: [
        {
            title:"프로젝트",
            text:"적응형 쇼핑몰 → 반응형 UI/UX 전면 리뉴얼"
        },
        {
            title:"기여도",
            text:"퍼블리싱 100% (UI 구조 설계 + 반응형 + 인터랙션 구현)"
        },
        {
            title:"환경",
            text:"아임웹 기반 E-commerce"
        },
    ],
    stack: ["HTML5, CSS3, JavaScript", "Owl Carousel", "Photoshop"],
    results: [
         {
            title: "SEO 구조 개선",
            text:
                "div 기반 구조를 semantic 태그(header, section, article)로 재구성하고 \n이미지 lazy loading 및 alt 최적화를 적용하여 Lighthouse SEO 점수와 검색 노출을 개선"
        },
        {
            title: "반응형 구조 개선",
            text:
                "PC/모바일로 분리되어 있던 UI를 breakpoint 기반 단일 구조로 통합하여 코드 중복을 제거하고 유지보수 비용을 감소"
        },
        {
            title: "성능 최적화",
            text:
                "불필요한 DOM 구조를 정리하고 이미지 최적화를 적용하여 Lighthouse 기준 성능 점수 개선"
        },
        {
            title: "성과",
            text:
                "Google Search Console 기준 주요 키워드 노출 약 5.2배 증가 / Lighthouse SEO 100점 / Performance 약 2배 개선"
        },
    ],
    notice: [
      "※ 현재 사이트는 추가 리뉴얼된 상태이며 본 작업은 이전 버전 기준입니다.",
    ],
  },

  {
    id: 2,
    category: "신규 구축",
    name: "피닉스레포츠",
    date: "2024.04",
    link: "https://swimgoggle.co.kr/",
    thumb: bestWork3,
    summary: "인터랙션 중심 쇼핑몰 구축",
    overview: [
        {
            title:"프로젝트",
            text:" 쇼핑몰 구축"
        },
        {
            title:"기여도",
            text:"퍼블리싱 100% - 메인,리스트,상세, 기타페이지"
        },
        {
            title:"환경",
            text:"고도몰 기반 E-commerce"
        },
    ],
    stack: ["HTML, CSS, JavaScript", "Swiper"],
    results: [
        {
            title: "UI/UX 개선",
            text: "정적인 상품 리스트 구조에서 사용자가 정보를 빠르게 스캔할 수 있도록 \nhover 및 scroll 기반 인터랙션을 적용하여 탐색 경험 개선"
        },
        {
            title: "협업 구조",
            text: "백엔드 개발자와 상품 필터 데이터 구조를 사전에 조율하여 API 응답 형태에 맞는 UI 컴포넌트 구조를 설계"
        },
        {
            title: "데이터 연동 대응",
            text: "API 데이터 구조 변경에도 유연하게 대응할 수 있도록 UI를 모듈화하여 유지보수성을 확보"
        },
    ],
  },

  {
    id: 3,
    category: "신규 구축",
    name: "CYCLE",
    date: "2024.01",
    link: "https://ecudemo310794.cafe24.com/",
    thumb: bestWork5,
    summary: "유튜브 API 인터랙션 구현",
    overview: [
        {
            title:"프로젝트",
            text:"쇼핑몰 스킨 반응형 제작"
        },
        {
            title:"기여도",
            text:"퍼블리싱 100% - 메인,리스트,상세, 기타페이지"
        },
        {
            title:"환경",
            text:"카페24 기반 E-commerce"
        },
    ],
    stack: ["HTML, CSS, JavaScript", "YouTube API"],
    results: [
        {
            title:"기능 구현",
            text:"YouTube API를 활용해 영상 콘텐츠를 동적으로 불러오도록 구현하여 정적 영상 구조의 유지보수 문제를 해결"
        },
        {
            title:"UX 설계",
            text:"영상 클릭 시 페이지 이동 없이 모달 형태로 재생되도록 구성하여 사용자 이탈 없이 콘텐츠 몰입도를 유지"
        },
        {
            title:"반응형 대응",
            text:"영상 UI 및 레이아웃 최적화를 통해 유지보수 및 사용자 경험 상승"
        },
    ],
  },

];
