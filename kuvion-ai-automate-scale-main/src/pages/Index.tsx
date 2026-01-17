import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ServicesGrid from '@/components/ServicesGrid';
import TestimonialsSection from '@/components/TestimonialsSection';
import VoiceAgentSection from '@/components/VoiceAgentSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CaseStudySection from '@/components/CaseStudySection';
import FounderDiscoverySection from '@/components/FounderDiscoverySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesGrid />
        <TestimonialsSection />
        <VoiceAgentSection />
        <HowItWorksSection />
        <CaseStudySection />
        <FounderDiscoverySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
