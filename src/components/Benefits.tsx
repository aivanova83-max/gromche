import { Music, Flower2, Sparkles, Heart } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Тёплая атмосфера и живое общение",
      description: "Место, где тебя поймут и поддержат"
    },
    {
      icon: Flower2,
      title: "Репетиции без стресса и оценок",
      description: "Никакого перфекционизма, только радость"
    },
    {
      icon: Music,
      title: "Современные и ретро песни",
      description: "Все, что близко по духу и настроению"
    },
    {
      icon: Sparkles,
      title: "Час для себя — когда мир подождёт",
      description: "Твоё личное время наполниться энергией"
    }
  ];

  return (
    <section id="benefits" className="py-12 max-[480px]:py-8 px-4 bg-gradient-warm">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl max-[480px]:text-2xl font-bold mb-8 max-[480px]:mb-6 text-center text-foreground">
          Почему вам понравится
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-[480px]:gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl max-[480px]:rounded-2xl p-6 max-[480px]:p-5 shadow-soft hover:shadow-xl transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <benefit.icon className="w-10 h-10 max-[480px]:w-8 max-[480px]:h-8 text-primary mb-3 max-[480px]:mb-2" />
              <h3 className="text-xl max-[480px]:text-lg font-semibold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-base max-[480px]:text-sm text-foreground/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
