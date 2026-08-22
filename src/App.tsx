import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Legal from "./pages/Legal";
import Events from "./pages/Events";
import EventsLanding from "./pages/EventsLanding";
import EventFolk from "./pages/EventFolk";
import EventKudaleto from "./pages/EventKudaleto";
import Zapis from "./pages/Zapis";
import Songs from "./pages/Songs";
import SongsRunit26 from "./pages/SongsRunit26";
import SongsEvents from "./pages/SongsEvents";
import SongsFilms26 from "./pages/SongsFilms26";
import DesignSystem from "./pages/DesignSystem";
import NotFound from "./pages/NotFound";
import { useYandexMetrika } from "@/hooks/useYandexMetrika";

const MetrikaTracker = () => { useYandexMetrika(); return null; };

const ScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, [hash]);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MetrikaTracker />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<EventsLanding />} />
          <Route path="/events/mother" element={<Events />} />
          <Route path="/events/folk" element={<EventFolk />} />
          <Route path="/events/kudaleto" element={<EventKudaleto />} />
          <Route path="/zapis" element={<Zapis />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/songs/folk" element={<Songs />} />
          <Route path="/songs/runit26" element={<SongsRunit26 />} />
          <Route path="/songs/1" element={<SongsEvents />} />
          <Route path="/songs/films26" element={<SongsFilms26 />} />
          <Route path="/design-system" element={<DesignSystem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
