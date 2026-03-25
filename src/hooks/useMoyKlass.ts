const WIDGET_KEY = "01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp";

export const openMoyKlassForm = () => {
  const wdg = (window as any).WdgMoyklass;
  if (typeof wdg !== "undefined" && wdg[WIDGET_KEY]) {
    wdg[WIDGET_KEY].loadLeadFormByModal();
  } else {
    alert("Виджет загружается, попробуйте еще раз через секунду");
  }
};
