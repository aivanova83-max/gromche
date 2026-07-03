import { useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Send } from "lucide-react";
import { featureCards, testimonials, audienceItems, TELEGRAM_LINK, TELEGRAM_CHANNEL, INSTAGRAM_LINK } from "@/data/eventsLanding";

const EventsLanding = () => {
  const videoMarchRef = useRef<HTMLVideoElement>(null);
  const videoDecemberRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const march = videoMarchRef.current;
    const december = videoDecemberRef.current;
    if (!march || !december) return;

    const pauseOther = (playing: HTMLVideoElement, other: HTMLVideoElement) => {
      const handler = () => { if (!other.paused) other.pause(); };
      playing.addEventListener("play", handler);
      return () => playing.removeEventListener("play", handler);
    };

    const cleanup1 = pauseOther(march, december);
    const cleanup2 = pauseOther(december, march);
    return () => { cleanup1(); cleanup2(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ════════ 1. HERO ════════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-event.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[hsl(240_40%_15%/0.40)] to-black/60 md:from-black/70 md:via-[hsl(240_40%_15%/0.60)] md:to-black/80 backdrop-blur-sm" />

        <div className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Ты можешь громче!
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed max-[480px]:text-sm">
            Хоровые вечеринки «Громче» — формат,
            <br />
            где ты не зритель, а&nbsp;голос.
            <br />
            Живая музыка, любимые песни, сотня человек в&nbsp;унисон.
          </p>

          <Button
            variant="hero"
            size="lg"
            className="text-base px-10 py-6 rounded-full text-lg"
            asChild
          >
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              Следить за анонсами
            </a>
          </Button>
        </div>

      </section>

      {/* ════════ 2. CONCEPT ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Это не концерт и не караоке
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-[480px]:text-base">
                Хоровая вечеринка — это когда главные герои не на сцене, а&nbsp;в&nbsp;зале.
              </p>
              <p className="text-foreground/70 leading-relaxed max-[480px]:text-sm">
                Вы вместе образуете хор. Голос каждого усиливает общее звучание — и сам наполняется силой.
                Даже если раньше вы думали, что «не поёте».
                <br /><br />
                Мы просто поём любимые песни под живую музыку — громко, душевно и без оценки.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ DIVIDER ════════ */}
      <div className="flex items-center justify-center py-6 bg-gradient-warm">
        <div className="flex items-center gap-4">
          <span className="block w-12 h-px bg-primary/30" />
          <span className="text-primary/50 text-lg">✦</span>
          <span className="block w-12 h-px bg-primary/30" />
        </div>
      </div>

      {/* ════════ 3. HOW IT WORKS ════════ */}
      <section className="pt-0 pb-20 max-[480px]:pb-12 px-4 bg-gradient-warm">
        <div className="container max-w-5xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Как это устроено
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {featureCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.12}>
                <div className="bg-card rounded-2xl p-7 shadow-md border border-primary/25 hover:shadow-lg hover:border-primary/40 transition-all duration-300 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {card.lines.map((line, i) => (
                      <span key={i}>{line}{i < card.lines.length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ 4. EVENTS ════════ */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-5xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Мероприятия
            </h2>
          </ScrollReveal>

          {/* Ближайшее */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Ближайшее
            </p>
            <ScrollReveal>
              <a
                href="/events/folk"
                className="flex flex-col sm:flex-row rounded-2xl border border-border hover:shadow-soft transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-48 sm:h-auto sm:w-40 shrink-0 bg-warm-cream flex items-center justify-center overflow-hidden">
                  <img
                    src="/bird.png"
                    alt="Тонкая Рябина"
                    className="w-full h-full object-contain"
                    style={{ transform: "rotate(-45deg) scale(1.8)" }}
                  />
                </div>
                <div className="flex flex-col justify-center gap-2 p-6">
                  <span className="inline-block self-start text-xs font-medium bg-primary/15 text-primary rounded-full px-3 py-1">
                    16 июня
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">Тонкая Рябина</h3>
                  <p className="text-sm text-muted-foreground">Хоровые посиделки · Ресторан Калинка</p>
                  <span className="text-sm font-medium text-primary mt-1">Подробнее →</span>
                </div>
              </a>
            </ScrollReveal>
          </div>

          {/* Прошедшие */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Прошедшие
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ScrollReveal>
                <a
                  href="https://gromche-choir.ru/events/mother"
                  className="flex flex-col rounded-2xl border border-border hover:shadow-soft transition-shadow duration-300 p-5 opacity-75"
                >
                  <span className="text-xs text-muted-foreground">Март 2026</span>
                  <h3 className="text-base font-semibold text-foreground mt-1">Маме снова 17</h3>
                  <p className="text-xs text-muted-foreground mt-1">Хоровая вечеринка-ностальгия</p>
                  <span className="text-sm font-medium text-primary mt-3">Смотреть →</span>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <a
                  href="https://gromche-choir.timepad.ru/event/3771882/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col rounded-2xl border border-border hover:shadow-soft transition-shadow duration-300 p-5 opacity-75"
                >
                  <span className="text-xs text-muted-foreground">Февраль 2026</span>
                  <h3 className="text-base font-semibold text-foreground mt-1">Все песни только о любви</h3>
                  <p className="text-xs text-muted-foreground mt-1">Иммерсивный вечер с вашими историями</p>
                  <span className="text-sm font-medium text-primary mt-3">Смотреть →</span>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <a
                  href="https://gromche-choir.timepad.ru/event/3709119/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col rounded-2xl border border-border hover:shadow-soft transition-shadow duration-300 p-5 opacity-75"
                >
                  <span className="text-xs text-muted-foreground">Декабрь 2025</span>
                  <h3 className="text-base font-semibold text-foreground mt-1">Ты можешь громче!</h3>
                  <p className="text-xs text-muted-foreground mt-1">Хоровой девичник</p>
                  <span className="text-sm font-medium text-primary mt-3">Смотреть →</span>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ 5. VIDEO BLOCK (placeholder) ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="aspect-[9/16] rounded-2xl border border-border shadow-warm overflow-hidden">
                <video
                  ref={videoMarchRef}
                  src="/video-march.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="aspect-[9/16] rounded-2xl border border-border shadow-warm overflow-hidden">
                <video
                  ref={videoDecemberRef}
                  src="/video-december.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
              </div>
            </ScrollReveal>
          </div>
          <p className="text-center text-foreground/60 text-sm">
            Как это звучит и выглядит. Отрывки с наших вечеринок.
          </p>
        </div>
      </section>

      {/* ════════ 5. TESTIMONIALS ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-5xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Что говорят гости
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((text, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-warm hover:shadow-soft transition-shadow duration-300 h-full">
                  <p className="text-foreground/80 leading-relaxed text-[15px] italic">
                    «{text}»
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-foreground/70 text-lg max-[480px]:text-base">
              И таких отзывов — десятки. Приходите — и добавите свой.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ 6. AUDIENCE ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-3xl mx-auto space-y-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Кому это подходит
            </h2>
          </ScrollReveal>

          <div className="space-y-5">
            {audienceItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-center gap-5 bg-card rounded-xl p-5 border border-primary/20 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/80 text-lg max-[480px]:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ 7. SOCIALS ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Будьте в курсе
            </h2>
            <p className="text-foreground/70 leading-relaxed mt-4 max-[480px]:text-sm">
              Следующая вечеринка анонсируется за 2–3 недели.
              <br />
              Подпишитесь, чтобы не пропустить:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border shadow-warm hover:shadow-soft hover:bg-primary/5 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <div className="text-left">
                  <p className="font-semibold text-foreground">@gromche.choir</p>
                  <p className="text-xs text-foreground/50">Короткие видео, эмоции</p>
                </div>
              </a>

              <a
                href={TELEGRAM_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border shadow-warm hover:shadow-soft hover:bg-primary/5 transition-all duration-300"
              >
                <Send className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Канал «Громче»</p>
                  <p className="text-xs text-foreground/50">Анонсы, билеты, бэкстейдж</p>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ 8. FINAL CTA ════════ */}
      <section className="py-24 max-[480px]:py-14 px-4">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Вы готовы звучать громче?
            </h2>
            <p className="text-foreground/70 leading-relaxed mt-4 max-[480px]:text-sm">
              Приходите один раз — и вы поймёте, почему люди возвращаются снова и снова.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Button
              variant="hero"
              size="lg"
              className="text-base px-10 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href={TELEGRAM_CHANNEL} target="_blank" rel="noopener noreferrer">
                Хочу в хор!
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsLanding;
