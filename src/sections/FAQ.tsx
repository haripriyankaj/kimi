import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 'security',
    question: 'How secure is FlowPilot AI?',
    answer: 'FlowPilot is SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit using AES-256. We offer SSO, role-based access controls, and full audit logging. Enterprise customers can also opt for on-premise deployment.',
  },
  {
    id: 'integrations',
    question: 'What apps does FlowPilot integrate with?',
    answer: 'FlowPilot connects with 200+ popular business applications including Salesforce, HubSpot, Slack, Microsoft Teams, Google Workspace, QuickBooks, Stripe, Zendesk, and many more. We also offer custom API integrations for enterprise customers.',
  },
  {
    id: 'setup',
    question: 'How long does it take to set up?',
    answer: 'Most teams are up and running within an hour. Simply describe your workflow in plain English, and FlowPilot AI will build it automatically. No coding, no complex configurations—just intelligent automation from day one.',
  },
  {
    id: 'ai-reliability',
    question: 'How reliable is the AI automation?',
    answer: 'Our AI engine has a 99.7% accuracy rate for workflow execution. It includes built-in error handling, retry logic, and exception management. You can monitor every execution in real-time and set up alerts for any issues.',
  },
  {
    id: 'support',
    question: 'What support options are available?',
    answer: 'Starter plans include email support with 24-hour response time. Growth plans get priority support with 4-hour response. Enterprise customers receive a dedicated success manager, 1-hour SLA, and quarterly business reviews.',
  },
  {
    id: 'billing',
    question: 'Can I change plans or cancel anytime?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel your plan at any time. We offer a 14-day free trial on all plans with no credit card required. Annual plans include 2 months free.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#4CC9F0]"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-white pr-8">{question}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-white/50 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#4CC9F0]' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-sm leading-relaxed text-white/60">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-container', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="relative bg-[#03045E] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#4CC9F0]">
            FAQ
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px' }}>
            Frequently Asked{' '}
            <span className="text-[#4CC9F0]">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="faq-container rounded-2xl border border-white/10 bg-white/[0.03] px-6 lg:px-8">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
