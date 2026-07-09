import { useState } from "react";
import { ChevronRight, Mic } from "lucide-react";
import { songsEvents } from "@/data/songsEvents";
import { TELEGRAM_CHANNEL } from "@/data/eventsLanding";
import logoGromche from "@/assets/logo-gromche-horizontal.png";
import logoRunit from "@/assets/logo-runit.svg";

const trackSongChange = (title: string) => {
  if (typeof window.ym === "function") {
    window.ym(109163310, "reachGoal", "song_change", { title });
  }
};

// Ручные исключения для порядка «следующая песня» (например, чтобы
// пропустить транслитерированный дубль оригинала или скрыть ссылку
// у конкретной песни — значение null).
const NEXT_SONG_OVERRIDES: Record<string, string | null> = {
  "6": null, // We will rock you -> ссылки на следующую песню нет
};

const SongsEvents = () => {
  const [selectedId, setSelectedId] = useState(songsEvents[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fontSize, setFontSize] = useState(17);

  const changeFontSize = (delta: number) => {
    setFontSize((s) => Math.min(32, Math.max(12, s + delta)));
  };

  const selected = songsEvents.find((s) => s.id === selectedId) ?? songsEvents[0];
  const selectedIndex = songsEvents.findIndex((s) => s.id === selectedId);
  const defaultNextId = songsEvents[(selectedIndex + 1) % songsEvents.length].id;
  const nextId = selectedId in NEXT_SONG_OVERRIDES ? NEXT_SONG_OVERRIDES[selectedId] : defaultNextId;
  const nextSong = nextId ? songsEvents.find((s) => s.id === nextId) : undefined;

  const handleSelect = (id: string, title: string) => {
    setSelectedId(id);
    setSidebarOpen(false);
    trackSongChange(title);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-folk-cream flex flex-col max-w-[600px] mx-auto shadow-page">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-header-panel px-5 pt-[18px] pb-4 rounded-b-[26px] shadow-header">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="flex items-center gap-2 text-[15px] font-semibold text-ochre hover:text-ochre/80 transition-colors shrink-0"
            aria-label="Список песен"
          >
            <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="2" rx="1" fill="currentColor" />
              <rect y="7" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="14" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
            Список песен
          </button>

          <div className="flex items-center border-[1.5px] border-ochre rounded-xl overflow-hidden h-9 shrink-0">
            <button
              onClick={() => changeFontSize(-2)}
              className="w-10 h-9 flex items-center justify-center text-folk-dark hover:bg-ochre/10 transition-colors text-sm font-bold border-r border-ochre/30"
              aria-label="Уменьшить шрифт"
            >A−</button>
            <button
              onClick={() => changeFontSize(2)}
              className="w-10 h-9 flex items-center justify-center text-folk-dark hover:bg-ochre/10 transition-colors text-base font-bold"
              aria-label="Увеличить шрифт"
            >A+</button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 mt-[14px] pt-3 border-t border-ochre/[0.18]">
          <div className="flex flex-col gap-1">
            <a
              href={TELEGRAM_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-logo-chip rounded-[10px] px-3.5 py-1.5 inline-flex items-center shadow-chip hover:opacity-90 transition-opacity"
            >
              <img src={logoGromche} alt="Громче — телеграм-канал" className="h-[30px] w-auto" />
            </a>
            <span className="text-[9px] font-semibold text-folk-dark/45 pl-1">t.me/gromche_choir</span>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-[9px] font-semibold tracking-[0.08em] uppercase text-folk-dark/45">партнёр</span>
            <img src={logoRunit} alt="RunIT by AGIMA" className="h-5 w-auto opacity-[0.85]" />
          </div>
        </div>

        <div className="mt-[14px] h-1 rounded-full bg-gradient-ribbon" />
      </header>

      <div className="flex flex-1 relative">
        {/* Overlay backdrop (mobile) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-folk-dark/30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? "fixed z-50 flex" : "hidden"} top-0 left-0 h-screen w-72 max-w-[80%] bg-folk-cream border-r border-ochre/20 flex-col`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-ochre/20">
            <span className="font-semibold text-folk-dark">Список песен</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-folk-dark/60 hover:text-folk-dark transition-colors"
              aria-label="Закрыть"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-2">
            {songsEvents.map((song, i) => (
              <button
                key={song.id}
                onClick={() => handleSelect(song.id, song.title)}
                className={`
                  w-full text-left px-4 py-3 text-sm transition-colors
                  flex items-start gap-2
                  ${song.id === selectedId
                    ? "bg-ochre/10 text-ochre font-medium"
                    : "text-folk-dark hover:bg-ochre/5"
                  }
                `}
              >
                <span className="text-folk-dark/50 shrink-0 w-5 text-right text-xs mt-0.5">{i + 1}.</span>
                <span className="flex flex-col">
                  <span>{song.title}</span>
                  {song.artist && (
                    <span className="text-xs text-folk-dark/50 font-normal">{song.artist}</span>
                  )}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Lyrics */}
        <main className="flex-1 px-5 py-8 overflow-y-auto w-full">
          <div className="bg-ochre/10 border border-ochre/20 rounded-2xl px-4 py-3 mb-8">
            <p className="text-sm text-folk-dark/80 text-center">
              Пой вместе с нами — здесь все слова, которые нам сегодня понадобятся
            </p>
          </div>

          <h2 className="font-serif text-2xl font-bold text-folk-dark mb-1">{selected.title}</h2>
          {selected.artist && (
            <p className="text-sm text-ochre mb-6">{selected.artist}</p>
          )}
          <pre className="whitespace-pre-wrap font-sans text-folk-dark/90" style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}>
            {selected.lyrics}
          </pre>

          {nextSong && (
            <button
              onClick={() => handleSelect(nextSong.id, nextSong.title)}
              className="mt-10 w-full flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-left hover:bg-ochre/5 transition-colors"
            >
              <span className="text-xs text-folk-dark/60">
                Следующая песня — <span className="font-medium text-ochre">{nextSong.title}</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-ochre shrink-0" />
            </button>
          )}

          <div className="mt-3 bg-folk-dark rounded-2xl p-5 flex items-start gap-3">
            <Mic className="w-5 h-5 text-ochre shrink-0 mt-0.5" />
            <p className="text-sm text-folk-cream/90 leading-relaxed">
              Эту песню вы пели с «Громче». Хочешь петь вот так — следи за нашими вечеринками:{" "}
              <a
                href={TELEGRAM_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ochre underline hover:text-ochre/80 transition-colors"
              >
                t.me/gromche_choir
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SongsEvents;
