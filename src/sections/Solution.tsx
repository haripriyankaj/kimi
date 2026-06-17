import { useEffect, useRef } from 'react';
import { MessageSquare, Cpu, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Describe Your Workflow',
    description: 'Tell FlowPilot what you want automated in plain English. No technical jargon needed.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Builds Automation',
    description: 'Our AI engine generates the complete workflow, integrates your apps, and sets up the logic.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Monitor & Optimize',
    description: 'Track performance, receive optimization suggestions, and watch efficiency gains in real-time.',
  },
];

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.solution-step', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="solution" className="relative bg-[#03045E] py-24 lg:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(76, 201, 240, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#4CC9F0]">
            How It Works
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px' }}>
            Tell AI What You Need.{' '}
            <span className="text-[#4CC9F0]">We'll Handle the Rest.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="solution-step relative">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-[#4CC9F0]/30 hover:bg-white/[0.06]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-white/10">{step.number}</span>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#4CC9F0]/10">
                      <Icon size={28} className="text-[#4CC9F0]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-[#4CC9F0]/30" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
