import ToyWork from "../../components/toy/ToyWork";
import SectionTitle from "../../components/SectionTitle";

const EtcProject = () => {
  return (
    <section
      id="record"
      className="section-step relative min-h-screen flex justify-center p-[50px_0] lg:p-[100px_0] z-10"
    >
      <div className="inner">
        <SectionTitle
          step="03"
          label="멈추지 않고 이어가는 성장"
          title="Learning by Building"
          align="center"
          color="text-[#1E1E1E]"
          subColor="text-spring-color"
        />
        <ToyWork />
      </div>
    </section>
  );
};

export default EtcProject;
