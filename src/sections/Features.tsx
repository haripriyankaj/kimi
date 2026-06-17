import { useEffect, useRef } from 'react';
import {
  MessageSquare,
  Plug,
  Brain,
  Activity,
  BarChart3,
  Shield,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Plug,
  Brain,
  Activity,
  BarChart3,
  Shield,
};

const features = [
  {
    icon: 'MessageSquare',
    title: 'Natural Language Automation',
    description: 'Describe your workflow in plain English. Our AI engine parses intent and generates complete automation logic.',
    benefit: 'No coding required—just describe what you need.',
  },
  {
    icon: 'Plug',
    title: 'Multi-App Integration',
    description: 'Connect 200+ apps including Salesforce, HubSpot, Slack, Gmail, QuickBooks, and more with one-click integrations.',
    benefit: 'Unified workflows across your entire tech stack.',
  },
  {
    icon: 'Brain',
    title: 'AI Decision Engine',
    description: 'Smart routing, conditional logic, and exception handling powered by machine learning that improves over time.',
    benefit: 'Intelligent decisions that get smarter with every run.',
  },
  {
    icon: 'Activity',
    title: 'Real-Time Monitoring',
    description: 'Watch your workflows execute in real-time. Track performance, catch errors, and optimize on the fly.',
    benefit: 'Full visibility into every automated process.',
  },
  {
    icon: 'BarChart3',
    title: 'Analytics Dashboard',
    description: 'Comprehensive reporting on time saved, costs reduced, and efficiency gains across all your workflows.',
    benefit: 'Data-driven insights to optimize operations.',
  },
  {
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified, GDPR compliant, with end-to-end encryption and role-based access controls.',
    benefit: 'Bank-grade security for your business data.',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative bg-[#03045E] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#4CC9F0]">
            Features
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px' }}>
            Everything You Need to{' '}
            <span className="text-[#4CC9F0]">Automate at Scale</span>
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Powerful capabilities designed for modern operations teams.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className="feature-card group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-[#4CC9F0]/30 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#4CC9F0]/10 transition-colors group-hover:bg-[#4CC9F0]/20">
                  <Icon size={24} className="text-[#4CC9F0]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-[#4CC9F0]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4CC9F0]" />
                  {feature.benefit}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
