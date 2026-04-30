import { useState } from "react";

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
  const [hovered, setHovered] = useState(null);

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
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative py-2 rounded-full text-sm lg:text-base text-text-color hover:font-bold hover:${item.color} transition-all duration-300 cursor-pointer "
              >
                {item.label}

                {/* tooltip */}
                <span
                  className={`
                    absolute left-1/2 -translate-x-1/2 -top-9
                    whitespace-nowrap rounded-full
                    px-1 py-1 text-[11px] tracking-[0.25em]
                    ${item.color} text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]
                    transition-all duration-300 pointer-events-none
                    ${
                      hovered === item.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }
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
