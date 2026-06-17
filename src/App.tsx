import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navigation from '@/components/Navigation';
import CursorSpotlight from '@/components/CursorSpotlight';
import Hero from '@/sections/Hero';
import TrustBar from '@/sections/TrustBar';
import Problem from '@/sections/Problem';
import Solution from '@/sections/Solution';
import Features from '@/sections/Features';
import Showcase from '@/sections/Showcase';
import UseCases from '@/sections/UseCases';
import ROICalculator from '@/sections/ROICalculator';
import Testimonials from '@/sections/Testimonials';
import Trust from '@/sections/Trust';
import Pricing from '@/sections/Pricing';
import FAQ from '@/sections/FAQ';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#03045E]">
      <CursorSpotlight />
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Features />
        <Showcase />
        <UseCases />
        <ROICalculator />
        <Testimonials />
        <Trust />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
