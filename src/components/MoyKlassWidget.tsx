import { useEffect } from "react";

const WIDGET_ID = "SiteWidgetMoyklass133029";
const SCRIPT_URL =
  "https://app.moyklass.com/api/site/widget/?id=01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp";

export const MoyKlassWidget = () => {
  useEffect(() => {
    console.log("[MoyKlassWidget] Компонент смонтирован, добавляю скрипт…");

    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    script.type = "text/javascript";
    script.charset = "utf-8";
    document.body.appendChild(script);

    console.log("[MoyKlassWidget] Скрипт добавлен в document.body:", SCRIPT_URL);

    return () => {
      console.log("[MoyKlassWidget] Размонтирование, удаляю скрипт.");
      script.remove();
    };
  }, []);

  return <div id={WIDGET_ID} className="min-h-[600px] w-full" />;
};
