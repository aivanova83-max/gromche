export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="container max-w-4xl mx-auto">
        <div className="animate-fade-in text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            О хоре
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">
            «Громче» — место, где женщины собираются после рабочих будней, чтобы выдохнуть, посмеяться и зазвучать вместе.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed mt-6 text-foreground/80">
            Неважно, умеешь ли ты петь — важно, что тебе хочется дышать свободно и петь от души.
          </p>
        </div>
      </div>
    </section>
  );
};
