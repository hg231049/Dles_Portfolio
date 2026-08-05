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
interface SolutionItems {
  title: string;
  text: string;
}
interface ProblemItems {
    title:string,
    text:string;
}
interface BestWorkItems {
    id: number;
    category: string;
    name: string;
    date: string;
    link: string;
    thumb: string;
    summary?: string;
    badge?:string[];
    overview: OverviewItems[];
    stack: string[],
    results: ResultsItems[];
    solution?:SolutionItems[];
    problem:ProblemItems[];
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
    badge:["SEO/성능","리뉴얼","운영 자동화"],
    overview: [
        {
        title: "프로젝트",
        text: "기존 적응형 쇼핑몰을 반응형 구조로 전면 개편하고 SEO 및 성능 최적화 기반 구축"
        },
        {
        title: "기여도",
        text: "퍼블리싱 100% (UI 구조 설계 · 반응형 구현 · 인터랙션 · SEO 개선)"
        },
        {
        title: "환경",
        text: "아임웹 기반 E-commerce"
        },
    ],

    stack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Owl Carousel",
        "Photoshop"
    ],

    problem: [
        {
            title: "SEO 관리 기준 부재",
            text: "메타 정보와 콘텐츠 구조가 표준화되지 않아 검색 노출 확장에 한계 존재"
        },
        {
            title: "성능 최적화 미흡",
            text: "대용량 GIF와 불필요한 리소스로 인해 모바일 로딩 속도 저하"
        }
        ],

    solution: [
        {
            title: "SEO 구조 재설계",
            text: "Semantic Tag, Schema, Meta Tag, Alt 속성 적용"
        },
        {
            title: "반응형 통합",
            text: "PC/모바일 분리 구조를 단일 Breakpoint 구조로 개선"
        },
        {
            title: "성능 최적화",
            text: "GIF → MP4 전환 및 CSS/JS 경량화"
        }
    ],

    results: [
            {
                title: "SEO / GSC",
                text: "Lighthouse SEO 100점 / 검색 노출 5.2배 증가"
            },
            {
                title: "운영 효율 개선",
                text: "공통 컴포넌트 구조를 구축하여 이벤트 페이지 제작 시 중복 작업을 줄이고 유지보수 시간을 단축"
            },
            {
                title: "유지보수",
                text: "PC·모바일 분리 구조를 통합하여 수정 포인트를 단일화하고 운영 부담을 감소"
            }
        ],

    notice: [
        "※ 현재 사이트는 추가 개편된 상태이며 본 프로젝트는 리뉴얼 당시 작업 기준입니다.",
        "※ SEO 및 성능 개선 수치는 Google Search Console 및 Lighthouse 측정 결과를 기반으로 작성되었습니다."
    ],
  },
{
  id: 2,
  category: "리뉴얼",
  name: "심플리케어",
  date: "2025.01 ~ 2026.01",
  link: "https://oneqhealthfood.com/",
  thumb: bestWork2,
  badge: ["반응형", "리뉴얼", "운영 개선"],

  overview: [
    {
      title: "프로젝트",
      text: "적응형 쇼핑몰을 반응형 구조로 리뉴얼하고 운영 기능 개선"
    },
    {
      title: "기여도",
      text: "퍼블리싱 100% (메인 · 리스트 · 상세 · 기타 페이지), 리뉴얼 기획 참여"
    },
    {
      title: "환경",
      text: "아임웹 기반 E-commerce"
    },
  ],

  stack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "Owl Carousel",
    "Photoshop"
  ],

  problem: [
    {
      title: "적응형 구조의 운영 비효율",
      text:
        "PC와 Mobile을 각각 관리하는 적응형 구조로 인해 동일한 수정 작업을 반복해야 했고 유지보수 비용이 높았음"
    },
    {
      title: "플랫폼 기능의 한계",
      text:
        "아임웹 기본 기능만으로는 원하는 인터랙션과 프로모션 UI를 구현하는 데 제약이 있었음"
    },
    {
      title: "운영 작업의 반복",
      text:
        "프로모션 페이지와 이벤트 영역을 반복적으로 수정해야 해 운영 효율 개선이 필요했음"
    }
  ],

  solution: [
    {
      title: "반응형 구조 전환",
      text:
        "적응형 사이트를 반응형 레이아웃으로 전면 개편하여 다양한 디바이스에서 일관된 사용자 경험을 제공"
    },
    {
      title: "플랫폼 기능 확장",
      text:
        "JavaScript 기반 인터랙션을 직접 구현하여 플랫폼의 기본 기능 한계를 보완"
    },
    {
      title: "운영 구조 개선",
      text:
        "프로모션 및 반복 UI를 운영하기 쉬운 형태로 재구성하여 유지보수성과 작업 효율을 향상"
    }
  ],

  results: [
    {
      title: "운영 효율 향상",
      text:
        "반복 작업을 줄일 수 있는 구조를 구축하여 콘텐츠 운영 및 유지보수 시간을 단축"
    },
    {
      title: "사용자 경험 개선",
      text:
        "반응형 UI를 적용해 다양한 디바이스에서 일관된 사용 경험을 제공"
    },
    {
      title: "서비스 품질 향상",
      text:
        "플랫폼 제약을 보완하는 인터랙션 구현으로 서비스 완성도와 사용성을 개선"
    }
  ],
},
  {
    id: 3,
    category: "신규 구축",
    name: "피닉스레포츠",
    date: "2024.04",
    link: "https://swimgoggle.co.kr/",
    thumb: bestWork3,
    badge:["협업","데이터 구조","컴포넌트 설계"],
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
    problem: [
        {
            title: "복잡한 상품 분류 구조",
            text:
            "수영용품 특성상 브랜드, 카테고리, 기능별 필터링이 중요했으나 UI 구조가 명확하지 않았음"
        },
        {
            title: "데이터 연동 고려 필요",
            text:
            "상품 정보가 관리자 및 API 데이터를 통해 동적으로 변경될 수 있어 유연한 UI 구조 설계가 필요했음"
        }
    ],
    solution: [
        {
            title: "인터랙션 중심 UI 설계",
            text:
            "Hover, Scroll Animation, Slider 인터랙션을 적용하여 상품 정보를 직관적으로 탐색할 수 있도록 구성"
        },
        {
            title: "상품 필터 구조 설계",
            text:
            "백엔드 개발자와 협업하여 상품 카테고리 및 필터 데이터 구조를 사전에 정의하고 UI에 반영"
        },
    ],
    results: [
        {
            title: "사용자 경험 개선",
            text:
            "인터랙션 요소를 활용하여 상품 탐색 과정의 가독성과 몰입도를 향상"
        },
        {
            title: "협업 효율 향상",
            text:
            "데이터 구조를 고려한 퍼블리싱으로 백엔드 연동 과정에서 발생할 수 있는 수정 비용 감소"
        },
    ],
  },
];
