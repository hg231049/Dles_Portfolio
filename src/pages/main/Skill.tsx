import Stack from "../../components/Stack";
import Competencies from "../../components/Competencies";
import SectionTitle from "../../components/SectionTitle";

const Skill = () => {
  return (
    <section
      id="skill"
      className="section-step min-h-screen flex justify-center py-12 lg:py-24"
    >
      <div className="inner relative w-full">
        <SectionTitle
          step="02"
          label="기술로 증명하는 역량"
          title="Skills & Strengths"
          align="center"
          color="text-[#0F172A]"
          subColor="text-day-color"
        />

        <Stack />

        <div className="flex justify-center py-10 lg:py-14">
          <span className="w-px h-16 bg-gradient-to-b from-day-color via-day-color/40 to-transparent"></span>
        </div>

        <Competencies />
      </div>
    </section>
  );
};

export default Skill;
