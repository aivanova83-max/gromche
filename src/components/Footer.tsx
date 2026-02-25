export const Footer = () => {
  return (
    <footer className="py-8 max-[480px]:py-6 px-4 bg-card border-t border-border">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-lg max-[480px]:text-base font-semibold text-foreground mb-1.5 max-[480px]:mb-1">
          Хор «Громче»
        </p>
        <p className="text-base max-[480px]:text-sm text-olive mb-2 max-[480px]:mb-1.5">
          Женщины, которые звучат
        </p>
        <a 
          href="mailto:gromche-choir@yandex.ru" 
          className="text-sm max-[480px]:text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          gromche-choir@yandex.ru
        </a>
        <div className="mt-3 flex flex-wrap justify-center gap-4">
          <a
            href="/legal"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};
