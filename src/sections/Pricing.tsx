import { useState, useEffect, useRef } from 'react';
import { Check, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams getting started with automation.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      '5 active workflows',
      '1,000 tasks/month',
      '10 app integrations',
      'Basic analytics',
      'Email support',
      'Community access',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'For scaling teams that need powerful automation.',
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      'Unlimited workflows',
      '50,000 tasks/month',
      '100+ app integrations',
      'Advanced analytics',
      'Priority support',
      'AI decision engine',
      'Custom triggers',
      'Team collaboration',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For organizations requiring maximum scale and control.',
    monthlyPrice: 499,
    yearlyPrice: 399,
    features: [
      'Everything in Growth',
      'Unlimited tasks',
      'Custom integrations',
      'Dedicated success manager',
      'SSO & advanced security',
      'SLA guarantee',
      'On-premise option',
      'Custom AI training',
    ],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="relative bg-[#03045E] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#4CC9F0]">
            Pricing
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px' }}>
            Simple, Transparent{' '}
            <span className="text-[#4CC9F0]">Pricing</span>
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-white/40'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative h-7 w-12 rounded-full transition-colors ${
              isYearly ? 'bg-[#4CC9F0]' : 'bg-white/20'
            }`}
            aria-label="Toggle yearly billing"
          >
            <div
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                isYearly ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-white/40'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="rounded-full bg-green-400/20 px-2.5 py-0.5 text-xs font-semibold text-green-400">
              Save 20%
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card relative rounded-2xl p-8 transition-all duration-500 ${
                tier.highlighted
                  ? 'border-2 border-[#4CC9F0] bg-[#4CC9F0]/5 scale-105 lg:scale-110'
                  : 'border border-white/10 bg-white/[0.03] hover:border-white/20'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#4CC9F0] px-4 py-1 text-xs font-bold text-[#03045E] flex items-center gap-1">
                  <Zap size={12} />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-2 text-sm text-white/50">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                </span>
                <span className="text-white/50">/month</span>
                {isYearly && (
                  <div className="text-xs text-green-400 mt-1">
                    Billed annually (${tier.yearlyPrice * 12}/year)
                  </div>
                )}
              </div>

              <ul className="mb-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                    <Check size={16} className="mt-0.5 text-[#4CC9F0] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-full py-3 px-6 text-sm font-semibold transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-[#4CC9F0] text-[#03045E] btn-glow'
                    : 'border border-white/20 text-white hover:border-[#4CC9F0]/30 hover:bg-white/5'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
