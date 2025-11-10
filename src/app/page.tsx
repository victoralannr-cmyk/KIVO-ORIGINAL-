
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import HeroSection from '@/components/sections/hero';
import HowItWorksSection from '@/components/sections/how-it-works';
import SuccessCasesSection from '@/components/sections/success-cases';
import WhatIsAgent from '@/components/sections/what-is-agent';
import AutopilotSection from '@/components/sections/autopilot';
import FinalCtaSection from '@/components/sections/final-cta';
import FaqSection from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';
import ScrollReveal from '@/components/common/scroll-reveal';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className={cn("flex flex-col min-h-screen overflow-x-hidden sky-background")}>
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ScrollReveal>
            <ContactSection />
          </ScrollReveal>
          <ScrollReveal>
            <SuccessCasesSection />
          </ScrollReveal>
          <WhatIsAgent />
          <HowItWorksSection />
          <ScrollReveal>
            <AutopilotSection />
          </ScrollReveal>
          <ScrollReveal>
            <FinalCtaSection />
          </ScrollReveal>
          <ScrollReveal>
            <FaqSection />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}
