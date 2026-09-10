interface MindsetItems {
    id: number,
    question: string,
    answer:string;
}

export const mindset: MindsetItems[] = [
  {
    id: 1,
    question: "퍼블리셔로서 가장 중요하게 생각하는 것은?",
    answer:
      "단순한 화면 구현보다 유지보수가 가능한 구조를 만드는 것을 중요하게 생각합니다. 반복되는 UI는 공통화하고, 협업 시 누구나 이해하기 쉬운 구조를 만들려고 합니다.",
  },
  {
    id: 2,
    question: "가장 기억에 남는 프로젝트는?",
    answer:
      "슬룸 리뉴얼 프로젝트입니다. 반응형 전환과 SEO 개선을 진행하고 실제 검색 노출 증가까지 확인하며, 사용자 경험과 비즈니스 성과가 연결되는 과정을 경험했습니다.",
  },
  {
    id: 3,
    question: "협업할 때 중요하게 생각하는 것은?",
    answer:
      "명확한 네이밍과 일관된 구조를 통해 서로 이해하기 쉬운 작업 환경을 만드는 것을 중요하게 생각합니다.",
  },
];