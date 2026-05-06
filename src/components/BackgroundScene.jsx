import React, { useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../css/BackgroundScene.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);
ScrollTrigger.config({ ignoreMobileResize: true });

const BackgroundScene = ({ scrollContainer }) => {
  const sunriseRef = useRef(null);
  const dayRef = useRef(null);
  const springRef = useRef(null);
  const fieldRef = useRef(null);
  const groundRef = useRef(null);

  // useMemo 덕분에 컴포넌트가 리렌더링되어도 꽃잎의 위치가 바뀌지 않고 고정
  const petals = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      size: `${Math.random() * 5 + 5}px`,
      duration: `${Math.random() * 10 + 10}s`,
    }));
  }, []);
// useGSAP : 리액트 환경에서 GSAP 애니메이션을 안전하게 실행하기 위한 전용 Hook
    useGSAP(
    () => {
      const refreshGSAP = () => ScrollTrigger.refresh();
      // 모든 이미지와 리소스가 로드된 후 계산
    window.addEventListener("load", () => ScrollTrigger.refresh());
      // 폰트나 이미지가 늦게 뜰 때를 대비해 1초 뒤에 한 번 더 갱신
      const refreshTimer = setTimeout(() => {
        if (!scrollContainer.current) return;
        // 각 콘텐츠 섹션들을 찾아내어, 그 섹션이 화면에 들어올 때 배경 레이어를 하나씩 활성화
        const sections =
          scrollContainer.current.querySelectorAll(".section-step");

        if (sections.length > 0) {
          sections.forEach((section, index) => {
            const targets = [
              sunriseRef.current,
              dayRef.current,
              springRef.current,
              fieldRef.current,
              groundRef.current,
            ];
            const target = targets[index];
            if (!target) return;

            gsap.to(target, {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                // ★ 포인트: BestWork 내부의 end 설정(+1000)과 동일하게 맞춰줍니다.
                end: "bottom top",
                scrub: 1.5, //스크롤 속도에 맞춰 애니메이션이 재생되도록 함
              },
            });
          });
        }
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        window.removeEventListener("load", refreshGSAP);
        clearTimeout(refreshTimer);
      };
    },
    { dependencies: [scrollContainer] },
  );

  return (
    <div className="background-wrap">
      {/* 1. 밤 (가장 밑바닥 - 베이스) */}
      <div
        className="fixed inset-0 stars-effect -z-[60]"
        style={{
          background: "linear-gradient(180deg, #0f0f0f 0%, #232323 100%)",
        }}
      />

      {/* 2. 노을 (밤 위에 올라옴) */}
      <div
        ref={sunriseRef}
        className="fixed inset-0 -z-[50] opacity-0"
        style={{
          background: "linear-gradient(180deg, #201e30 15%, #ff9e80 100%)",
        }}
      />

      {/* 3. 낮 (노을 위에 올라옴) */}
      <div
        ref={dayRef}
        className="fixed inset-0 -z-[40] opacity-0"
        style={{
          background: "linear-gradient(180deg, #87CEEB 0%, #E0F7FA 100%)",
        }}
      />

      {/* 4. 봄 (낮 위에 올라옴 - 가로 스크롤 섹션) */}
      <div
        ref={springRef}
        className="fixed inset-0 -z-[30] opacity-0"
        style={{
          background: "linear-gradient(180deg, #accef9 0%, #FFF1EB 100%)",
        }}
      >
        <div className="absolute inset-0 petals-container overflow-hidden">
          {petals.map((petal) => (
            <div
              key={petal.id}
              className="petal"
              style={{
                left: petal.left,
                width: petal.size,
                height: `${parseFloat(petal.size) * 0.7}px`,
                animationDelay: petal.delay,
                animationDuration: petal.duration,
              }}
            />
          ))}
        </div>
      </div>

      {/* 5. 들판 (봄 위에 올라옴) */}
      <div
        ref={fieldRef}
        className="fixed inset-0 -z-[20] opacity-0"
        style={{
          background: "linear-gradient(180deg, #D4FC79 0%, #96E6A1 100%)",
        }}
      />

      {/* 6. 땅 (가장 마지막에 들판 위에 올라옴) */}
      <div
        ref={groundRef}
        className="fixed inset-0 -z-[10] opacity-0 ground-effect"
        style={{
          background: "linear-gradient(180deg, #3d2b1f 0%, #1a120b 100%)",
        }}
      />
    </div>
  );
};

export default BackgroundScene;
