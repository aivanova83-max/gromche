import { useState } from "react";
import { Mic } from "lucide-react";
import { songsRunit26 } from "@/data/songsRunit26";
import { TELEGRAM_CHANNEL } from "@/data/eventsLanding";
import logoGromche from "@/assets/logo-gromche-horizontal.png";
import logoRunit from "@/assets/logo-runit.svg";

const trackSongChange = (title: string) => {
  if (typeof window.ym === "function") {
    window.ym(109163310, "reachGoal", "song_change", { title });
  }
};

const SongsRunit26 = () => {
  const [selectedId, setSelectedId] = useState(songsRunit26[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fontSize, setFontSize] = useState(17);

  const changeFontSize = (delta: number) => {
    setFontSize((s) => Math.min(32, Math.max(12, s + delta)));
  };

  const selected = songsRunit26.find((s) => s.id === selectedId) ?? songsRunit26[0];

  const handleSelect = (id: string, title: string) => {
    setSelectedId(id);
    setSidebarOpen(false);
    trackSongChange(title);
  };

  return (
    <div className="min-h-screen bg-folk-cream flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-folk-cream/95 backdrop-blur border-b border-ochre/20">
        <div className="px-4 py-3 flex items-center justify-between gap-4">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="flex items-center gap-2 text-sm font-medium text-ochre hover:text-ochre/80 transition-colors shrink-0"
            aria-label="Список песен"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="3" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="9" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="15" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
            Список песен
          </button>

          <div className="flex items-center border-2 border-ochre rounded-2xl overflow-hidden shrink-0">
            <button
              onClick={() => changeFontSize(-2)}
              className="w-10 h-10 flex items-center justify-center text-folk-dark hover:bg-ochre/10 transition-colors text-lg font-bold border-r border-ochre/40"
              aria-label="Уменьшить шрифт"
            >A−</button>
            <button
              onClick={() => changeFontSize(2)}
              className="w-10 h-10 flex items-center justify-center text-folk-dark hover:bg-ochre/10 transition-colors text-xl font-bold"
              aria-label="Увеличить шрифт"
            >A+</button>
          </div>
        </div>

        <div className="px-4 pb-3 flex items-center justify-between gap-4">
          <img src={logoGromche} alt="Громче" className="h-7 w-auto" />
          <img src={logoRunit} alt="RunIT" className="h-6 w-auto shrink-0" />
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Overlay backdrop (mobile) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-folk-dark/30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? "fixed z-40" : "hidden"} md:flex md:sticky top-0 left-0 md:z-20 h-screen md:h-[calc(100vh-53px)] w-72 bg-folk-cream border-r border-ochre/20 flex-col`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-ochre/20 md:hidden">
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
            {songsRunit26.map((song, i) => (
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
        <main className="flex-1 px-5 py-8 md:px-10 md:py-10 overflow-y-auto max-w-2xl mx-auto w-full">
          <div className="bg-ochre/10 border border-ochre/20 rounded-2xl px-4 py-3 mb-8">
            <p className="text-sm text-folk-dark/80 text-center">
              Пой вместе с нами — здесь все слова, которые нам сегодня понадобятся
            </p>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-folk-dark mb-1">{selected.title}</h2>
          {selected.artist && (
            <p className="text-sm text-ochre mb-6">{selected.artist}</p>
          )}
          <pre className="whitespace-pre-wrap font-sans text-folk-dark/90" style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}>
            {selected.lyrics}
          </pre>

          <div className="mt-10 bg-folk-dark rounded-2xl p-5 flex items-start gap-3">
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

export default SongsRunit26;
