interface LineDataItems {
    value:number;
}

interface GscMetricsItems {
    title: string;
    before: string;
    after: string;
    change: string;
    desc: string;
    color: string;
    lineData:LineDataItems[];
}

export const gscMetrics:GscMetricsItems[] = [
    {
      title: "총 클릭수",
      before: "365",
      after: "1,820",
      change: "+399% 증가",
      desc: "검색 유입자 수 약 5배 폭발적 성장",
      color: "#10b981", // 에메랄드
      lineData: [{ value: 365 }, { value: 1820 }],
    },
    {
      title: "총 노출수",
      before: "10,300",
      after: "54,000",
      change: "+424% 증가",
      desc: "메인 키워드 최적화로 노출 5.2배 달성",
      color: "#3b82f6", // 블루
      lineData: [{ value: 10300 }, { value: 54000 }],
    },
    {
      title: "평균 CTR (클릭률)",
      before: "3.5%",
      after: "3.4%",
      change: "-0.1%",
      desc: "노출 급증 대비 안정적인 전환율 유지",
      color: "#f59e0b", // 앰버
      lineData: [{ value: 3.5 }, { value: 3.4 }],
    },
    {
      title: "평균 순위",
      before: "5.0위",
      after: "4.4위",
      change: "0.6 순위 상승",
      desc: "상위권 랭크 진입으로 검색 효율 극대화",
      color: "#ef4444", // 레드
      // 순위는 낮아질수록 호재이므로 차트에서 시각적 반전을 주거나 추이를 그대로 보여줍니다.
      lineData: [{ value: 5.0 }, { value: 4.4 }], 
    },
  ];