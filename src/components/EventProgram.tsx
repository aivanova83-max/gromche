import { ScrollReveal } from "@/components/ScrollReveal";
import { Clock } from "lucide-react";

const schedule: { time: string; label?: string; details?: string[] }[] = [
  { time: "19:00", label: "Сбор гостей, настройка на волну" },
  { time: "19:30", label: "Самая милая распевка, которую вы когда-либо слышали" },
  { time: "20:00", details: [
    "3 музыкальных сета",
    "20+ песен в хоровом исполнении",
    "1 мастер-класс по многоголосию",
    "2 перерыва для общения и игристого",
  ]},
  { time: "22:30", label: "Обнимаемся и не хотим уходить" },
];

export const EventProgram = () => (
  <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
    <div className="container max-w-3xl mx-auto space-y-10">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Программа вечера
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-card rounded-2xl p-5 md:p-10 border border-border/60 shadow-warm">
          <div className="space-y-4 md:space-y-5">
            {schedule.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="flex items-baseline gap-3 md:gap-4">
                  <span className="text-primary font-semibold whitespace-nowrap min-w-[3.5rem] md:min-w-[4.5rem] text-sm md:text-base">
                    {item.time}
                  </span>
                  {item.label && (
                    <span className="text-foreground/80 leading-relaxed text-sm md:text-base">{item.label}</span>
                  )}
                  {item.details && (
                    <ul className="space-y-1">
                      {item.details.map((d, j) => (
                        <li key={j} className="text-foreground/80 leading-relaxed text-sm md:text-base">
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
