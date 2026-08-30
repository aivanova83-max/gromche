export const About = () => {
  return (
    <section id="about" className="py-12 max-[480px]:py-8 px-4 bg-card">
      <div className="container max-w-4xl mx-auto">
        <div className="animate-fade-in text-center">
          <h2 className="font-display text-4xl md:text-5xl max-[480px]:text-2xl font-bold mb-6 max-[480px]:mb-4 text-foreground">
            О хоре
          </h2>
          
          <p className="text-xl md:text-2xl max-[480px]:text-base leading-relaxed max-[480px]:leading-normal text-foreground/80">
            «Громче» — место, где женщины собираются после рабочих будней, чтобы выдохнуть, посмеяться и зазвучать вместе.
          </p>
          
          <p className="text-xl md:text-2xl max-[480px]:text-base leading-relaxed max-[480px]:leading-normal mt-4 max-[480px]:mt-3 text-foreground/80">
            Неважно, умеешь ли ты петь — важно, что тебе хочется дышать свободно и петь от души.
          </p>
        </div>
      </div>
    </section>
  );
};
