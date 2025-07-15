import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { ServiceCards } from "@/components/ServiceCards";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <AboutSection />
      <ContactSection />
      <WhatsAppFab />
    </>
  );
}
