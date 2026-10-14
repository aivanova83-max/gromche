export const branchData = {
  lyubertsy: {
    name: "Люберцы",
    teacher: "Наталья Мишина",
    schedule: {
      day: "Среда",
      time: "19:30 — 21:00",
      note: null,
    },
    prices: [
      { sessions: 4, price: "6 000", weeks: 6 },
      { sessions: 6, price: "8 400", weeks: 8 },
      { sessions: 8, price: "10 400", weeks: 11 },
      { sessions: 1, price: "2 000", weeks: null, isSingle: true },
    ],
    trialNote: "Пробное занятие бесплатно при оплате абонемента в тот же день",
    address: {
      text: "г. Люберцы, ул. 8 Марта, 12, корп. 3 (клуб ПроДетство)",
      mapLink: "https://yandex.ru/maps/-/CLXQ5Klo",
    },
  },
  botsad: {
    name: "Ботанический сад",
    teacher: "Наталья Мишина",
    schedule: {
      day: "Четверг",
      time: "19:30 — 21:00",
      note: null,
    },
    prices: [
      { sessions: 4, price: "6 800", weeks: 6 },
      { sessions: 6, price: "9 600", weeks: 8 },
      { sessions: 8, price: "12 000", weeks: 11 },
      { sessions: 1, price: "2 200", weeks: null, isSingle: true },
    ],
    trialNote: "Пробное занятие бесплатно при оплате абонемента в тот же день",
    address: {
      text: "ул. Седова, д. 3, библиотека №53\n(7 мин пешком от м. Ботанический сад или Свиблово)",
      mapLink: "https://yandex.ru/maps/-/CTx1rXLt",
    },
  },
  pushkinskaya: {
    name: "Пушкинская",
    teacher: "Наталья Мишина",
    schedule: {
      day: "Понедельник",
      time: "19:15 — 20:45",
      note: null,
    },
    prices: [
      { sessions: 4, price: "7 600", weeks: 6 },
      { sessions: 6, price: "10 800", weeks: 8 },
      { sessions: 8, price: "13 600", weeks: 11 },
      { sessions: 1, price: "2 500", weeks: null, isSingle: true },
    ],
    trialNote: "Пробное занятие бесплатно при оплате абонемента в тот же день",
    address: {
      text: "Страстной бульвар, 6с1\n(1 мин от м. Пушкинская / Чеховская)",
      mapLink: "https://yandex.com/maps/-/CPVQMHkL",
    },
  },
  ramenki: {
    name: "Раменки",
    teacher: "Оксана Воеводина",
    schedule: {
      day: "Среда",
      time: "19:30 — 21:00",
      note: null,
    },
    prices: [
      { sessions: 4, price: "7 600", weeks: 6 },
      { sessions: 6, price: "10 800", weeks: 8 },
      { sessions: 8, price: "13 600", weeks: 11 },
      { sessions: 1, price: "2 500", weeks: null, isSingle: true },
    ],
    trialNote: "Пробное занятие бесплатно при оплате абонемента в тот же день",
    address: {
      text: "Винницкая д. 4\n(5 мин пешком от м. Раменки)",
      mapLink: "https://yandex.ru/maps/-/CXURJX~V",
    },
  },
};

export type BranchKey = keyof typeof branchData;

export const getInitialBranch = (): BranchKey => {
  if (typeof window === "undefined") return "pushkinskaya";
  const hash = window.location.hash;
  const match = hash.match(/#pricing-([a-z]+)/);
  if (match && match[1] in branchData) {
    return match[1] as BranchKey;
  }
  return "pushkinskaya";
};
