import React from "react";
// Line, LineChart, ResponsiveContainer를 추가로 임포트합니다.
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
const ChartBoard = () => {
    // 1. 디바이스별 월별 트래픽 데이터 (기존 데이터 유지)
    const chartData = [
        { month: "성능", before: 11, after: 45 },
        { month: "접근성", before: 84, after: 90 },
        { month: "권장사항", before: 46, after: 77 },
        { month: "검색엔진 최적화", before: 85, after: 100 },
    ];

    const chartConfig = {
        before: { label: "before", color: "#60a5fa" },
        after: { label: "after", color: "#2563eb"},
    };

    return (
        <>
            {/* 6. 트래픽 통계 차트 섹션 */}
            <section className="mb-20 p-6 md:p-10 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-xl font-bold">모바일 성능 최적화</h2>
                    <p className="text-xs lg:text-sm text-gray-400">lighthouse기준 모바일 성능 최적화 결과(2025.11.26~2025.02.03)</p>
                </div>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 10)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="before" fill={chartConfig.before.color} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="after" fill={chartConfig.after.color} radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ChartContainer>
            </section>
        </>
    )
}

export default ChartBoard;