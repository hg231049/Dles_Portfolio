import React from 'react';

const steps = [
  {
    title: "이젠컴퓨터학원 웹퍼블리싱과정 이수(2021 6개월간)",
    desc: ["웹퍼블리싱/웹디자인 교육", "그래픽기술자격(GTQ) 1급 취득","워드프로세서,컴퓨터 활용능력 1급 취득"],
  },
  {
    title: "디자인교과서 2022.02.21~2024.06.30 (28개월)",
    desc: ["카페24,고도몰과 같은 이커머스 플랫폼을 경험", "스킨 제작 및 고객사 맞춤 홈페이지 제작"],
  },
  {
    title: "올릿 2025.03.26~ ",
    desc: ["자사 브랜드 3곳 리뉴얼","중심 브랜드 사이트 최적화 및 seo관리", "자사 브랜드 4곳 이상 유지보수 및 관리"],
  },
  {
    title: "react 인프런 교육 강의 및 tailwind 공부",
    desc: ["React를 기초 개념을 배우고 이를 적용한 앱 제작","감정일기장, 투두리스트 제작 및 배포","tailwind css 독학하며 react에 적용하며 학습중"],
  },
];

const History = () => {
  return (
    <div className="[text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
      <div className="sub-title  mb-10 pb-6 border-b border-[#f6f6f638] text-sunrise-color text-[18px] lg:text-[20px] font-bold"> HISTORY</div>
      <ol className="relative border-l border-white/20 ml-4 space-y-10">
        {steps.map((step, index) => (
          <li key={index} className="relative pl-6 lg:pl-12 group">
            {/* 타임라인 도트 (Dot) */}
            <div className="absolute -left-[4px] lg:-left-[8px] top-0">
              <span className="relative flex h-2 w-2 lg:h-4 lg:w-4">
                {/* 애니메이션 펄스 효과 */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunrise-color opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 lg:h-4 lg:w-4 bg-sunrise-color shadow-[0_0_15px_#fb923c]"></span>
              </span>
            </div>

            {/* 본문 컨텐츠 */}
            <div className="flex flex-col items-start">
              {/* 타이틀 */}
              <h4 className="text-[16px] lg:text-[20px] font-bold text-white mb-4 transition-colors group-hover:text-sunrise-color ">
                {step.title}
              </h4>

              {/* 설명 리스트 */}
              <ul className="list-disc list-outside ml-3 lg:ml-6 space-y-2 text-white text-[13px] lg:text-[16px] leading-normal">
                {step.desc.map((item, i) => (
                  <li key={i} className="pl-2">{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default History;