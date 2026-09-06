# Канонические JSX-блоки для `EventsLanding.tsx`

Копируй отсюда, подставляя `<slug>`, названия и тексты. Классы не меняй — вёрстка
уже согласована с дизайном страницы.

---

## Блок «Бегущая строка» в hero — то, что УДАЛЯЕМ (шаг 1)

Выглядит примерно так (внутри hero-`<section>`, после блока с `<CtaButton>`):

```jsx
{/* Бегущая строка */}
<style>{`
  @keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`}</style>
<a
  href="/events/<slug>"
  className="absolute bottom-0 left-0 right-0 z-20 bg-white/15 backdrop-blur-sm border-y border-white/25 overflow-hidden whitespace-nowrap block"
>
  <div className="inline-block" style={{ animation: "ticker 20s linear infinite" }}>
    <span className="inline-block px-8 text-sm font-medium text-white">
      … текст анонса …
    </span>
    <span className="inline-block px-4 text-sm font-medium text-white/50">✦</span>
    {/* повторяется 3 раза */}
  </div>
</a>
```

Удалить целиком (комментарий → `<style>` → `<a>…</a>`). `style={{ animation }}`
здесь — часть удаляемого блока, отдельно его «чинить» не надо.

---

## Плейсхолдер «Ближайшее» — то, что ВСТАВЛЯЕМ по умолчанию (шаг 2)

Заменяет карточку-ссылку под `<p ...>Ближайшее</p>`:

```jsx
<ScrollReveal>
  <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 space-y-2 shadow-warm">
    <p className="text-base font-semibold text-foreground">Тссс, готовим сюрприз</p>
    <p className="text-sm text-muted-foreground leading-relaxed">
      О новой встрече расскажем первым делом в{" "}
      <a
        href="https://telegram.me/gromche_choir"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2"
      >
        телеграме
      </a>
      {" "}— подпишитесь, чтобы узнать раньше всех
    </p>
  </div>
</ScrollReveal>
```

---

## Карточка «Ближайшее» — форма, если ставим анонс следующего события (шаг 2)

Не заменять на плейсхолдер, а подставить новые данные в эту структуру:

```jsx
<ScrollReveal>
  <a
    href="/events/<next-slug>"
    className="block rounded-2xl border border-primary/30 bg-primary/10 p-6 space-y-2 shadow-warm hover:shadow-soft transition-shadow duration-300"
  >
    <p className="text-base font-semibold text-foreground"><Название события></p>
    <p className="text-sm text-muted-foreground leading-relaxed">
      <короткое описание в настоящем/будущем времени>
    </p>
    <p className="text-sm text-foreground/80">
      <дата, время, место, метро>
    </p>
    <span className="inline-block text-sm font-medium text-primary pt-1">Подробности и билеты →</span>
  </a>
</ScrollReveal>
```

---

## Карточка «Прошедшего» — ВСТАВЛЯЕМ первой в сетку (шаг 3)

Внутренняя ссылка (страница события на сайте):

```jsx
<ScrollReveal className="h-full">
  <a
    href="/events/<slug>"
    className="flex flex-col rounded-2xl border border-border hover:shadow-soft transition-shadow duration-300 p-5 opacity-75 h-full"
  >
    <span className="text-xs text-muted-foreground"><Месяц Год></span>
    <h3 className="text-base font-semibold text-foreground mt-1"><Название></h3>
    <p className="text-xs text-muted-foreground mt-1"><описание в прошедшем времени></p>
    <span className="text-sm font-medium text-primary mt-auto pt-3">Смотреть →</span>
  </a>
</ScrollReveal>
```

Внешняя ссылка (билеты на стороннем сервисе) — добавить `target`/`rel`:

```jsx
  <a
    href="https://…"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col rounded-2xl border border-border hover:shadow-soft transition-shadow duration-300 p-5 opacity-75 h-full"
  >
```

После вставки: `sm:grid-cols-N` → `sm:grid-cols-(N+1)` на родительской сетке;
`delay` у следующих карточек — `0.06`, `0.12`, `0.18`, … по порядку. Карточку,
ставшую последней, держать в `<div className="max-sm:hidden h-full">…</div>`.

---

## Видео-карточка — ВСТАВЛЯЕМ первой в сетку `#video` (шаг 4)

```jsx
<ScrollReveal>
  <div className="aspect-[9/16] rounded-2xl border border-border shadow-warm overflow-hidden">
    <video
      ref={video<Slug>Ref}
      src="/<slug>.mp4"
      className="w-full h-full object-cover"
      controls
      playsInline
    />
  </div>
</ScrollReveal>
```

Ref рядом с остальными:

```jsx
const video<Slug>Ref = useRef<HTMLVideoElement>(null);
```

Правка `useEffect` (пауза остальных при запуске одного) — добавить новый ref
в проверку и в массив:

```jsx
const <slug> = video<Slug>Ref.current;
if (!march || !december || !folk || !<slug>) return;
const videos = [march, december, folk, <slug>];
```

После вставки: сетка так, чтобы на десктопе один ряд (напр.
`sm:grid-cols-3` → `sm:grid-cols-2 lg:grid-cols-4`), контейнер при нехватке
ширины `max-w-3xl` → `max-w-5xl`; `delay` у остальных роликов +0.1; ставший
последним ролик обернуть в `<div className="max-sm:hidden">…</div>`.
