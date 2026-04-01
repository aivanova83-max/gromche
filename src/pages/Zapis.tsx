import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const WIDGET_ID = "SiteWidgetMoyklass131435";
const SCRIPT_URL =
  "https://app.moyklass.com/api/site/widget/?id=01hZGtASapf5mlYpucT2gi8kkUURZAUFn2or";

const Zapis = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    script.type = "text/javascript";
    script.charset = "utf-8";
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
        Записаться на занятия в хоровую студию «Громче»
      </h1>

      <div id={WIDGET_ID} className="w-full max-w-2xl min-h-[600px] mb-10" />

      <Link to="/">
        <Button variant="outline" size="lg" className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Вернуться на сайт
        </Button>
      </Link>
    </div>
  );
};

export default Zapis;
