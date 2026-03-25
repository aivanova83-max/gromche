const WIDGET_KEY = "01K9BrWJck7O6TZEZsOjLHe61iGjhIOYkjgp";
const FORM_URL = `https://app.moyklass.com/s/${WIDGET_KEY}`;

export const openMoyKlassForm = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  window.open(FORM_URL, "_blank", "noopener,noreferrer");
};
