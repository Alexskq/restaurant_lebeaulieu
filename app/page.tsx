import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import MarqueeBand from "@/app/components/MarqueeBand";
import Ambiance from "@/app/components/Ambiance";
import Carte from "@/app/components/Carte";
import Services from "@/app/components/Services";
import Galerie from "@/app/components/Galerie";
import Horaires from "@/app/components/Horaires";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import MobileCta from "@/app/components/MobileCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeBand />
      <Ambiance />
      <Carte />
      <Services />
      <Galerie />
      <Horaires />
      <Contact />
      <Footer />
      <MobileCta />
    </>
  );
}
