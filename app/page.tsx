import ManufacturingProcess from "@/components/ManufacturingProcess";
import PEBFaqSection from "@/components/PEBFaqSection";
import PebHeroSection from "@/components/PebHeroSection";
import ProjectCTASection from "@/components/ProjectCTASection";
import ProjectsGallery from "@/components/ProjectsGallery";
import WhyChooseMekark from "@/components/WhyChooseMekark";

export default function HomePage() {
  return (
    <main className="font-manrope">
      <PebHeroSection />
      <ManufacturingProcess />
      <WhyChooseMekark />
      <ProjectsGallery />
      <PEBFaqSection />
      <ProjectCTASection />
    </main>
  );
}
