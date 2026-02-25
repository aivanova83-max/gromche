import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "Нужно ли уметь петь?",
    a: "Нет. Вообще нет. Это формат, где можно просто прийти и петь так, как получается. Здесь никто не оценивает, не сравнивает и не слушает «правильно ли». Мы поём вместе, поэтому каждый голос сливается с общим звучанием.",
  },
  {
    q: "Какой репертуар будет на вечеринке?",
    a: "Эта вечеринка про наших мам и ДЛЯ наших мам. Поэтому будет много всем знакомых хитов советской эстрады и музыки из советских кинофильмов.",
  },
  {
    q: "Если я стесняюсь петь, мне подойдёт?",
    a: "Да. Большая часть участников поначалу стесняются, но через 10–15 минут это проходит. Совместный звук работает как терапия — он буквально вытягивает из стеснения.",
  },
  {
    q: "Можно взять подругу?",
    a: "Да, конечно. Это идеальный формат, чтобы прийти вместе. Единственное — мест немного, поэтому лучше взять билеты заранее.",
  },
  {
    q: "Можно ли прийти вместе с мамой?",
    a: "Можно с мамой. Можно без мамы. Можно подарить билет маме. И папе! Или маминой подруге.",
  },
  {
    q: "Можно прийти одной?",
    a: "Конечно. Очень многие приходят сами — и быстро находят своё окружение. Атмосфера максимально дружелюбная.",
  },
  {
    q: "Есть ли ограничение по полу?",
    a: "Нет. Вечеринка подойдет и для женщин, и для мужчин.",
  },
  {
    q: "Будет ли еда?",
    a: "Лёгкие закуски и игристое — да. Полноценного ужина — нет.",
  },
  {
    q: "Сколько длится вечер?",
    a: "Сбор гостей с 19:00. Основная программа — с 19:30 до 22:30.",
  },
  {
    q: "Есть ограничения по возрасту?",
    a: "Есть. Ограничение для мероприятий с алкоголем: 21+",
  },
  {
    q: "Где проходит мероприятие?",
    a: "Зал «Салон», Москва, ул. Полковая, 3 стр. без номера, 4-й этаж. На территории — большая парковка (100 руб/час).",
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
