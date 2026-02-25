import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date("2026-03-13T19:00:00+05:00");

export const EventCountdown = ({ variant }: { variant?: "hero" | "default" }) => {
  const isHero = variant === "hero";
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());

  function calcTimeLeft(): TimeLeft {
    const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks: { value: number; label: string }[] = [
    { value: timeLeft.days, label: "дн" },
    { value: timeLeft.hours, label: "ч" },
    { value: timeLeft.minutes, label: "мин" },
    { value: timeLeft.seconds, label: "сек" },
  ];

  return (
    <div className="flex justify-center gap-3 md:gap-4">
      {blocks.map((b) => (
        <div
          key={b.label}
          className={`flex flex-col items-center rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[64px] ${
            isHero
              ? "bg-white/10 backdrop-blur-sm border border-white/20"
              : "bg-card shadow-warm"
          }`}
        >
          <span className={`text-2xl md:text-4xl font-bold tabular-nums ${
            isHero ? "text-white" : "text-primary"
          }`}>
            {String(b.value).padStart(2, "0")}
          </span>
          <span className={`text-xs md:text-sm mt-1 ${
            isHero ? "text-white/60" : "text-muted-foreground"
          }`}>
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
};
