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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-[480px]:gap-4 mb-5 max-[480px]:mb-4">
          <div className="bg-card rounded-2xl max-[480px]:rounded-xl p-6 max-[480px]:p-4 shadow-soft hover:shadow-xl transition-smooth h-full">
            <div className="space-y-2 max-[480px]:space-y-1.5">
              <div>
                <p className="font-semibold text-foreground text-base max-[480px]:text-sm mb-2 max-[480px]:mb-1.5">Пробное занятие</p>
                <p className="font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-lg inline-block text-base max-[480px]:text-sm">
                  20 ноября 2025г.
                </p>
              </div>
              
              <div className="pt-1">
                <p className="text-foreground/70 text-base max-[480px]:text-sm leading-normal">
                  Курс длится с 27 ноября по 25 декабря 2025г.
                </p>
              </div>
              
              <div>
                <p className="text-foreground/70 text-base max-[480px]:text-sm leading-normal">
                  Занятия по четвергам, 19:30–21:00
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl max-[480px]:rounded-xl p-6 max-[480px]:p-4 shadow-soft hover:shadow-xl transition-smooth h-full">
            <div className="space-y-2 max-[480px]:space-y-1.5">
              <div>
                <p className="font-semibold text-foreground text-base max-[480px]:text-sm mb-2 max-[480px]:mb-1.5">Место проведения</p>
              </div>
              <div>
                <p className="text-foreground/70 text-base max-[480px]:text-sm leading-normal">
                  Первый поток "Громче" проходит в г. Люберцы
                </p>
              </div>
              <div>
                <p className="text-foreground/70 text-base max-[480px]:text-sm leading-normal">
                  ул. 8 Марта, 12, корп. 1
                </p>
              </div>
              <div className="pt-1">
                <a 
                  href="https://yandex.ru/maps/-/CLC746JD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 underline decoration-1 underline-offset-4 font-medium text-base max-[480px]:text-sm transition-smooth"
                >
                  Построить маршрут →
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-4 max-[480px]:mb-3">
          <p className="text-base max-[480px]:text-sm font-medium text-primary/90">
            Количество мест ограничено! Успейте записаться!
          </p>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-base max-[480px]:text-sm px-10 max-[480px]:px-8 py-5 max-[480px]:py-4 rounded-full w-full max-w-lg max-[480px]:max-w-full font-semibold" asChild>
            <a href="https://forms.gle/V3Sv25Gk2MLigaE58" target="_blank" rel="noopener noreferrer">
              Записаться на занятие
            </a>
          </Button>
        </div>
      </div>
    </section>;
};