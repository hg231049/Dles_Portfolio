import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BackgroundScene = ({ scrollContainer }) => {
  const dayRef = useRef(null);
  const springRef = useRef(null);
  const fieldRef = useRef(null);

  useGSAP(() => {
    // 1. scrollContainer.current가 있는지 반드시 확인
    if (!scrollContainer || !scrollContainer.current) return;

    // 부모 컨테이너 안에 있는 실제 섹션들을 모두 찾습니다.
    // 예: 부모 안에 <section className="step">... </section> 구조라고 가정
    const sections = scrollContainer.current.querySelectorAll(".section-step");

    sections.forEach((section, index) => {
        // 각 레이어 참조를 배열로 관리하거나 조건문 처리
        const targets = [dayRef.current, springRef.current, fieldRef.current];
        const target = targets[index];

        if (target) {
        gsap.to(target, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
            trigger: section,      // ★ 각 섹션이 감지기(Trigger)가 됨
            start: "top top",   // 섹션의 머리가 화면 중앙에 올 때 시작
            end: "bottom center",  // 섹션의 꼬리가 화면 중앙에 오면 끝
            scrub: true,
            }
        });
        }
    });
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