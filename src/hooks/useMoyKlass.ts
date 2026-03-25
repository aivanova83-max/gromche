const WIDGET_KEY = "01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp";
const FORM_URL = `https://app.moyklass.com/s/${WIDGET_KEY}`;

export const openMoyKlassForm = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const wdg = (window as any).WdgMoyklass;
  if (wdg && wdg[WIDGET_KEY] && typeof wdg[WIDGET_KEY].loadLeadFormByModal === "function") {
    try {
      wdg[WIDGET_KEY].loadLeadFormByModal();
    } catch (error) {
      console.error("Ошибка открытия формы МойКласс", error);
      window.open(FORM_URL, "_blank");
    }
  } else {
    // Fallback: open in new tab if widget not ready
    window.open(FORM_URL, "_blank");
  }
};
