import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useIsMobile } from "@/hooks/use-mobile";

const TICKET_URL = "https://events.nethouse.ru/buy_tickets/164486";
const MAP_URL = "https://yandex.ru/maps/-/CPsxBU1L";

const features = [
  "Живой баян, не фонограмма",
  "Застолье с блюдами русской кухни",
  "Поём все вместе — слова на экране",
  "Уметь петь не обязательно — хор подхватит",
  "Атмосфера настоящих посиделок — не концерт, не урок",
];

const folkTestimonials = [
  // ── левая колонка (3+2+5 = 10 строк) ──
  "Хочу сказать огромное спасибо за вчерашний радостный хор! Все эти истории о любви в самое сердце❤️ вышла наполненной и светящейся как лампочка))",
  "Вчера было так чудесно! Очень кайфовый формат, легкий, глубокий, веселый",
  "Вчера мое свидание с собой — вчера на хоровой вечеринке. Право звучать😇 без требования попадать в ноты. Просто петь, двигаться в такт и расслабляться. Много радости. Домой не ехала — летела на крыльях",
  // ── правая колонка (3+1+6 = 10 строк) ──
  "Это было так душевно! Наполнилась энергией, энергией любви и радости! Спа-си-бо всем, кто был! Точно хочется еще, и еще, и еще!",
  "Спасибо за шикарную атмосферу! Просто отдохнула душой",
  "Знаете, у меня в голове сидит фраза (не помню, откуда она), что в жизни нужно оставлять место для чуда. Вот вчера — я побывала в пространстве для чуда! Это что-то необыкновенное! Пусть места для чуда в жизни каждой из нас будет как можно больше!",
];

const kalinkaPhotos = [
  { src: "/kalinka1.jpg", alt: "Ресторан Калинка на Неглинке — интерьер" },
  { src: "/kalinka2.jpg", alt: "Ресторан Калинка на Неглинке — зал" },
  { src: "/kalinka3.jpg", alt: "Ресторан Калинка на Неглинке — атмосфера" },
];

