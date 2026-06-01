import React from "react";
// Line, LineChart, ResponsiveContainer를 추가로 임포트합니다.
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { chartData,chartConfig } from '../../data/chartBoard'

const ChartBoard = () => {

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