import { Line, LineChart, ResponsiveContainer } from "recharts";
import { gscMetrics,GscMetricsItems } from "../../data/gscMetrics";

const Metrics = () => {
    // 2. 🌟 대안 1: GSC 핵심 지표 데이터 구조화 + 미니 차트용 배열 바인딩
  // 순위나 퍼센트 등이 다른 스케일로 깨지지 않도록 독립된 데이터셋(lineData)을 부여했습니다.
  
    return (
        <>
             {/* 🌟 3. 핵심 성과 지표 대시보드 + 미니 라인 차트 통합 섹션 */}
            <section className="mb-16">
                <h2 className="text-base lg:text-2xl font-bold mb-10 text-center">GSC 주요 키워드 "마사지기" seo 개선  </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {gscMetrics.map((metric:GscMetricsItems, idx:number) => (
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
    
                    {/* 📊 미니 라인 차트 영역 */}
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
        </>
    )
}

export default Metrics;