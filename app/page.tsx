import { HeroSection } from "@/components/HeroSection";
import { FeaturesBottom } from "@/components/FeaturesBottom";
import { LatestArticles } from "@/components/LatestArticles";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesBottom />
      <LatestArticles />
    </div>
  );
}