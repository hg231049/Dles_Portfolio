import { useState } from "react";
import { bestWork1, bestWorkMo1 } from "../assets/img";

const BestWork = () => {
  const [isMore, setIsMore] = useState(null);

  const openPopup = (work) => {
    setIsMore(work);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
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
        "<strong>내용:</strong> 기존 적응형 사이트를 반응형 UI/UX로 전면 리뉴얼 및 SEO 개선",
        "<strong>플랫폼:</strong> 아임웹 (E-commerce)",
        "<strong>기여도:</strong> 퍼블리싱 100%",
      ],
      stack: [
        "<strong>언어:</strong> HTML5, CSS3, JavaScript",
        "<strong>라이브러리:</strong> Owl Carousel",
        "<strong>툴:</strong> Photoshop",
      ],
      results: [
        "<strong>반응형 전환:</strong> Grid 기반 UI 재설계",
        "<strong>기능 확장:</strong> 커스텀 스크립트로 마케팅 기능 구현",
        "<strong>SEO 개선:</strong> 시맨틱 마크업 + 이미지 최적화",
      ],
    },
    {
      id: 2,
      name: "날씨 대시보드",
      date: "2026.04",
      link: "#",
      thumb: bestWork1,
      thumbMo: bestWorkMo1,
    },
    {
      id: 3,
      name: "슬룸 클론 프로젝트",
      date: "2026.04",
      link: "#",
      thumb: bestWork1,
      thumbMo: bestWorkMo1,
    },
  ];

  return (
    <div className="relative z-10 px-6 lg:px-10 mt-10 lg:mt-16">
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Work_list.map((item, idx) => (
          <div
            key={item.id}
            className={`group ${idx === 0 ? "lg:col-span-2" : ""}`}
          >
            {/* 썸네일 */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/2]">
              {/* PC */}
              <div className="w-full h-full border border-white/20 rounded-[15px] overflow-hidden bg-gray-900 shadow-xl">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img
                    src={item.thumb}
                    alt={item.name}
                    className="w-full hover:translate-y-[-50%] transition-transform duration-[3s] ease-in-out"
                  />
                </a>
              </div>

              {/* MO */}
              <div className="hidden lg:block absolute -bottom-5 -right-5 w-[35%] aspect-[9/13] border border-white/20 rounded-[10px] overflow-hidden bg-gray-800 shadow-xl">
                <img
                  src={item.thumbMo}
                  alt=""
                  className="w-full hover:translate-y-[-50%] transition-transform duration-[3s]"
                />
              </div>
            </div>

            {/* 텍스트 */}
            <div className="mt-8 space-y-2">
              <h3 className="text-lg lg:text-2xl font-bold text-text-color group-hover:text-spring-color transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 font-mono">{item.date}</p>
            </div>

            {/* 버튼 */}
            <div className="mt-4">
              <button
                onClick={() => openPopup(item)}
                className="px-5 py-2 text-sm border border-text-color rounded-full hover:bg-spring-color hover:text-white transition"
              >
                자세히보기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {isMore && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
          {/* dimmed */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closePopup}
          />

          {/* popup */}
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-[20px] p-8 overflow-y-auto shadow-2xl z-10">
            {/* close */}
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 text-2xl hover:rotate-90 transition"
            >
              ✕
            </button>

            {/* title */}
            <div className="mb-8 border-b pb-4">
              <h2 className="text-xl lg:text-3xl font-bold">{isMore.name}</h2>
              <p className="text-sm text-spring-color font-mono mt-1">
                {isMore.date}
              </p>
            </div>

            {/* content */}
            <div className="space-y-8">
              {/* overview */}
              {isMore.overview && (
                <section>
                  <h4 className="font-bold mb-3">📌 Overview</h4>
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    {isMore.overview.map((text, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                  </ul>
                </section>
              )}

              {/* stack */}
              {isMore.stack && (
                <section>
                  <h4 className="font-bold mb-3">🛠 Tech Stack</h4>
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    {isMore.stack.map((text, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                  </ul>
                </section>
              )}

              {/* results */}
              {isMore.results && (
                <section>
                  <h4 className="font-bold mb-3">🚀 Results</h4>
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    {isMore.results.map((text, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* link */}
            <div className="mt-10 text-center">
              <a
                href={isMore.link}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-black text-white rounded-full hover:bg-spring-color transition"
              >
                프로젝트 보러가기
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BestWork;
