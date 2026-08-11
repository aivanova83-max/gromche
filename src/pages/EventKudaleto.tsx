import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaButton } from "@/components/CtaButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { TICKET_URL, MAP_URL, features, kudaletoTestimonials, terracePhotos } from "@/data/eventKudaleto";

const EventKudaleto = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    if (!testimonialApi) return;
    setTestimonialIdx(testimonialApi.selectedScrollSnap());
    testimonialApi.on("select", () => setTestimonialIdx(testimonialApi.selectedScrollSnap()));
  }, [testimonialApi]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-[500px] md:min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/summer-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-foreground/50" />

        <div className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto space-y-6">
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white/70 font-medium">
            Хоровое застолье
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight font-serif">
            Куда уходит лето
          </h1>

          <p className="text-lg md:text-xl text-white/85 font-medium">
            Песни из фильмов, которые навсегда с нами
          </p>

          <p className="text-sm md:text-base text-white/65 tracking-wide">
            23 августа · 12:00–14:30
            <br />
            Ресторан «Встреча друзей», ул. Косыгина 17к2
          </p>

          <CtaButton size="lg" className="text-base px-10 py-6 text-lg mt-2" asChild>
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
              Купить билет
            </a>
          </CtaButton>
        </div>
      </section>

      {/* ════════ О ЧЁМ ЭТОТ ВЕЧЕР ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-background">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
                О чём этот вечер
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-[480px]:text-base">
                Лето уже сидит на чемоданах, а нам совсем не хочется его
                отпускать. Поэтому в этот раз мы придумали не просто
                вечеринку, а застолье на веранде ресторана в парке, под
                открытым небом, с песнями и хорошей компанией.
              </p>
              <p className="text-foreground/70 leading-relaxed max-[480px]:text-sm">
                Будем петь то, что помним с детства и любим до сих пор —
                музыку из фильмов, в основном советских. «Служебный роман»,
                «Гардемарины», «Иван Васильевич» — эти мелодии
                живут в нас всех, даже если мы давно не пересматривали кино
                целиком.
              </p>
              <p className="text-foreground/70 leading-relaxed max-[480px]:text-sm">
                Формат простой и тёплый: садимся за общий стол, поём все
                вместе под живую музыку. Между песнями — вкусная еда, тосты,
                разговоры, смех. Как будто собрались большой компанией на
                даче в последний тёплый вечер лета.
              </p>
              <p className="text-foreground/80 leading-relaxed font-medium max-[480px]:text-sm">
                Приходите, даже если думаете, что «не умеете петь». У нас не
                принято оценивать. У нас принято подпевать.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ КАК ЭТО БУДЕТ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-2xl mx-auto space-y-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center font-serif text-foreground">
              Как это будет
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <ul>
              {features.map((item, i) => (
                <li key={item}>
                  <div className="flex items-center gap-4 py-5">
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 w-2 h-2 rounded-full bg-primary"
                    />
                    <span className="text-base md:text-lg text-foreground/85 leading-relaxed">
                      {item}
                    </span>
                  </div>
                  {i < features.length - 1 && <div className="h-px bg-border" />}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center pt-2">
              <CtaButton size="lg" className="text-base px-10 py-6 text-lg" asChild>
                <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                  Купить билет
                </a>
              </CtaButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ЧТО ГОВОРЯТ ГОСТИ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-5xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center font-serif">
              Что говорят гости
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <Carousel setApi={setTestimonialApi} opts={{ align: "start", loop: true }} className="mx-auto max-w-4xl">
              <CarouselContent>
                {kudaletoTestimonials.map((text, i) => (
                  <CarouselItem key={i} className="md:basis-1/2">
                    <div className="bg-card rounded-2xl p-6 border border-border shadow-warm hover:shadow-soft transition-shadow duration-300 h-full">
                      <Quote className="w-5 h-5 text-primary/40 mb-3 shrink-0" />
                      <p className="text-foreground/80 leading-relaxed text-[15px] italic">
                        «{text}»
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
                {kudaletoTestimonials.map((_, i) => (
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
        </div>
      </section>

      {/* ════════ МЕСТО ════════ */}
      <section className="pt-6 pb-20 max-[480px]:py-12 px-4 bg-background">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center font-serif">
                Место
              </h2>
              <p className="text-xl font-semibold text-foreground text-center">
                Ресторан «Встреча друзей»
              </p>
              <p className="text-foreground/75 leading-relaxed text-center max-[480px]:text-sm">
                Посреди парка на Воробьёвых горах, рядом с легендарным
                Дворцом Пионеров. Веранда ресторана утопает в зелени, а шум
                мегаполиса остаётся где-то далеко. Можно слышать шелест
                деревьев и чувствовать, что вы одновременно и в Москве, и
                будто на даче у хороших друзей.
              </p>
              <p className="text-foreground/70 leading-relaxed text-center max-[480px]:text-sm">
                На случай прохладной погоды есть пледы. Если пойдёт лёгкий
                дождь — укроемся под навесом. При проливном дожде разместимся
                внутри ресторана.
              </p>
              <p className="text-center text-foreground/80 font-medium">
                📍 Москва, ул. Косыгина 17к2 · м. Воробьёвы горы
              </p>
              <div className="text-center">
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors font-medium"
                >
                  Построить маршрут
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {/* Мобильные: горизонтальный свайп */}
            <div className="flex md:hidden gap-3 mt-8 -mx-4 px-4 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {terracePhotos.map((photo, i) => (
                <div
                  key={photo.src}
                  className="flex-shrink-0 w-[65vw] snap-start rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-warm cursor-pointer"
                  onClick={() => setLightboxIdx(i)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full h-full object-cover ${photo.thumbnailPosition ?? ""}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Десктоп: сетка с лайтбоксом */}
            <div className="md:grid grid-cols-3 gap-3 mt-8 max-md:hidden">
              {terracePhotos.map((photo, i) => (
                <div
                  key={photo.src}
                  className="rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-warm cursor-pointer hover:shadow-soft hover:scale-[1.02] transition-all duration-300"
                  onClick={() => setLightboxIdx(i)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full h-full object-cover ${photo.thumbnailPosition ?? ""}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <Dialog open={lightboxIdx !== null} onOpenChange={() => setLightboxIdx(null)}>
            <DialogContent className="max-w-[90vw] max-h-[90vh] p-2 bg-black/95 border-none">
              {lightboxIdx !== null && (
                <div className="relative flex items-center justify-center min-h-[50vh]">
                  <button
                    onClick={() => setLightboxIdx((lightboxIdx - 1 + terracePhotos.length) % terracePhotos.length)}
                    className="absolute left-2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors text-white text-xl"
                    aria-label="Предыдущее фото"
                  >
                    ‹
                  </button>

                  <img
                    src={terracePhotos[lightboxIdx].src}
                    alt={terracePhotos[lightboxIdx].alt}
                    className="max-w-full max-h-[85vh] object-contain rounded"
                  />

                  <button
                    onClick={() => setLightboxIdx((lightboxIdx + 1) % terracePhotos.length)}
                    className="absolute right-2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors text-white text-xl"
                    aria-label="Следующее фото"
                  >
                    ›
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {terracePhotos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setLightboxIdx(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === lightboxIdx ? "bg-white" : "bg-white/40"}`}
                        aria-label={`Фото ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* ════════ ДЕТАЛИ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-3xl mx-auto space-y-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center font-serif">
              Детали
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="rounded-xl overflow-hidden shadow-warm border border-border">
              <div className="grid grid-cols-2 border-b border-border">
                <div className="bg-card p-5 md:p-6 border-r border-border">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1 text-accent">
                    Дата
                  </p>
                  <p className="text-foreground text-[14px] md:text-lg">23 августа, воскресенье</p>
                </div>
                <div className="bg-card p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1 text-accent">
                    Время
                  </p>
                  <p className="text-foreground text-[14px] md:text-lg">12:00 — 14:30</p>
                </div>
              </div>

              <div className="bg-card p-5 md:p-6 border-b border-border">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1 text-accent">
                  Место
                </p>
                <p className="text-foreground text-[14px] md:text-lg leading-snug mb-2">
                  Ресторан «Встреча друзей», Москва, ул. Косыгина 17к2 · м. Воробьёвы горы
                </p>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-4 hover:opacity-70 transition-opacity text-accent"
                >
                  Построить маршрут
                </a>
              </div>

              <div className="bg-card p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-accent">
                  Стоимость
                </p>
                <p className="text-foreground text-[14px] md:text-lg leading-snug">
                  до 18 августа включительно — 5 500 руб.
                </p>
                <p className="text-foreground text-[14px] md:text-lg leading-snug">
                  с 19 августа — 6 500 руб.
                </p>
                <p className="text-foreground/60 text-[13px] md:text-sm mt-2">
                  Еда и безалкогольные напитки входят в стоимость
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <CtaButton size="lg" className="text-base px-10 py-6 text-lg" asChild>
                <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                  Купить билет
                </a>
              </CtaButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ФИНАЛЬНЫЙ CTA ════════ */}
      <section className="relative flex items-center justify-center overflow-hidden pb-24" style={{ height: "420px" }}>
        <img
          src="/images/summer-hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "bottom center" }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center px-4 space-y-6">
          <ScrollReveal>
            <p className="text-white font-serif text-2xl leading-normal mb-5">
              Лето заканчивается.
              <br />
              Проведите его с нами.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <CtaButton size="lg" className="text-base px-10 py-6 text-lg" asChild>
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                Я иду!
              </a>
            </CtaButton>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventKudaleto;
