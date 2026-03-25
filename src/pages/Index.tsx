import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Music } from "@/components/Music";
import { Pricing } from "@/components/Pricing";
import { Song } from "@/components/Song";
import { Join } from "@/components/Join";
import { Footer } from "@/components/Footer";
import { useMoyKlass } from "@/hooks/useMoyKlass";

const Index = () => {
  useMoyKlass();

  return (
    <div className="min-h-screen">
      <div id="SiteWidgetMoyklass133029" style={{ display: "none" }} />
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Music />
      <Pricing />
      <Song />
      <Join />
      <Footer />
    </div>
  );
};

export default Index;