import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { EtcWork1, EtcWork2, EtcWork3, EtcWork4 } from "../assets/img";

const EtcWork_List = [
  {
    id: 1,
    name: "슬룸 사이트 클론 앱 ",
    date: "(26.04.13~26.05.18)",
    link: "https://sloom-eight.vercel.app/",
    thumb: EtcWork3,
    desc: [
      "React 토이 프로젝트 - React,Tailwind CSS, vscode, vercel, React Router",
      "React & Tailwind CSS 학습을 목적으로 진행한 쇼핑몰 클론 코딩 프로젝트입니다. - 메인, 리스트, 햄버거메뉴, 검색페이지,상세페이지,장바구니",
      "복잡한 이커머스 UI를 재사용 가능한 컴포넌트 단위로 구조화하는 데 집중했습니다.",
      "<strong>컴포넌트 추상화 및 레이아웃 분기 처리:</strong>동일한 상품 데이터(ProductData)를 활용하여 Best(Grid형), New(Horizontal형), List(검색형) 등 다양한 레이아웃으로 분기 처리하는 공통 컴포넌트를 설계하여 코드 중복을 최소화했습니다.",
      "<strong>React Router를 활용한 멀티 페이지 구현:</strong>react-router-dom 라이브러리를 도입하여 홈, 전체 목록, 검색 결과 페이지 등을 라우팅하고, 페이지 간 상태(검색어, 장바구니 카운트)를 안정적으로 유지했습니다.",
      "<strong>Tailwind CSS 기반의 효율적인 디자인 시스템: </strong>복합 선택자(Variant)와 임의 값(Arbitrary values) 문법을 적극 활용하여 일관성 있고 정교한 디자인 시스템을 구현했습니다.",
      "<strong>상태 관리 및 데이터 흐름 최적화:</strong> State Lifting(상태 끌어올리기) 기법을 사용하여 부모 컴포넌트에서 상태를 관리하고, Props 전달을 통해 하위 섹션의 디자인 옵션(순위 노출, 요약 설명 등)을 선언적으로 제어했습니다.",
      "<strong>사용자 경험(UX) 중심 기능 구현:</strong> 로딩 스플래시 화면, 실시간 검색 필터링, 모바일 반응형 슬라이드 메뉴 등을 구현하여 실제 서비스 수준의 UI/UX를 경험할 수 있도록 구성했습니다.",
    ],
  },
   {
    id: 2,
    name: "포트폴리오",
    date: "(26.04.24~)",
    link: "https://dles-portfolio.vercel.app/",
    thumb: EtcWork4,
    desc: [
      "React 기반 포트폴리오 프로젝트 (React, Tailwind CSS, GSAP, shadcn/ui, Vercel)",
      "단순 결과물이 아닌 사용자 경험 흐름을 중심으로 인터랙션과 구조를 설계했습니다.",
      "GSAP을 활용해 '밤 → 노을 → 낮 → 봄 → 들판 → 땅'으로 이어지는 스토리형 타임라인 인터랙션을 구현했습니다.",
      "Grid와 Tailwind CSS를 기반으로 다양한 디바이스에 대응하는 반응형 레이아웃을 설계했습니다.",
      "<strong>배포 및 운영:</strong> GitHub와 Vercel을 연동해 CI/CD 환경을 구축하고 지속적인 업데이트가 가능하도록 구성했습니다.",
    ],
  },
  {
    id: 3,
    name: "날씨 대시보드 앱",
    date: "(26.04.22~26.04.24)",
    link: "https://forecast-app-chi-ebon.vercel.app/",
    thumb: EtcWork2,
    desc: [
      "React 토이 프로젝트 - React, Tailwind CSS, Recharts, OpenWeather API, Vercel",
      "React & Tailwind CSS 학습을 목적으로 진행한 날씨 대시보드 프로젝트입니다.",
      "효율적인 상태 관리 및 데이터 연동: fetch API와 useEffect를 활용해 OpenWeatherMap의 실시간 날씨 및 5일 예보 데이터를 비동기 호출했습니다.",
      "useState를 통해 검색된 도시의 상태를 관리하고, 데이터 로딩 상태에 따른 예외 처리를 구현했습니다.",
      "<strong>Recharts를 이용한 데이터 시각화 :</strong> Recharts 라이브러리를 활용해 사용자에게 직관적인 기온 변화 추세 그래프 제공할 수 있도록 구현했습니다.",
      "<strong>테마 및 사용자 경험(UX) 최적화: </strong>new Date() 객체를 활용해 사용자의 현재 시간대를 분석, 주/야간에 따라 배경화면이 자동 전환되는 '자동 다크모드' 시스템 구축했습니다. \n Tailwind CSS의 유틸리티 클래스를 활용하여 다양한 디바이스(Mobile, Desktop)에 대응하는 반응형 레이아웃 설계했습니다.",
      "<strong>데이터 관리:</strong> GitHub와 Vercel을 연동하여 지속적 통합 및 배포(CI/CD) 환경을 구축했습니다",
    ],
  },
  {
    id: 4,
    name: "투두리스트 앱",
    date: "(25.10.05~25.10.28)",
    link: "https://todolist-5d758.web.app/",
    thumb: EtcWork1,
    desc: [
      "React 토이 프로젝트 - react,vscode, vercel",
      "React의 State 활용 역량을 기르기 위해 진행한 프로젝트로, 단순 기록을 넘어 효율적인 일정 관리가 가능한 기능을 구현했습니다.",
      "<strong>효율적인 상태 관리:</strong> 게시글의 생성, 수정, 삭제(CRUD) 로직을 관리하며, 많은 데이터 속에서도 성능 저하 없이 상태를 업데이트하는 원리를 학습했습니다.",
      "<strong>사용자 친화적 기능 구현:</strong> 중요 일정을 관리하기 위한 '상단 고정' 기능과 방대한 할 일 목록에서 원하는 항목을 바로 찾는 '실시간 검색' 및 '날짜별 필터링' 기능을 개발했습니다.",
      "<strong>테마 시스템 도입:</strong> 사용자의 시력 보호와 디자인 취향을 고려하여 다크모드를 구현했습니다.",
      "<strong>데이터 관리:</strong> localStorage를 연동하여 페이지 새로고침 후에도 사용자의 할 일 목록과 설정값이 유지되도록 구현했습니다.",
    ],
  },
  
  
 
];

