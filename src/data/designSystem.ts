// Данные для витрины /design-system. Значения взяты из src/index.css,
// tailwind.config.ts и подсчитаны grep'ом по фактическому использованию в src/.

export interface ColorToken {
  name: string;
  cssVar: string;
  hsl: string;
  hex: string;
  bgClass: string;
  fgClass: string;
  usage?: string;
  flag?: string;
}

export const semanticColors: ColorToken[] = [
  {
    name: "background / foreground",
    cssVar: "--background / --foreground",
    hsl: "40 40% 96% / 15 20% 25%",
    hex: "#F7F0E8 / #4D3B32",
    bgClass: "bg-background",
    fgClass: "text-foreground",
    usage: "bg-background — 29, text-foreground — 163 использования",
  },
  {
    name: "card / card-foreground",
    cssVar: "--card / --card-foreground",
    hsl: "0 0% 100% / 15 20% 25%",
    hex: "#FFFFFF / #4D3B32",
    bgClass: "bg-card border border-border",
    fgClass: "text-card-foreground",
    usage: "bg-card — 27 использований",
  },
  {
    name: "primary / primary-foreground",
    cssVar: "--primary / --primary-foreground",
    hsl: "15 70% 73% / 0 0% 100%",
    hex: "#E8A088 / #FFFFFF",
    bgClass: "bg-primary",
    fgClass: "text-primary-foreground",
    usage: "bg-primary — 33, text-primary — 79 использований",
  },
  {
    name: "secondary / secondary-foreground",
    cssVar: "--secondary / --secondary-foreground",
    hsl: "30 65% 80% / 15 20% 25%",
    hex: "#E4C9A8 / #4D3B32",
    bgClass: "bg-secondary",
    fgClass: "text-secondary-foreground",
    usage: "bg-secondary — 9 использований",
  },
  {
    name: "muted / muted-foreground",
    cssVar: "--muted / --muted-foreground",
    hsl: "350 60% 85% / 15 16% 46%",
    hex: "#E8B0B8 / #886E63",
    bgClass: "bg-muted",
    fgClass: "text-muted-foreground",
    usage: "bg-muted — 16, text-muted-foreground — 50 использований",
  },
  {
    name: "accent / accent-foreground",
    cssVar: "--accent / --accent-foreground",
    hsl: "45 75% 65% / 15 20% 25%",
    hex: "#D4B44D / #4D3B32",
    bgClass: "bg-accent",
    fgClass: "text-accent-foreground",
    usage: "bg-accent — 33, text-accent — 25 использований",
  },
  {
    name: "destructive / destructive-foreground",
    cssVar: "--destructive / --destructive-foreground",
    hsl: "0 84% 60% / 0 0% 100%",
    hex: "#EF4444 / #FFFFFF",
    bgClass: "bg-destructive",
    fgClass: "text-destructive-foreground",
    usage: "3 использования — только внутри shadcn-компонентов (Button, Badge), на страницах нет",
  },
];

// Раньше здесь было 5 токенов (olive, warm-cream, warm-peach, warm-text, warm-bg) —
// дубликаты и почти-неиспользуемые варианты. Все удалены из index.css и tailwind.config.ts:
// warm-peach дублировал primary (0 использований), warm-cream не использовался нигде,
// warm-text/olive заменены на text-foreground/text-ochre в местах их единственного применения,
// warm-bg — на bg-background (в FAQ/Concerts) и bg-folk-cream (в EventFolk, см. ниже).

// Отдельная "винтажная" палитра для /events/folk и /songs/* — сознательно отличается
// от основной, это не расхождение. folk-dark и folk-cream были извлечены Lovable
// из уже существующего хардкода в EventFolk.tsx при генерации страниц Songs;
// сам хардкод (HEX + инлайн fontFamily) убран, все места переведены на эти токены.
export const vintagePalette: ColorToken[] = [
  {
    name: "folk-dark",
    cssVar: "--folk-dark",
    hsl: "30 38% 16%",
    hex: "#3A2A1A",
    bgClass: "bg-folk-dark",
    fgClass: "text-white",
    usage: "37 использований в EventFolk.tsx, SongsEvents.tsx, SongsRunit26.tsx",
  },
  {
    name: "folk-cream",
    cssVar: "--folk-cream",
    hsl: "36 50% 96%",
    hex: "#FAF7F0",
    bgClass: "bg-folk-cream",
    fgClass: "text-folk-dark",
    usage: "10 использований",
  },
  {
    name: "ochre",
    cssVar: "--ochre",
    hsl: "27 49% 52%",
    hex: "#C17F49",
    bgClass: "bg-ochre",
    fgClass: "text-white",
    usage: "50 использований — акцентные ссылки и лейблы на винтажных страницах",
  },
];

export interface ButtonVariantInfo {
  variant: "hero" | "outline" | "secondary" | "default" | "ghost" | "link" | "destructive";
  usageCount: number;
  note?: string;
}

// button.tsx (shadcn, не редактируется напрямую — см. CLAUDE.md) остался как есть.
// Вместо этого добавлена обёртка src/components/CtaButton.tsx, которая по умолчанию
// добавляет rounded-full поверх Button — раньше это дублировалось вручную в 20 местах.
export const buttonVariants: ButtonVariantInfo[] = [
  { variant: "hero", usageCount: 17, note: "Основной CTA-стиль сайта, теперь через CtaButton" },
  { variant: "outline", usageCount: 3, note: "2 из 3 — через CtaButton; 1 (Zapis.tsx, «Вернуться на сайт») — намеренно прямоугольная, не CTA" },
  { variant: "secondary", usageCount: 1, note: "Через CtaButton" },
  { variant: "ghost", usageCount: 1, note: "Только внутри ui/carousel.tsx" },
  { variant: "default", usageCount: 0, note: "Определён, нигде не вызывается" },
  { variant: "link", usageCount: 0, note: "Определён, нигде не вызывается" },
  { variant: "destructive", usageCount: 0, note: "Определён, нигде не вызывается" },
];

export const cardRecipes = [
  {
    label: "rounded-2xl + shadow-warm + border",
    className: "bg-card rounded-2xl shadow-warm border border-border/60",
    source: "Единый эталон: Pricing, Benefits, EventFAQ, EventVenue, EventProgram, EventTestimonials",
  },
];

export const spacingScale = [
  { token: "gap-1 / mb-1 / mt-1", px: "4px", widthClass: "w-1", note: "мелкие внутренние отступы (иконка–текст)" },
  { token: "gap-2 / px-2 / py-2", px: "8px", widthClass: "w-2", note: "плотные группы (бейджи, чипы)" },
  { token: "gap-3 / p-3 / px-3", px: "12px", widthClass: "w-3", note: "отступы внутри мелких элементов" },
  { token: "gap-4 / px-4 / mb-4", px: "16px", widthClass: "w-4", note: "базовый отступ — самый частый в проекте" },
  { token: "p-5 / py-5", px: "20px", widthClass: "w-5", note: "паддинг карточек на мобильных" },
  { token: "p-6 / mb-6 / py-6", px: "24px", widthClass: "w-6", note: "паддинг карточек на десктопе" },
  { token: "px-8 / mb-8 / pl-8", px: "32px", widthClass: "w-8", note: "боковые отступы крупных блоков" },
  { token: "px-10", px: "40px", widthClass: "w-10", note: "паддинг крупных CTA-кнопок" },
  { token: "py-12", px: "48px", widthClass: "w-12", note: "вертикальный отступ секций — самый частый" },
  { token: "py-20", px: "80px", widthClass: "w-20", note: "вертикальный отступ крупных секций лендинга" },
];
