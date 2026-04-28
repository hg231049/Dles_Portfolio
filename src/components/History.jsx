import React from 'react';

const steps = [
  {
    title: "이젠컴퓨터학원",
    desc: ["희망 마사지 부위, 수량, 단가만 남겨도 맞춤 견적 가능", "희망 출고일에 따라 최적의 견적 제안"],
  },
  {
    title: "디자인교과서",
    desc: ["제안받은 견적을 바탕으로 수량·단가·출고일 최종 확정", "필요 시 옵션 조정 및 조건 협의 가능"],
  },
  {
    title: "올릿",
    desc: ["복잡한 절차 없이 ‘모두싸인' 전자서명 한 번이면 완료", "고객 편의를 최우선으로 한 간단하고 안전한 계약 프로세스"],
  },
  {
    title: "react 인프런 교육 강의",
    desc: ["출고 3일 전까지 결제 확정", "지정 계좌 입금, 또는 기업 전용 결제 페이지(히든링크) 제공으로 안전 보장"],
  },
];

const History = () => {
  return (
    <div className="lg:[text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
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
              <h4 className="text-[16px] lg:text-[20px] font-bold text-text-color lg:text-white mb-4 transition-colors group-hover:text-sunrise-color ">
                {step.title}
              </h4>

              {/* 설명 리스트 */}
              <ul className="list-disc list-outside ml-3 lg:ml-6 space-y-2 text-subText-color  lg:text-white text-[13px] lg:text-[16px] leading-normal">
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