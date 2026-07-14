import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CtaButton } from "@/components/CtaButton";
import {
  semanticColors,
  vintagePalette,
  buttonVariants,
  cardRecipes,
  spacingScale,
  type ColorToken,
} from "@/data/designSystem";

type ButtonVariantName = "hero" | "outline" | "secondary" | "default" | "ghost" | "link" | "destructive";
const CTA_VARIANTS: ButtonVariantName[] = ["hero", "outline", "secondary"];

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) => (
  <section className="py-12 border-b border-border last:border-0">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
      {description && <p className="text-muted-foreground mb-8 max-w-2xl">{description}</p>}
      <div className={description ? "" : "mt-8"}>{children}</div>
    </div>
  </section>
);

const ColorSwatch = ({ token }: { token: ColorToken }) => (
  <div className="rounded-xl overflow-hidden border border-border bg-card">
    <div className={`${token.bgClass} ${token.fgClass} h-20 flex items-end p-3`}>
      <span className="text-xs font-semibold">{token.hex}</span>
    </div>
    <div className="p-3 space-y-1">
      <p className="text-sm font-semibold text-foreground">{token.name}</p>
      <p className="text-xs text-muted-foreground font-mono">{token.cssVar}</p>
      <p className="text-xs text-muted-foreground font-mono">hsl({token.hsl})</p>
      {token.usage && <p className="text-xs text-muted-foreground pt-1">{token.usage}</p>}
      {token.flag && (
        <p className="text-xs text-destructive pt-1 font-medium">⚠ {token.flag}</p>
      )}
    </div>
  </div>
);

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-16 px-4 bg-gradient-warm">
        <div className="container max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Хор «Громче»
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Design System</h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Живая витрина реальных стилей проекта: цвета, шрифты, кнопки, карточки, поля форм и
            отступы — только значения, которые уже используются в коде. Там, где стиль разошёлся,
            это отмечено отдельно вместе с предложением эталона.
          </p>
        </div>
      </header>

      <Section
        title="Цвета"
        description="Семантические токены shadcn (пара цвет/текст-на-цвете) и отдельная винтажная палитра."
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Семантические</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {semanticColors.map((c) => (
            <ColorSwatch key={c.name} token={c} />
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-4">
          Винтажная палитра (/events/folk, /songs/*)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {vintagePalette.map((c) => (
            <ColorSwatch key={c.name} token={c} />
          ))}
        </div>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
          <p className="text-sm text-foreground">
            <strong>Исправлено:</strong> раньше здесь было 5 токенов-дублей —{" "}
            <code className="font-mono">warm-peach</code> (побитово совпадал с primary, 0
            использований), <code className="font-mono">warm-cream</code> (0 использований),{" "}
            <code className="font-mono">warm-text</code> и <code className="font-mono">olive</code>{" "}
            (по 1–2 использования). Все убраны из index.css и tailwind.config.ts. Оставшаяся
            «винтажная» тройка выше — не расхождение, а сознательно отдельная палитра для
            страниц /events/folk и /songs/*, ранее хардкодившаяся HEX-цветами прямо в JSX.
          </p>
        </div>
      </Section>

      <Section
        title="Градиенты и тени"
        description="Кастомные градиенты и тени из tailwind.config.ts / index.css."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl overflow-hidden border border-border">
            <div className="h-24 bg-gradient-hero" />
            <div className="p-3">
              <p className="text-sm font-semibold text-foreground">gradient-hero</p>
              <p className="text-xs text-muted-foreground font-mono">
                linear-gradient(135deg, primary, secondary)
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <div className="h-24 bg-gradient-warm" />
            <div className="p-3">
              <p className="text-sm font-semibold text-foreground">gradient-warm</p>
              <p className="text-xs text-muted-foreground font-mono">то же, но 20% прозрачности</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-xl bg-card p-4 shadow-soft">
            <p className="text-sm font-semibold text-foreground">shadow-soft</p>
            <p className="text-xs text-muted-foreground">24 использования</p>
          </div>
          <div className="rounded-xl bg-card p-4 shadow-warm">
            <p className="text-sm font-semibold text-foreground">shadow-warm</p>
            <p className="text-xs text-muted-foreground">19 использований</p>
          </div>
        </div>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 mt-6">
          <p className="text-sm text-foreground">
            <strong>Исправлено:</strong> раньше shadow-soft и shadow-warm применялись на визуально
            идентичных карточках без системы. Теперь роли разведены: shadow-warm — фон карточек в
            состоянии покоя (см. раздел «Карточки»), shadow-soft — hover/акцентные эффекты у кнопок.
          </p>
        </div>
      </Section>

      <Section
        title="Типографика"
        description="Кастомного шрифта в проекте нет — используется системный sans-стек Tailwind по умолчанию."
      >
        <div className="space-y-4 mb-8">
          {[
            { cls: "text-7xl font-bold", label: "text-7xl / font-bold" },
            { cls: "text-6xl font-bold", label: "text-6xl / font-bold" },
            { cls: "text-5xl font-bold", label: "text-5xl / font-bold" },
            { cls: "text-4xl font-bold", label: "text-4xl / font-bold" },
            { cls: "text-3xl font-bold", label: "text-3xl / font-bold" },
            { cls: "text-2xl font-semibold", label: "text-2xl / font-semibold" },
            { cls: "text-xl font-semibold", label: "text-xl / font-semibold" },
            { cls: "text-lg font-medium", label: "text-lg / font-medium" },
            { cls: "text-base font-normal", label: "text-base / font-normal" },
            { cls: "text-sm font-medium", label: "text-sm / font-medium" },
            { cls: "text-xs font-medium", label: "text-xs / font-medium" },
          ].map((row) => (
            <div key={row.label} className="flex items-baseline gap-4 flex-wrap">
              <span className={`${row.cls} text-foreground`}>Ты можешь громче</span>
              <span className="text-xs text-muted-foreground font-mono">{row.label}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
          <p className="text-sm text-foreground">
            <strong>Исправлено:</strong> <code className="font-mono">EventFolk.tsx</code> и{" "}
            <code className="font-mono">Legal.tsx</code> раньше задавали второй шрифт инлайн-стилем
            (<code className="font-mono">fontFamily: "Georgia, serif"</code>), что нарушало правило
            «никаких inline-стилей». Georgia уже была объявлена как <code className="font-mono">font-serif</code>{" "}
            в tailwind.config.ts (Lovable добавил её для страниц Songs) — оба места переведены на
            этот класс.
          </p>
        </div>
      </Section>

      <Section
        title="Кнопки"
        description="Все варианты, определённые в button.tsx — с пометкой, что из этого реально используется."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {buttonVariants.map((v) => {
            const isCta = CTA_VARIANTS.includes(v.variant);
            const ButtonComp = isCta ? CtaButton : Button;
            return (
              <div key={v.variant} className="rounded-xl border border-border p-5 bg-card">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-foreground">
                    variant="{v.variant}"{isCta && " (через CtaButton)"}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      v.usageCount > 0
                        ? "bg-accent/20 text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {v.usageCount} использований
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <ButtonComp variant={v.variant} size="sm">
                    Обычная
                  </ButtonComp>
                  <ButtonComp variant={v.variant} size="sm" disabled>
                    Disabled
                  </ButtonComp>
                </div>
                {v.note && <p className="text-xs text-muted-foreground mt-3">{v.note}</p>}
              </div>
            );
          })}
        </div>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
          <p className="text-sm text-foreground">
            <strong>Исправлено:</strong> раньше 20 из 21 вызовов hero/outline/secondary вручную
            дописывали <code className="font-mono">rounded-full</code> в className. Так как{" "}
            <code className="font-mono">src/components/ui/</code> — сгенерированные
            shadcn-компоненты и их нельзя редактировать напрямую (CLAUDE.md), pill-форма вынесена в
            обёртку <code className="font-mono">src/components/CtaButton.tsx</code>, которая
            добавляет <code className="font-mono">rounded-full</code> поверх Button. Все реальные
            CTA переведены на неё. Варианты <code className="font-mono">default</code>,{" "}
            <code className="font-mono">link</code>, <code className="font-mono">destructive</code>{" "}
            по-прежнему нигде не используются.
          </p>
        </div>
      </Section>

      <Section
        title="Карточки"
        description="Компонент <Card> из shadcn/ui по-прежнему нигде не применяется — все карточки собраны вручную div'ами. Но теперь по единому рецепту."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {cardRecipes.map((c) => (
            <div key={c.label} className={`${c.className} p-6`}>
              <p className="text-sm font-semibold text-foreground mb-1">{c.label}</p>
              <p className="text-xs text-muted-foreground">{c.source}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
          <p className="text-sm text-foreground">
            <strong>Исправлено:</strong> раньше радиус (rounded-2xl vs rounded-3xl) и тень
            (shadow-soft vs shadow-warm) на однотипных карточках выбирались без системы. Pricing.tsx
            и Benefits.tsx приведены к общему рецепту{" "}
            <code className="font-mono">bg-card rounded-2xl shadow-warm border border-border/60</code>,
            который уже использовали остальные карточки сайта.
          </p>
        </div>
      </Section>

      <Section
        title="Поля форм"
        description="Стили из ui/input.tsx, ui/textarea.tsx, ui/checkbox.tsx. Кликните в поле, чтобы увидеть настоящий focus-ring."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <div className="space-y-4">
            <div>
              <Label htmlFor="ds-input" className="mb-2 block">
                Обычное поле
              </Label>
              <Input id="ds-input" placeholder="Ваше имя" />
            </div>
            <div>
              <Label htmlFor="ds-input-disabled" className="mb-2 block">
                Disabled
              </Label>
              <Input id="ds-input-disabled" placeholder="Недоступно" disabled />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="ds-checkbox" />
              <Label htmlFor="ds-checkbox">Согласна с условиями</Label>
            </div>
          </div>
          <div>
            <Label htmlFor="ds-textarea" className="mb-2 block">
              Textarea
            </Label>
            <Textarea id="ds-textarea" placeholder="Комментарий" />
          </div>
        </div>
      </Section>

      <Section
        title="Отступы"
        description="Наиболее часто встречающиеся значения spacing-шкалы Tailwind в проекте, отсортированные по размеру."
      >
        <div className="max-w-2xl space-y-3">
          {spacingScale.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <div className="w-20 text-sm font-mono text-muted-foreground text-right shrink-0">
                {s.px}
              </div>
              <div className={`bg-primary/40 h-4 rounded-sm shrink-0 ${s.widthClass}`} />
              <div>
                <p className="text-sm font-mono text-foreground">{s.token}</p>
                <p className="text-xs text-muted-foreground">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default DesignSystem;
