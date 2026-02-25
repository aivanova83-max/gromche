import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin, Car, Footprints } from "lucide-react";

export const EventVenue = () => (
  <section className="py-20 max-[480px]:py-12 px-4">
    <div className="container max-w-5xl mx-auto space-y-10">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Место проведения
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Уютный зал «Салон» на Полковой
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-7 md:p-8 border border-border/60 shadow-warm space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Адрес</p>
              <p className="text-foreground/80 leading-relaxed">
                Москва, ул. Полковая, 3 строение без номера, 4 этаж
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Car className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Парковка</p>
              <p className="text-foreground/80">
                На территории — большая парковка (100 руб/час)
              </p>
            </div>
          </div>

          {/* How to get there videos */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Car className="w-4 h-4 text-primary" />
                Как проехать
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  src="https://prostranstvo.photo/wp-content/uploads/2021/07/ByCarStr8.mp4"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Footprints className="w-4 h-4 text-primary" />
                Как пройти
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  src="https://prostranstvo.photo/wp-content/uploads/2021/07/WalkStr8.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
