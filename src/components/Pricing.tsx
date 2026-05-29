import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const branchData = {
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
      time: "19:30 — 21:00",
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

type BranchKey = keyof typeof branchData;

const getInitialBranch = (): BranchKey => {
  if (typeof window === "undefined") return "vdnkh";
  const hash = window.location.hash;
  const match = hash.match(/#pricing-([a-z]+)/);
  if (match && match[1] in branchData) {
    return match[1] as BranchKey;
  }
  return "vdnkh";
};

export const Pricing = () => {
  const signupBtnRef = useRef<HTMLAnchorElement>(null);
  const [activeBranch, setActiveBranch] = useState<BranchKey>(getInitialBranch);

  useEffect(() => {
    if (signupBtnRef.current) {
      signupBtnRef.current.setAttribute(
        "onclick",
        "WdgMoyklass['01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp'].loadLeadFormByModal();"
      );
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const newBranch = getInitialBranch();
      setActiveBranch(newBranch);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabChange = (value: string) => {
    setActiveBranch(value as BranchKey);
  };

  return (
    <section id="pricing" className="py-16 max-[480px]:py-10 px-4 bg-gradient-warm">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl max-[480px]:text-2xl font-bold mb-2 max-[480px]:mb-1.5 text-center text-foreground">
          Как это работает
        </h2>
        <p className="text-center text-foreground/60 text-lg max-[480px]:text-base mb-8 max-[480px]:mb-6">
          Выберите филиал
        </p>

        <Tabs value={activeBranch} onValueChange={handleTabChange} className="w-full">
          {/* Branch Switcher */}
          <TabsList className="grid w-full grid-cols-3 mb-8 max-[480px]:mb-6 h-14 max-[480px]:h-12 bg-card/80 backdrop-blur-sm rounded-full p-1.5 shadow-soft">
            <TabsTrigger
              value="lyubertsy"
              className="rounded-full text-base max-[480px]:text-xs font-medium transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md h-full"
            >
              📍 Люберцы
            </TabsTrigger>
            <TabsTrigger
              value="vdnkh"
              className="rounded-full text-base max-[480px]:text-xs font-medium transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md h-full"
            >
              📍 ВДНХ
            </TabsTrigger>
            <TabsTrigger
              value="pushkinskaya"
              className="rounded-full text-base max-[480px]:text-xs font-medium transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md h-full"
            >
              📍 Пушкинская
            </TabsTrigger>
          </TabsList>

          {(Object.keys(branchData) as BranchKey[]).map((branchKey) => {
            const branch = branchData[branchKey];
            return (
              <TabsContent
                key={branchKey}
                value={branchKey}
                className="mt-0 animate-fade-in focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-[480px]:gap-4 mb-8 max-[480px]:mb-6">
                  {/* Абонементы */}
                  <div className="bg-card rounded-2xl p-6 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth">
                    <div className="flex items-center gap-2 mb-5 max-[480px]:mb-4">
                      <span className="text-2xl max-[480px]:text-xl">💳</span>
                      <h3 className="text-xl max-[480px]:text-lg font-semibold text-foreground">
                        Абонементы
                      </h3>
                    </div>

                    <div className="space-y-4 max-[480px]:space-y-3">
                      {branch.prices.map((item, index) => (
                        <div key={index} className="flex justify-between items-baseline">
                          <div>
                            <span className="text-foreground text-base max-[480px]:text-sm">
                              {item.isSingle ? "Разовое занятие" : `${item.sessions} занятий`}
                            </span>
                            {item.days && (
                              <p className="text-foreground/50 text-xs mt-0.5">{item.days} дня</p>
                            )}
                          </div>
                          <span className="font-semibold text-primary text-lg max-[480px]:text-base">
                            {item.price} ₽
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 max-[480px]:mt-4 pt-4 border-t border-border/30">
                      <p className="text-sm max-[480px]:text-xs text-foreground/70">
                        🎁 Пробное занятие бесплатно при записи до конца мая
                      </p>
                    </div>
                  </div>

                  {/* Концерты */}
                  <div className="bg-card rounded-2xl p-6 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth">
                    <div className="flex items-center gap-2 mb-5 max-[480px]:mb-4">
                      <span className="text-2xl max-[480px]:text-xl">🎉</span>
                      <h3 className="text-xl max-[480px]:text-lg font-semibold text-foreground">
                        Концерты
                      </h3>
                    </div>

                    <p className="text-foreground text-base max-[480px]:text-sm leading-relaxed mb-3">
                      Каждые <span className="font-medium">~2 месяца</span> — концерт на профессиональной
                      концертной площадке!
                    </p>

                    <p className="text-foreground/60 text-sm max-[480px]:text-xs leading-relaxed">
                      Можно пригласить друзей и родственников — они будут гордиться вами!
                    </p>
                  </div>

                  {/* Расписание */}
                  <div className="bg-card rounded-2xl p-6 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth">
                    <div className="flex items-center gap-2 mb-5 max-[480px]:mb-4">
                      <span className="text-2xl max-[480px]:text-xl">📅</span>
                      <h3 className="text-xl max-[480px]:text-lg font-semibold text-foreground">
                        Расписание
                      </h3>
                    </div>

                    <p className="text-foreground font-medium text-lg max-[480px]:text-base mb-1">
                      {branch.schedule.day}, {branch.schedule.time}
                    </p>
                    <p className="text-foreground text-sm max-[480px]:text-xs mb-2">
                      (длительность — 1ч 30мин)
                    </p>

                    <p className="text-foreground/60 text-sm max-[480px]:text-xs">
                      Занятия проходят каждую неделю
                    </p>

                    {branch.schedule.note && (
                      <div className="mt-4 p-3 max-[480px]:p-2.5 bg-primary/10 rounded-xl border border-primary/20">
                        <p className="text-primary font-medium text-sm max-[480px]:text-xs text-center">
                          ✨ {branch.schedule.note}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Место проведения */}
                  <div className="bg-card rounded-2xl p-6 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth">
                    <div className="flex items-center gap-2 mb-5 max-[480px]:mb-4">
                      <span className="text-2xl max-[480px]:text-xl">📍</span>
                      <h3 className="text-xl max-[480px]:text-lg font-semibold text-foreground">
                        Место проведения
                      </h3>
                    </div>

                    <p className="text-foreground font-medium text-base max-[480px]:text-sm mb-3 leading-relaxed whitespace-pre-line">
                      {branch.address.text}
                    </p>

                    <a
                      href={branch.address.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm max-[480px]:text-xs font-medium transition-smooth"
                    >
                      Построить маршрут →
                    </a>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        <div className="text-center">
           <Button
              variant="hero"
              size="lg"
              className="text-base max-[480px]:text-sm px-10 max-[480px]:px-8 py-4 max-[480px]:py-3.5 rounded-full w-full max-w-lg max-[480px]:max-w-full font-semibold"
              asChild
            >
              <a ref={signupBtnRef} href="#" onClick={(e) => e.preventDefault()}>
                Записаться на занятие
              </a>
            </Button>
          <p className="text-lg max-[480px]:text-base font-medium text-primary mt-4 max-[480px]:mt-3">
            Количество мест ограничено! Успейте записаться!
          </p>
        </div>
      </div>
    </section>
  );
};
