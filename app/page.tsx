import EmailBanner from "@/components/EmailBanner";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import SimpleBanner from "@/components/SimpleBanner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <ProcessSection />
      <EmailBanner />
      <FaqSection />
      <SimpleBanner />
      <LogoSection />
      <Footer />
    </main>
  );
}
