import { useEffect, useRef, useState } from 'react';
import { TRUST_METRICS } from '@/lib/data';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {count.toLocaleString()}
        <span className="text-[#4CC9F0]">{suffix}</span>
      </div>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#03045E]/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {TRUST_METRICS.map((metric) => (
            <div key={metric.label} className="text-center">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <div className="mt-2 text-sm text-white/50 sm:text-base">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
