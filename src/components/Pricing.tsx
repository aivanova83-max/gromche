import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const scrollToJoin = () => {
    const element = document.getElementById("join");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-warm">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          Как это работает
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-3xl p-10 shadow-soft hover:shadow-xl transition-smooth">
            <div className="text-5xl font-bold text-primary mb-4">6000 ₽</div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Абонемент на 5 занятий</h3>
            <p className="text-lg text-foreground/70 mb-6">
              Действует 45 дней
            </p>
            <div className="bg-accent/20 rounded-2xl p-4 mb-6">
              <p className="text-lg font-medium text-accent-foreground">
                🎁 Первое занятие бесплатно при покупке абонемента в тот же день
              </p>
            </div>
          </div>
          
          <div className="bg-card rounded-3xl p-10 shadow-soft hover:shadow-xl transition-smooth">
            <div className="text-5xl font-bold text-secondary mb-4">1500 ₽</div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Разовое занятие</h3>
            <p className="text-lg text-foreground/70">
              Без абонемента — приходи когда удобно
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-12 py-6 rounded-full"
            onClick={scrollToJoin}
          >
            Записаться на занятие
          </Button>
        </div>
      </div>
    </section>
  );
};
