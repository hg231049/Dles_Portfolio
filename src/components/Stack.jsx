import { skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8,skill9,skill10 } from '../assets/img';

const Skill_list = [
    { id: 1, name: "javascript", icon:skill1 },
    { id: 2, name: "react",icon:skill2 },
    { id: 3, name: "tailwind css",  icon:skill3},
    { id: 4, name: "vscode", icon:skill4 },
    { id: 5, name: "vercel", icon:skill5 },
    { id: 6, name: "github", icon:skill6 },
    { id: 7, name: "figma",icon:skill7 },
    { id: 8, name: "photosho",  icon:skill8},
    { id: 9, name: "adobexd", icon:skill9 },
    { id: 10, name: "editplus", icon:skill10 },
];


const Stack = () => { 
    return (
        <div >
            <div className="skill-box mb-15 text-center">
                <ul className="tools inline-grid grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4 items-start justify-items-center">
                    {Skill_list.map((item, index) => (
                        <li key={index} className="flex flex-col items-center group cursor-pointer">
                        {/* 아이콘 컨테이너 */}
                        <span className="block w-[50px] h-[50px] rounded-[8px] lg:w-[60px] lg:h-[60px] lg:rounded-[15px] overflow-hidden bg-white/5 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-2">
                            <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                        </span>
                        
                        {/* 기술명 */}
                        <p className="mt-2 lg:mt-3 text-sm md:text-base font-medium text-gray-700 group-hover:text-day-color transition-colors">
                            {item.name}
                        </p>
                        </li>
                    ))}
                    </ul>
          </div>
        </div>
        
    )
}

export default Stack;