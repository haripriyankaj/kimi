import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    designation: 'VP of Operations',
    company: 'TechScale Inc.',
    quote: 'FlowPilot transformed how we operate. What used to take our team 40 hours a week now runs automatically. The AI actually understands context and makes smart decisions.',
    avatar: '/images/avatar-1.jpg',
    outcome: 'Saved $180K annually',
  },
  {
    id: '2',
    name: 'Michael Torres',
    designation: 'Operations Manager',
    company: 'GrowthLabs',
    quote: 'We evaluated 12 automation platforms. FlowPilot was the only one that required zero engineering resources. Our non-technical team built 30 workflows in the first month.',
    avatar: '/images/avatar-2.jpg',
    outcome: '30 workflows in 30 days',
  },
  {
    id: '3',
    name: 'Elena Volkov',
    designation: 'Founder & CEO',
    company: 'NordicStack',
    quote: 'As a founder, I was doing everything manually. FlowPilot became my operations team. It handles customer onboarding, invoicing, and reporting while I focus on product.',
    avatar: '/images/avatar-3.jpg',
    outcome: 'Reclaimed 25 hrs/week',
  },
  {
    id: '4',
    name: 'James Whitfield',
    designation: 'CTO',
    company: 'Enterprise Solutions Co.',
    quote: 'The security posture is what sold us. SOC 2 certified, GDPR compliant, with full audit trails. We automated our most sensitive financial workflows with complete confidence.',
    avatar: '/images/avatar-4.jpg',
    outcome: '100% compliance maintained',
  },
  {
    id: '5',
    name: 'Aisha Patel',
    designation: 'Director of Customer Success',
    company: 'CloudFirst',
    quote: 'Our support ticket resolution time dropped by 73% in the first quarter. The AI routing is incredibly accurate—it knows exactly which agent should handle each issue.',
    avatar: '/images/avatar-5.jpg',
    outcome: '73% faster resolution',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-container', {
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

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section ref={sectionRef} id="testimonials" className="relative bg-[#03045E] py-24 lg:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(76, 201, 240, 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#4CC9F0]">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px' }}>
            Loved by Operations{' '}
            <span className="text-[#4CC9F0]">Teams</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-container">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-12 transition-all duration-500">
            <Quote size={40} className="text-[#4CC9F0]/30 mb-6" />

            <blockquote className="text-xl lg:text-2xl leading-relaxed text-white/90 mb-8">
              "{t.quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-[#4CC9F0]/30"
                />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-white/50">
                    {t.designation}, {t.company}
                  </div>
                </div>
              </div>

              <div className="rounded-full bg-[#4CC9F0]/10 px-4 py-2 text-sm font-semibold text-[#4CC9F0]">
                {t.outcome}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-[#4CC9F0]/30 hover:text-[#4CC9F0]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-8 bg-[#4CC9F0]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-[#4CC9F0]/30 hover:text-[#4CC9F0]"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
