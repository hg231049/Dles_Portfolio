

const BoardTitle = () => {
    return (
        <>
            {/* 상단 타이틀 영역 */}
            <div className="py-20 text-center">
                <h1 className="text-2xl lg:text-5xl font-black mb-10">
                    기술적 SEO 및 웹 성능 최적화
                </h1>
                <p className="text-gray-500 text-sm lg:text-lg">
                    SEO 및 성능 개선 과정에서 <br />
                    실제 측정 데이터를 기반으로<br />
                    문제 분석과 개선 과정을 기록했습니다.<br />
                * Google Search Console / Lighthouse 기반 *
                </p>
                <div className="mt-10">
                    <a
                        href="https://www.notion.so/36c5cb715070809db794dbfd884c4406?source=copy_link"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 bg-white/100 hover:bg-white/20 transition"
                    >
                        상세 개선 리포트 보기
                    </a>
                </div>
            </div>
        </>
    )
}

export default BoardTitle;