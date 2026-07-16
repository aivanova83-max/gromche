export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "О хоре", href: "/#about" },
  { label: "Репертуар", href: "/#music" },
  { label: "Расписание и Локации", href: "/#pricing" },
  { label: "Концерты", href: "/#concerts" },
  { label: "FAQ", href: "/#faq" },
  { label: "Вечеринки", href: "/events" },
  { label: "Запись", href: "/zapis" },
];
