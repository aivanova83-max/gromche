import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { EventCountdown } from "@/components/EventCountdown";
import { MoyKlassIframe } from "@/components/MoyKlassIframe";
import { PaymentWidget } from "@/components/PaymentWidget";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DoorOpen, AudioWaveform, Heart, Play, X } from "lucide-react";
import heroMobileImg from "@/assets/hero-event-mobile.jpg";

/* ─── placeholder photos (заменить реальными) ─── */
const archivePhotos = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  src: "/placeholder.svg",
  alt: `Фото с вечеринки ${i + 1}`,
}));

/* ─── Bento cards data ─── */
const bentoCards = [
  {
    icon: DoorOpen,
    title: "Никаких кастингов",
    text: "Приходите как есть — здесь важен не вокал, а желание петь и чувствовать.",
  },
  {
    icon: AudioWaveform,
    title: "Живой звук и энергия",
    text: "Электричество, которое возникает, когда десятки голосов сливаются в одну волну.",
  },
  {
    icon: Heart,
    title: "Сообщество своих",
    text: "Место, где можно быть искренней, уязвимой и настоящей — среди тех, кто понимает.",
  },
];

/* ─── Masonry heights ─── */
const masonryHeights = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
];

const Events = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ════════════════════════════════════════
          HERO — video background
         ════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Video (hidden on mobile, static image shown instead) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          src="/hero-event.mp4"
        />
        {/* Mobile fallback image */}
        <img
          src={heroMobileImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />

        {/* Overlay: gradient + blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[hsl(240_40%_15%/0.60)] to-black/80 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto space-y-8">
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white/70 font-medium">
            13 марта 2026 · Екатеринбург
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Хоровая вечеринка
            <br />
            <span className="text-primary">«Маме снова 17»</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
            Поем вместе, чувствуем магию, создаем истории
          </p>

          <EventCountdown variant="hero" />

          <Button
            variant="hero"
            size="lg"
            className="text-base px-10 py-6 rounded-full text-lg"
            asChild
          >
            <a href="#register">Купить билет</a>
          </Button>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY — Bento cards
         ════════════════════════════════════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-5xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Почему стоит прийти
              </h2>
              <p className="text-foreground/70 max-w-xl mx-auto">
                Это не концерт и не урок. Это — опыт, который меняет ощущения
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {bentoCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.12}>
                <div className="bg-card rounded-2xl p-7 shadow-warm border border-border/60 hover:shadow-soft transition-all duration-300 h-full flex flex-col gap-4">
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

      {/* ════════════════════════════════════════
          ARCHIVE — video + masonry gallery
         ════════════════════════════════════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Как это было
              </h2>
              <p className="text-foreground/70">
                Декабрьская вечеринка «Громче» — атмосфера, которую хочется
                повторить
              </p>
            </div>
          </ScrollReveal>

          {/* Video placeholder */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-warm group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-4 left-4 text-sm text-muted-foreground">
                  🎬 Видео появится здесь
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Masonry gallery */}
          <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {archivePhotos.map((photo, i) => (
              <ScrollReveal key={photo.id} delay={i * 0.06}>
                <div
                  className={`${masonryHeights[i % masonryHeights.length]} rounded-xl overflow-hidden bg-card border border-border shadow-warm cursor-pointer hover:shadow-soft transition-shadow duration-300 break-inside-avoid flex items-center justify-center`}
                  onClick={() => setLightboxIdx(i)}
                >
                  <span className="text-muted-foreground text-sm">
                    📷 Фото {i + 1}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Lightbox */}
          <Dialog
            open={lightboxIdx !== null}
            onOpenChange={() => setLightboxIdx(null)}
          >
            <DialogContent className="max-w-[90vw] max-h-[90vh] p-2 bg-black/95 border-none">
              {lightboxIdx !== null && (
                <div className="flex items-center justify-center min-h-[50vh]">
                  <span className="text-white/60 text-lg">
                    📷 Фото {lightboxIdx + 1} — полный размер
                  </span>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PAYMENT
         ════════════════════════════════════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-4xl mx-auto space-y-8">
          <ScrollReveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Оплата участия
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Оплатите участие онлайн — это быстро и безопасно
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <PaymentWidget />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-2xl mx-auto bg-card rounded-xl p-6 border border-border text-sm text-muted-foreground space-y-2">
              <p>
                🔒 Все платежи защищены шифрованием. Мы не храним данные вашей
                банковской карты.
              </p>
              <p>
                Возврат средств осуществляется при отмене участия не позднее чем
                за 3 дня до мероприятия. Для возврата напишите на{" "}
                <a
                  href="mailto:gromche-choir@yandex.ru"
                  className="text-primary hover:underline"
                >
                  gromche-choir@yandex.ru
                </a>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          REGISTRATION — MoyKlass widget
         ════════════════════════════════════════ */}
      <section
        id="register"
        className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm"
      >
        <div className="container max-w-4xl mx-auto space-y-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Купить билет
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-warm">
              <MoyKlassIframe />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
