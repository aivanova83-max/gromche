import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useYandexMetrika() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.ym === "function") {
      window.ym(109163310, "hit", window.location.href);
    }
  }, [location.pathname]);
}
