import { useState, useEffect, useRef } from 'react';
import { DollarSign, Users, Clock, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(50);
  const sectionRef = useRef<HTMLElement>(null);

  const monthlySavings = teamSize * hoursPerWeek * 4.33 * hourlyRate * 0.6;
  const annualSavings = monthlySavings * 12;
  const efficiencyGain = Math.min(60 + (hoursPerWeek * 1.5), 95);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.calc-panel', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="roi" className="relative bg-[#03045E] py-24 lg:py-32">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(76, 201, 240, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#4CC9F0]">
            ROI Calculator
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px' }}>
            Calculate Your{' '}
            <span className="text-[#4CC9F0]">Savings</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Inputs Panel */}
          <div className="calc-panel rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Your Team</h3>

            <div className="space-y-8">
              {/* Team Size */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Users size={16} className="text-[#4CC9F0]" />
                    Team Size
                  </div>
                  <span className="text-lg font-bold text-[#4CC9F0]">{teamSize} people</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none bg-white/10 cursor-pointer accent-[#4CC9F0]"
                />
                <div className="flex justify-between mt-1 text-xs text-white/30">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Hours per week */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Clock size={16} className="text-[#4CC9F0]" />
                    Hours Spent Weekly on Manual Tasks
                  </div>
                  <span className="text-lg font-bold text-[#4CC9F0]">{hoursPerWeek} hrs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none bg-white/10 cursor-pointer accent-[#4CC9F0]"
                />
                <div className="flex justify-between mt-1 text-xs text-white/30">
                  <span>1 hr</span>
                  <span>40 hrs</span>
                </div>
              </div>

              {/* Hourly Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <DollarSign size={16} className="text-[#4CC9F0]" />
                    Average Hourly Rate
                  </div>
                  <span className="text-lg font-bold text-[#4CC9F0]">${hourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="200"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none bg-white/10 cursor-pointer accent-[#4CC9F0]"
                />
                <div className="flex justify-between mt-1 text-xs text-white/30">
                  <span>$15</span>
                  <span>$200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="calc-panel rounded-2xl border border-[#4CC9F0]/20 bg-[#4CC9F0]/5 p-8">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <TrendingUp size={18} className="text-[#4CC9F0]" />
              Your Projected Savings
            </h3>

            <div className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6">
                <div className="text-sm text-white/50 mb-2">Monthly Savings</div>
                <div className="text-4xl font-bold text-[#4CC9F0]">
                  ${monthlySavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6">
                <div className="text-sm text-white/50 mb-2">Annual Savings</div>
                <div className="text-4xl font-bold text-white">
                  ${annualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6">
                <div className="text-sm text-white/50 mb-2">Efficiency Improvement</div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-green-400">
                    {efficiencyGain.toFixed(0)}%
                  </div>
                  <div className="flex-1 h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#4CC9F0] to-green-400 transition-all duration-500"
                      style={{ width: `${efficiencyGain}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-4 text-center">
                <p className="text-sm text-green-400">
                  With FlowPilot, you could recover{' '}
                  <span className="font-bold">
                    {Math.floor((hoursPerWeek * 0.6))} hours
                  </span>{' '}
                  per employee every week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
