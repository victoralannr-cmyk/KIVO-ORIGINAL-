
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import HeroSection from '@/components/sections/hero';
import HowItWorksSection from '@/components/sections/how-it-works';
import VideoCtaSection from '@/components/sections/video-cta';
import VideoCardsSection from '@/components/sections/video-cards';
import AutopilotSection from '@/components/sections/autopilot';
import FaqSection from '@/components/sections/faq';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <VideoCtaSection />
        <VideoCardsSection />
        <AutopilotSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
