import { useEffect, useRef } from "react";
import { CtaButton } from "@/components/CtaButton";
import { useIsMobile } from "@/hooks/use-mobile";

export const StickyCTA = () => {
  const isMobile = useIsMobile();
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.setAttribute(
        "onclick",
        "WdgMoyklass['01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp'].loadLeadFormByModal();"
      );
    }
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur-sm border-t border-border/50">
      <CtaButton
        size="lg"
        className="w-full text-base py-5 font-semibold shadow-lg"
        asChild
      >
        <a ref={btnRef} href="#" onClick={(e) => e.preventDefault()}>
          🎤 Записаться
        </a>
      </CtaButton>
    </div>
  );
};
