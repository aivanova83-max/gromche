export const Music = () => {
  const genres = ["поп", "рок", "фолк", "ретро"];
  return <section id="music" className="py-12 max-[480px]:py-8 px-4 bg-card">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl max-[480px]:text-2xl font-bold mb-6 max-[480px]:mb-4 text-foreground">
          Наша музыка
        </h2>
        
        <p className="text-xl md:text-2xl max-[480px]:text-base mb-6 max-[480px]:mb-5 text-foreground/80 leading-relaxed max-[480px]:leading-normal">
          Поем только то, что любим!<br />
          Репертуар определяется общим голосованием
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 max-[480px]:gap-2">
          {genres.map((genre, index) => <span key={index} className="px-5 py-2.5 max-[480px]:px-4 max-[480px]:py-2 bg-secondary rounded-full text-base max-[480px]:text-sm font-medium text-secondary-foreground shadow-soft animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {genre}
            </span>)}
        </div>
      </div>
    </section>;
};