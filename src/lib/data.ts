import type { Feature, UseCase, Testimonial, PricingTier, FAQItem, NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Product', href: '#features' },
  { label: 'Features', href: '#showcase' },
  { label: 'Solutions', href: '#usecases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_METRICS = [
  { value: 25000, suffix: '+', label: 'Workflows Automated' },
  { value: 500, suffix: '+', label: 'Businesses' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 15, suffix: 'M+', label: 'Hours Saved' },
];

export const FEATURES: Feature[] = [
  {
    id: 'natural-language',
    icon: 'MessageSquare',
    title: 'Natural Language Automation',
    description: 'Describe your workflow in plain English. Our AI engine parses intent and generates complete automation logic.',
    benefit: 'No coding required—just describe what you need.',
  },
  {
    id: 'multi-app',
    icon: 'Plug',
    title: 'Multi-App Integration',
    description: 'Connect 200+ apps including Salesforce, HubSpot, Slack, Gmail, QuickBooks, and more with one-click integrations.',
    benefit: 'Unified workflows across your entire tech stack.',
  },
  {
    id: 'ai-decision',
    icon: 'Brain',
    title: 'AI Decision Engine',
    description: 'Smart routing, conditional logic, and exception handling powered by machine learning that improves over time.',
    benefit: 'Intelligent decisions that get smarter with every run.',
  },
  {
    id: 'monitoring',
    icon: 'Activity',
    title: 'Real-Time Monitoring',
    description: 'Watch your workflows execute in real-time. Track performance, catch errors, and optimize on the fly.',
    benefit: 'Full visibility into every automated process.',
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    title: 'Analytics Dashboard',
    description: 'Comprehensive reporting on time saved, costs reduced, and efficiency gains across all your workflows.',
    benefit: 'Data-driven insights to optimize operations.',
  },
  {
    id: 'security',
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified, GDPR compliant, with end-to-end encryption and role-based access controls.',
    benefit: 'Bank-grade security for your business data.',
  },
];

export const USE_CASES: UseCase[] = [
  {
    id: 'customer-support',
    title: 'Customer Support Automation',
    problem: 'Support teams drowning in repetitive tickets, manual routing, and delayed responses.',
    solution: 'FlowPilot auto-categorizes, routes, and resolves common tickets while escalating complex issues intelligently.',
    outcome: '73% reduction in first-response time',
    image: '/images/usecase-support.jpg',
    metric: '73% faster',
  },
  {
    id: 'sales-ops',
    title: 'Sales Operations',
    problem: 'Sales reps waste hours on data entry, lead scoring, and follow-up scheduling.',
    solution: 'Automated lead enrichment, scoring, CRM updates, and personalized outreach sequences.',
    outcome: '2.5x more pipeline generated',
    image: '/images/usecase-sales.jpg',
    metric: '2.5x pipeline',
  },
  {
    id: 'hr-onboarding',
    title: 'HR Onboarding',
    problem: 'Manual onboarding creates inconsistent experiences and compliance gaps.',
    solution: 'End-to-end automated onboarding: document collection, system provisioning, training schedules, and compliance checks.',
    outcome: '90% reduction in onboarding time',
    image: '/images/usecase-hr.jpg',
    metric: '90% faster',
  },
  {
    id: 'invoice-processing',
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

export const TESTIMONIALS: Testimonial[] = [
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

export const PRICING_TIERS: PricingTier[] = [
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

export const FAQ_ITEMS: FAQItem[] = [
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

export const SOLUTION_STEPS = [
  {
    number: '01',
    title: 'Describe Your Workflow',
    description: 'Tell FlowPilot what you want automated in plain English. No technical jargon needed.',
  },
  {
    number: '02',
    title: 'AI Builds Automation',
    description: 'Our AI engine generates the complete workflow, integrates your apps, and sets up the logic.',
  },
  {
    number: '03',
    title: 'Monitor & Optimize',
    description: 'Track performance, receive optimization suggestions, and watch efficiency gains in real-time.',
  },
];

export const PROBLEM_CARDS = [
  {
    icon: 'FileText',
    title: 'Manual Data Entry',
    description: 'Teams spend 8+ hours per week copying data between systems.',
  },
  {
    icon: 'RotateCcw',
    title: 'Repetitive Approvals',
    description: 'Approval chains get lost in email threads, causing delays.',
  },
  {
    icon: 'Table',
    title: 'Spreadsheet Chaos',
    description: 'Critical business data trapped in disconnected spreadsheets.',
  },
  {
    icon: 'Clock',
    title: 'Delayed Reporting',
    description: 'Manual report compilation takes days, not minutes.',
  },
  {
    icon: 'ArrowLeftRight',
    title: 'Context Switching',
    description: 'Employees toggle between 10+ apps, destroying productivity.',
  },
];
