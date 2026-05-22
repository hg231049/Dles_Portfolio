import React from "react";
// Line, LineChart, ResponsiveContainer를 추가로 임포트합니다.
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import "../css/dashboard.css";
import { seoAfter, seoBefore, seoThumb, performanceBefore, performanceAfter } from "../assets/img";

const Dashboard = () => {
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

  // 2. 🌟 대안 1: GSC 핵심 지표 데이터 구조화 + 미니 차트용 배열 바인딩
  // 순위나 퍼센트 등이 다른 스케일로 깨지지 않도록 독립된 데이터셋(lineData)을 부여했습니다.
  const gscMetrics = [
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

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-20 text-slate-900 dark:text-slate-50">
      <div className="inner max-w-[1520px] mx-auto px-5">
        
        {/* 상단 타이틀 영역 */}
        <div className="py-20 text-center">
          <h1 className="text-2xl lg:text-5xl font-black mb-4">
            기술적 SEO 및 웹 성능 최적화
          </h1>
          <p className="text-gray-500 text-sm lg:text-lg">
            데이터 기반의 사용자 경험 개선 및 검색 엔진 노출 극대화 프로젝트
          </p>
        </div>

        {/* 🌟 3. 핵심 성과 지표 대시보드 + 미니 라인 차트 통합 섹션 */}
        <section className="mb-16">
            <h2 className="text-base lg:text-2xl font-bold mb-10 text-center">GSC 주요 키워드 "마사지기" seo 개선  </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gscMetrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="text-sm font-medium text-gray-400 mb-2">{metric.title}</div>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-black tracking-tight">{metric.after}</span>
                    <span className="text-xs text-gray-400 line-through">이전: {metric.before}</span>
                  </div>

                  <div className="flex items-center gap-1.5 mb-4">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      metric.title.includes("CTR") 
                        ? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400" 
                        : "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400"
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>

                {/* 📊 카드 하단에 쏙 들어가는 미니 라인 차트 영역 */}
                <div className="h-[70px] w-full my-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={metric.lineData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke={metric.color} 
                        strokeWidth={2.5} 
                        dot={{ r: 3, fill: metric.color, strokeWidth: 0 }} 
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium pt-3 border-t border-gray-100 dark:border-slate-800 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors mt-2">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 이미지 결과 섹션 */}
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-10">
            <div>
              <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <img src={seoBefore} alt="SEO 개선 전" className="w-full h-auto hover:scale-105 transition-transform duration-500"/>
              </div>
              <p className="mt-3 text-gray-400 text-[14px] text-center font-medium">SEO 작업 전 (~2025.03.26)</p>
            </div>
            <div>
              <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <img src={seoAfter} alt="SEO 개선 후" className="w-full h-auto hover:scale-105 transition-transform duration-500"/>
              </div>
              <p className="mt-3 text-gray-400 text-[14px] text-center font-medium">SEO 작업 후 (2025.11.28 ~ 2026.03.12)</p>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
            <img src={seoThumb} alt="SEO 개선 전후 비교" className="w-full h-auto"/>
          </div>
          <p className="mt-3 text-gray-400 text-[14px] text-center font-medium">전체 데이터 추이 (2024.11.10 ~ 2026.03.12)</p>
        </section>

        <section className="py-16">
            <h2 className="text-base lg:text-2xl font-bold mb-10 text-center">Lighthouse 성능 최적화 결과</h2>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="reveal mx-auto transition-all duration-700">
                    <img src={performanceBefore} alt="최적화 전" className="rounded-xl shadow-sm border border-gray-200"/>
                    <p className="text-center text-gray-400 text-sm mt-4">최적화 전 (~2025.11.26)</p>
                </div>
                <div className="reveal  mx-auto transition-all duration-700 delay-200">
                    <img src={performanceAfter} alt="최적화 후" className="rounded-xl shadow-sm border border-gray-200"/>
                    <p className="text-center text-gray-400 text-sm mt-4">최적화 후 (~2026.02.03)</p>
                </div>
            </div>
        </section>
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
      </div>
    </div>
  );
};

export default Dashboard;