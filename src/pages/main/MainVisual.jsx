import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MainVisual = () => {
    //애니메이션처럼 성능이 중요한 작업을 할 때 "화면은 그대로 두고 내부적인 값만 조용히 바꾸기"에 최적
  const container = React.useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. 메인 타이틀 글자들 순차적으로 등장
    // .char 클래스를 가진 모든 글자들을 타겟팅합니다.
    tl.from(".char", {
      y: 50, // 화면 밑 50
      opacity: 0, // 투명도 0 숨김처리
      duration: 1,
      stagger: 0.03, // 0.05보다 조금 더 빠르게 설정하여 리듬감 부여. 순차적으로 나오도록
      ease: "power4.out",
    })
    // 2. 강조 텍스트 글로우 애니메이션 (밝힙니다 부분)
    //글자가 다 올라온 뒤, 강조된 문구에만 은은한 그림자
    .to(".highlight-text", {
      textShadow: "0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(168, 85, 247, 0.4)",
      color: "#fff",
      duration: 1.5,
      repeat: 0,
      yoyo: true, //빛이 커졌다가 작아졌다 하는 효과
      ease: "sine.inOut"
    }, "-=0.5"); //앞선 애니메이션이 완전히 끝나기 0.5초 전에 다음 애니메이션을 시작

    // 3. 서브 텍스트 및 스크롤 유도 문구 페이드 인
    tl.from(".intro-desc", {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=0.8");

    // ★ 4. 마우스 스크롤 아이콘 페이드 인 (타임라인 마지막에 추가)
    tl.from(".scroll-icon-wrap", {
      opacity: 0,
      y: -20, // 위에서 아래로 살짝 내려오며 등장
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3"); // 서브 텍스트 등장 중간에 시작

  }, { scope: container }); // 애니메이션 대상을 찾을 때 전체 문서(document)가 아니라, 딱 container(useRef로 지정한 섹션) 안에서만 찾도록

  // 텍스트 분리 로직
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section 
      ref={container}
      className="intro-section section-step h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >

      <div className="hidden text-center z-10 px-4">
        <p className="intro-sub text-blue-400 tracking-[0.3em] mb-6 text-sm md:text-base font-light uppercase opacity-80">
          From Code to Light: Illuminating User Experience
        </p>
        
        <h1 className="intro-title text-white text-5xl md:text-8xl font-bold leading-[1.2] tracking-tight">
          <div className="mb-2">{splitText("어둠 속의 코드로")}</div>
          <span className="highlight-text inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-500">
            {splitText("내일의 경험을 밝힙니다.")}
          </span>
        </h1>

        <p className="intro-desc text-gray-400 mt-10 text-base md:text-lg font-light tracking-wide">
          스크롤을 내려 어둠 속에서 피어나는 가능성을 확인하세요.
        </p>
      </div>

      {/* 배경 글로우 효과 */}
      <div className="absolute w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* 마우스 스크롤 효과 */}
      <div className="scroll-icon-wrap absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
        {/* 마우스 형태 */}
        <div className="mouse-icon relative w-6 h-10 border-2 border-white/40 rounded-full">
          {/* 마우스 휠 - 애니메이션*/}
          <div className="mouse-wheel absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/60 rounded-full" />
        </div>
        {/* 스크롤 텍스트*/}
        <span className="text-xs text-white/30 mt-2 tracking-widest uppercase">Scroll</span>
      </div>
      
    </section>
  );
};

export default MainVisual;