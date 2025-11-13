import { Button } from "@/components/ui/button";
export const Pricing = () => {
  const scrollToJoin = () => {
    const element = document.getElementById("join");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="pricing" className="py-20 px-6 bg-gradient-warm">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          Как это работает
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-3xl p-10 shadow-soft hover:shadow-xl transition-smooth">
            <div className="text-5xl font-bold text-primary mb-4">6500 ₽</div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Курс из 5 занятий</h3>
            <p className="text-lg text-foreground/70 mb-4">с профессиональным педагогом по пению</p>
            
            <div className="bg-accent/20 rounded-2xl p-4 mb-6">
              <p className="text-lg font-medium text-accent-foreground">🎁 Пробное занятие - бесплатно!</p>
            </div>
          </div>
          
          <div className="bg-card rounded-3xl p-10 shadow-soft hover:shadow-xl transition-smooth">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Последнее занятие курса - девичник в секретном месте!</h3>
            <p className="text-lg text-foreground/70">
              Будем веселиться и петь все, что выучили - и не только!
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-hero rounded-3xl p-8 mb-8 shadow-soft border border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-card/95 backdrop-blur-sm"></div>
          <div className="relative z-10 space-y-4 text-center">
            <p className="text-xl text-foreground">
              <span className="font-bold text-primary">Пробное занятие</span> - 20 ноября 2025г.
            </p>
            <p className="text-xl text-foreground">
              <span className="font-bold text-primary">Курс длится</span> с 27 ноября по 25 декабря 2025г.
            </p>
            <p className="text-xl text-foreground">
              <span className="font-bold text-primary">Занятия:</span> по четвергам, 19:30–21:00
            </p>
            <div className="pt-4 pb-2">
              <p className="text-lg text-foreground mb-2 font-medium">
                Первый поток "Громче" проходит в г. Люберцы,
              </p>
              <p className="text-lg text-foreground mb-4">
                ул. 8 Марта, 12, корп. 1
              </p>
              <a 
                href="https://yandex.ru/maps/-/CLC746JD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 underline font-semibold text-lg transition-smooth"
              >
                Построить маршрут →
              </a>
            </div>
            <div className="pt-4">
              <p className="text-2xl font-bold text-primary animate-pulse">
                Количество мест ограничено! Успейте записаться!
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-12 py-6 rounded-full" onClick={scrollToJoin}>
            Записаться на занятие
          </Button>
        </div>
      </div>
    </section>;
};