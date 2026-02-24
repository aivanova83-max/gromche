import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date("2026-03-13T19:00:00+05:00");

export const EventCountdown = () => {
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
          className="flex flex-col items-center bg-card rounded-lg px-4 py-3 md:px-6 md:py-4 shadow-warm min-w-[64px]"
        >
          <span className="text-2xl md:text-4xl font-bold text-primary tabular-nums">
            {String(b.value).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm text-muted-foreground mt-1">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
};
