import logoGromche from "@/assets/logo-gromche.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="inline-block">
          
        </a>
        <nav className="flex items-center gap-4">
          <a
            href="/events"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 shadow-soft hover:bg-primary/85 transition-colors"
          >
            Мероприятия Громче
          </a>
        </nav>
      </div>
    </header>
  );
};