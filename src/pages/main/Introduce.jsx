import { Icons } from "../../components/Icons";
import Mindset from "../../components/Mindset";
import History from "../../components/History";
import SectionTitle from "../../components/SectionTitle";

const Introduce = () => {
  return (
    <section
      id="introduce"
      className="section-step min-h-screen flex justify-center p-[50px_0] lg:p-[100px_0]"
    >
      <div className="inner">
        <SectionTitle
          step="01"
          label="지금의 나를 만든 시간들"
          title="Root & Route"
          align="center"
          color="text-[#FFF8F0]"
          subColor="text-sunrise-color"
        />
        <div className="grid grid-cols-1 items-baseline lg:grid-cols-2 gap-10">
          <Mindset />
          <History />
        </div>
      </div>
    </section>
  );
};

export default Introduce;
