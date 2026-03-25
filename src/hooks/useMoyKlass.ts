import { useEffect } from "react";

const WIDGET_KEY = "01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp";
const SCRIPT_URL = `https://app.moyklass.com/api/site/widget/?id=${WIDGET_KEY}`;

export const useMoyKlass = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.querySelector(`script[src="${SCRIPT_URL}"]`)) return;

    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    script.charset = "UTF-8";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);
};

export const openMoyKlassForm = () => {
  const wdg = (window as any).WdgMoyklass;
  const KEY = "01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp";
  if (wdg && wdg[KEY]) {
    wdg[KEY].loadLeadFormByModal();
  } else {
    console.error("Виджет Мой Класс еще не загружен");
  }
};
