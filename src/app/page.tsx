
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import HeroSection from '@/components/sections/hero';
import HowItWorksSection from '@/components/sections/how-it-works';
import BenefitsSection from '@/components/sections/benefits';
import SuccessCasesSection from '@/components/sections/success-cases';
import InteractiveDemoSection from '@/components/sections/interactive-demo';
import AiIntegrationTextSection from '@/components/sections/ai-integration-text';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import FaqSection from '@/components/sections/faq';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SuccessCasesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <InteractiveDemoSection />
        <AiIntegrationTextSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
