import { useState } from "react";
import {bestWork} from '../data/bestWork'

// 탭
const categories = ["All", "리뉴얼", "신규 구축"];


const BestWork = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeTab === "All"
      ? bestWork
      : bestWork.filter((item) => item.category === activeTab);

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
            className={`px-5 py-2 rounded-full text-sm transition cursor-pointer
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
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-sm text-subText-color">{item.date}</p>
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
              className="absolute top-4 right-4 text-xl cursor-pointer"
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
                      <li key={i} className="flex gap-1">
                        {t.title && (
                          <strong className="">
                            {t.title}
                          </strong>
                        )}
                        :
                        {t.text && (
                          <p className="">
                            {t.text}
                          </p>
                        )}
                    </li>
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
                      <li key={i} className="flex flex-wrap gap-1 lg:flex-row">
                        {t.title && (
                          <strong className="">
                            {t.title}
                          </strong>
                        )}
                        :
                        {t.text && (
                          <p className="whitespace-pre-line">
                            {t.text}
                          </p>
                        )}
                    </li>
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
