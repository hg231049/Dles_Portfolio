interface HeaderMenuItems {
  id: string,
  label: string,
  sub: string,
  color: string,
}

export const menuItems:HeaderMenuItems[] = [
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
