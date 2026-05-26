const ComingSoonCard = () => {
    return (
        <>      
            <div className="card group flex items-center justify-center bg-white/40 border border-dashed border-gray-300 rounded-[8px] lg:rounded-[15px] p-5 cursor-default relative overflow-hidden">
            {/* 애니메이션 링 */}
            <div className="absolute w-20 h-20 border border-gray-300 rounded-full animate-ping opacity-50"></div>

            {/* 메인 아이콘 */}
            <div className="flex flex-col items-center gap-3 z-10">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-2xl font-light text-gray-600 transition-transform duration-300 group-hover:scale-110">
                +
            </div>

            <p className="text-sm text-gray-100 tracking-wide">Coming Soon</p>
            </div>
        </div>
      </>

    )
}

export default ComingSoonCard;