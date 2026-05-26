const Tab = ({categories,activeTab,setActiveTab}) => {
    return (
        <div className="flex gap-3 mb-12 justify-center flex-wrap">
            {categories.map((tab) => (
            <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm transition cursor-pointer
                ${
                    activeTab === tab
                    ? "bg-spring-color text-white"
                    : "bg-white/50 text-gray-500 hover:bg-white/80 hover:text-spring-color"
                }`}
            >
                {tab}
            </button>
            ))}
      </div>
    )
}

export default Tab;