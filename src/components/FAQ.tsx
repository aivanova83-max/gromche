import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/data/faq";

export const FAQ = () => {
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
    <section className="py-16 md:py-24 bg-warm-bg">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-warm-text mb-12">
          Часто задаваемые вопросы
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 shadow-soft"
            >
              <AccordionTrigger className="text-left text-warm-text font-medium hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 flex justify-center">
          <Button
            variant="hero"
            size="lg"
            className="text-base py-5 rounded-full px-10"
            asChild
          >
            <a ref={btnRef} href="#" onClick={(e) => e.preventDefault()}>
              Хочу попробовать
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
