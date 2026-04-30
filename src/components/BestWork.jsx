import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { bestWork1, bestWorkMo1 } from "../assets/img";

gsap.registerPlugin(ScrollTrigger);

const BestWork = () => {
  const [isMore, setIsMore] = useState(false);

  const openPopup = (work) => {
    setIsMore(work);
    document.body.style.overflow = "hidden";
  };
  const closePopup = (work) => {
    setIsMore(null);
    document.body.style.overflow = "auto";
  };

  const Work_list = [
    {
      id: 1,
      name: "슬룸(SLOOM) 리뉴얼 및 최적화",
      date: "2025.04.22 ~ 2025.05.27 (약 5주)",
      link: "https://sleeplab.co.kr/home-backup",
      thumb: bestWork1,
      thumbMo: bestWorkMo1,
      overview: [
        "<strong>내용:</strong> 기존 적응형 사이트를 반응형 UI/UX로 전면 리뉴얼 및 검색 최적화(SEO) 단행",
        "<strong>플랫폼:</strong> 아임웹 (E-commerce)",
        "<strong>기여도: 퍼블리싱 100% (개인 프로젝트 규모)</strong> ",
      ],
      stack: [
        "<strong>언어: </strong> HTML5, CSS3, JavaScript",
        "<strong>라이브러리:</strong>  Owl Carousel (메인 슬라이더 및 제품 리스트 인터랙션 구현)",
        "<strong>툴: </strong> Photoshop (에셋 최적화 및 가이드 제작)",
      ],
      results: [
        "<strong>반응형 전환:</strong>  고정 레이아웃(적응형)에서 유연한 Grid 시스템 기반의 반응형으로 구조를 전면 재설계하여 모바일 사용자 경험 최적화.",
        "<strong>기능 확장:</strong>  솔루션(아임웹) 내 제한적인 기능을 커스텀 스크립트로 구현하여 마케팅 프로모션 및 이벤트 페이지의 자유도 확보.",
        "<strong>웹 성능 및 SEO:</strong> 시맨틱 마크업 준수와 이미지 에셋 최적화로 성능 지표를 개선하여 메인 키워드 노출 빈도 향상.",
      ],
    },
    {
      id: 2,
      name: "슬룸(SLOOM)",
      date: "25.04.22~25.05.27",
      link: "https://sleeplab.co.kr/home-backup",
      thumb: bestWork1,
      thumbMo: bestWorkMo1,
    },
    {
      id: 2,
      name: "슬룸(SLOOM)",
      date: "25.04.22~25.05.27",
      link: "https://sleeplab.co.kr/home-backup",
      thumb: bestWork1,
      thumbMo: bestWorkMo1,
    },
  ];

  return (
    <div className="relative overflow-hidden z-10 p-0 lg:m-[50px_0_0]">
      <div className="min-h-[60vh] flex items-center">
        {/* 가로 트랙 */}
        <div
          id="horizontal-track"
          className="flex pl-[50px] gap-[50px] lg:gap-[150px] will-change-transform"
        >
          {Work_list.map((item, idx) => (
            <div
              key={idx}
              className="card group flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw]"
            >
              {/* 썸네일 영역: 상대 수치 대신 고정 비율 컨테이너 권장 */}
              <div className="thumb relative block w-full aspect-[4/3] lg:aspect-[4/2]">
                {/* PC 썸네일 */}
                <span className="pc-thumb block w-full h-full border-[2px] border-white/20 rounded-[8px] lg:rounded-[20px] overflow-hidden bg-gray-900 shadow-2xl">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full h-full overflow-hidden"
                  >
                    <img
                      src={item.thumb}
                      alt={item.name}
                      className="w-full hover:translate-y-[-50%] transition-transform duration-[3s] ease-in-out cursor-pointer align-top"
                    />
                  </a>
                </span>

                {/* MO 썸네일: absolute 위치 조정 */}
                <span className="mo-thumb absolute -bottom-3 -right-3 lg:-bottom-10 lg:-right-10 w-[30%] aspect-[9/13] border-[1px] border-white/20 rounded-[8px] lg:rounded-[15px] overflow-hidden bg-gray-800 shadow-2xl">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full h-full overflow-hidden"
                  >
                    <img
                      src={item.thumbMo}
                      alt={`${item.name} mobile`}
                      className="w-full hover:translate-y-[-50%] transition-transform duration-[3s] ease-in-out cursor-pointer"
                    />
                  </a>
                </span>
              </div>

              {/* 텍스트 정보 영역 */}
              <div className="description mt-10 lg:mt-12 space-y-2">
                <h3 className="text-[18px] lg:text-3xl font-bold text-text-color group-hover:text-spring-color transition-colors">
                  {item.name}
                </h3>
                <span className="text-[14px] lg:text-[18px] text-gray-500 font-mono">
                  {item.date}
                </span>
              </div>
              {/* 팝업 버튼 */}
              <div className="more-btn mt-5 lg:mt-10">
                <button
                  onClick={() => openPopup(item)}
                  className="inline-block px-5 py-1 lg:px-8 lg:py-2 text-text-color text-[14px] lg:text-[16px] border border-text-color rounded-[50px] hover:text-white hover:border-spring-color hover:bg-spring-color transition-all font-medium cursor-pointer"
                >
                  자세히보기
                </button>
              </div>
            </div>
          ))}

          {/* 마지막 여백용 Spacer */}
          <div
            className="flex-shrink-0 w-[10vw] md:w-[20vw]"
            aria-hidden="true"
          ></div>
        </div>
        {/* 팝업 모달 */}
        {isMore && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            {/* 배경 어둡게 */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closePopup}
            ></div>

            {/* 팝업 본체 */}
            <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-[15px] lg:rounded-[40px] p-8 md:p-12 overflow-y-auto shadow-2xl">
              <button
                className="absolute top-8 right-8 text-2xl cursor-pointer hover:rotate-90 transition-transform"
                onClick={closePopup}
              >
                ✕
              </button>

              {/* 제목 및 날짜 */}
              <div className="mb-10 border-b border-gray-100 pb-6">
                <h2 className="w-[90%] text-[20px] lg:text-3xl font-bold mb-2 text-slate-800">
                  {isMore.name}
                </h2>
                <p className="text-[14px] lg:text-[20px] text-spring-color font-mono font-medium">
                  {isMore.date}
                </p>
              </div>

              {/* 상세 내용 리스트 */}
              <div className="space-y-10">
                {/* Project Overview */}
                <section>
                  <h4 className="text-[16px] lg:text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                    <span className="w-1.5 h-6 bg-spring-color rounded-full inline-block"></span>
                    📌 Project Overview
                  </h4>
                  <ul className="text-[13px] lg:text-[16px] list-disc list-outside ml-5 space-y-2 text-gray-600">
                    {isMore.overview?.map((text, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: text }}
                        className="[&_strong]:block"
                      />
                    ))}
                  </ul>
                </section>

                {/* Tech Stack */}
                <section>
                  <h4 className="text-[16px] lg:text-xl  font-bold mb-4 flex items-center gap-2 text-slate-800">
                    <span className="w-1.5 h-6 bg-spring-color rounded-full inline-block"></span>
                    🛠 Tech Stack
                  </h4>
                  <ul className="text-[13px] lg:text-[16px] list-disc list-outside ml-5 space-y-2 text-gray-600">
                    {isMore.stack?.map((text, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: text }}
                        className="[&_strong]:block"
                      />
                    ))}
                  </ul>
                </section>

                {/* Key Experience & Results */}
                <section>
                  <h4 className="text-[16px] lg:text-xl  font-bold mb-4 flex items-center gap-2 text-slate-800">
                    <span className="w-1.5 h-6 bg-spring-color rounded-full inline-block"></span>
                    🚀 Key Experience & Results
                  </h4>
                  <ul className="text-[13px] lg:text-[16px] list-disc list-outside ml-5 space-y-3 text-gray-600">
                    {isMore.results?.map((text, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: text }}
                        className="leading-relaxed [&_strong]:md:block"
                      />
                    ))}
                  </ul>
                </section>
              </div>

              {/* 결과물 보러가기 */}
              <div className="mt-12 text-center">
                <a
                  href={isMore.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 lg:px-10 lg:py-3 text-[13px] lg:text-[16px] bg-text-color text-white rounded-full hover:bg-spring-color transition-colors cursor-pointer font-bold"
                >
                  보러가기
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestWork;
