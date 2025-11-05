import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-warm">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <img 
            src={logo} 
            alt="Логотип хора Громче" 
            className="mx-auto mb-12 max-w-md w-full animate-float"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Хор «Громче»
          </h1>
          
          <p className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
            Ты можешь громче!
          </p>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-foreground/80 leading-relaxed">
            Женский хор, где поют не ради сцены — ради жизни. Атмосфера радости, поддержки и свободы.
          </p>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-12 py-6 rounded-full"
            onClick={() => scrollToSection("join")}
          >
            Прийти на первое занятие
          </Button>
        </div>
      </div>
    </section>
  );
};
