import NeuralGridHero from '@/components/NeuralGridHero';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: '#03045E' }}
    >
      <NeuralGridHero />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* YC Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-wide text-[#4CC9F0]">
              Backed by
            </span>
            <span className="text-xs font-bold tracking-wider text-white">
              Y COMBINATOR
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ letterSpacing: '-1.5px' }}
          >
            Automate Business{' '}
            <span className="text-[#4CC9F0]">Operations</span> with
            AI—Without Writing a Single Line of Code
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
            FlowPilot AI turns plain-English instructions into intelligent
            workflows that save teams hundreds of hours every month.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('#pricing')}
              className="group inline-flex items-center gap-2 rounded-full bg-[#4CC9F0] px-7 py-4 text-base font-semibold text-[#03045E] transition-all duration-300 btn-glow"
            >
              Start Free Trial
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => scrollToSection('#showcase')}
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:border-[#4CC9F0]/50 hover:bg-white/5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Play size={14} className="ml-0.5 text-[#4CC9F0]" />
              </span>
              Watch Demo
            </button>
          </div>

          {/* Trust Mini-Bar */}
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">25K+</div>
              <div className="text-sm text-white/50">Workflows Automated</div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/50">Businesses</div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-white/50">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #03045E)',
        }}
      />
    </section>
  );
}
