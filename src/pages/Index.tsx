import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import CarouselSection from "@/components/CarouselSection";
import HowItWorksSection from "@/components/HowItWorksSection"; // Importar o novo componente
import BenefitsSection from "@/components/BenefitsSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import FeedbackSection from "@/components/FeedbackSection"; // Importar o novo componente
import GuaranteeSection from "@/components/GuaranteeSection"; // Importar o novo componente
import InstructorSection from "@/components/InstructorSection";
import EarningsSimulationSection from "@/components/EarningsSimulationSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import OpportunitySection from "@/components/OpportunitySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <HeroSection />
      <CarouselSection />
      <OpportunitySection />
      <PricingSection />
      <GuaranteeSection />
      <FeedbackSection />
      <InstructorSection />
      <EarningsSimulationSection />
      <FAQSection /> 
      <FinalCTA />
    </div>
  );
};

export default Index;
