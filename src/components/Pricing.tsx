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
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-12 py-6 rounded-full" onClick={scrollToJoin}>
            Записаться на занятие
          </Button>
        </div>
      </div>
    </section>;
};