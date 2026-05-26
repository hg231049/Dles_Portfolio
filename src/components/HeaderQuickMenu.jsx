import { useState,useEffect } from "react";
import { menuItems } from '../data/menuItems'

const HeaderQuickMenu = () => {
  const [actived, setActived] = useState("home");

  // 컴포넌트가 화면에 나타날 때 딱 한 번만 실행
   useEffect(() => {
    const handleScroll = () => {
      // 각 섹션의 위치를 파악하여 현재 활성화된 섹션 찾기
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        // getBoundingClientRect() : 해당 섹션의 현재 위치 정보를 가져옴
        const rect = section.getBoundingClientRect();
        
        // 섹션이 화면 상단 부근(0 ~ 300px 사이)에 들어오면 활성화
        // rect.top : 화면 맨 위에서부터 섹션 시작점까지의 거리
        // rect.bottom : 화면 맨 위에서부터 섹션 끝점까지의 거리
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActived(item.id);
        }
      });
    };
    // 브라우저 전체에 "사용자가 스크롤을 할 때마다 handleScroll이라는 함수를 실행해!"라고 명령
    window.addEventListener("scroll", handleScroll);
    // 컴포넌트가 사라질 때 스크롤 감시를 중단
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
                    ${item.color} text-white/80 
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
