import {
  bestWork1,
  bestWork2,
  bestWork3,
  bestWork4,
  bestWork5,
  bestWork6,
} from "../assets/img";
export const bestWork = [
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
                "div 기반 구조를 semantic 태그(header, section, article)로 재구성하고 이미지 lazy loading 및 alt 최적화를 적용하여 Lighthouse SEO 점수와 검색 노출을 개선"
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
    category: "리뉴얼",
    name: "심플리케어",
    date: "2025.01",
    link: "https://oneqhealthfood.com/",
    thumb: bestWork2,
    summary: "UI 구조 개선 및 운영 효율 향상",
    overview: [
        {
            title:"프로젝트",
            text:"쇼핑몰 UI/UX 리뉴얼"
        },
        {
            title:"기여도",
            text:"퍼블리싱 100% (UI 구조 설계)"
        },
        {
            title:"환경",
            text:"아임웹 기반 E-commerce"
        },
    ],
    stack: ["HTML, CSS, JavaScript"],
    results: [
        {
            title: "UI 구조 개선",
            text:
                "모바일 환경에서 정보 밀도가 과도하게 집중되는 문제를 해결하기 위해 콘텐츠 우선순위를 재정의하고 레이아웃 구조를 재설계"
        },
        {
            title: "컴포넌트 추상화",
            text:
                "반복되는 UI 요소를 공통 컴포넌트로 분리하여 페이지 확장 시 유지보수 비용과 코드 중복을 최소화"
        },
        {
            title: "성능 최적화",
            text:
                "이미지 용량 최적화 및 불필요한 리소스 제거를 통해 초기 로딩 속도 개선"
        },
        {
            title: "트러블슈팅",
            text:
                "고도몰 기본 스크립트와 커스텀 슬라이더 이벤트 충돌 문제를 해결하기 위해 이벤트 실행 순서와 DOM 로딩 타이밍을 재조정"
        },
    ],
  },

  {
    id: 3,
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
            text: "정적인 상품 리스트 구조에서 사용자가 정보를 빠르게 스캔할 수 있도록 hover 및 scroll 기반 인터랙션을 적용하여 탐색 경험 개선"
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
    id: 4,
    category: "신규 구축",
    name: "AIR",
    date: "2024.05",
    link: "http://sampledesignbook555.godomall.com/",
    thumb: bestWork4,
    summary: "템플릿 기반 UI 커스터마이징",
    overview: [
         {
            title:"프로젝트",
            text:"쇼핑몰 스킨 제작"
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
    stack: ["HTML, CSS, JavaScript"],
    results: [
        {
            title: "템플릿 구조 개선",
            text: "고도몰 기본 템플릿 구조의 한계를 개선하기 위해 섹션 단위 UI 구조로 재설계하여 디자인 커스터마이징 범위 확장"
        },
        {
            title: "반응형 UI 설계",
            text: "모바일 환경에서 정보 계층이 무너지는 문제를 해결하기 위해 breakpoint 기준으로 레이아웃 우선순위를 재구성"
        },
        {
            title: "페이지 구조 설계",
            text: "메인/리스트/상세 페이지 간 UI 흐름을 통일하여 사용자 경험의 일관성을 확보"
        },
        {
            title: "유지보수 개선",
            text: "반복되는 UI 요소를 공통 구조로 정리하여 수정 시 영향 범위를 최소화"
        },
    ],
  },

  {
    id: 5,
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

  {
    id: 6,
    category: "신규 구축",
    name: "CRUSH",
    date: "2023.04 ~ 2023.06",
    link: "https://ecudemo283804.cafe24.com/",
    thumb: bestWork6,
    summary: "다양한 인터랙션 구현",
    overview: [
      {
            title:"프로젝트",
            text:"쇼핑몰 스킨 제작"
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
    stack: ["HTML, CSS, JavaScript"],
    results: [
        {
            title: "인터랙션 구현",
            text: "스크롤 및 hover 기반 인터랙션을 적용해 정적인 쇼핑몰 UI를 동적인 탐색 경험으로 개선"
        },
        {
            title: "UI 구조 개선",
            text: "메인 콘텐츠 중심의 시각 흐름을 설계하여 사용자가 상품 정보를 자연스럽게 탐색하도록 UX 흐름 재구성"
        },
        {
            title: "라이브러리 활용",
            text: "Swiper를 커스터마이징하여 기본 동작을 확장하고 다양한 디바이스 환경에서 일관된 UX 제공"
        },
        {
            title: "트러블슈팅",
            text: "keyframes 애니메이션과 Swiper 충돌 문제를 해결하기 위해 z-index 및 이벤트 타이밍을 조정"
        },
    ],
  },
];
