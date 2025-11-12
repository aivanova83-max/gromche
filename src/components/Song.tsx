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
  return <section id="song" className="py-20 px-6 bg-background">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Песня «Громче»</h2>
        
        <p className="text-xl md:text-2xl mb-12 text-foreground/80 leading-relaxed">
          Наш гимн — про радость, свободу и силу женского голоса.
        </p>
        
        <div className="bg-gradient-warm rounded-3xl p-12 shadow-soft">
          <Music className="w-20 h-20 text-primary mx-auto mb-6 animate-float" />
          
          <audio ref={audioRef} src="/gromche-song.mpeg" onEnded={() => setIsPlaying(false)} />
          
          <Button variant="hero" size="lg" className="text-lg px-12 py-6 rounded-full" onClick={togglePlay}>
            {isPlaying ? "⏸ Пауза" : "▶ Послушать песню"}
          </Button>
        </div>
      </div>
    </section>;
};