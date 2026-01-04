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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-[480px]:gap-4 mb-5 max-[480px]:mb-4">
          {/* Абонементы */}
          <div className="bg-card rounded-3xl max-[480px]:rounded-2xl p-8 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth h-full">
            <h3 className="text-xl max-[480px]:text-lg font-semibold mb-4 max-[480px]:mb-3 text-foreground">Абонементы</h3>
            <div className="space-y-3 max-[480px]:space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-foreground/80 text-base max-[480px]:text-sm">4 занятия</span>
                <span className="font-bold text-primary text-lg max-[480px]:text-base">6 000 ₽</span>
              </div>
              <p className="text-foreground/60 text-sm max-[480px]:text-xs">Действует 43 дня с момента активации</p>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-foreground/80 text-base max-[480px]:text-sm">6 занятий</span>
                <span className="font-bold text-primary text-lg max-[480px]:text-base">8 400 ₽</span>
              </div>
              <p className="text-foreground/60 text-sm max-[480px]:text-xs">Действует 57 дней с момента активации</p>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-foreground/80 text-base max-[480px]:text-sm">8 занятий</span>
                <span className="font-bold text-primary text-lg max-[480px]:text-base">10 400 ₽</span>
              </div>
              <p className="text-foreground/60 text-sm max-[480px]:text-xs">Действует 78 дней с момента активации</p>
            </div>
            
            <div className="bg-accent/20 rounded-2xl max-[480px]:rounded-xl p-3 max-[480px]:p-2.5 mt-4 max-[480px]:mt-3">
              <p className="text-base max-[480px]:text-sm font-medium text-accent-foreground">🎁 Пробное занятие — бесплатно!</p>
            </div>
          </div>
          
          {/* Концерты */}
          <div className="bg-card rounded-3xl max-[480px]:rounded-2xl p-8 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth h-full">
            <div className="text-3xl max-[480px]:text-2xl mb-3 max-[480px]:mb-2">🎉</div>
            <h3 className="text-xl max-[480px]:text-lg font-semibold mb-3 max-[480px]:mb-2 text-foreground">Концерты</h3>
            <p className="text-base max-[480px]:text-sm text-foreground/70">
              Каждые ~2 месяца — концерт на профессиональной концертной площадке!
            </p>
            <p className="text-base max-[480px]:text-sm text-foreground/70 mt-2">
              Можно пригласить друзей и родственников!
            </p>
          </div>
          
          {/* Расписание */}
          <div className="bg-card rounded-2xl max-[480px]:rounded-xl p-5 max-[480px]:p-4 shadow-soft hover:shadow-xl transition-smooth h-full">
            <div className="space-y-1.5 max-[480px]:space-y-1 mx-[15px]">
              <p className="font-semibold text-foreground mb-1 text-xl max-[480px]:text-lg">📅 Расписание</p>
              
              <p className="text-foreground/70 leading-snug pt-1 text-base max-[480px]:text-sm">
                Занятия проходят каждую среду
              </p>
              
              <p className="font-semibold text-accent-foreground bg-accent/20 px-3 py-1 rounded-lg inline-block text-lg max-[480px]:text-base">
                с 19:30 до 21:00
              </p>
            </div>
          </div>
          
          {/* Место проведения */}
          <div className="bg-card rounded-2xl max-[480px]:rounded-xl p-5 max-[480px]:p-4 shadow-soft hover:shadow-xl transition-smooth h-full">
            <div className="space-y-1.5 max-[480px]:space-y-1 mx-[15px]">
              <p className="font-semibold text-foreground mb-1 text-xl max-[480px]:text-lg">📍 Место проведения</p>
              
              <p className="text-foreground/70 leading-snug pt-1 text-base max-[480px]:text-sm">
                г. Люберцы, ул. 8 Марта, 12, корп. 3
              </p>
              
              <a href="https://yandex.ru/maps/-/CLXQ5Klo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 underline decoration-1 underline-offset-2 font-medium text-sm max-[480px]:text-xs transition-smooth pt-0.5">
                Построить маршрут →
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-3 max-[480px]:mb-2.5">
          <p className="text-lg max-[480px]:text-base font-semibold text-primary py-[20px]">
            Количество мест ограничено! Успейте записаться!
          </p>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-base max-[480px]:text-sm px-10 max-[480px]:px-8 py-4 max-[480px]:py-3.5 rounded-full w-full max-w-lg max-[480px]:max-w-full font-semibold" asChild>
            <a href="https://forms.gle/V3Sv25Gk2MLigaE58" target="_blank" rel="noopener noreferrer">
              Записаться на занятие
            </a>
          </Button>
        </div>
      </div>
    </section>;
};