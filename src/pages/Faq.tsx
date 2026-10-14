import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { faqChoirGroups, type FaqChoirItem } from "@/data/faqChoir";

const renderLink = (link: { label: string; href: string; external?: boolean }) =>
  link.external ? (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-primary/80 transition-colors"
    >
      {link.label}
    </a>
  ) : (
    <Link to={link.href} className="text-primary hover:text-primary/80 transition-colors">
      {link.label}
    </Link>
  );

const FaqAnswer = ({ item }: { item: FaqChoirItem }) => (
  <div className="space-y-3 text-muted-foreground leading-relaxed">
    {item.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}

    {item.linkList && (
      <ul className="space-y-1">
        {item.linkList.map((link) => (
          <li key={link.href} className="flex gap-2">
            <span className="text-primary shrink-0">•</span>
            {renderLink(link)}
          </li>
        ))}
      </ul>
    )}

    {item.steps && (
      <ol className="space-y-1.5 list-decimal pl-5">
        {item.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    )}

    {item.bullets && (
      <ul className="space-y-1.5">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-primary shrink-0">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    )}

    {item.note && (
      <div className="bg-gradient-warm rounded-xl p-4 text-sm text-foreground">
        {item.note}
      </div>
    )}

    {item.closingParagraph && <p>{item.closingParagraph}</p>}

    {item.moreLink && (
      <p className="text-sm">
        {item.moreLink.label}: {renderLink(item.moreLink)}
      </p>
    )}
  </div>
);

const Faq = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, [hash]);

  let number = 0;
  const groups = faqChoirGroups.map((group) => ({
    ...group,
    items: group.items.map((item) => ({ item, number: ++number })),
  }));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          На сайт
        </Link>

        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">
            Хор «Громче»
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-foreground">
            Ответы на часто задаваемые вопросы наших хористок
          </h1>
        </div>

        <nav className="bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-soft mb-12">
          <p className="font-semibold text-foreground mb-3">Оглавление</p>
          <div className="space-y-4">
            {groups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold text-foreground/80 mb-1.5">{group.title}</p>
                <ul className="space-y-1">
                  {group.items.map(({ item, number: n }) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        {n}. {item.question}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div className="space-y-12">
          {groups.map((group) => (
            <section key={group.title}>
              <h2 className="text-xl font-bold font-serif text-foreground mb-5">
                {group.title}
              </h2>
              <div className="space-y-6">
                {group.items.map(({ item, number: n }) => (
                  <div
                    key={item.id}
                    id={item.id}
                    className="scroll-mt-4 bg-card border border-border rounded-2xl p-5 shadow-soft"
                  >
                    <h3 className="font-semibold text-foreground mb-2.5">
                      {n}. {item.question}
                    </h3>
                    <FaqAnswer item={item} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
