import { ArrowRight, Calendar } from 'lucide-react';

export default function CTA() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="relative bg-[#03045E] py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(76, 201, 240, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
          style={{ letterSpacing: '-1.5px' }}
        >
          Stop Managing Work.{''}
          <span className="text-[#4CC9F0]"> Start Automating It.</span>
        </h2>
        <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
          Join 500+ businesses already saving hundreds of hours every month with FlowPilot AI.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('#pricing')}
            className="group inline-flex items-center gap-2 rounded-full bg-[#4CC9F0] px-8 py-4 text-base font-semibold text-[#03045E] transition-all duration-300 btn-glow"
          >
            Start Free Trial
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-[#4CC9F0]/50 hover:bg-white/5"
          >
            <Calendar size={18} className="text-[#4CC9F0]" />
            Book Demo
          </button>
        </div>

        <p className="mt-6 text-sm text-white/40">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