const EventFolk = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const visibleTestimonials = isMobile
    ? [folkTestimonials[3], folkTestimonials[4], folkTestimonials[5]]
    : folkTestimonials;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-[500px] md:min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src="/folk-hero.png"
          alt="Хоровые посиделки — Тонкая рябина"
          className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto space-y-6">
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white/70 font-medium">
            Хоровые посиделки
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
            Тонкая рябина
          </h1>

          <p className="text-lg md:text-xl text-white/85 font-medium">
            Песни, которые помнит душа
          </p>

          <p className="text-sm md:text-base text-white/65 tracking-wide">
            16 июня · 19:00–22:00
            <br />
            Ресторан «Калинка на Неглинке», Неглинная ул., 8/10
          </p>

          <Button
            variant="hero"
            size="lg"
            className="text-base px-10 py-6 rounded-full text-lg mt-2"
            asChild
          >
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
              Купить билет
            </a>
          </Button>
        </div>
      </section>

      {/* ════════ ПТИЦА-РАЗДЕЛИТЕЛЬ (только мобайл) ════════ */}
      <div className="md:hidden relative h-0 z-10" aria-hidden="true">
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translate(-50%, -50%) rotate(-45deg)",
            width: "120px",
            height: "80px",
            backgroundImage: "url('/bird.png')",
            backgroundSize: "190px 127px",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* ════════ О ЧЁМ ЭТОТ ВЕЧЕР ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-warm-bg">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "Georgia, serif" }}>
                О чём этот вечер
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-[480px]:text-base">
                Мы не слушаем народные песни в обычной жизни. Но когда поёшь их
                сам — что-то происходит на самом глубоком уровне души.
                <br />
                Что-то очень древнее и очень живое.
              </p>
              <p className="text-foreground/70 leading-relaxed max-[480px]:text-sm">
                Этот вечер — застолье с блюдами русской кухни, с самоваром,
                баяном и песнями, которые люди пели столетиями до нас.
                Приходите петь вместе.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ VIGNETTE DIVIDER ════════ */}
      <div className="flex justify-center pt-6 pb-2" aria-hidden="true">
        <div style={{ width: "180px", height: "90px", backgroundImage: "url('/vignette.png')", backgroundSize: "795px 529px", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }} />
      </div>

      {/* ════════ КАК ЭТО БУДЕТ ════════ */}
      <section className="pt-6 pb-20 max-[480px]:py-12 px-4 bg-[#faf6f0]">
        <div className="container max-w-2xl mx-auto space-y-10">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-center"
              style={{ fontFamily: "Georgia, serif", color: "#3a2a1a" }}
            >
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
                      className="flex-shrink-0 inline-block"
                      style={{
                        width: "44px",
                        height: "44px",
                        backgroundImage: "url('/flower.png')",
                        backgroundSize: "154px 103px",
                        backgroundPosition: "center 45%",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <span className="text-base md:text-lg text-[#3a2a1a]/85 leading-relaxed">
                      {item}
                    </span>
                  </div>
                  {i < features.length - 1 && (
                    <div className="h-px bg-[#e8ddd0]" />
                  )}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center pt-2">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-10 py-6 rounded-full text-lg"
                asChild
              >
                <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                  Купить билет
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ИСТОРИЯ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex justify-center mb-2" aria-hidden="true">
                <div style={{ width: "128px", height: "128px", backgroundImage: "url('/flower.png')", backgroundSize: "380px 254px", backgroundPosition: "center 45%", backgroundRepeat: "no-repeat" }} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center" style={{ fontFamily: "Georgia, serif" }}>
                История
              </h2>
              <p className="text-foreground/80 leading-relaxed max-[480px]:text-sm">
                Мы — Аня и Лена, создательницы хора «Громче». Однажды мы
                заперлись от детей и мужей на балконе и начали петь. «Тонкая
                рябина», «Ой ты, степь широкая», «То не вечер»...
              </p>
              <p className="text-foreground/80 leading-relaxed max-[480px]:text-sm">
                Мы сидели напротив друг друга, глаза в глаза — и что-то
                происходило на самом тонком, глубинном уровне. Не передать
                словами.
              </p>
              <p className="text-foreground/80 leading-relaxed max-[480px]:text-sm">
                Когда запели «Тонкую рябину» — меня пронзило: именно эту песню
                пела моя бабушка, которой уже нет. Я как будто снова с ней
                поговорила и ощутила её тепло и ласку.
              </p>
              <p className="text-foreground/80 leading-relaxed font-medium max-[480px]:text-sm">
                Тогда мы поняли: мы должны провести этот вечер. Просто обязаны.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ДЛЯ КОГО ════════ */}
      <section className="pt-6 pb-20 max-[480px]:py-12 px-4">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <div className="flex justify-center" aria-hidden="true">
                <div style={{ width: "120px", height: "80px", backgroundImage: "url('/bird.png')", backgroundSize: "190px 127px", backgroundPosition: "center center", backgroundRepeat: "no-repeat", transform: "rotate(-45deg)" }} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "Georgia, serif" }}>
                Для кого
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-[480px]:text-base">
                Вам не нужно уметь петь. Вам не нужно знать слова — они будут
                на экране. Нужно только захотеть прийти.
              </p>
              <p className="text-foreground/70 leading-relaxed max-[480px]:text-sm">
                Этот вечер для тех, кто давно не пел. Для тех, кто скучает по
                чему-то настоящему. Для тех, кто давно не делал ничего просто
                для души.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-10 py-6 rounded-full text-lg"
                asChild
              >
                <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                  Купить билет
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ОТЗЫВЫ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
        <div className="container max-w-4xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-2" aria-hidden="true">
                <div style={{ width: "180px", height: "90px", backgroundImage: "url('/vignette.png')", backgroundSize: "795px 529px", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "Georgia, serif" }}>
                Отзывы участниц
              </h2>
              <p className="text-foreground/70">С предыдущих посиделок</p>
            </div>
          </ScrollReveal>

          <div className="columns-1 md:columns-2 gap-5">
            {visibleTestimonials.map((text, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="break-inside-avoid mb-5">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-warm hover:shadow-soft transition-shadow duration-300">
                  <span
                    aria-hidden="true"
                    className="block mb-3"
                    style={{
                      width: "56px",
                      height: "56px",
                      backgroundImage: "url('/flower.png')",
                      backgroundSize: "216px 144px",
                      backgroundPosition: "57% 45%",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <p className="text-foreground/80 leading-relaxed text-[15px]">
                    {text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ МЕСТО ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-warm-bg">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-5">
              <div className="flex justify-center mb-2" aria-hidden="true">
                <div style={{ width: "120px", height: "80px", backgroundImage: "url('/bird.png')", backgroundSize: "190px 127px", backgroundPosition: "center center", backgroundRepeat: "no-repeat", transform: "rotate(-45deg)" }} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center" style={{ fontFamily: "Georgia, serif" }}>
                Место
              </h2>
              <p className="text-xl font-semibold text-foreground text-center">
                Ресторан «Калинка на Неглинке»
              </p>
              <p className="text-foreground/75 leading-relaxed text-center max-[480px]:text-sm">
                Интерьер стилизован под купеческий дом — резные деревянные
                элементы, красные кони на стенах и самовары на столах. Место,
                где стены сами просят петь.
              </p>
              <p className="text-center text-foreground/80 font-medium">
                📍 Неглинная, 8/10 · м. Кузнецкий мост, 3 минуты пешком
              </p>
              <div className="text-center">
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive underline underline-offset-4 hover:text-olive/80 transition-colors font-medium"
                >
                  Построить маршрут
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {/* Мобильные: горизонтальный свайп */}
            <div className="flex md:hidden gap-3 mt-8 -mx-4 px-4 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {kalinkaPhotos.map((photo, i) => (
                <div
                  key={photo.src}
                  className="flex-shrink-0 w-[65vw] snap-start rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-warm cursor-pointer"
                  onClick={() => setLightboxIdx(i)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Десктоп: сетка с лайтбоксом */}
            <div className="md:grid grid-cols-3 gap-3 mt-8 max-md:hidden">
              {kalinkaPhotos.map((photo, i) => (
                <div
                  key={photo.src}
                  className="rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-warm cursor-pointer hover:shadow-soft hover:scale-[1.02] transition-all duration-300"
                  onClick={() => setLightboxIdx(i)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
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
                  {/* Стрелка влево */}
                  <button
                    onClick={() => setLightboxIdx((lightboxIdx - 1 + kalinkaPhotos.length) % kalinkaPhotos.length)}
                    className="absolute left-2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors text-white text-xl"
                    aria-label="Предыдущее фото"
                  >
                    ‹
                  </button>

                  <img
                    src={kalinkaPhotos[lightboxIdx].src}
                    alt={kalinkaPhotos[lightboxIdx].alt}
                    className="max-w-full max-h-[85vh] object-contain rounded"
                  />

                  {/* Стрелка вправо */}
                  <button
                    onClick={() => setLightboxIdx((lightboxIdx + 1) % kalinkaPhotos.length)}
                    className="absolute right-2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors text-white text-xl"
                    aria-label="Следующее фото"
                  >
                    ›
                  </button>

                  {/* Счётчик */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {kalinkaPhotos.map((_, i) => (
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center" style={{ fontFamily: "Georgia, serif" }}>
              Детали
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            {/* Сетка плиток */}
            <div
              className="rounded-xl overflow-hidden shadow-warm"
              style={{ border: "1px solid #e8ddd0" }}
            >
              {/* Верхний ряд: две плитки по 50% */}
              <div className="grid grid-cols-2" style={{ borderBottom: "1px solid #e8ddd0" }}>
                <div className="bg-white p-5 md:p-6" style={{ borderRight: "1px solid #e8ddd0" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#a07850" }}>
                    Дата
                  </p>
                  <p className="text-foreground text-[14px] md:text-lg">
                    16 июня, вторник
                  </p>
                </div>
                <div className="bg-white p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#a07850" }}>
                    Время
                  </p>
                  <p className="text-foreground text-[14px] md:text-lg">
                    19:00 — 22:00
                  </p>
                </div>
              </div>

              {/* Нижняя плитка: полная ширина */}
              <div className="bg-white p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#a07850" }}>
                  Место
                </p>
                <p className="text-foreground text-[14px] md:text-lg leading-snug mb-2">
                  Ресторан «Калинка на Неглинке», Неглинная 8/10 · м. Кузнецкий мост, 3 мин пешком
                </p>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
                  style={{ color: "#a07850" }}
                >
                  Построить маршрут
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#3a2a1a", borderRadius: "40px" }}
              >
                Купить билет
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ФИНАЛЬНЫЙ CTA ════════ */}
      <section className="relative flex items-center justify-center overflow-hidden pb-24" style={{ height: "420px" }}>
        <img
          src="/folk-hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "bottom center" }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(40, 25, 10, 0.7)" }}
        />
        <div className="relative z-10 text-center px-4 space-y-6">
          <ScrollReveal>
            <p
              className="text-white"
              style={{ fontFamily: "Georgia, serif", fontSize: "24px", lineHeight: "1.5", marginBottom: "20px" }}
            >
              Этот вечер будет особенным.
              <br />
              Разделите его с нами.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Button
              variant="hero"
              size="lg"
              className="text-base px-10 py-6 rounded-full text-lg"
              asChild
            >
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                Я иду!
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventFolk;
