export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefit: string;
}

export interface UseCase {
  id: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  metric: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  avatar: string;
  outcome: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
