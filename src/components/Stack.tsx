import {
  skillGroups,
  SkillGroupsItems,
  SkillItems,
} from "@/data/skillGroups";

export const Stack = () => {
  return (
    <div className="space-y-12">
      {skillGroups.map((group: SkillGroupsItems) => (
        <div key={group.title}>
          <div className="mb-5 text-center">
            <p className="inline-block text-sunrise-color text-sm lg:text-base font-bold tracking-[0.25em] uppercase">
              {group.title}
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {group.items.map((item: SkillItems) => (
              <li
                key={item.id}
                className="
                  rounded-2xl
                  bg-white
                  border border-slate-100
                  px-5 py-6
                  text-center
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <p className="text-base lg:text-lg font-bold text-text-color">
                  {item.name}
                </p>

                {item.description && (
                  <p className="mt-2 text-xs lg:text-sm leading-relaxed text-subText-color">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Stack;