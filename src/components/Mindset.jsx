const QA_List = [
  {
    id: 1,
    question: "Q. 포트폴리오를 React로 리뉴얼한 이유는?",
    answer:
      "A. 기존 정적 퍼블리싱 방식에서 나아가 컴포넌트 기반 구조와 UI 재사용성을 경험하기 위해 React 기반으로 재구성했습니다. 실제 운영 프로젝트들을 데이터 구조로 관리하며 유지보수성과 확장성을 고려했습니다.",
  },

  {
    id: 2,
    question: "Q. 실무에서 가장 중요하게 생각하는 부분은?",
    answer:
      "A. 단순히 화면을 구현하는 것을 넘어 유지보수가 가능한 구조를 만드는 것을 중요하게 생각합니다. 반복되는 UI는 컴포넌트화하고, 협업 시 수정이 용이한 구조를 우선적으로 고려합니다.",
  },

  {
    id: 3,
    question: "Q. 가장 기억에 남는 프로젝트는?",
    answer:
      "A. 슬룸 리뉴얼 프로젝트입니다. 적응형 구조를 반응형으로 전환하고 SEO를 개선하면서 실제 검색 노출 증가까지 확인할 수 있었던 경험이 인상 깊었습니다.",
  },

  {
    id: 4,
    question: "Q. 자신이 생각하는 업무 강점은 무엇인가요?",
    answer:
      "A. 디자인 구현력뿐 아니라 운영과 유지보수를 함께 고려하는 점입니다. 실무에서 다양한 쇼핑몰 구축과 리뉴얼을 경험하며 반응형 대응, 인터랙션 구현, SEO 최적화 등을 직접 진행했습니다.",
  },

  {
    id: 5,
    question: "Q. 앞으로 어떤 방향으로 성장하고 싶나요?",
    answer:
      "A. 퍼블리싱에 머무르지 않고 React 기반 프론트엔드 역량까지 확장해, 디자인과 개발 사이를 자연스럽게 연결할 수 있는 퍼블리셔로 성장하고 싶습니다.",
  },
  {
    id: 6,
    question: "Q. 협업 시 중요하게 생각하는 점은?",
    answer:
      "A. 디자이너와 개발자 모두가 이해하기 쉬운 구조로 작업하는 것을 중요하게 생각합니다. 네이밍과 컴포넌트 구조를 최대한 명확하게 작성하려고 노력합니다.",
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
