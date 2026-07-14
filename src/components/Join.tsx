import { useEffect, useRef } from "react";
import { CtaButton } from "@/components/CtaButton";

export const Join = () => {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.setAttribute(
        "onclick",
        "WdgMoyklass['01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp'].loadLeadFormByModal();"
      );
    }
  }, []);

  return (
    <section id="join" className="py-12 max-[480px]:py-8 px-4 bg-gradient-warm">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl max-[480px]:text-2xl font-bold mb-6 max-[480px]:mb-5 text-foreground">
          Присоединяйтесь к нам
        </h2>
        
        
        <div className="flex flex-col items-center gap-6 max-[480px]:gap-4">
          <CtaButton
            size="lg"
            className="text-base max-[480px]:text-sm py-5 max-[480px]:py-4 w-full max-w-md max-[480px]:max-w-full"
            asChild
          >
            <a ref={btnRef} href="#" onClick={(e) => e.preventDefault()}>
              Записаться на пробное занятие
            </a>
          </CtaButton>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-[480px]:gap-3 w-full max-w-3xl">
            <CtaButton
              variant="secondary"
              size="lg"
              className="text-base max-[480px]:text-sm py-5 max-[480px]:py-4 w-full"
              asChild
            >
              <a href="/legal#offer">
                📄 Читать договор-оферту
              </a>
            </CtaButton>

            <CtaButton
              variant="outline"
              size="lg"
              className="text-base max-[480px]:text-sm py-5 max-[480px]:py-4 w-full"
              asChild
            >
              <a href="https://telegram.me/gromche_choir" target="_blank" rel="noopener noreferrer">
                📱 Telegram-канал хора
              </a>
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};
