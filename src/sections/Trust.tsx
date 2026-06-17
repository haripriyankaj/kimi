import { useEffect, useRef } from 'react';
import { Shield, Lock, FileCheck, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { icon: Shield, label: 'SOC 2 Type II', desc: 'Certified' },
  { icon: Lock, label: 'GDPR', desc: 'Compliant' },
  { icon: FileCheck, label: 'ISO 27001', desc: 'Certified' },
  { icon: Globe, label: 'Enterprise', desc: 'Ready' },
];

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.trust-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="trust" className="relative bg-[#03045E] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* YC Section */}
          <div className="trust-element">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#4CC9F0]">
              Trust & Security
            </span>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl" style={{ letterSpacing: '-1px' }}>
              Backed by the Best.{' '}
              <span className="text-[#4CC9F0]">Built for Security.</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              FlowPilot AI is proudly backed by Y Combinator and trusted by hundreds of businesses worldwide. Our enterprise-grade security ensures your data is always protected.
            </p>

            {/* YC Card */}
            <div className="mt-8 rounded-2xl border border-[#4CC9F0]/20 bg-[#4CC9F0]/5 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6600]">
                  <span className="text-lg font-bold text-white">Y</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Y Combinator</div>
                  <div className="text-xs text-white/50">W24 Batch</div>
                </div>
              </div>
              <p className="text-sm text-white/60 italic">
                "FlowPilot is solving a real pain point for businesses. Their AI-first approach to workflow automation is exactly what the market needs."
              </p>
              <div className="mt-4 text-xs text-white/40">
                — YC Partner, upon investment
              </div>
            </div>
          </div>

          {/* Security Grid */}
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.label}
                  className="trust-element rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#4CC9F0]/30 hover:bg-white/[0.06]"
                >
                  <Icon size={28} className="text-[#4CC9F0] mb-4" />
                  <div className="text-lg font-semibold text-white">{cert.label}</div>
                  <div className="text-sm text-[#4CC9F0]">{cert.desc}</div>
                </div>
              );
            })}

            {/* Stats Card */}
            <div className="trust-element col-span-2 rounded-xl border border-[#4CC9F0]/20 bg-[#4CC9F0]/5 p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">99.99%</div>
                  <div className="text-xs text-white/50 mt-1">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">256-bit</div>
                  <div className="text-xs text-white/50 mt-1">Encryption</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-white/50 mt-1">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
