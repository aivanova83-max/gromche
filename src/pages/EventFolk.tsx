import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const TICKET_URL = "https://events.nethouse.ru/buy_tickets/164486";
const MAP_URL = "https://yandex.ru/maps/-/CPsxBU1L";

const features = [
  { emoji: "🕯", title: "Живой баян, не фонограмма" },
  { emoji: "🫖", title: "Самовар и накрытый стол" },
  { emoji: "🎶", title: "Поём все вместе — слова на экране" },
  { emoji: "🎙️", title: "Уметь петь не обязательно — хор подхватит" },
  { emoji: "🌿", title: "Атмосфера настоящих посиделок — не концерт, не урок" },
];

const EventFolk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src="/folk-hero.png"
          alt="Хоровые посиделки — Тонкая рябина"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto space-y-6">
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white/70 font-medium">
            Хоровые посиделки
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
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

      {/* ════════ О ЧЁМ ЭТОТ ВЕЧЕР ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-warm-bg">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
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

      {/* ════════ DIVIDER ════════ */}
      <div className="flex items-center justify-center py-5">
        <div className="flex items-center gap-4">
          <span className="block w-16 h-px bg-olive/30" />
          <span className="text-olive/60 text-lg">❧</span>
          <span className="block w-16 h-px bg-olive/30" />
        </div>
      </div>

      {/* ════════ КАК ЭТО БУДЕТ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Как это будет
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-primary/8 rounded-2xl p-6 border border-primary/15 hover:bg-primary/12 transition-colors duration-300 h-full">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{f.emoji}</span>
                  <p className="text-foreground/85 leading-relaxed font-medium">
                    {f.title}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center pt-4">
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
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
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
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

      {/* ════════ TODO: ОТЗЫВЫ ════════ */}
      <section className="py-12 px-4 bg-muted/20 border-y border-dashed border-muted">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-sm font-mono">
            TODO: отзывы участниц — добавить после мероприятия
          </p>
        </div>
      </section>

      {/* ════════ МЕСТО ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4 bg-warm-bg">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
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
        </div>
      </section>

      {/* ════════ TODO: ФОТОГРАФИИ ════════ */}
      <section className="py-12 px-4 bg-muted/20 border-y border-dashed border-muted">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-sm font-mono">
            TODO: фотографии ресторана / вечера — добавить после мероприятия
          </p>
        </div>
      </section>

      {/* ════════ ДЕТАЛИ ════════ */}
      <section className="py-20 max-[480px]:py-12 px-4">
        <div className="container max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="bg-card rounded-3xl border border-border shadow-warm p-8 md:p-10 space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
                Детали
              </h2>
              <ul className="space-y-3 text-foreground/80 text-base md:text-lg">
                <li>📅 16 июня, вторник</li>
                <li>🕖 19:00 — 22:00</li>
                <li>
                  📍 Ресторан «Калинка на Неглинке», Неглинная улица 8/10,{" "}
                  <br className="hidden sm:inline" />
                  м. Кузнецкий мост (3 мин пешком)
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive underline underline-offset-4 hover:text-olive/80 transition-colors font-medium text-center"
                >
                  Построить маршрут
                </a>
                <Button
                  variant="hero"
                  size="lg"
                  className="rounded-full px-8"
                  asChild
                >
                  <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                    🎟 Купить билет
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ ФИНАЛЬНЫЙ CTA ════════ */}
      <section className="py-24 max-[480px]:py-16 px-4 bg-gradient-hero text-center">
        <div className="container max-w-2xl mx-auto space-y-8">
          <ScrollReveal>
            <p className="text-xl md:text-2xl font-semibold text-white/95 leading-relaxed">
              Этот вечер будет особенным.
              <br />
              Разделите его с нами.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 text-base px-12 py-6 rounded-full text-lg font-semibold shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                Купить билет
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
