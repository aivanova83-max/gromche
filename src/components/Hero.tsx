import { Button } from "@/components/ui/button";
import logoGromche from "@/assets/logo-gromche.png";

export const Hero = ({ className }: { className?: string }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="flex items-center justify-center px-4 py-16 max-[480px]:py-10 bg-gradient-warm">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="animate-fade-in px-0 py-0 mx-0 my-0">
          <img 
            src={logoGromche} 
            alt="Хор Громче" 
            className="mx-auto mb-8 max-[480px]:mb-6 w-full max-w-md max-[480px]:max-w-xs h-auto"
          />
          
          <h1 className="text-5xl md:text-7xl max-[480px]:text-3xl font-bold mb-4 max-[480px]:mb-3 text-foreground sr-only">
            Хор «Громче»
          </h1>
          
          <p className="text-3xl md:text-4xl max-[480px]:text-xl font-semibold mb-6 max-[480px]:mb-4 text-primary">
            Ты можешь громче!
          </p>
          
          <p className="text-xl md:text-2xl max-[480px]:text-base mb-8 max-[480px]:mb-6 max-w-3xl mx-auto text-foreground/80 leading-relaxed max-[480px]:leading-normal">
            Женский хор, где поют не ради сцены — ради жизни. <br className="max-[480px]:hidden" />Атмосфера радости, поддержки и свободы.
          </p>
          
          <Button variant="hero" size="lg" className="text-base max-[480px]:text-sm px-8 max-[480px]:px-6 py-5 max-[480px]:py-4 rounded-full w-full max-w-md max-[480px]:max-w-full" asChild>
            <a href="https://forms.gle/cEHkSbchu9h65pUi7" target="_blank" rel="noopener noreferrer">
              Прийти на первое занятие
            </a>
          </Button>
        </div>
      </div>
    </section>;
};