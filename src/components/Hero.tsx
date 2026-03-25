import { Button } from "@/components/ui/button";
import { openMoyKlassForm } from "@/hooks/useMoyKlass";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <section className="flex items-center justify-center px-4 py-12 md:py-16 max-[480px]:py-8 bg-gradient-warm">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="sr-only">Хор «Громче»</h1>
          
          <p className="text-4xl md:text-6xl lg:text-7xl max-[480px]:text-3xl font-bold mb-5 max-[480px]:mb-4 text-primary leading-tight">
            Ты можешь громче!
          </p>
          
          <p className="text-lg md:text-xl max-[480px]:text-base mb-8 max-[480px]:mb-6 max-w-2xl mx-auto text-foreground/80 leading-relaxed whitespace-pre-line">
            {"Женский хор «Громче» — твоя еженедельная перезагрузка: полтора часа бережного раскрытия голоса и заботы о себе.\nВыключаем рутину, чтобы почувствовать полноту жизни в кругу «своих»"}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base max-[480px]:text-sm px-8 max-[480px]:px-6 py-5 max-[480px]:py-4 rounded-full"
              onClick={() => (window as any).WdgMoyklass?.['01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp']?.loadLeadFormByModal()}
            >
              Прийти на первое занятие
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base max-[480px]:text-sm px-8 max-[480px]:px-6 py-5 max-[480px]:py-4 rounded-full" 
              asChild
            >
              <a href="/events">
                Наши мероприятия
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};