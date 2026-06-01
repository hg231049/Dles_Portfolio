import { performanceBefore, performanceAfter } from "../../assets/img";
const LighthouseResult = () => {
    return (
        <>
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
        </>
    )
}

export default LighthouseResult;