import React from 'react';
import { dashboardThumb,codeThumb,proposalThumb } from '../assets/img';

const Competencies_list = [
  { 
    id: 1,
    name: "기술적 SEO 및 웹 성능 최적화",
    subTitle : "Lighthouse 기반 성능 지표 개선 및 시맨틱 마크업을 통한 메인 키워드 노출 5.2배 달성(GSC기준)", 
    thumb: dashboardThumb,
    desc: [
      "<strong>데이터 기반 SEO 전략 </strong>구글 서치 콘솔(GSC) 데이터를 분석하여 '마사지기' 등 핵심 키워드의 검색 노출을 극대화하는 시맨틱 마크업 구조 설계 및 메타데이터 최적화 수행", 
      "<strong>Lighthouse 성능 관리</strong>서버 사이드 제어가 제한적인 환경에서 웹 표준 및 접근성 가이드를 준수하며, 이미지 최적화와 리소스 경량화를 통해 Lighthouse 핵심 성능 지표(LCP, CLS 등) 개선",
      "<strong>크로스 브라우징 및 QA</strong>다양한 디바이스와 브라우저 환경에서 동일한 사용자 경험을 제공하기 위한 철저한 검수 및 코드 안정성 확보"
    ],
  },
  { 
    id: 2,
    name: "UI 모듈화 및 중앙 집중식 코드 관리",
    subTitle : "반복 요소의 공통 컴포넌트화를 통한 유지보수 리소스 40% 절감 및 UI 일관성 확보", 
    thumb: codeThumb,
    desc: [
      "<strong>비즈니스 로직 자산화</strong>타이머 세팅, 프로모션 뱃지 등 사이트 전반에 반복되는 동적 요소를 독립적인 공통 모듈로 분리하여 구축", 
      "<strong>유지보수 포인트 단일화</strong>수백 개의 상품 페이지에 흩어져 있던 코드를 하나의 공통 소스(Single Source of Truth)로 통합하여, 단 한 번의 수정으로 전체 사이트에 즉각 반영되는 구조 설계",
      "<strong>운영 효율성 극대화</strong>신규 이벤트 페이지 구축 시 기존 컴포넌트를 재사용함으로써 퍼블리싱 리드 타임 단축 및 휴먼 에러 방지"
    ],
  },
  { 
    id: 3,
    name: "비즈니스 목표를 고려한 전략적 기획 참여",
    subTitle : "기획 단계부터의 기술 검토를 통한 구현 리스크 최소화 및 운영 효율 개선", 
    thumb: proposalThumb,
    desc: [
      "<strong>기획 단계 기술 컨설팅</strong>퍼블리싱 전문가로서 기획 초기 단계에 참여하여 디자인 시안의 웹 표준 준수 여부 및 기술적 구현 가능성(Feasibility)을 사전에 검토", 
      "<strong>사용자 경험(UX) 역제안</strong>다각도 시각을 바탕으로, 단순 구현을 넘어 관리자 운영 편의성과 사용자 유입 경로를 고려한 UI 구조 제안",
      "<strong>파트너사 협업 리딩 및 퍼블리싱 QA 관리</strong>기획 의도와 실제 구현물 간의 간극을 조율하고, 내부 시스템 통합 시 발생할 수 있는 기술적 부채 사전에 차단 및 파트너사 기술 리뷰 및 피드백 전담"
    ],
  },
];

const Competencies = () => { 
  return (

        <div className="competency grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
        {Competencies_list.map((item) => (
          <details 
            key={item.id} 
            className="card group bg-white/35 backdrop-blur-md shadow-md rounded-2xl overflow-hidden transition-all duration-300 h-fit"
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
                <h3 className="text-[16px] lg:text-xl font-bold text-text-color group-hover:text-day-color transition-colors leading-tight">
                  {item.name}
                </h3>
                <p className="w-[85%] text-subText-color text-[14px] lg:text-sm whitespace-pre-line leading-relaxed ">
                  {item.subTitle}
                </p>
                {/* 토글 버튼: 우측 하단 배치 */}
                <div className="absolute bottom-0 right-0">
                    <div className="more-btn text-xl font-light text-subText w-8 h-8 flex items-center justify-center bg-white rounded-full transition-all duration-300 group-open:rotate-45">
                    +
                    </div>
                </div>
              </div>
            </summary>

            {/* 4. 상세 내용 (펼쳐짐) */}
            <div className="description p-5 border-t border-dotted border-[#cdcdcd]">
              <ul className="list-disc list-outside ml-4 space-y-3 text-subText-color text-sm leading-relaxed">
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

export default Competencies;