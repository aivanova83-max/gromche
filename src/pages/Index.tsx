import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Music } from "@/components/Music";
import { Pricing } from "@/components/Pricing";
import { Song } from "@/components/Song";
import { Join } from "@/components/Join";
import { Footer } from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Hero className="px-[30px] py-[30px]" />
      <About />
      <Benefits />
      <Music />
      <Pricing />
      <Song />
      <Join />
      <Footer />
    </div>;
};
export default Index;