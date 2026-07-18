export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    label: "Курсы",
    items: [
      { label: "О хоре", href: "/#about" },
      { label: "Репертуар", href: "/#music" },
      { label: "Расписание и Локации", href: "/#pricing" },
      { label: "Концерты", href: "/#concerts" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    label: "Вечеринки",
    items: [
      { label: "О формате", href: "/events#format" },
      { label: "Анонсы", href: "/events#announcements" },
      { label: "Видео", href: "/events#video" },
      { label: "Отзывы", href: "/events#testimonials" },
    ],
  },
];

export const zapisItem: NavItem = { label: "Запись", href: "/zapis" };
