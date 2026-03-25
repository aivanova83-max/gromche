const WIDGET_KEY = "01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp";

export const openMoyKlassForm = () => {
  const wdg = (window as any).WdgMoyklass;
  if (typeof wdg !== "undefined" && wdg[WIDGET_KEY]) {
    try {
      wdg[WIDGET_KEY].loadLeadFormByModal();
    } catch (error) {
      console.error("Ошибка открытия формы МойКласс", error);
      alert("Форма временно недоступна, попробуйте еще раз через секунду");
    }
  } else {
    alert("Виджет загружается, попробуйте еще раз через секунду");
  }
};
