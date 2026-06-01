import { seoAfter, seoBefore, seoThumb } from "../../assets/img";
const SeoResult = () => {
    return (
        <>
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
        </>
    )
}

export default SeoResult;