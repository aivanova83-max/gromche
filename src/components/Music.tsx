export const Music = () => {
  const genres = ["soul", "pop", "jazz", "folk", "acoustic"];

  return (
    <section id="music" className="py-20 px-6 bg-card">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Наша музыка
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-foreground/80 leading-relaxed">
          Тёплые, живые аранжировки и тексты, в которых каждая узнает себя.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {genres.map((genre, index) => (
            <span 
              key={index}
              className="px-6 py-3 bg-secondary rounded-full text-lg font-medium text-secondary-foreground shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
