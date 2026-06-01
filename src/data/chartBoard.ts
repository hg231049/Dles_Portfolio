interface ChartDataItems { 
    month: string;
    before: number;
    after:number;
}
interface ConfigItems { 
    label: string;
    color: string;
}
interface ChartConfigItems { 
    before: ConfigItems;
    after: ConfigItems;
}


export const chartData:ChartDataItems[] = [
        { month: "성능", before: 11, after: 45 },
        { month: "접근성", before: 84, after: 90 },
        { month: "권장사항", before: 46, after: 77 },
        { month: "검색엔진 최적화", before: 85, after: 100 },
    ];

export const chartConfig:ChartConfigItems = {
        before: { label: "before", color: "#60a5fa" },
        after: { label: "after", color: "#2563eb"},
    };