import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const MoyKlassWidget = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const containerId = "SiteWidgetMoyklass131435";
    const scriptUrl =
      "https://app.moyklass.com/api/site/widget/?id=01hZGtASapf5mlYpucT2gi8kkUURZAUFn2or";

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.onload = () => {
      // Give the widget time to render
      setTimeout(() => setLoading(false), 2000);
    };
    script.onerror = () => setLoading(false);

    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(script);
    }

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="relative" style={{ minHeight: 500 }}>
      {loading && (
        <div className="absolute inset-0 flex flex-col gap-4 p-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-12 w-40" />
        </div>
      )}
      <div id="SiteWidgetMoyklass131435" />
    </div>
  );
};
