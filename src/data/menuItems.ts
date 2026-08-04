interface HeaderMenuItems {
  id: string,
  label: string,
  sub: string,
  color: string,
}

export const menuItems:HeaderMenuItems[] = [
  { id: "home", label: "홈", sub: "Home", color: "bg-[#232323]" },
  
  { id: "skill", label: "역량", sub: "Skill", color: "bg-sunrise-color" },
  {
    id: "project",
    label: "프로젝트",
    sub: "Company Projects",
    color: "bg-day-color",
  },
  { id: "record", label: "기록", sub: "Personal Projects", color: "bg-spring-color" },
  {
    id: "introduce",
    label: "소개",
    sub: "Introduce",
    color: "bg-field-color",
  },
  { id: "contact", label: "연락처", sub: "Contact", color: "bg-ground-color" },
];
