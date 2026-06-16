import { useState } from "react";
import { songs } from "@/data/songs";

const Songs = () => {
  const [selectedId, setSelectedId] = useState(songs[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selected = songs.find((s) => s.id === selectedId) ?? songs[0];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
          aria-label="Список песен"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3" width="20" height="2" rx="1" fill="currentColor" />
            <rect y="9" width="20" height="2" rx="1" fill="currentColor" />
            <rect y="15" width="20" height="2" rx="1" fill="currentColor" />
          </svg>
          Список песен
        </button>
        <h1 className="text-base font-semibold text-foreground truncate">{selected.title}</h1>
      </header>

      <div className="flex flex-1 relative">
        {/* Overlay backdrop (mobile) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? "fixed" : "hidden"} md:flex md:sticky top-0 md:top-[53px] left-0 z-20 h-screen md:h-[calc(100vh-53px)] w-72 bg-card border-r border-border flex-col`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-border md:hidden">
            <span className="font-semibold text-foreground">Список песен</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Закрыть"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-2">
            {songs.map((song, i) => (
              <button
                key={song.id}
                onClick={() => handleSelect(song.id)}
                className={`
                  w-full text-left px-4 py-3 text-sm transition-colors
                  flex items-start gap-2
                  ${song.id === selectedId
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground hover:bg-muted/30"
                  }
                `}
              >
                <span className="text-muted-foreground shrink-0 w-5 text-right text-xs mt-0.5">{i + 1}.</span>
                <span>{song.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Lyrics */}
        <main className="flex-1 px-5 py-8 md:px-10 md:py-10 overflow-y-auto max-w-2xl mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{selected.title}</h2>
          <pre className="whitespace-pre-wrap font-sans text-[1.05rem] leading-8 text-foreground/90">
            {selected.lyrics}
          </pre>
        </main>
      </div>
    </div>
  );
};

export default Songs;
