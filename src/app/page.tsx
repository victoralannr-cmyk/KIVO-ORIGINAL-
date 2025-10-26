
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import HeroSection from '@/components/sections/hero';
import HowItWorksSection from '@/components/sections/how-it-works';
import SuccessCasesSection from '@/components/sections/success-cases';
import WhatIsAgent from '@/components/sections/what-is-agent';
import AutopilotSection from '@/components/sections/autopilot';
import WhyKyonSection from '@/components/sections/why-kyon';
import BeyondServiceSection from '@/components/sections/beyond-service';
import IntegrationsSection from '@/components/sections/integrations';
import FinalCtaSection from '@/components/sections/final-cta';
import FaqSection from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SuccessCasesSection />
        <WhatIsAgent />
        <HowItWorksSection />
        <AutopilotSection />
        <WhyKyonSection />
        <BeyondServiceSection />
        <IntegrationsSection />
        <FinalCtaSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
