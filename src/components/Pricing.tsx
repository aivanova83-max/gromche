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
        
        <div className="bg-primary/10 rounded-3xl p-8 mb-8 border-2 border-primary/20">
          <div className="space-y-4 text-center">
            <p className="text-lg text-foreground">
              <span className="font-semibold">Пробное занятие</span> - 20 ноября
            </p>
            <p className="text-lg text-foreground">
              <span className="font-semibold">Курс длится</span> с 27 ноября по 25 декабря
            </p>
            <div className="pt-2">
              <p className="text-lg text-foreground mb-2">
                Первый поток "Громче" проходит в г. Люберцы,
              </p>
              <p className="text-lg text-foreground mb-3">
                ул. 8 Марта, 12, корп. 1
              </p>
              <a 
                href="https://yandex.ru/maps/-/CLC746JD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline font-medium transition-smooth"
              >
                Построить маршрут →
              </a>
            </div>
            <p className="text-xl font-semibold text-primary pt-2">
              Количество мест ограничено! Успейте записаться!
            </p>
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