import { ScrollReveal } from "@/components/ScrollReveal";
import { Clock } from "lucide-react";

const schedule = [
  { time: "19:00", label: "Сбор гостей, welcome-drink (игристое!) и настройка на волну" },
  { time: "19:30", label: "Самая милая распевка, которую вы когда-либо слышали" },
  { time: "20:00", label: "Первый сет" },
  { time: "21:00", label: "Перерыв: общаемся, делимся историями и пьём игристое" },
  { time: "21:10", label: "Мастер-класс по многоголосию от профессионального хормейстера" },
  { time: "21:30", label: "Второй сет" },
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
        <div className="bg-card rounded-2xl p-7 md:p-10 border border-border/60 shadow-warm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Расписание</h3>
          </div>
          <div className="space-y-5">
            {schedule.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="flex items-baseline gap-4">
                  <span className="text-primary font-semibold whitespace-nowrap min-w-[4.5rem]">
                    {item.time}
                  </span>
                  <span className="text-foreground/80 leading-relaxed">{item.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
