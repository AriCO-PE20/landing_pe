import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SupportSection } from './components/SupportSection';
import { FAQSection } from './components/FAQSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <FloatingNav />
      <ScrollToTop />
      <HeroSection />
      <AboutSection />
      <SupportSection />
      <FAQSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}