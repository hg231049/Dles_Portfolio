import BestWork from "../../components/BestWork";
import SectionTitle from "../../components/SectionTitle";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      const track = document.querySelector("#horizontal-track");

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          // 1000px 정도의 여유를 주어 마지막 카드에서 멈춤 효과
          end: () => "+=" + (track.scrollWidth + 1000),
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef },
  );
  return (
    <section
      id="project"
      className="section-step min-h-[80vh] flex justify-center p-[50px_0] lg:p-[100px_0] z-10"
    >
      <div id="horizontal-section" ref={sectionRef} className="overflow-hidden">
        <SectionTitle
          step="03"
          label="실력으로 피워낸 작업물"
          title="Main Projects"
          align="center"
          color="text-[#1E1E1E]"
          subColor="text-spring-color"
        />
        <BestWork />
      </div>
    </section>
  );
};

export default Work;
