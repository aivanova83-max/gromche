import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { EventCountdown } from "@/components/EventCountdown";
import { MoyKlassWidget } from "@/components/MoyKlassWidget";
import { PaymentWidget } from "@/components/PaymentWidget";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Ближайшее событие ── */}
      <section className="py-16 max-[480px]:py-10 px-4 bg-gradient-warm">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              13 марта 2026
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Вечеринка Громче:
              <br />
              Маме снова 17
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Незабываемый вечер музыки, танцев и веселья — приходи и зарядись
              энергией!
            </p>
          </div>

          <Button
            variant="hero"
            size="lg"
            className="text-base px-8 py-5 rounded-full"
            asChild
          >
            <a href="#register">Записаться</a>
          </Button>

          <EventCountdown />

          <div className="max-w-xl mx-auto text-left bg-card rounded-lg p-6 shadow-warm">
            <h3 className="font-semibold text-foreground mb-3">
              Что вас ждёт:
            </h3>
            <ul className="space-y-2 text-foreground/80 list-disc list-inside">
              <li>Описание программы (скоро)</li>
              <li>Место проведения (скоро)</li>
              <li>Время начала (скоро)</li>
              <li>Специальные гости (скоро)</li>
            </ul>
          </div>

          {/* Виджет МойКласс */}
          <div className="max-w-2xl mx-auto">
            <MoyKlassWidget />
          </div>
        </div>
      </section>

      {/* ── Оплата ── */}
      <section className="py-16 max-[480px]:py-10 px-4">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Оплата участия
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Оплатите участие онлайн — это быстро и безопасно
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <PaymentWidget />
          </div>

          <div className="max-w-2xl mx-auto bg-card rounded-lg p-6 border border-border text-sm text-muted-foreground space-y-2">
            <p>
              🔒 Все платежи защищены шифрованием. Мы не храним данные вашей
              банковской карты.
            </p>
            <p>
              Возврат средств осуществляется при отмене участия не позднее чем за
              3 дня до мероприятия. Для возврата напишите на{" "}
              <a
                href="mailto:gromche-choir@yandex.ru"
                className="text-primary hover:underline"
              >
                gromche-choir@yandex.ru
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Как это было (Архив декабря) ── */}
      <section className="py-16 max-[480px]:py-10 px-4 bg-gradient-warm">
        <div className="container max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Как это было
            </h2>
            <p className="text-lg text-foreground/80">
              Декабрьская вечеринка «Громче» — атмосфера, которую хочется
              повторить
            </p>
          </div>

          {/* Видео-плейсхолдер */}
          <div className="max-w-3xl mx-auto">
            <AspectRatio ratio={16 / 9}>
              <div className="w-full h-full rounded-lg bg-card border border-border flex items-center justify-center shadow-warm">
                <span className="text-muted-foreground text-lg">
                  🎬 Видео появится здесь
                </span>
              </div>
            </AspectRatio>
          </div>

          {/* Фотогалерея-плейсхолдер */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-card border border-border flex items-center justify-center shadow-warm"
              >
                <span className="text-muted-foreground text-sm">
                  📷 Фото {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Секция регистрации ── */}
      <section id="register" className="py-16 max-[480px]:py-10 px-4">
        <div className="container max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            Занять место
          </h2>
          <div className="max-w-2xl mx-auto">
            <MoyKlassWidget />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
