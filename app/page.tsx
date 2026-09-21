import { HeroSection } from "@/components/HeroSection";
import { CategoryIcons } from "@/components/CategoryIcons";
import { FeaturesBottom } from "@/components/FeaturesBottom";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CategoryIcons />
      <FeaturesBottom />
    </div>
  );
}