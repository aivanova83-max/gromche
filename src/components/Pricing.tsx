import { Button } from "@/components/ui/button";
export const Pricing = () => {
  return <section id="pricing" className="py-16 max-[480px]:py-10 px-4 bg-gradient-warm">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl max-[480px]:text-2xl font-bold mb-10 max-[480px]:mb-8 text-center text-foreground">
          Как это работает
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-[480px]:gap-4 mb-8 max-[480px]:mb-6">
          {/* Абонементы */}
          <div className="bg-card rounded-2xl p-6 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth">
            <div className="flex items-center gap-2 mb-5 max-[480px]:mb-4">
              <span className="text-2xl max-[480px]:text-xl">💳</span>
              <h3 className="text-xl max-[480px]:text-lg font-semibold text-foreground">Абонементы</h3>
            </div>
            
            <div className="space-y-4 max-[480px]:space-y-3">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-foreground text-base max-[480px]:text-sm">4 занятия</span>
                  <p className="text-foreground/50 text-xs mt-0.5">43 дня</p>
                </div>
                <span className="font-semibold text-primary text-lg max-[480px]:text-base">6 000 ₽</span>
              </div>
              
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-foreground text-base max-[480px]:text-sm">6 занятий</span>
                  <p className="text-foreground/50 text-xs mt-0.5">57 дней</p>
                </div>
                <span className="font-semibold text-primary text-lg max-[480px]:text-base">8 400 ₽</span>
              </div>
              
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-foreground text-base max-[480px]:text-sm">8 занятий</span>
                  <p className="text-foreground/50 text-xs mt-0.5">78 дней</p>
                </div>
                <span className="font-semibold text-primary text-lg max-[480px]:text-base">10 400 ₽</span>
              </div>
            </div>
            
            <div className="mt-5 max-[480px]:mt-4 pt-4 border-t border-border/30">
              <p className="text-sm max-[480px]:text-xs text-foreground/70">
                🎁 Пробное занятие — <span className="text-primary font-medium">бесплатно</span>
              </p>
            </div>
          </div>
          
          {/* Концерты */}
          <div className="bg-card rounded-2xl p-6 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth">
            <div className="flex items-center gap-2 mb-5 max-[480px]:mb-4">
              <span className="text-2xl max-[480px]:text-xl">🎉</span>
              <h3 className="text-xl max-[480px]:text-lg font-semibold text-foreground">Концерты</h3>
            </div>
            
            <p className="text-foreground text-base max-[480px]:text-sm leading-relaxed mb-3">
              Каждые <span className="font-medium">~2 месяца</span> — концерт на профессиональной концертной площадке!
            </p>
            
            <p className="text-foreground/60 text-sm max-[480px]:text-xs leading-relaxed mb-3">
              Можно пригласить друзей и родственников — они будут гордиться вами!
            </p>
            
            
          </div>
          
          {/* Расписание */}
          <div className="bg-card rounded-2xl p-6 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth">
            <div className="flex items-center gap-2 mb-5 max-[480px]:mb-4">
              <span className="text-2xl max-[480px]:text-xl">📅</span>
              <h3 className="text-xl max-[480px]:text-lg font-semibold text-foreground">Расписание</h3>
            </div>
            
            <p className="text-foreground font-medium text-lg max-[480px]:text-base mb-2">
              Среда, 19:30 — 21:00
            </p>
            
            <p className="text-foreground/60 text-sm max-[480px]:text-xs">
              Занятия проходят каждую неделю
            </p>
          </div>
          
          {/* Место проведения */}
          <div className="bg-card rounded-2xl p-6 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth">
            <div className="flex items-center gap-2 mb-5 max-[480px]:mb-4">
              <span className="text-2xl max-[480px]:text-xl">📍</span>
              <h3 className="text-xl max-[480px]:text-lg font-semibold text-foreground">Место проведения</h3>
            </div>
            
            <p className="text-foreground font-medium text-base max-[480px]:text-sm mb-2">г. Люберцы, ул. 8 Марта, 12, корп. 3
(клуб ПроДетство)</p>
            
            <a href="https://yandex.ru/maps/-/CLXQ5Klo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm max-[480px]:text-xs font-medium transition-smooth">
              Построить маршрут →
            </a>
          </div>
        </div>
        
        <div className="text-center mb-4 max-[480px]:mb-3">
          <p className="text-lg max-[480px]:text-base font-medium text-primary">
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