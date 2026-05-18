import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MainVisual = () => {
  const container = React.useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".char", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.03,
        ease: "power4.out",
      })
        .to(
          ".highlight-text",
          {
            textShadow:
              "0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(168, 85, 247, 0.4)",
            color: "#fff",
            duration: 1.5,
            repeat: 0,
            yoyo: true,
            ease: "sine.inOut",
          },
          "-=0.5",
        )
        .from(
          ".intro-desc",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.8",
        )
        .from(
          ".scroll-icon-wrap",
          {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        );
    },
    { scope: container },
  );

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      id="home"
      ref={container}
      className="intro-section section-step h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="text-center mt-[-80px] z-10 px-4">
        {/* 상단 카피 */}
        <p className="intro-sub text-blue-400 tracking-[0.3em] mb-6 text-[14px] lg:text-base font-light uppercase opacity-80">
          From Publisher To Frontend Developer
        </p>

        {/* 메인 타이틀 */}
        <h1 className="intro-title text-white text-3xl lg:text-6xl leading-[1.2] tracking-tight">
          <div className="mb-2">{splitText("밤, 가장 선명한 시작")}</div>

          <span className="highlight-text inline-block  font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-500">
            {splitText("구현을 넘어 경험을 만드는")} <br />
            {splitText("UIUX 개발자를 향합니다")}
          </span>
        </h1>

        {/* 서브 설명 */}
        <p className="intro-desc text-gray-400 mt-10 text-[12px] lg:text-lg font-light tracking-wide leading-relaxed">
          퍼블리싱 경험으로 다져온 구조 이해를 바탕으로
          <br />
          React 기반 UIUX 개발자로 성장하고 있습니다.
        </p>
      </div>

      {/* 배경 글로우 */}
      <div className="absolute w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* 스크롤 유도 */}
      <div className="scroll-icon-wrap absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
        <div className="mouse-icon relative w-5 h-8 border-1 lg:w-6 lg:h-10 lg:border-2 border-white/40 rounded-full">
          <div className="mouse-wheel absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/60 rounded-full" />
        </div>

        <span className="text-[10px] text-white/30 mt-2 tracking-widest uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default MainVisual;
