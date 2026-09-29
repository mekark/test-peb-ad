import BelowFoldClientSections from "@/components/BelowFoldClientSections";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import PebHeroSection from "@/components/PebHeroSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import WhyChooseMekark from "@/components/WhyChooseMekark";

export default function HomePage() {
  return (
    <main className="font-manrope">
      <PebHeroSection />
      <ManufacturingProcess />
      <WhyChooseMekark />
      <ProjectsGallery />
      <BelowFoldClientSections />
    </main>
  );
}