const ToyWork = () => {
  return (
    <div className="competency grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
      {EtcWork_List.map((item) => (
        <Drawer key={item.id}>
          {/* 1. 트리거: 카드의 전체 외형을 버튼처럼 사용 */}
          <DrawerTrigger asChild>
            <div className="card group bg-white/80 border border-green-100 shadow-md rounded-[8px] lg:rounded-[15px] overflow-hidden transition-all duration-300 h-fit cursor-pointer p-5 space-y-4 [&_.date]:text-subText-color [&_.label]:text-text-color [&_.date]:text-subText-color lg:[&:nth-child(n+3)_.label]:text-text-color lg:[&:nth-child(n+3)_.date]:text-subText-color">
              {/* 썸네일 */}
              <div className="competency-thumb w-full aspect-video bg-white/5 rounded-[8px] lg:rounded-[15px] overflow-hidden">
                <img
                  src={item.thumb}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 타이틀 영역 */}
              <div className="relative space-y-2 text-left">
                <h3 className="label text-[16px] lg:text-xl font-bold leading-tight">
                  {item.name}
                </h3>
                <p className="date w-[85%] min-h-[45.5px] text-[14px] lg:text-sm whitespace-pre-line leading-relaxed ">
                  {item.date}
                </p>
                {/* 플러스 아이콘이나 돋보기 아이콘 등으로 교체하면 좋습니다 */}
                <div className="absolute bottom-0 right-0">
                  <div className="text-xl font-light text-subText w-8 h-8 flex items-center justify-center bg-white rounded-full">
                    +
                  </div>
                </div>
              </div>
            </div>
          </DrawerTrigger>

          {/* 2. 상세 내용 Drawer */}
          <DrawerContent className="bg-white/70 backdrop-blur-md border-none text-text-color ">
            <div className="mx-auto w-full max-w-[860px] p-6 overflow-y-scroll scroll-hidden">
              <DrawerHeader className="px-0">
                <DrawerTitle className="text-2xl text-text-color font-bold">
                  {item.name}
                </DrawerTitle>
                <DrawerDescription className="text-subText-color">
                  {item.date}
                </DrawerDescription>
              </DrawerHeader>

              {/* 리스트 상세 내용 */}
              <div className="py-6 border-t border-white/10">
                <ul className="list-disc list-outside ml-4 space-y-4 text-sm leading-relaxed">
                  {item.desc.map((descItem, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: descItem }}
                      className="[&_>strong]:block [&_>strong]:mb-1"
                    />
                  ))}
                </ul>
              </div>

              <DrawerFooter className="px-0 pt-2 pb-6">
                {/* 링크 이동 버튼 (기존 화살표 링크 기능을 여기 넣으세요) */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-white text-text-color cursor-pointer hover:bg-field-color hover:text-white">
                    프로젝트 상세보기
                  </Button>
                </a>
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 cursor-pointer text-text-color hover:bg-white/10"
                  >
                    닫기
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      ))}
      {/* ✅ Coming Soon 카드 */}
      <div className="card group flex items-center justify-center bg-white/40 border border-dashed border-gray-300 rounded-[8px] lg:rounded-[15px] p-5 cursor-default relative overflow-hidden">
        {/* 애니메이션 링 */}
        <div className="absolute w-20 h-20 border border-gray-300 rounded-full animate-ping opacity-50"></div>

        {/* 메인 아이콘 */}
        <div className="flex flex-col items-center gap-3 z-10">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-2xl font-light text-gray-600 transition-transform duration-300 group-hover:scale-110">
            +
          </div>

          <p className="text-sm text-gray-100 tracking-wide">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default ToyWork;
