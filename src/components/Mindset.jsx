const QA_List = [
  {
    id: 1,
    question: "Q. 포트폴리오를 리뉴얼 한 의도?",
    answer:
      "A. 기존 퍼블리싱 중심 경험을 바탕으로 React 기반 컴포넌트 구조와 UI 재사용성을 고려한 포트폴리오로 재구성했습니다.",
  },
  {
    id: 2,
    question: "Q. 퍼블리싱에서 가장 중요하게 생각하는 것?",
    answer:
      "A. 디자인 의도를 구현하면서도 접근성과 구조를 갖춘 시맨틱 마크업을 지향합니다.",
  },
  {
    id: 3,
    question: "Q. 어떤 퍼블리셔로 성장하고 싶은가요?",
    answer: "디자인과 개발 사이를 연결하는 소통형 퍼블리셔가 되고 싶습니다.",
  },
];
const Mindset = () => {
  return (
    <div className="space-y-12">
      <div className="mb-10 pb-6 border-b border-white/20 text-sunrise-color text-[18px] lg:text-[20px] font-bold">
        Q&A (Identity)
      </div>

      <div className="space-y-6">
        {QA_List.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border-l border-white/30 p-5 lg:p-6 border border-white/10"
          >
            <p className="text-white text-[15px] lg:text-[20px] font-semibold">
              {item.question}
            </p>

            <p className="text-white/85 mt-3 text-[13px] lg:text-[16px] leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mindset;
