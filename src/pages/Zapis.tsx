import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const WIDGET_KEY = "01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp";

const Zapis = () => {
  const opened = useRef(false);

  useEffect(() => {
    if (opened.current) return;
    opened.current = true;

    const tryOpen = () => {
      const w = (window as any).WdgMoyklass;
      if (w && w[WIDGET_KEY]) {
        w[WIDGET_KEY].loadLeadFormByModal();
      } else {
        setTimeout(tryOpen, 300);
      }
    };
    tryOpen();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
        Записаться на занятия<br />в хоровую студию «Громче»
      </h1>

      <p className="text-muted-foreground text-center mb-8">
        Форма записи откроется автоматически. Если она не появилась, нажмите кнопку ниже.
      </p>

      <div className="flex flex-col gap-4 items-center">
        <Button
          variant="hero"
          size="lg"
          className="rounded-full text-base px-8"
          onClick={() => {
            const w = (window as any).WdgMoyklass;
            if (w && w[WIDGET_KEY]) {
              w[WIDGET_KEY].loadLeadFormByModal();
            }
          }}
        >
          🎤 Открыть форму записи
        </Button>

        <Link to="/">
          <Button variant="outline" size="lg" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Вернуться на сайт
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Zapis;
