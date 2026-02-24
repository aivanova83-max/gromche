import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const MoyKlassWidget = () => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) return;
    scriptLoadedRef.current = true;

    // Create the widget target div exactly as MoyKlass expects
    const widgetDiv = document.createElement("div");
    widgetDiv.id = "SiteWidgetMoyklass131435";
    containerRef.current.appendChild(widgetDiv);

    // Insert script right after the div, matching MoyKlass HTML snippet
    const script = document.createElement("script");
    script.src =
      "https://app.moyklass.com/api/site/widget/?id=01hZGtASapf5mlYpucT2gi8kkUURZAUFn2or";
    script.type = "text/javascript";
    script.setAttribute("charset", "UTF-8");
    script.onload = () => {
      setTimeout(() => setLoading(false), 3000);
    };
    script.onerror = () => setLoading(false);
    containerRef.current.appendChild(script);

    return () => {
      script.remove();
      widgetDiv.remove();
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: 500 }}>
      {loading && (
        <div className="absolute inset-0 flex flex-col gap-4 p-4 z-10">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-12 w-40" />
        </div>
      )}
    </div>
  );
};
