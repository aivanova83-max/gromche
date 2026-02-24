const WIDGET_SRCDOC = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>body { margin: 0; padding: 0; background: transparent; }</style>
  </head>
  <body>
    <div id="SiteWidgetMoyklass131435"></div>
    <script src="https://app.moyklass.com/api/site/widget/?id=01hZGtASapf5mlYpucT2gi8kkUURZAUFn2or" type="text/javascript" charset="UTF-8"><\/script>
  </body>
</html>`;

export const MoyKlassIframe = () => {
  return (
    <iframe
      srcDoc={WIDGET_SRCDOC}
      style={{ width: "100%", height: 800, border: "none" }}
      title="МойКласс запись"
    />
  );
};
