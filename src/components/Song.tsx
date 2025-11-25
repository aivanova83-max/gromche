import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { useState, useRef } from "react";
export const Song = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return <section id="song" className="py-12 max-[480px]:py-8 px-4 bg-card">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl max-[480px]:text-2xl font-bold mb-6 max-[480px]:mb-4 text-foreground">Песня «Громче»</h2>
        
        <p className="text-xl md:text-2xl max-[480px]:text-base mb-8 max-[480px]:mb-6 text-foreground/80 leading-relaxed max-[480px]:leading-normal">
          Наш гимн — про радость, свободу и силу женского голоса.
        </p>
        
        <div className="bg-gradient-warm rounded-3xl max-[480px]:rounded-2xl p-8 max-[480px]:p-6 shadow-soft">
          <Music className="w-16 h-16 max-[480px]:w-12 max-[480px]:h-12 text-primary mx-auto mb-5 max-[480px]:mb-4 animate-float" />
          
          <audio ref={audioRef} src="/gromche-song.mpeg" onEnded={() => setIsPlaying(false)} />
          
          <Button variant="hero" size="lg" className="text-base max-[480px]:text-sm px-8 max-[480px]:px-6 py-5 max-[480px]:py-4 rounded-full w-full max-w-md max-[480px]:max-w-full" onClick={togglePlay}>
            {isPlaying ? "⏸ Пауза" : "▶ Послушать песню"}
          </Button>
        </div>
      </div>
    </section>;
};