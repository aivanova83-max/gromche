import { ScrollReveal } from "@/components/ScrollReveal";
import { useIsMobile } from "@/hooks/use-mobile";
import { Quote } from "lucide-react";

const testimonials = [
"Хочу сказать огромное спасибо за вчерашний радостный хор! Все эти истории о любви в самое сердце❤️ вышла наполненной и светящейся как лампочка))",
"Вчера было так чудесно! Очень кайфовый формат, легкий, глубокий, веселый",
"Это было так душевно! Наполнилась энергией, энергией любви и радости! Спа-си-бо всем, кто был! Точно хочется еще, и еще, и еще!",
"Спасибо за шикарную атмосферу! Просто отдохнула душой",
"Знаете, у меня в голове сидит фраза (не помню, откуда она), что в жизни нужно оставлять место для чуда. Вот вчера — я побывала в пространстве для чуда! Это что-то необыкновенное! Пусть места для чуда в жизни каждой из нас будет как можно больше!",
"Вчера мое свидание с собой — вчера на хоровой вечеринке. Право звучать😇 без требования попадать в ноты. Просто петь, двигаться в такт и расслабляться. Много радости. Домой не ехала — летела на крыльях",
"Девочки, не знаю, как вам это удается, в прошлый раз вечеринка была шикарная, но в этот раз это просто огонь!🔥 Столько кайфа, радости, тепла и любви я давно не получала от мероприятий! 4 часа как на одном дыхании!❤️"];


export const EventTestimonials = () => {
  const isMobile = useIsMobile();
  const visibleTestimonials = isMobile ? testimonials.slice(0, 5) : testimonials;

  return (
  <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
    <div className="container max-w-5xl mx-auto space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Отзывы гостей
          </h2>
          <p className="text-foreground/70">Что говорят участники после вечеринок

        </p>
        </div>
      </ScrollReveal>

      <div className="columns-1 md:columns-2 gap-5 space-y-5">
        {visibleTestimonials.map((text, i) =>
      <ScrollReveal key={i} delay={i * 0.08}>
            <div className="break-inside-avoid bg-card rounded-2xl p-6 border border-border shadow-warm hover:shadow-soft transition-shadow duration-300">
              <Quote className="w-5 h-5 text-primary/40 mb-3 shrink-0" />
              <p className="text-foreground/80 leading-relaxed text-[15px]">
                {text}
              </p>
            </div>
          </ScrollReveal>
      )}
      </div>
    </div>
  </section>
  );
};