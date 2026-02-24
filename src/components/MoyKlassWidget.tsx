import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const MoyKlassWidget = () => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;
    if (!containerRef.current) return;

    scriptLoadedRef.current = true;

    const script = document.createElement("script");
    script.src =
      "https://app.moyklass.com/api/site/widget/?id=01hZGtASapf5mlYpucT2gi8kkUURZAUFn2or";
    script.async = true;
    script.onload = () => {
      setTimeout(() => setLoading(false), 3000);
    };
    script.onerror = () => setLoading(false);

    // The MoyKlass script looks for the container by ID in document,
    // so we append the script to body while the container div exists in DOM
    document.body.appendChild(script);

    return () => {
      script.remove();
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <div className="relative" style={{ minHeight: 500 }}>
      {loading && (
        <div className="absolute inset-0 flex flex-col gap-4 p-4 z-10">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-12 w-40" />
        </div>
      )}
      <div ref={containerRef} id="SiteWidgetMoyklass131435" />
    </div>
  );
};
