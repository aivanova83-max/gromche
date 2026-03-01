import { useIsMobile } from "@/hooks/use-mobile";

const WIDGET_SRCDOC = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <style>
      html, body { margin: 0; padding: 0; background: transparent; overflow-x: hidden; width: 100%; }
      #nh-widget-iframe { width: 100%; max-width: 100%; overflow-x: hidden; }
      #nh-widget-iframe iframe { max-width: 100% !important; }
    </style>
  </head>
  <body>
    <div id="nh-widget-iframe"></div>
    <script src="https://events.nethouse.ru/assets/js/nh-wiget-iframe.js"><\/script>
    <script>
      window.nhWigetInit({
        container: '#nh-widget-iframe',
        src: 'https://events.nethouse.ru/buy_tickets/157277/iframe/',
        height: 650,
        width: '100%',
        border: 'none'
      });
    <\/script>
  </body>
</html>`;

export const MoyKlassIframe = () => {
  const isMobile = useIsMobile();

  return (
    <iframe
      srcDoc={WIDGET_SRCDOC}
      style={{ width: "100%", height: isMobile ? 650 : 700, border: "none" }}
      title="Покупка билетов"
    />
  );
};
