import { useState } from "react";
import { bestWork,BestWorkItems } from '../../data/bestWork'
import Tab from "./Tab";
import Grid from "./Grid";
import Modal from "./Modal";

// 탭
const categories = ["All", "리뉴얼", "신규 구축"];

const BestWork = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState<BestWorkItems | null>(null);

  const filtered =
    activeTab === "All"
      ? bestWork
      : bestWork.filter((item) => item.category === activeTab);

  // 🔥 모달 열기
  const openModal = (item:BestWorkItems) => {
    setSelected(item);
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
  };

  // 🔥 모달 닫기
  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "auto";
    document.body.classList.remove("modal-open");
  };

  return (
    <section className="">
      <Tab categories={categories} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Grid filtered={filtered} openModal={openModal}/>
      <Modal selected={selected} closeModal={closeModal}/>
    </section>
  );
};

export default BestWork;
