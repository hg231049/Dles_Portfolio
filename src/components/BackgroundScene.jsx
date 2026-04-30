import React, { useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../css/BackgroundScene.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const sceneList = ["bg-sunset", "bg-day", "bg-spring", "bg-field", "bg-ground"];

const BackgroundScene = ({ scrollContainer }) => {
  const bgRefs = useRef([]);

  const petals = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      size: `${Math.random() * 6 + 6}px`,
      duration: `${Math.random() * 10 + 10}s`,
    }));
  }, []);

  useGSAP(
    () => {
      if (!scrollContainer.current) return;

      const sections =
        scrollContainer.current.querySelectorAll(".section-step");

      requestAnimationFrame(() => {
        sections.forEach((section, i) => {
          const target = bgRefs.current[i];
          if (!target) return;

          const isHorizontal = section.id === "horizontal-section";

          const track = section.querySelector("#horizontal-track");

          gsap.to(target, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end:
                isHorizontal && track
                  ? () => `+=${track.scrollWidth + 1000}`
                  : "bottom center",
              scrub: 2,
            },
          });
        });

        ScrollTrigger.refresh();
      });

      return () => ScrollTrigger.killAll();
    },
    { dependencies: [scrollContainer] },
  );

  return (
    <div className="background-wrap">
      {/* 밤 기본 배경 */}
      <div className="scene bg-night stars-effect" />

      {/* 나머지 배경 */}
      {sceneList.map((scene, i) => (
        <div
          key={scene}
          ref={(el) => (bgRefs.current[i] = el)}
          className={`scene opacity-0 ${scene}`}
        >
          {scene === "bg-spring" && (
            <div className="absolute inset-0 overflow-hidden">
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
          )}
        </div>
      ))}
    </div>
  );
};

export default BackgroundScene;
