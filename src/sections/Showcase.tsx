import { useState, useEffect, useRef } from 'react';
import {
  Workflow,
  BarChart3,
  Settings,
  Zap,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    id: 'builder',
    label: 'Workflow Builder',
    icon: Workflow,
    description: 'Visual drag-and-drop interface with AI-assisted workflow creation.',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    description: 'Real-time dashboards tracking efficiency, cost savings, and ROI.',
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: Settings,
    description: '200+ pre-built connectors to your favorite business tools.',
  },
  {
    id: 'automation',
    label: 'AI Engine',
    icon: Zap,
    description: 'Self-learning automation that improves with every execution.',
  },
];

const workflowNodes = [
  { id: 'trigger', label: 'Email Received', type: 'trigger', x: 10, y: 50 },
  { id: 'parse', label: 'Parse Content', type: 'action', x: 30, y: 30 },
  { id: 'decision', label: 'AI Classify', type: 'decision', x: 50, y: 50 },
  { id: 'crm', label: 'Update CRM', type: 'action', x: 70, y: 25 },
  { id: 'notify', label: 'Send Alert', type: 'action', x: 70, y: 75 },
  { id: 'report', label: 'Log Report', type: 'end', x: 90, y: 50 },
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('builder');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.showcase-content', {
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

  const activeTabData = tabs.find((t) => t.id === activeTab);

  return (
    <section ref={sectionRef} id="showcase" className="relative bg-[#03045E] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#4CC9F0]">
            Product
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px' }}>
            See FlowPilot in{' '}
            <span className="text-[#4CC9F0]">Action</span>
          </h2>
        </div>

        <div className="showcase-content">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#4CC9F0] text-[#03045E]'
                      : 'border border-white/10 text-white/60 hover:border-[#4CC9F0]/30 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Description */}
          <div className="text-center mb-8">
            <p className="text-white/50">{activeTabData?.description}</p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative rounded-2xl border border-white/10 bg-[#020338] overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="text-xs font-mono text-white/30">
                flowpilot.ai/dashboard
              </div>
            </div>

            <div className="grid lg:grid-cols-[240px_1fr]">
              {/* Sidebar */}
              <div className="hidden lg:block border-r border-white/10 p-4">
                <div className="space-y-1">
                  {['Projects', 'Data Sources', 'Automation Studio', 'Analytics'].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                        i === 1 ? 'bg-[#4CC9F0]/10 text-[#4CC9F0]' : 'text-white/40'
                      }`}
                    >
                      <div className={`h-2 w-2 rounded-full ${i === 1 ? 'bg-[#4CC9F0]' : 'bg-white/20'}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6">
                {activeTab === 'builder' && (
                  <div className="relative h-[400px]">
                    <div className="absolute inset-0">
                      {/* SVG Connections */}
                      <svg className="absolute inset-0 w-full h-full">
                        <defs>
                          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#4CC9F0" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#4CC9F0" stopOpacity="0.1" />
                          </linearGradient>
                        </defs>
                        {/* Animated flow lines */}
                        <path
                          d="M 60 200 Q 180 120, 300 200"
                          fill="none"
                          stroke="url(#lineGrad)"
                          strokeWidth="2"
                          strokeDasharray="8 4"
                          className="animate-pulse"
                        />
                        <path
                          d="M 340 200 Q 460 100, 580 150"
                          fill="none"
                          stroke="url(#lineGrad)"
                          strokeWidth="2"
                          strokeDasharray="8 4"
                          className="animate-pulse"
                          style={{ animationDelay: '0.3s' }}
                        />
                        <path
                          d="M 340 200 Q 460 300, 580 250"
                          fill="none"
                          stroke="url(#lineGrad)"
                          strokeWidth="2"
                          strokeDasharray="8 4"
                          className="animate-pulse"
                          style={{ animationDelay: '0.6s' }}
                        />
                        <path
                          d="M 620 150 Q 720 200, 820 200"
                          fill="none"
                          stroke="url(#lineGrad)"
                          strokeWidth="2"
                          strokeDasharray="8 4"
                          className="animate-pulse"
                          style={{ animationDelay: '0.9s' }}
                        />
                        <path
                          d="M 620 250 Q 720 200, 820 200"
                          fill="none"
                          stroke="url(#lineGrad)"
                          strokeWidth="2"
                          strokeDasharray="8 4"
                          className="animate-pulse"
                          style={{ animationDelay: '1.2s' }}
                        />
                      </svg>

                      {/* Nodes */}
                      {workflowNodes.map((node, i) => (
                        <div
                          key={node.id}
                          className="absolute flex flex-col items-center"
                          style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                        >
                          <div
                            className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                              node.type === 'trigger'
                                ? 'border-[#4CC9F0]/40 bg-[#4CC9F0]/10'
                                : node.type === 'decision'
                                ? 'border-yellow-400/30 bg-yellow-400/10'
                                : node.type === 'end'
                                ? 'border-green-400/30 bg-green-400/10'
                                : 'border-white/10 bg-white/5'
                            }`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                          >
                            {node.type === 'trigger' && <Zap size={14} className="text-[#4CC9F0]" />}
                            {node.type === 'action' && <ArrowRight size={14} className="text-white/60" />}
                            {node.type === 'decision' && <Settings size={14} className="text-yellow-400" />}
                            {node.type === 'end' && <CheckCircle2 size={14} className="text-green-400" />}
                            <span className="text-xs font-mono text-white/80 whitespace-nowrap">
                              {node.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Efficiency', value: '93.7%', color: '#4CC9F0' },
                        { label: 'Cost Saved', value: '$48.2K', color: '#00B4D8' },
                        { label: 'Uptime', value: '99.99%', color: '#0096C7' },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                          <div className="text-xs text-white/40 mb-1">{stat.label}</div>
                          <div className="text-2xl font-bold" style={{ color: stat.color }}>
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Chart bars */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                      <div className="text-xs text-white/40 mb-4">Workflow Executions (Last 30 Days)</div>
                      <div className="flex items-end gap-2 h-32">
                        {[35, 52, 45, 68, 55, 72, 80, 65, 78, 85, 90, 95].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm bg-[#4CC9F0]/30 transition-all hover:bg-[#4CC9F0]/50"
                            style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-[10px] text-white/30">
                        <span>Day 1</span>
                        <span>Day 15</span>
                        <span>Day 30</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'integrations' && (
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                    {[
                      'Salesforce', 'HubSpot', 'Slack', 'Gmail', 'Stripe',
                      'QuickBooks', 'Zendesk', 'Notion', 'Airtable', 'Zapier',
                      'Shopify', 'Twilio',
                    ].map((app, i) => (
                      <div
                        key={app}
                        className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-[#4CC9F0]/30 hover:bg-white/[0.06]"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#4CC9F0]/20 to-[#0096C7]/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-[#4CC9F0]">
                            {app.charAt(0)}
                          </span>
                        </div>
                        <span className="text-[10px] text-white/50 text-center">{app}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'automation' && (
                  <div className="space-y-4">
                    <div className="rounded-xl border border-[#4CC9F0]/20 bg-[#4CC9F0]/5 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-8 rounded-full bg-[#4CC9F0]/20 flex items-center justify-center">
                          <Zap size={16} className="text-[#4CC9F0]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">AI Engine Status</div>
                          <div className="text-xs text-[#4CC9F0]">Active • Learning</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {[
                          { label: 'Pattern Recognition', val: 94 },
                          { label: 'Decision Accuracy', val: 99.2 },
                          { label: 'Optimization Rate', val: 87 },
                        ].map((metric) => (
                          <div key={metric.label}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white/60">{metric.label}</span>
                              <span className="text-[#4CC9F0]">{metric.val}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-[#4CC9F0] transition-all duration-1000"
                                style={{ width: `${metric.val}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <Clock size={16} className="text-[#4CC9F0] mb-2" />
                        <div className="text-lg font-bold text-white">2.4s</div>
                        <div className="text-xs text-white/40">Avg. execution time</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <CheckCircle2 size={16} className="text-green-400 mb-2" />
                        <div className="text-lg font-bold text-white">99.7%</div>
                        <div className="text-xs text-white/40">Success rate</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
