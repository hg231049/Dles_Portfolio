import { skillGroups,SkillGroupsItems,SkillItems } from "@/data/skillGroups";

export const Stack = () => {
  return (
    <div className="space-y-10">
      {skillGroups.map((group:SkillGroupsItems, idx:number) => (
        <div key={idx}>
          <div className="mb-5 text-center">
            <p className="inline-block text-day-color text-sm lg:text-base font-bold tracking-[0.25em] uppercase">
              {group.title}
            </p>
          </div>

          <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
            {group.items.map((item:SkillItems) => (
              <li
                key={item.id}
                className="group rounded-2xl bg-white shadow-md border border-slate-100  p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={item.icon}
                    className="w-full h-full object-contain" alt="" aria-hidden="true"
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
