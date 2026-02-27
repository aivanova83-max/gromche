import { ReactNode } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems: { q: string; a: ReactNode }[] = [
  {
    q: "Нужно ли уметь петь?",
    a: "Нет. Вообще нет. Это формат, где можно просто прийти и петь так, как получается. Здесь никто не оценивает, не сравнивает и не слушает «правильно ли». Мы поём вместе, поэтому каждый голос сливается с общим звучанием.",
  },
  {
    q: "Какой репертуар будет на вечеринке?",
    a: "Хиты советской эстрады и ранних 90х и музыка из советских кинофильмов. Музыка, вшитая в нашу ДНК.",
  },
  {
    q: "Я буду знать репертуар заранее?",
    a: <>Да. Мы выложим плейлист в наш <a href="https://t.me/gromche_choir" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">телеграм-канал</a> и дополнительно отправим его всем, кто купил билет.</>,
  },
  {
    q: "Я не успею выучить столько слов!",
    a: "Это нормально. На вечеринке будет проектор, слова выведем на стену. И заранее разошлём тексты на почту, можно будет подсматривать в телефоне.",
  },
  {
    q: "Это концерт? Мы будем слушать, как поёт ваш хор?",
    a: "Нет, это формат, где поют все присутствующие. Все вместе мы и есть хор. Поём в унисон и на несколько голосов самые популярные песни.",
  },
  {
    q: "Можно прийти одной?",
    a: "Конечно. Очень многие приходят сами — и быстро находят своё окружение. Атмосфера максимально дружелюбная.",
  },
  {
    q: "Будет ли еда?",
    a: "Лёгкие закуски и игристое — да. Полноценного ужина — нет.",
  },
  {
    q: "Какой дресс-код?",
    a: "Строгого дресс-кода нет. Можно прийти в том, в чём комфортно. Но мы хотим создать ощущение праздника, поэтому пусть это будет «нарядный casual».",
  },
  {
    q: "Есть ли ограничение по полу и возрасту?",
    a: "Ограничений по полу нет. Ограничение по возрасту — 18+",
  },
];
export const EventFAQ = () => (
  <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
    <div className="container max-w-3xl mx-auto space-y-10">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Вопросы и ответы
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/60 shadow-warm">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
