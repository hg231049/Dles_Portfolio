import React from "react";
import { history } from "@/data/history";

const History = () => {
  return (
    <div className="[text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
      <div className="mb-10 pb-6 border-b border-white/20 text-sunrise-color text-[18px] lg:text-[20px] font-bold">
        HISTORY
      </div>

      <ol className="relative border-l border-white/20 ml-4 space-y-10">
        {history.map((step, index) => (
          <li key={index} className="relative pl-6 lg:pl-12 group">
            {/* dot */}
            <div className="absolute -left-[6px] lg:-left-[9px] top-1">
              <span className="relative flex h-3 w-3 lg:h-4 lg:w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunrise-color opacity-60"></span>
                <span className="relative inline-flex h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-sunrise-color"></span>
              </span>
            </div>

            <div>
              {/* 회사명 */}
              <p className="text-sunrise-color text-sm lg:text-base font-semibold mb-1">
                {step.company}
              </p>

              {/* 타이틀 */}
              <h3 className="text-white text-[16px] lg:text-[20px] font-bold mb-2 group-hover:text-sunrise-color transition-colors">
                {step.title}
              </h3>

              {/* 기간 */}
              <p className="text-white/60 text-sm mb-4">{step.period}</p>

              {/* 설명 */}
              {step.desc && (
                <ul className="list-disc ml-4 space-y-2 text-white text-[13px] lg:text-[15px]">
                  {step.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default History;
