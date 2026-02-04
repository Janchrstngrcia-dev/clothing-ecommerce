import { CollectionGrid } from "@/components/collection-grid";
import { HeritageSection } from "@/components/heritage-section";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";

export default function HomePage() {
  return (
   <div>
    <Navigation />
    <HeroSection />
    <CollectionGrid />
    <HeritageSection />
    <PremiumFooter />
   </div>
  );
}