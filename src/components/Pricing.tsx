import { Button } from "@/components/ui/button";
export const Pricing = () => {
  const scrollToJoin = () => {
    const element = document.getElementById("join");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="pricing" className="py-12 max-[480px]:py-8 px-4 bg-gradient-warm">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl max-[480px]:text-2xl font-bold mb-8 max-[480px]:mb-6 text-center text-foreground">
          Как это работает
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-[480px]:gap-4 mb-8 max-[480px]:mb-6">
          <div className="bg-card rounded-3xl max-[480px]:rounded-2xl p-8 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth">
            <div className="text-4xl max-[480px]:text-3xl font-bold text-primary mb-3 max-[480px]:mb-2">6500 ₽</div>
            <h3 className="text-xl max-[480px]:text-lg font-semibold mb-3 max-[480px]:mb-2 text-foreground">Курс из 5 занятий</h3>
            <p className="text-base max-[480px]:text-sm text-foreground/70 mb-3 max-[480px]:mb-2">с профессиональным педагогом по пению</p>
            
            <div className="bg-accent/20 rounded-2xl max-[480px]:rounded-xl p-3 max-[480px]:p-2.5">
              <p className="text-base max-[480px]:text-sm font-medium text-accent-foreground">🎁 Пробное занятие - бесплатно!</p>
            </div>
          </div>
          
          <div className="bg-card rounded-3xl max-[480px]:rounded-2xl p-8 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth">
            <div className="text-3xl max-[480px]:text-2xl mb-3 max-[480px]:mb-2">🎉</div>
            <h3 className="text-xl max-[480px]:text-lg font-semibold mb-3 max-[480px]:mb-2 text-foreground">Последнее занятие курса - девичник в секретном месте!</h3>
            <p className="text-base max-[480px]:text-sm text-foreground/70">
              Будем веселиться и петь все, что выучили - и не только!
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-hero rounded-3xl max-[480px]:rounded-2xl p-6 max-[480px]:p-4 mb-6 max-[480px]:mb-5 shadow-soft border border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-card/95 backdrop-blur-sm"></div>
          <div className="relative z-10 space-y-3 max-[480px]:space-y-2.5 text-center">
            <p className="text-lg max-[480px]:text-sm text-foreground">
              <span className="font-bold text-primary">Пробное занятие</span> - <span className="font-bold text-primary bg-primary/10 px-2.5 max-[480px]:px-2 py-1 max-[480px]:py-0.5 rounded-lg">20 ноября 2025г.</span>
            </p>
            <p className="text-lg max-[480px]:text-sm text-foreground">
              <span className="font-bold text-primary">Курс длится</span> с 27 ноября по 25 декабря 2025г.
            </p>
            <p className="text-lg max-[480px]:text-sm text-foreground">
              <span className="font-bold text-primary">Занятия</span> по четвергам, 19:30–21:00
            </p>
            <div className="pt-3 max-[480px]:pt-2 pb-2 max-[480px]:pb-1">
              <p className="text-base max-[480px]:text-sm text-foreground mb-1.5 max-[480px]:mb-1 font-medium">
                Первый поток "Громче" проходит в г. Люберцы,
              </p>
              <p className="text-base max-[480px]:text-sm text-foreground mb-3 max-[480px]:mb-2">
                ул. 8 Марта, 12, корп. 1
              </p>
              <a 
                href="https://yandex.ru/maps/-/CLC746JD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 underline font-semibold text-base max-[480px]:text-sm transition-smooth"
              >
                Построить маршрут →
              </a>
            </div>
            <div className="pt-3 max-[480px]:pt-2">
              <p className="text-xl max-[480px]:text-base font-bold text-primary animate-pulse">
                Количество мест ограничено! Успейте записаться!
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-base max-[480px]:text-sm px-8 max-[480px]:px-6 py-5 max-[480px]:py-4 rounded-full w-full max-w-md max-[480px]:max-w-full" asChild>
            <a href="https://forms.gle/V3Sv25Gk2MLigaE58" target="_blank" rel="noopener noreferrer">
              Записаться на занятие
            </a>
          </Button>
        </div>
      </div>
    </section>;
};