import React from 'react';
import { EtcWork1,EtcWork2,EtcWork3 } from '../assets/img';

const EtcWork_List = [
  { 
    id: 1,
    name: "투두리스트 앱",
    date : "(25.10.05~25.10.28)", 
    link:"https://todolist-5d758.web.app/",
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
  { 
    id: 2,
    name: "날씨 대시보드 앱",
    date : "(26.04.22~26.04.24)", 
    link:"https://forecast-app-chi-ebon.vercel.app/",
    thumb: EtcWork2,
    desc: [
      "React 토이 프로젝트 - React, Tailwind CSS, Recharts, OpenWeather API, Vercel", 
      "React & Tailwind CSS 학습을 목적으로 진행한 날씨 대시보드 프로젝트입니다.",
      "효율적인 상태 관리 및 데이터 연동: fetch API와 useEffect를 활용해 OpenWeatherMap의 실시간 날씨 및 5일 예보 데이터를 비동기 호출했습니다.",
      "useState를 통해 검색된 도시의 상태를 관리하고, 데이터 로딩 상태에 따른 예외 처리를 구현했습니다.", 
      "<strong>Recharts를 이용한 데이터 시각화 :</strong> Recharts 라이브러리를 활용해 사용자에게 직관적인 기온 변화 추세 그래프 제공할 수 있도록 구현했습니다.",
      "<strong>테마 및 사용자 경험(UX) 최적화: </strong>new Date() 객체를 활용해 사용자의 현재 시간대를 분석, 주/야간에 따라 배경화면이 자동 전환되는 '자동 다크모드' 시스템 구축했습니다. \n Tailwind CSS의 유틸리티 클래스를 활용하여 다양한 디바이스(Mobile, Desktop)에 대응하는 반응형 레이아웃 설계했습니다.",
      "<strong>데이터 관리:</strong> GitHub와 Vercel을 연동하여 지속적 통합 및 배포(CI/CD) 환경을 구축했습니다"
    ],
  },
  { 
    id: 3,
    name: "슬룸 메인페이지 앱 ",
    date : "(26.04.13~26.04.21)", 
    link:"https://hg231049.github.io/sloom/",
    thumb: EtcWork3,
    desc: [
      "React 토이 프로젝트 - React,Tailwind CSS, vscode, github", 
      "React & Tailwind CSS 학습을 목적으로 진행한 쇼핑몰 클론 코딩 프로젝트입니다.",
      "복잡한 이커머스 UI를 재사용 가능한 컴포넌트 단위로 구조화하는 데 집중했습니다.",
      "<strong>컴포넌트 추상화 및 재사용성 극대화:</strong>동일한 Product 데이터를 활용하여 Best(카드형)와 New(가로 리스트형) 레이아웃으로 분기 처리하는 공통 컴포넌트를 설계했습니다.",
      "<strong>Tailwind CSS를 활용한 효율적인 스타일링: </strong>복합 선택자(variant)와 임의 값 문법을 활용하여 CSS 파일 없이도 정교한 디자인 시스템을 구현했습니다.",
      "<strong>상태 관리 최적화:</strong> 부모 컴포넌트에서 Props 전달을 통해 섹션별 디자인 옵션(순위 노출 여부, 요약 설명 등)을 선언적으로 제어했습니다."
    ],
  },
];

const EtcWork = () => { 
  return (

        <div className="competency grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
        {EtcWork_List.map((item) => (
          <details open
            key={item.id} 
            className="card group bg-white/25 backdrop-blur-md shadow-md rounded-2xl overflow-hidden transition-all duration-300 h-fit"
          >
            {/* 3. 카드형 Summary 디자인 */}
            <summary className="p-5 cursor-pointer list-none outline-none select-none space-y-4">
              {/* 썸네일: 카드 상단 배치 */}
              <div className="competency-thumb w-full aspect-video bg-white/5 rounded-xl overflow-hidden ">
                <img 
                  src={item.thumb} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* 타이틀 영역 */}
              <div className="relative space-y-2">
                <h3 className="text-[16px] lg:text-xl font-bold text-white leading-tight">
                  {item.name}
                </h3>
                <p className="w-[85%] min-h-[45.5px] text-white/80 text-[14px] lg:text-sm whitespace-pre-line leading-relaxed ">
                  {item.date}
                </p>
                {/* 토글 버튼: 우측 하단 배치 */}
                <div className="absolute bottom-0 right-0">
                    <a
                     href={item.link} target="_blank" 
                    className="more-btn text-xl font-light text-subText w-8 h-8 flex items-center justify-center bg-white rounded-full transition-all duration-300 ">
                    →
                    </a>
                </div>
              </div>
            </summary>

            {/* 4. 상세 내용 (펼쳐짐) */}
            <div className="description p-5 border-t border-dotted border-[#cdcdcd]">
              <ul className=" list-disc list-outside ml-4 space-y-3 text-white text-sm leading-relaxed">
                {item.desc.map((descItem, idx) => (
                  <li 
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: descItem }} 
                    className='[&_>strong]:block'
                  />
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
  );
}

export default EtcWork;