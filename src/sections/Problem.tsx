import { useEffect, useRef } from 'react';
import { FileText, RotateCcw, Table, Clock, ArrowLeftRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  FileText,
  RotateCcw,
  Table,
  Clock,
  ArrowLeftRight,
};

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.problem-card', {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const problems = [
    { icon: 'FileText', title: 'Manual Data Entry', desc: 'Teams spend 8+ hours per week copying data between systems.' },
    { icon: 'RotateCcw', title: 'Repetitive Approvals', desc: 'Approval chains get lost in email threads, causing delays.' },
    { icon: 'Table', title: 'Spreadsheet Chaos', desc: 'Critical business data trapped in disconnected spreadsheets.' },
    { icon: 'Clock', title: 'Delayed Reporting', desc: 'Manual report compilation takes days, not minutes.' },
    { icon: 'ArrowLeftRight', title: 'Context Switching', desc: 'Employees toggle between 10+ apps, destroying productivity.' },
  ];

  return (
    <section ref={sectionRef} id="problem" className="relative bg-[#03045E] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#4CC9F0]">
              The Current State
            </span>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px' }}>
              Your operations are buried in{' '}
              <span className="text-[#4CC9F0]">manual chaos</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Teams waste 40% of their week on repetitive tasks, context switching, and hunting down data. It's inefficient, expensive, and impossible to scale.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/problem-chaos.jpg"
                alt="Business process chaos illustration"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Problem Cards */}
        <div ref={cardsRef} className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {problems.map((p, i) => {
            const Icon = iconMap[p.icon];
            return (
              <div
                key={i}
                className="problem-card group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#4CC9F0]/30 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4CC9F0]/10">
                  <Icon size={20} className="text-[#4CC9F0]" />
                </div>
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
