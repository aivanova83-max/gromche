const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-border py-4 px-4">
        <div className="container max-w-4xl mx-auto flex gap-6 justify-center">
          <a
            href="#consent"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Читать Согласие
          </a>
          <a
            href="#policy"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Читать Политику
          </a>
        </div>
      </nav>

      <main className="container max-w-4xl mx-auto px-4 py-12 space-y-20" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
        {/* Consent Section */}
        <section id="consent">
          <h1 className="text-3xl font-bold text-foreground mb-8 text-center">
            Согласие на обработку персональных данных
          </h1>
          <div className="prose max-w-none text-foreground/90 leading-relaxed space-y-4" style={{ textAlign: 'justify' }}>
            <p>
              [Здесь будет размещён полный текст согласия на обработку персональных данных. Пожалуйста, предоставьте текст в следующем сообщении.]
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        {/* Policy Section */}
        <section id="policy">
          <h1 className="text-3xl font-bold text-foreground mb-8 text-center">
            Политика конфиденциальности
          </h1>
          <div className="prose max-w-none text-foreground/90 leading-relaxed space-y-4" style={{ textAlign: 'justify' }}>
            <p>
              [Здесь будет размещён полный текст политики конфиденциальности. Пожалуйста, предоставьте текст в следующем сообщении.]
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Legal;
