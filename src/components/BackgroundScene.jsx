import React, { useRef, useMemo } from 'react'; // ★ useMemo 추가
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../css/BackgroundScene.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);
ScrollTrigger.config({ ignoreMobileResize: true });

const BackgroundScene = ({ scrollContainer }) => {
  const sunriseRef = useRef(null);
  const dayRef = useRef(null);
  const springRef = useRef(null);
  const fieldRef = useRef(null);
  const groundRef = useRef(null);

  // ★ 꽃잎 30개의 랜덤한 스타일을 메모이제이션 (성능 최적화)
  // 새로고침 할 때마다 위치가 바뀝니다.
  const petals = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      // 가로 위치 랜덤 (0% ~ 100%)
      left: `${Math.random() * 100}%`,
      // 애니메이션 지연 시간 랜덤 (0초 ~ 10초) - 뭉치지 않게 함
      delay: `${Math.random() * 10}s`,
      // 꽃잎 크기 살짝 랜덤
      size: `${Math.random() * 5 + 5}px`,
      // 떨어지는 속도 랜덤 (10초 ~ 20초)
      duration: `${Math.random() * 10 + 10}s`
    }));
  }, []);

  useGSAP(() => {
    const refreshGSAP = () => ScrollTrigger.refresh();
    window.addEventListener("load", refreshGSAP);

    const timer = setTimeout(() => {
      if (!scrollContainer.current) return;
      const sections = scrollContainer.current.querySelectorAll(".section-step");
      
      if (sections.length > 0) {
        sections.forEach((section, index) => {
          const targets = [sunriseRef.current, dayRef.current, springRef.current, fieldRef.current, groundRef.current];
          const target = targets[index];
          if (!target) return;

          gsap.to(target, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
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
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { dependencies: [scrollContainer] });

  return (
    <div className="background-wrap">
        {/* 1. 밤 (베이스 + 별) */}
        <div 
          className="fixed inset-0 -z-30 stars-effect"
          style={{ background: "linear-gradient(180deg, #0f0f0f 0%, #232323 100%)" }} 
        />
        
        {/* 2. 노을 */}
        <div 
          ref={sunriseRef} 
          className="fixed inset-0 -z-20 opacity-0" 
          style={{ background: "linear-gradient(180deg, #201e30 0%, #ff9e80 100%)" }} 
        />

        {/* 3. 낮 */}
        <div 
          ref={dayRef} 
          className="fixed inset-0 -z-20 opacity-0" 
          style={{ background: "linear-gradient(180deg, #87CEEB 0%, #E0F7FA 100%)" }} 
        />
        
        {/* 4. 봄 + 풍성한 꽃잎 효과 */}
        <div 
          ref={springRef} 
          className="fixed inset-0 -z-10 opacity-0" // petals-effect 클래스 제거 (직접 컴포넌트로 만듦)
          style={{ background: "linear-gradient(180deg, #accef9 0%, #FFF1EB 100%)" }} 
        >
          {/* ★ 꽃잎 레이어: 50개의 꽃잎을 생성 */}
          <div className="absolute inset-0 petals-container overflow-hidden">
            {petals.map((petal) => (
              <div
                key={petal.id}
                className="petal"
                style={{
                  left: petal.left,
                  width: petal.size,
                  height: `${parseFloat(petal.size) * 0.7}px`, // 가로보다 세로를 살짝 작게
                  animationDelay: petal.delay,
                  animationDuration: petal.duration
                }}
              />
            ))}
          </div>
        </div>
        
        {/* 5. 들판 */}
        <div 
          ref={fieldRef} 
          className="fixed inset-0 -z-5 opacity-0" 
          style={{ background: "linear-gradient(180deg, #D4FC79 0%, #96E6A1 100%)" }} 
        />

        {/* 6. 땅 */}
        <div 
          ref={groundRef} 
          className="fixed inset-0 -z-5 opacity-0 ground-effect" // CSS 효과 추가 가능
          style={{ background: "linear-gradient(180deg, #3d2b1f 0%, #1a120b 100%)" }} // 밝은 대지 느낌 그라데이션
        />
      </div>
  );
};

export default BackgroundScene;