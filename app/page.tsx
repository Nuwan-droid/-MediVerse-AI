import { HeroSection } from "@/components/HeroSection";
import { QuickLinks } from "@/components/QuickLinks";
import { FeaturesBottom } from "@/components/FeaturesBottom";
import { LatestArticles } from "@/components/LatestArticles";
import { FAQSection } from "@/components/FAQSection";
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <QuickLinks />
      <FeaturesBottom />
      <LatestArticles />
      <FAQSection />
    </div>
  );
}