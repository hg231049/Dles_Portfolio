import { useState,useEffect } from "react";

const menuItems = [
  { id: "home", label: "홈", sub: "Night", color: "bg-[#232323]" },
  {
    id: "introduce",
    label: "소개",
    sub: "SUNRISE",
    color: "bg-sunrise-color",
  },
  { id: "skill", label: "역량", sub: "DAY", color: "bg-day-color" },
  {
    id: "project",
    label: "프로젝트",
    sub: "SPRING",
    color: "bg-spring-color",
  },
  { id: "record", label: "기록", sub: "FIELD", color: "bg-field-color" },
  { id: "contact", label: "연락처", sub: "GROUND", color: "bg-ground-color" },
];

const HeaderQuickMenu = () => {
  const [actived, setActived] = useState("home");

   useEffect(() => {
    const handleScroll = () => {
      // 각 섹션의 위치를 파악하여 현재 활성화된 섹션 찾기
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        
        // 섹션이 화면 상단 부근(0 ~ 300px 사이)에 들어오면 활성화
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActived(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moveToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="inner">
      <nav className="px-4 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-white/10 shadow-xl ">
        <ul className="flex justify-between items-center lg:justify-evenly">
          {menuItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => moveToSection(item.id)}
                className={`
                  relative px-3 py-2 text-sm lg:text-base transition-all duration-300 cursor-pointer
                  ${actived === item.id ? `font-bold` : ""}
                `}
              >
                {item.label}

                {/* tooltip */}
                <span
                  className={`
                    absolute left-1/2 -translate-x-1/2 -bottom-6
                    whitespace-nowrap rounded-full
                    px-2 py-1 text-[11px] tracking-[0.25em]
                    ${item.color} text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]
                    transition-all duration-300 pointer-events-none
                    ${actived === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                  `}
                >
                  {item.sub}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderQuickMenu;
