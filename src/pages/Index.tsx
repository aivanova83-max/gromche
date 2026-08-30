import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Music } from "@/components/Music";
import { Pricing } from "@/components/Pricing";
import { Concerts } from "@/components/Concerts";
import { FAQ } from "@/components/FAQ";
import { Song } from "@/components/Song";
import { Join } from "@/components/Join";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Music />
      <Pricing />
      <FAQ />
      <Concerts />
      <Song />
      <Join />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;