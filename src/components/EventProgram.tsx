import { ScrollReveal } from "@/components/ScrollReveal";
import { Music, Mic2, GlassWater, Heart, Clock } from "lucide-react";

const highlights = [
  { icon: Music, text: "Совместное пение под живую музыку (пианино, гитара и даже баян!)" },
  { icon: Mic2, text: "Мастер-класс по многоголосию от профессионального хормейстера" },
  { icon: GlassWater, text: "Игристое и лёгкие закуски" },
  { icon: Heart, text: "Возможность спеть вместе с самым дорогим человеком на свете — мамой" },
];

const schedule = [
  { time: "19:00", label: "Сбор гостей" },
  { time: "19:30", label: "Лёгкая распевка" },
  { time: "20:00–20:30", label: "Поём самые любимые песни наших мам" },
];

export const EventProgram = () => (
  <section className="py-20 max-[480px]:py-12 px-4 bg-gradient-warm">
    <div className="container max-w-5xl mx-auto space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            В программе вечера
          </h2>
        </div>
      </ScrollReveal>

      {/* Highlights */}
      <div className="grid sm:grid-cols-2 gap-4">
        {highlights.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border/60 shadow-warm h-full">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground/90 leading-relaxed">{item.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Schedule */}
      <ScrollReveal>
        <div className="max-w-xl mx-auto bg-card rounded-2xl p-7 md:p-8 border border-border/60 shadow-warm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Расписание</h3>
          </div>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="flex items-baseline gap-4">
                <span className="text-primary font-semibold whitespace-nowrap min-w-[5.5rem]">
                  {item.time}
                </span>
                <span className="text-foreground/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
