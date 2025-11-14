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
        
        <div className="bg-warm-bg rounded-3xl max-[480px]:rounded-2xl p-8 max-[480px]:p-5 mb-6 max-[480px]:mb-5 shadow-warm">
          <div className="space-y-2.5 max-[480px]:space-y-2 text-center">
            <p className="text-base max-[480px]:text-sm leading-relaxed max-[480px]:leading-relaxed text-warm-text">
              <span className="font-bold text-warm-peach block mb-1">Пробное занятие</span>
              <span className="font-bold text-warm-peach bg-warm-peach/15 px-3 max-[480px]:px-2.5 py-1.5 max-[480px]:py-1 rounded-xl inline-block">20 ноября 2025г.</span>
            </p>
            
            <p className="text-base max-[480px]:text-sm leading-relaxed max-[480px]:leading-relaxed text-warm-text pt-2 max-[480px]:pt-1.5">
              Курс длится с 27 ноября по 25 декабря 2025г.
            </p>
            
            <p className="text-base max-[480px]:text-sm leading-relaxed max-[480px]:leading-relaxed text-warm-text">
              <span className="font-semibold">Занятия</span> по четвергам, 19:30–21:00
            </p>
            
            <div className="pt-3 max-[480px]:pt-2.5 pb-2 max-[480px]:pb-1.5 space-y-1.5 max-[480px]:space-y-1">
              <p className="text-base max-[480px]:text-sm leading-relaxed max-[480px]:leading-relaxed text-warm-text">
                Первый поток "Громче" проходит в г. Люберцы,
              </p>
              <p className="text-base max-[480px]:text-sm leading-relaxed max-[480px]:leading-relaxed text-warm-text">
                ул. 8 Марта, 12, корп. 1
              </p>
              <a 
                href="https://yandex.ru/maps/-/CLC746JD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-warm-peach hover:text-warm-peach/80 underline decoration-1 underline-offset-4 font-medium text-base max-[480px]:text-sm transition-smooth pt-1"
              >
                Построить маршрут →
              </a>
            </div>
            
            <div className="pt-4 max-[480px]:pt-3 pb-3 max-[480px]:pb-2">
              <p className="text-lg max-[480px]:text-base font-semibold text-warm-peach">
                Количество мест ограничено! Успейте записаться!
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-base max-[480px]:text-sm px-10 max-[480px]:px-8 py-6 max-[480px]:py-5 rounded-full w-full max-w-lg max-[480px]:max-w-full font-semibold" asChild>
            <a href="https://forms.gle/V3Sv25Gk2MLigaE58" target="_blank" rel="noopener noreferrer">
              Записаться на занятие
            </a>
          </Button>
        </div>
      </div>
    </section>;
};