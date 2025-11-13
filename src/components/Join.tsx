import { Button } from "@/components/ui/button";

export const Join = () => {

  return (
    <section id="join" className="py-20 px-6 bg-gradient-warm">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Присоединяйтесь к нам
        </h2>
        
        
        <div className="flex flex-col items-center gap-8">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg py-6 rounded-full w-full max-w-md"
            asChild
          >
            <a href="https://forms.gle/3gzD5a7m6aCAFoZ67" target="_blank" rel="noopener noreferrer">
              Записаться на пробное занятие
            </a>
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg py-6 rounded-full w-full"
              asChild
            >
              <a href="/offer.pdf" download>
                📄 Скачать договор-оферту
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg py-6 rounded-full w-full"
              asChild
            >
              <a href="https://t.me/gromche_choir" target="_blank" rel="noopener noreferrer">
                📱 Telegram-канал хора
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
