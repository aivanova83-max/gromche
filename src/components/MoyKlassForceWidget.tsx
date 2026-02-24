import { useState } from "react";
import { Button } from "@/components/ui/button";

const WIDGET_HTML = `<div id="SiteWidgetMoyklass131435"></div><script src="https://app.moyklass.com/api/site/widget/?id=01hZGtASapf5mlYpucT2gi8kkUURZAUFn2or" type="text/javascript" charset="UTF-8"><\/script>`;

export const MoyKlassForceWidget = () => {
  const [widgetKey, setWidgetKey] = useState(0);

  return (
    <div className="space-y-4">
      <div
        key={widgetKey}
        style={{ minHeight: 700 }}
        dangerouslySetInnerHTML={{ __html: WIDGET_HTML }}
      />
      <div className="text-center">
        <Button
          variant="outline"
          onClick={() => setWidgetKey((k) => k + 1)}
        >
          Обновить виджет
        </Button>
      </div>
    </div>
  );
};
