import { useState } from "react";
import {
  bestWork1,
  bestWork2,
  bestWork3,
  bestWork4,
  bestWork5,
  bestWork6,
} from "../assets/img";

// 탭
const categories = ["All", "리뉴얼", "신규 구축"];

// 데이터
const Work_list = [
  {
    id: 1,
    category: "리뉴얼",
    name: "슬룸(SLOOM)",
    date: "2025.04 ~ 2025.05",
    link: "https://sleeplab.co.kr/home-backup",
    thumb: bestWork1,
    summary: "SEO 노출 5배 증가 및 반응형 전환",
    overview: [
      "<strong>프로젝트:</strong> 적응형 쇼핑몰 → 반응형 UI/UX 전면 리뉴얼",
      "<strong>기여도:</strong> 퍼블리싱 100%",
      "<strong>환경:</strong> 아임웹 기반 E-commerce",
    ],
    stack: ["HTML5, CSS3, JavaScript", "Owl Carousel", "Photoshop"],
    results: [
      "<strong>반응형 전환:</strong> 유지보수 효율 개선",
      "<strong>SEO 개선:</strong> 시맨틱 마크업 + 이미지 최적화",
      "<strong>UX 개선:</strong> 사용자 흐름 기반 구조 재정의",
      "<strong>성과:</strong> 검색 노출 약 5배 증가",
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
      "<strong>프로젝트:</strong> 쇼핑몰 UI/UX 리뉴얼",
      "<strong>기여도:</strong> 퍼블리싱 100%",
    ],
    stack: ["HTML, CSS, JavaScript"],
    results: [
      "<strong>구조 개선:</strong> 사용자 중심 레이아웃",
      "<strong>운영 효율:</strong> 컴포넌트화",
      "<strong>퍼포먼스:</strong> 리소스 최적화",
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
      "<strong>프로젝트:</strong> 고도몰 기반 쇼핑몰 구축",
      "<strong>기여도:</strong> 퍼블리싱 100%",
    ],
    stack: ["HTML, CSS, JavaScript", "Swiper"],
    results: [
      "<strong>인터랙션:</strong> 애니메이션 구현",
      "<strong>협업:</strong> 백엔드 연동",
      "<strong>안정성:</strong> 크로스 브라우징",
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
      "<strong>프로젝트:</strong> 고도몰 쇼핑몰 구축",
      "<strong>기여도:</strong> 퍼블리싱 100%",
    ],
    stack: ["HTML, CSS, JavaScript"],
    results: [
      "<strong>UI 구성:</strong> 커스터마이징",
      "<strong>구조 설계:</strong> 페이지 구성",
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
      "<strong>프로젝트:</strong> 반응형 쇼핑몰 구축",
      "<strong>기여도:</strong> 퍼블리싱 100%",
    ],
    stack: ["HTML, CSS, JavaScript", "YouTube API"],
    results: [
      "<strong>기능:</strong> 영상 인터랙션 구현",
      "<strong>UX:</strong> 몰입도 향상",
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
      "<strong>프로젝트:</strong> 쇼핑몰 구축",
      "<strong>기여도:</strong> 퍼블리싱 100%",
    ],
    stack: ["HTML, CSS, JavaScript"],
    results: [
      "<strong>기능:</strong> 영상/애니메이션 구현",
      "<strong>확장성:</strong> 라이브러리 활용",
    ],
  },
];

const BestWork = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeTab === "All"
      ? Work_list
      : Work_list.filter((item) => item.category === activeTab);

  // 🔥 모달 열기
  const openModal = (item) => {
    setSelected(item);
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
  };

  // 🔥 모달 닫기
  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "auto";
    document.body.classList.remove("modal-open");
  };

  return (
    <section className="">
      {/* TAB */}
      <div className="flex gap-3 mb-12 justify-center flex-wrap">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm transition
              ${
                activeTab === tab
                  ? "bg-spring-color text-white"
                  : "bg-white/50 text-gray-500 hover:bg-white/80 hover:text-spring-color"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => openModal(item)}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-gray-900">
              <img
                src={item.thumb}
                alt={item.name}
                className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white text-sm">{item.summary}</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="relative w-full max-w-4xl bg-white rounded-[8px] p-8 max-h-[85vh] overflow-y-auto animate-[fadeUp_0.3s_ease]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
            <p className="text-sm text-gray-500 mb-6">{selected.date}</p>

            <div className="space-y-6 text-sm">
              {selected.overview && (
                <div>
                  <h4 className="font-bold mb-2">📌 프로젝트 개요</h4>
                  <ul className="list-disc ml-5 space-y-1">
                    {selected.overview.map((t, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
                    ))}
                  </ul>
                </div>
              )}

              {selected.stack && (
                <div>
                  <h4 className="font-bold mb-2">🛠 기술 스택</h4>
                  <ul className="list-disc ml-5 space-y-1">
                    {selected.stack.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selected.results && (
                <div>
                  <h4 className="font-bold mb-2">🚀 주요 성과</h4>
                  <ul className="list-disc ml-5 space-y-1">
                    {selected.results.map((t, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
                    ))}
                  </ul>
                </div>
              )}

              {selected.notice && (
                <div className="text-xs text-gray-400 border-t pt-3">
                  {selected.notice.map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
                </div>
              )}
            </div>

            <a
              href={selected.link}
              target="_blank"
              rel="noreferrer"
              className="block mt-6 text-center bg-black text-white py-3 rounded-full hover:bg-spring-color transition"
            >
              사이트 보기
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default BestWork;
