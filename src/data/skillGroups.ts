interface SkillItems {
  id: number;
  name: string;
  description?: string;
}

interface SkillGroupsItems {
  title: string;
  items: SkillItems[];
}

export const skillGroups: SkillGroupsItems[] = [
  {
    title: "Core",
    items: [
      {
        id: 1,
        name: "HTML5",
        description: "Semantic Markup · Web Accessibility",
      },
      {
        id: 2,
        name: "CSS3",
        description: "Responsive Web · Flex/Grid · Animation",
      },
      {
        id: 3,
        name: "JavaScript",
        description: "DOM · Event · UI Interaction",
      },
      {
        id: 4,
        name: "jQuery",
        description: "Dynamic UI · Interaction",
      },
    ],
  },

  {
    title: "Frontend",
    items: [
      {
        id: 5,
        name: "React",
        description: "Component · Hooks · API 연동",
      },
      {
        id: 6,
        name: "TypeScript",
        description: "Type · Interface · Props",
      },
      {
        id: 7,
        name: "Tailwind CSS",
        description: "Utility CSS · Responsive UI",
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        id: 8,
        name: "GitHub",
      },
      {
        id: 9,
        name: "Vercel",
      },
      {
        id: 10,
        name: "Figma",
      },
      {
        id: 11,
        name: "Photoshop",
      },
      {
        id: 12,
        name: "Adobe XD",
      },
    ],
  },
];