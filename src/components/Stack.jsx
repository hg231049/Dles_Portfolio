import {
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
  skill10,
} from "../assets/img";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { id: 1, name: "JavaScript", icon: skill1 },
      { id: 2, name: "React", icon: skill2 },
      { id: 3, name: "Tailwind CSS", icon: skill3 },
    ],
  },
  {
    title: "Tools",
    items: [
      { id: 4, name: "VSCode", icon: skill4 },
      { id: 5, name: "Vercel", icon: skill5 },
      { id: 6, name: "GitHub", icon: skill6 },
      { id: 7, name: "Figma", icon: skill7 },
      { id: 8, name: "Photoshop", icon: skill8 },
      { id: 9, name: "Adobe XD", icon: skill9 },
      { id: 10, name: "EditPlus", icon: skill10 },
    ],
  },
];

export const Stack = () => {
  return (
    <div className="space-y-10">
      {skillGroups.map((group, idx) => (
        <div key={idx}>
          <div className="mb-5 text-center">
            <p className="inline-block text-day-color text-sm lg:text-base font-bold tracking-[0.25em] uppercase">
              {group.title}
            </p>
          </div>

          <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
            {group.items.map((item) => (
              <li
                key={item.id}
                className="group rounded-2xl bg-white shadow-md border border-slate-100  p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="mt-3 text-[13px] lg:text-sm font-semibold text-text-color group-hover:text-day-color transition-colors">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Stack;
