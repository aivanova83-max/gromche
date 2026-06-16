import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Legal from "./pages/Legal";
import Events from "./pages/Events";
import EventsLanding from "./pages/EventsLanding";
import EventFolk from "./pages/EventFolk";
import Zapis from "./pages/Zapis";
import Songs from "./pages/Songs";
import NotFound from "./pages/NotFound";
import { useYandexMetrika } from "@/hooks/useYandexMetrika";

const MetrikaTracker = () => { useYandexMetrika(); return null; };

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MetrikaTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<EventsLanding />} />
          <Route path="/events/mother" element={<Events />} />
          <Route path="/events/folk" element={<EventFolk />} />
          <Route path="/zapis" element={<Zapis />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/songs" element={<Songs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
