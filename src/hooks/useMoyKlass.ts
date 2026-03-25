const WIDGET_KEY = "01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp";
const FORM_URL = `https://app.moyklass.com/s/${WIDGET_KEY}`;

export const openMoyKlassForm = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  try {
    const wdg = (window as any).WdgMoyklass;
    if (wdg && wdg[WIDGET_KEY] && typeof wdg[WIDGET_KEY].loadLeadFormByModal === 'function') {
      wdg[WIDGET_KEY].loadLeadFormByModal();
      return;
    }
  } catch (err) {
    console.error('Ошибка вызова виджета МойКласс:', err);
  }

  // Fallback — открыть форму в новой вкладке
  window.open(FORM_URL, "_blank", "noopener,noreferrer");
};
