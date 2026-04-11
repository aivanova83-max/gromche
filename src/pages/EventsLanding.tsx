import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Piano, Guitar, Music, Users, Heart, Mic, MessageCircle, Send } from "lucide-react";

const featureCards = [
  {
    icon: Piano,
    title: "Живая музыка",
    text: <>Пианино, гитара, баян, кахон.<br />Никаких минусовок.</>,
  },
  {
    icon: Music,
    title: "Любимые песни",
    text: <>От советских хитов до рок-музыки.<br />Тексты на экране.</>,
  },
  {
    icon: Users,
    title: "Никакой сцены",
    text: "Все в одном круге. Ведущая-хормейстер просто задаёт направление.",
  },
];

const testimonials = [
  "Вчера мое свидание с собой было на хоровой вечеринке. Право звучать😇 без требования попадать в ноты. Просто петь, двигаться в такт и расслабляться. Много радости. Домой не ехала — летела на крыльях",
  "Это было так душевно! Наполнилась энергией, энергией любви и радости! Спа-си-бо всем, кто был! Точно хочется еще, и еще, и еще!",
  "Девочки, не знаю, как вам это удается, в прошлый раз вечеринка была шикарная, но в этот раз это просто огонь!🔥 Столько кайфа, радости, тепла и любви я давно не получала от мероприятий! 4 часа как на одном дыхании!❤️",
];

const audienceItems = [
  { icon: Mic, text: "Тем, кто любит петь: для себя или в компании" },
  { icon: Heart, text: "Тем, кто не поёт, но очень хочет начать" },
  { icon: MessageCircle, text: "Тем, кто хочет сбросить напряжение и хорошенечко проораться" },
];

const TELEGRAM_LINK = "https://t.me/gromche_choir/135";
const TELEGRAM_CHANNEL = "https://t.me/gromche_choir";
const INSTAGRAM_LINK = "https://www.instagram.com/gromche.choir";

const EventsLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
                <div className="bg-primary/10 rounded-2xl p-7 shadow-warm border border-primary/20 hover:shadow-soft hover:bg-primary/15 transition-all duration-300 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ 4. VIDEO BLOCK (placeholder) ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="aspect-[9/16] rounded-2xl border border-border shadow-warm overflow-hidden">
                <iframe
                  src="https://vk.com/video_ext.php?oid=-236309424&id=456239018&hd=2"
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="aspect-[9/16] rounded-2xl border border-border shadow-warm overflow-hidden">
                <iframe
                  src="https://vk.com/video_ext.php?oid=-236309424&id=456239019&hd=2"
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                  frameBorder="0"
                  allowFullScreen
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
                <div className="flex items-center gap-5 bg-primary/5 rounded-xl p-5 border border-primary/10">
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
