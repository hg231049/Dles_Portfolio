const QA_List = [
  {
    id:1,
    question: "Q. 퍼블리싱에서 가장 중요하게 생각하는 것?",
    answer: ["A. 디자인의 의도를 완벽하게 구현하면서도,\n  누구나 접근 가능한 시맨틱 마크업을 지향합니다."],
  },
  {
    id:2,
    question: "Q. 퍼블리싱에서 가장 중요하게 생각하는 것?",
    answer: ["A. 단순히 코드를 치는 사람이 아니라, \n 디자인과 개발 사이의 가교 역할을 하는 소통 전문가가 되고 싶습니다."],
  },
];
const Mindset = () => { 
    return (
        <div className=" space-y-12">
            <div className="sub-title mb-10 pb-6 border-b border-[#f6f6f638] text-sunrise-color text-[18px] lg:text-[20px] font-bold [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">Q&A (Identity)</div>
            <div className="qa-area space-y-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                {QA_List.map((item) => (
                    <div key={item.id} className="">
                        <p className="text-white text-[14px] lg:text-[20px] font-medium">{item.question}</p>
                        <p className="text-white mt-2 text-[12px] lg:text-[16px] leading-relaxed whitespace-pre-line">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Mindset;