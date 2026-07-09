export const branchData = {
  lyubertsy: {
    name: "Люберцы",
    schedule: {
      day: "Среда",
      time: "19:30 — 21:00",
      note: null,
    },
    prices: [
      { sessions: 4, price: "6 000", days: 43 },
      { sessions: 6, price: "8 400", days: 57 },
      { sessions: 8, price: "10 400", days: 78 },
      { sessions: 1, price: "2 000", days: null, isSingle: true },
    ],
    address: {
      text: "г. Люберцы, ул. 8 Марта, 12, корп. 3 (клуб ПроДетство)",
      mapLink: "https://yandex.ru/maps/-/CLXQ5Klo",
    },
  },
  vdnkh: {
    name: "ВДНХ",
    schedule: {
      day: "Четверг",
      time: "19:15 — 20:45",
      note: null,
    },
    prices: [
      { sessions: 4, price: "6 800", days: 43 },
      { sessions: 6, price: "9 600", days: 57 },
      { sessions: 8, price: "12 000", days: 78 },
      { sessions: 1, price: "2 200", days: null, isSingle: true },
    ],
    address: {
      text: "Проспект Мира, д. 119, стр. 619, Русская школа управления (10 мин. от м. ВДНХ)",
      mapLink: "https://yandex.ru/maps/-/CDxSAW2q",
    },
  },
  pushkinskaya: {
    name: "Пушкинская",
    schedule: {
      day: "Понедельник",
      time: "19:00 — 20:30",
      note: null,
    },
    prices: [
      { sessions: 4, price: "7 600", days: 43 },
      { sessions: 6, price: "10 800", days: 57 },
      { sessions: 8, price: "13 600", days: 78 },
      { sessions: 1, price: "2 500", days: null, isSingle: true },
    ],
    address: {
      text: "Страстной бульвар, 6с1\n(1 мин от м. Пушкинская / Чеховская)",
      mapLink: "https://yandex.com/maps/-/CPVQMHkL",
    },
  },
};

export type BranchKey = keyof typeof branchData;

export const getInitialBranch = (): BranchKey => {
  if (typeof window === "undefined") return "vdnkh";
  const hash = window.location.hash;
  const match = hash.match(/#pricing-([a-z]+)/);
  if (match && match[1] in branchData) {
    return match[1] as BranchKey;
  }
  return "vdnkh";
};
