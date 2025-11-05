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
      title: "Современные песни, близкие по настроению",
      description: "Узнаешь себя в каждой строчке"
    },
    {
      icon: Sparkles,
      title: "Час для себя — когда мир подождёт",
      description: "Твоё личное время наполниться энергией"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6 bg-gradient-warm">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          Почему вам понравится
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-xl transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-lg text-foreground/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
