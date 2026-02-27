import { Gift } from "lucide-react";

export const GiftBlock = () => (
  <div className="bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/10 rounded-2xl p-6 md:p-8 border-2 border-primary/30 shadow-warm text-center space-y-4">
    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
      <Gift className="w-7 h-7 text-primary" />
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-foreground">
      🎁 Хочу подарить билет маме
    </h3>
    <p className="text-foreground/70 leading-relaxed max-w-lg mx-auto max-[480px]:text-sm">
      Купи билет на имя мамы и напиши нам — мы пришлём красивый электронный
      сертификат.
    </p>
    <a
      href="https://t.me/helloooann"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
    >
      Написать нам →
    </a>
  </div>
);
