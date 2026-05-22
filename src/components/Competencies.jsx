import React from "react";
import { Link } from "react-router-dom";

import { dashboardThumb, codeThumb, proposalThumb } from "../assets/img";

const competencyList = [
  {
    id: 1,
    badge: "+5.2x",
    title: "SEO & Performance",
    subtitle:
      "검색 노출 확대 및 웹 성능 지표 개선(메인 키워드 노출 5.2배 달성(GSC기준)",
    thumbs: dashboardThumb,
    link:"./Dashboard",
    points: [
      "시맨틱 마크업 구조 개선 및 메타데이터 최적화",
      "Lighthouse 기준 LCP / CLS 등 핵심 지표 개선",
      "검색 콘솔 데이터를 기반으로 키워드 노출 성과 관리",
    ],
  },
  {
    id: 2,
    badge: "-40%",
    title: "Reusable UI System",
    subtitle: "반복 요소 공통화로 운영 효율 향상",
    thumbs: codeThumb,
    points: [
      "이벤트 / 상품 영역 공통 컴포넌트화",
      "수정 포인트 단일화로 유지보수 시간 절감",
      "일관된 UI 운영으로 휴먼 에러 최소화",
    ],
  },
  {
    id: 3,
    badge: "Lead",
    title: "Strategic Collaboration",
    subtitle: "기획 단계부터 참여하는 퍼블리셔",
    thumbs: proposalThumb,
    points: [
      "디자인 시안 구현 가능성 사전 검토",
      "UX 관점의 개선안 제안",
      "파트너사 협업 및 퍼블리싱 QA 진행",
    ],
  },
];

export const Competencies = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {competencyList.map((item) => (
        <div
          key={item.id}
          className="rounded-md md:rounded-xl bg-white/45 backdrop-blur-md border border-white/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="relative thumbs mb-4 overflow-hidden rounded-sm md:rounded-sm">
            <img src={item.thumbs} alt={item.title} />
            {item.link && (
              <div className="view-btn absolute bottom-3 right-3 flex justify-center items-center w-10 h-10 text-lg font-bold rounded-4xl bg-white shadow-md cursor-pointer">
                <Link to={item.link}>+</Link>
              </div>
            )}
          </div>
          {/* badge */}
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-day-color px-3 py-1 text-xs font-bold text-white tracking-wider">
              {item.badge}
            </span>
          </div>

          {/* title */}
          <h3 className="text-xl font-black text-text-color">{item.title}</h3>

          <p className="mt-2 text-sm text-subText-color leading-relaxed ">
            {item.subtitle}
          </p>

          {/* line */}
          <div className="my-5 h-px w-full bg-day-color/20"></div>

          {/* list */}
          <ul className="space-y-3">
            {item.points.map((point, idx) => (
              <li
                key={idx}
                className="flex gap-3 text-sm leading-relaxed text-text-color"
              >
                <span className="mt-[7px] block w-1.5 h-1.5 rounded-full bg-day-color shrink-0"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Competencies;
