import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MoyKlassIframe } from "@/components/MoyKlassIframe";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Piano, Guitar, Music, Heart, Sparkles } from "lucide-react";
import { EventProgram } from "@/components/EventProgram";
import { EventVenue } from "@/components/EventVenue";
import { EventFAQ } from "@/components/EventFAQ";
import { GiftBlock } from "@/components/GiftBlock";

import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";
import photo7 from "@/assets/gallery/photo-7.jpg";
import photo8 from "@/assets/gallery/photo-8.jpg";
import photo9 from "@/assets/gallery/photo-9.jpg";

/* ─── gallery photos ─── */
const archivePhotos = [
{ id: 0, src: photo1, alt: "Участницы танцуют с поднятыми руками" },
{ id: 1, src: photo2, alt: "Девушки поют хором" },
{ id: 2, src: photo3, alt: "Участницы смеются и аплодируют" },
{ id: 3, src: photo4, alt: "Ведущая за пианино" },
{ id: 4, src: photo5, alt: "Участницы поют с поднятыми руками" },
{ id: 5, src: photo6, alt: "Подруги обнимаются и поют" },
{ id: 6, src: photo7, alt: "Девушка поёт в микрофон" },
{ id: 7, src: photo8, alt: "Зал поёт вместе" },
{ id: 8, src: photo9, alt: "Подруги улыбаются на вечеринке" }];


/* Grid cell spans for a balanced 3-col masonry look */
const gridSpans = [
"md:row-span-2", // tall
"md:row-span-1", // short
"md:row-span-1", // short
"md:row-span-1", // short
"md:row-span-2", // tall
"md:row-span-1", // short
"md:row-span-1", // short
"md:row-span-1", // short
"md:row-span-1" // short
];

/* ─── "Что нас ждёт" cards ─── */
const featureCards = [
{
  icon: Piano,
  title: "Живая музыка",
  text: "Чуткое пианино, звонкая гитара и драйвовый баян"
},
{
  icon: Music,
  title: "Любимые песни",
  text: "Главные хиты советской эстрады и кинофильмов"
},
{
  icon: Heart,
  title: "Пение хором",
  text: "Удовольствие и радость от совместного звучания"
}];


const Events = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-event.mp4" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[hsl(240_40%_15%/0.40)] to-black/60 md:from-black/70 md:via-[hsl(240_40%_15%/0.60)] md:to-black/80 backdrop-blur-sm" />

        <div className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto space-y-8">
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white/70 font-medium">
            13 марта 2026 · Москва
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Маме снова 17
            <br />
            <span className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              Хоровая вечеринка-ностальгия
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed max-[480px]:text-sm">
            Поём хиты юности наших мам под живой аккомпанемент пианино, гитары и
            драйвового баяна.
            <br />
            Вечер, где стираются границы между поколениями.
          </p>

          <Button
            variant="hero"
            size="lg"
            className="text-base px-10 py-6 rounded-full text-lg"
            asChild>

            <a href="#register">Купить билет</a>
          </Button>
        </div>
      </section>

      {/* ════════ MARQUEE ════════ */}
      <div className="border-y border-white/10 py-3 overflow-hidden" style={{ background: 'hsl(240, 18%, 18%)' }}>
        <div className="marquee-track whitespace-nowrap font-medium text-lg md:text-xl italic" style={{ color: 'hsl(20, 80%, 70%)' }}>
          <span className="inline-block px-8">«Дети, вашей маме снова семнадцать, вы просто поверьте, а поймете потом»</span>
          <span className="inline-block px-8">✦</span>
          <span className="inline-block px-8">«Дети, вашей маме снова семнадцать, вы просто поверьте, а поймете потом»</span>
          <span className="inline-block px-8">✦</span>
          <span className="inline-block px-8">«Дети, вашей маме снова семнадцать, вы просто поверьте, а поймете потом»</span>
          <span className="inline-block px-8">✦</span>
          <span className="inline-block px-8">«Дети, вашей маме снова семнадцать, вы просто поверьте, а поймете потом»</span>
          <span className="inline-block px-8">✦</span>
        </div>
      </div>

      {/* ════════ CONCEPT ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Что такое хоровая вечеринка?
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-[480px]:text-base">
                Это не концерт. Это время, когда можно спеть во весь голос те
                самые песни, под которые наши мамы влюблялись и мечтали.
              </p>
              <p className="text-foreground/70 leading-relaxed max-[480px]:text-sm">
                Приходи со своей мамой, приходи одна или подари билет родителям —
                это лучший способ сказать «я тебя люблю» без слов.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ЧТО НАС ЖДЁТ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-5xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Что нас ждёт
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {featureCards.map((card, i) =>
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
            )}
          </div>
        </div>
      </section>

      {/* ════════ ARCHIVE — video + masonry gallery ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Как это было
              </h2>
              <p className="text-foreground/70">Февральская вечеринка "Все песни только о любви" — атмосфера, которую хочется повторить


              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <iframe
                className="w-full aspect-video rounded-2xl border border-border shadow-warm"
                src="https://kinescope.io/embed/duhrYvznHTt6Xvvfr3pJ92"
                title="Как это было — видео с вечеринки"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen />

            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
            {archivePhotos.map((photo, i) =>
            <ScrollReveal key={photo.id} delay={i * 0.06}>
                <div
                className={`${gridSpans[i]} h-full rounded-xl overflow-hidden bg-card border border-border shadow-warm cursor-pointer hover:shadow-soft transition-shadow duration-300`}
                onClick={() => setLightboxIdx(i)}>

                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </ScrollReveal>
            )}
          </div>

          <Dialog
            open={lightboxIdx !== null}
            onOpenChange={() => setLightboxIdx(null)}>

            <DialogContent className="max-w-[90vw] max-h-[90vh] p-2 bg-black/95 border-none">
              {lightboxIdx !== null &&
              <div className="flex items-center justify-center min-h-[50vh]">
                  <img src={archivePhotos[lightboxIdx].src} alt={archivePhotos[lightboxIdx].alt} className="max-w-full max-h-[85vh] object-contain rounded" />
                </div>
              }
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* ════════ VENUE + PROGRAM ════════ */}
      <EventVenue />
      <EventProgram />

      {/* ════════ FAQ ════════ */}
      <EventFAQ />

      {/* ════════ REGISTRATION + GIFT ════════ */}
      <section
        id="register"
        className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">

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

          <ScrollReveal>
            <GiftBlock />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>);

};

export default Events;