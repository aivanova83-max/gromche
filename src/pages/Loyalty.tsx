import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { loyaltyWays, loyaltyRules } from "@/data/loyalty";

const Loyalty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-4 py-8 sm:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          На сайт
        </Link>

        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">
            Хор «Громче»
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-foreground mb-4">
            Твои баллы
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Поёшь, приходишь, приводишь подруг — копишь баллы. Баллами можно оплатить часть
            следующего абонемента или концерта.
          </p>
        </div>

        <h2 className="text-lg font-semibold text-foreground mb-4">
          Способы заработать баллы
        </h2>

        <div className="space-y-3 mb-10">
          {loyaltyWays.map((way) => (
            <div
              key={way.title}
              className="bg-card border border-border rounded-2xl p-4 shadow-soft"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl leading-none shrink-0" aria-hidden>
                  {way.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground">{way.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{way.condition}</p>
                  <p className="text-primary font-bold text-sm sm:text-base mt-2">
                    {way.points}
                  </p>
                </div>
              </div>
              {way.note && (
                <p className="text-xs text-muted-foreground/80 mt-3 pt-3 border-t border-border leading-relaxed">
                  {way.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-warm rounded-2xl p-5 mb-6">
          <ul className="space-y-2">
            {loyaltyRules.map((rule) => (
              <li key={rule} className="flex gap-2 text-sm text-foreground">
                <span className="text-primary shrink-0">•</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Полные условия — у администратора студии.
        </p>
        <p className="text-center text-xs text-muted-foreground/70 mt-2">
          Старт программы лояльности — 16.09.2026
        </p>
      </div>
    </div>
  );
};

export default Loyalty;
