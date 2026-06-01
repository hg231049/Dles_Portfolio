import BestWork from "../../components/best/BestWork";
import SectionTitle from "../../components/SectionTitle";
import React, { useRef } from "react";

const Work = () => {
  return (
    <section
      id="project"
      className="section-step min-h-[100vh] flex justify-center p-[50px_0] lg:p-[100px_0] z-10"
    >
      <div className="inner">
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
