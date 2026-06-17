import { useEffect, useRef } from 'react';
import { ArrowRight, TrendingDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    id: 'support',
    title: 'Customer Support Automation',
    problem: 'Support teams drowning in repetitive tickets, manual routing, and delayed responses.',
    solution: 'FlowPilot auto-categorizes, routes, and resolves common tickets while escalating complex issues intelligently.',
    outcome: '73% reduction in first-response time',
    image: '/images/usecase-support.jpg',
    metric: '73% faster',
  },
  {
    id: 'sales',
    title: 'Sales Operations',
    problem: 'Sales reps waste hours on data entry, lead scoring, and follow-up scheduling.',
    solution: 'Automated lead enrichment, scoring, CRM updates, and personalized outreach sequences.',
    outcome: '2.5x more pipeline generated',
    image: '/images/usecase-sales.jpg',
    metric: '2.5x pipeline',
  },
  {
    id: 'hr',
    title: 'HR Onboarding',
    problem: 'Manual onboarding creates inconsistent experiences and compliance gaps.',
    solution: 'End-to-end automated onboarding: document collection, system provisioning, training schedules, and compliance checks.',
    outcome: '90% reduction in onboarding time',
    image: '/images/usecase-hr.jpg',
    metric: '90% faster',
  },
  {
    id: 'invoicing',
    title: 'Invoice Processing',
    problem: 'Finance teams manually entering invoice data, chasing approvals, and reconciling payments.',
    solution: 'OCR extraction, auto-routing for approvals, GL coding, and payment scheduling—all hands-free.',
    outcome: '85% reduction in processing cost',
    image: '/images/usecase-sales.jpg',
    metric: '85% savings',
  },
  {
    id: 'reporting',
    title: 'Reporting Automation',
    problem: 'Teams spending days compiling reports from multiple sources.',
    solution: 'Automated data aggregation, report generation, and distribution on any schedule.',
    outcome: '40 hours saved per month',
    image: '/images/usecase-support.jpg',
    metric: '40 hrs/mo saved',
  },
];

export default function UseCases() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.usecase-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="usecases" className="relative bg-[#03045E] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#4CC9F0]">
            Use Cases
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px' }}>
            Automation for Every{' '}
            <span className="text-[#4CC9F0]">Team</span>
          </h2>
          <p className="mt-6 text-lg text-white/60">
            See how businesses use FlowPilot to transform their operations.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="space-y-6">
          {useCases.map((uc, index) => (
            <div
              key={uc.id}
              className={`usecase-card group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-500 hover:border-[#4CC9F0]/30 hover:bg-white/[0.06] ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className={`relative h-64 lg:h-auto overflow-hidden ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                  <img
                    src={uc.image}
                    alt={uc.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#03045E] via-transparent to-transparent lg:bg-gradient-to-r" />
                  {/* Metric badge */}
                  <div className="absolute bottom-4 left-4 rounded-full bg-[#4CC9F0] px-4 py-2 text-sm font-bold text-[#03045E]">
                    {uc.metric}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                  <h3 className="text-2xl font-bold text-white mb-4">{uc.title}</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <TrendingDown size={18} className="mt-0.5 text-red-400 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-1">Problem</div>
                        <p className="text-sm text-white/60">{uc.problem}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ArrowRight size={18} className="mt-0.5 text-[#4CC9F0] flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#4CC9F0] mb-1">Solution</div>
                        <p className="text-sm text-white/60">{uc.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm font-semibold text-green-400">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {uc.outcome}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
