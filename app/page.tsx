import PebHeroSection from "@/components/PebHeroSection";
import TrustedClientsSection from "@/components/TrustedClientsSection";
import AboutMekark from "@/components/AboutMekark";
import SpecializedSectors from "@/components/SpecializedSectors";
import WhyChooseMekark from "@/components/WhyChooseMekark";
import ManufacturingHub from "@/components/ManufacturingHub";
import ProjectsGallery from "@/components/ProjectsGallery";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import WhyMekark from "@/components/WhyMekark";
import WorldClassEngineering from "@/components/WorldClassEngineering";
import PEBFaqSection from "@/components/PEBFaqSection";
import ProjectCTASection from "@/components/ProjectCTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <PebHeroSection />
      <TrustedClientsSection />
      <AboutMekark />
      <SpecializedSectors />
      <WhyChooseMekark />
      <ManufacturingHub />
      <ProjectsGallery />
      <ManufacturingProcess />
      <WhyMekark />
      <WorldClassEngineering />
      <TestimonialsSection />
      <PEBFaqSection />
      <ProjectCTASection />
      <ScrollToTop />
    </main>
  );
}