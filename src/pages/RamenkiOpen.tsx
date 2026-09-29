import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaButton } from "@/components/CtaButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Quote, Music, Sparkles, Smile, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  SIGNUP_URL,
  MAP_URL,
  DISTRICT_LOCATIVE,
  ADDRESS,
  METRO_WALK,
  METRO_WALK_FULL,
  EVENT_DATE_FULL,
  EVENT_DATE_TIME_FULL,
  PRICE_NOTE,
  TEACHER_VIDEO_SRC,
  TEACHER_PHOTO_SRC,
  features,
  teacherBio,
  testimonials,
  faqItems,
} from "@/data/ramenkiOpen";

const FEATURE_ICONS: Record<string, typeof Music> = { Music, Sparkles, Smile, TrendingUp };

const RamenkiOpen = () => {
  const isMobile = useIsMobile();
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!testimonialApi) return;
    setTestimonialIdx(testimonialApi.selectedScrollSnap());
    testimonialApi.on("select", () => setTestimonialIdx(testimonialApi.selectedScrollSnap()));
  }, [testimonialApi]);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      {/* ════════ HERO ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] md:grid-rows-[auto_1fr] gap-8 md:gap-x-14 md:gap-y-6">
          <ScrollReveal className="text-center md:text-left md:col-start-2 md:row-start-1">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15]">
              Хоровая студия «Громче» открывается в {DISTRICT_LOCATIVE}
            </h1>
          </ScrollReveal>

          <ScrollReveal
            delay={0.05}
            className="flex flex-col items-center gap-3 md:col-start-1 md:row-start-1 md:row-span-2 md:self-center"
          >
            <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-foreground shadow-warm">
              <video
                className="w-full h-full object-cover"
                src={TEACHER_VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Обращение от Оксаны, педагога по вокалу «Громче»
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="text-center md:text-left md:col-start-2 md:row-start-2">
            <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed max-w-[46ch] mx-auto md:mx-0 mb-3">
              Неважно, умеете ли вы петь — важно, что хочется звучать.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-[46ch] mx-auto md:mx-0 mb-7">
              Место, где после рабочего дня можно выдохнуть, спеть от души
              и почувствовать себя собой — в кругу женщин, которым это тоже
              нужно.
            </p>
            <CtaButton size="lg" className="text-sm md:text-lg px-8 md:px-10 py-5 md:py-6 whitespace-normal h-auto" asChild>
              <a href={SIGNUP_URL}>Записаться на мастер-класс по вокалу</a>
            </CtaButton>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-xs md:text-sm text-muted-foreground mt-5">
              <span className="font-semibold text-foreground">{EVENT_DATE_FULL}</span>
              <span>·</span>
              <span>{ADDRESS}</span>
              <span>·</span>
              <span>{METRO_WALK}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ЧТО ВАС ЖДЁТ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                Что вас ждёт на занятиях
              </h2>
              <p className="text-sm md:text-base text-foreground/70 max-w-[60ch] mx-auto">
                Мы делаем хор без академизма и оценивания — но с настоящим
                развитием голоса.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => {
              const Icon = item.icon ? FEATURE_ICONS[item.icon] : null;
              return (
                <ScrollReveal key={item.title} delay={i * 0.06}>
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-warm h-full">
                    {Icon && <Icon className="w-8 h-8 text-primary mb-2" />}
                    <h3 className="text-foreground font-semibold mb-1.5 text-[15px] md:text-base">{item.title}</h3>
                    <p className="text-foreground/70 text-sm md:text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ ПЕДАГОГ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-center">
              <div className="w-full max-w-[220px] aspect-square rounded-full overflow-hidden bg-secondary mx-auto">
                <img
                  src={TEACHER_PHOTO_SRC}
                  alt={teacherBio.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  {teacherBio.role}
                </p>
                <p className="font-bold text-lg md:text-xl text-foreground mb-3">{teacherBio.name}</p>
                <div className="space-y-3">
                  {teacherBio.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-sm md:text-base text-foreground/75 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ОТЗЫВЫ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-5xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                Что говорят участницы
              </h2>
              <p className="text-sm md:text-base text-foreground/70">Отзывы с занятий «Громче»</p>
            </div>
          </ScrollReveal>

          {isMobile ? (
            <ScrollReveal>
              <Carousel setApi={setTestimonialApi} opts={{ align: "start", loop: true }} className="mx-auto max-w-sm">
                <CarouselContent>
                  {testimonials.map((text, i) => (
                    <CarouselItem key={i}>
                      <div className="bg-card rounded-2xl p-6 border border-border shadow-warm h-full">
                        <Quote className="w-5 h-5 text-primary/40 mb-3 shrink-0" />
                        <p className="text-foreground/80 leading-relaxed text-sm">
                          {text}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  type="button"
                  aria-label="Предыдущий отзыв"
                  onClick={() => testimonialApi?.scrollPrev()}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-card border border-primary/30 text-primary shadow-warm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Перейти к отзыву ${i + 1}`}
                      onClick={() => testimonialApi?.scrollTo(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === testimonialIdx ? "w-6 bg-primary" : "w-2 bg-primary/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Следующий отзыв"
                  onClick={() => testimonialApi?.scrollNext()}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-card border border-primary/30 text-primary shadow-warm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </ScrollReveal>
          ) : (
            <div className="columns-2 gap-5 space-y-5">
              {testimonials.map((text, i) => (
                <ScrollReveal key={i} delay={i * 0.08} className="break-inside-avoid mb-5">
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-warm hover:shadow-soft transition-shadow duration-300">
                    <Quote className="w-5 h-5 text-primary/40 mb-3 shrink-0" />
                    <p className="text-foreground/80 leading-relaxed text-[15px]">
                      {text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ════════ ОФФЕР ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                Начните с мастер-класса
              </h2>
              <p className="text-sm md:text-base text-foreground/70 max-w-[60ch] mx-auto">
                Первое занятие на новой локации — чтобы вы услышали, как
                звучит студия, и познакомились с Оксаной вживую.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 rounded-2xl border-2 border-accent bg-card p-8 shadow-warm">
              <div>
                <p className="font-bold text-lg md:text-xl text-foreground mb-4">
                  Мастер-класс в {DISTRICT_LOCATIVE}
                </p>
                <div className="space-y-3 text-sm md:text-[15px]">
                  <div className="flex gap-3">
                    <span className="flex-none w-24 text-xs uppercase tracking-wide text-muted-foreground pt-0.5">Когда</span>
                    <span className="font-medium text-foreground">{EVENT_DATE_TIME_FULL}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-none w-24 text-xs uppercase tracking-wide text-muted-foreground pt-0.5">Где</span>
                    <span className="font-medium text-foreground">{ADDRESS}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-none w-24 text-xs uppercase tracking-wide text-muted-foreground pt-0.5">Метро</span>
                    <span className="font-medium text-foreground">{METRO_WALK_FULL}</span>
                  </div>
                </div>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-accent underline underline-offset-4 hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  Построить маршрут
                </a>
              </div>

              <div className="bg-warm-cream rounded-xl p-6 text-center flex flex-col items-center justify-center">
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                  {PRICE_NOTE}
                </p>
                <CtaButton size="lg" className="w-full text-base" asChild>
                  <a href={SIGNUP_URL}>Записаться</a>
                </CtaButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-2xl mx-auto space-y-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center">
              Вопросы и ответы
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/60 shadow-warm">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                    <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary transition-colors text-sm md:text-base">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed space-y-3 text-sm md:text-base">
                      {item.a.split("\n\n").map((paragraph, j) => (
                        <p key={j}>{paragraph}</p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ФИНАЛЬНЫЙ CTA ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 text-center">
        <ScrollReveal>
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-3 max-w-2xl mx-auto">
            «Громче» — хоровая студия специально для женщин
          </h2>
          <p className="text-sm md:text-base text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Работаем с конца 2025 года. Открываем новые студии в спальных
            районах, чтобы дорога на хор не становилась лишней нагрузкой на
            и так загруженных женщин.
            <br />
            Ботанический сад, Люберцы, Пушкинская и теперь — Раменки!
          </p>
          <CtaButton size="lg" className="text-sm md:text-lg px-8 md:px-10 py-5 md:py-6 whitespace-normal h-auto" asChild>
            <a href={SIGNUP_URL}>Записаться на мастер-класс</a>
          </CtaButton>
        </ScrollReveal>
      </section>

      <Footer />

      {/* ════════ ЗАКРЕПЛЁННАЯ КНОПКА (МОБИЛЬНЫЕ) ════════ */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur-sm border-t border-border/50">
        <CtaButton size="lg" className="w-full text-sm py-5 font-semibold shadow-lg" asChild>
          <a href={SIGNUP_URL}>Записаться на мастер-класс</a>
        </CtaButton>
      </div>
    </div>
  );
};

export default RamenkiOpen;
