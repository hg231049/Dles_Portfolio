import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);
// 리프레시 간격을 조절하여 감지 성능 향상
ScrollTrigger.config({ ignoreMobileResize: true });
const BackgroundScene = ({ scrollContainer }) => {
  const dayRef = useRef(null);
  const springRef = useRef(null);
  const fieldRef = useRef(null);

  useGSAP(() => {
  // 1. 모든 요소가 로드된 후(이미지 포함) 좌표 재계산
  const refreshGSAP = () => {
    ScrollTrigger.refresh();
  };

  window.addEventListener("load", refreshGSAP);

  // 2. 약간의 시간차(0.1초)를 주어 DOM이 확실히 렌더링된 후 섹션 찾기
  const timer = setTimeout(() => {
    const sections = document.querySelectorAll(".section-step");
    
    if (sections.length > 0) {
      sections.forEach((section, index) => {
        const targets = [dayRef.current, springRef.current, fieldRef.current];
        const target = targets[index];
        if (!target) return;

        gsap.to(target, {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
          }
        });
      });
    }
  }, 100);

  return () => {
    window.removeEventListener("load", refreshGSAP);
    clearTimeout(timer);
    ScrollTrigger.getAll().forEach(t => t.kill()); // 정리
  };
}, { dependencies: [scrollContainer] });

  return (
    <>
      {/* 1. 밤 (베이스) */}
      <div className="fixed inset-0 -z-20" style={{ background: "linear-gradient(180deg, #020111 0%, #191621 100%)" }} />
      
      {/* 2. 낮 (위에 겹침) */}
      <div ref={dayRef} className="fixed inset-0 -z-10 opacity-0" style={{ background: "linear-gradient(180deg, #87CEEB 0%, #E0F7FA 100%)" }} />
      
      {/* 3. 봄 (그 위에 또 겹침) */}
      <div ref={springRef} className="fixed inset-0 -z-10 opacity-0" style={{ background: "linear-gradient(180deg, #ACE0F9 0%, #FFF1EB 100%)" }} />
      
      {/* 4. 들판 (최상단) */}
      <div ref={fieldRef} className="fixed inset-0 -z-10 opacity-0" style={{ background: "linear-gradient(180deg, #D4FC79 0%, #96E6A1 100%)" }} />
    </>
  );
};

export default BackgroundScene;