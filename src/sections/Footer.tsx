import { Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Solutions: [
    { label: 'Customer Support', href: '#usecases' },
    { label: 'Sales Operations', href: '#usecases' },
    { label: 'HR Onboarding', href: '#usecases' },
    { label: 'Invoice Processing', href: '#usecases' },
    { label: 'Reporting', href: '#usecases' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Help Center', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
    { label: 'Press Kit', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '#trust' },
  ],
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#02024a] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4CC9F0]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#03045E" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">
                FlowPilot<span className="text-[#4CC9F0]"> AI</span>
              </span>
            </a>
            <p className="text-sm text-white/50 mb-4 max-w-xs">
              Intelligent workflow automation for modern businesses. Backed by Y Combinator.
            </p>
            {/* YC Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 mb-6">
              <div className="h-5 w-5 rounded bg-[#FF6600] flex items-center justify-center">
                <span className="text-xs font-bold text-white">Y</span>
              </div>
              <span className="text-xs font-medium text-white/60">Backed by Y Combinator</span>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-[#4CC9F0]/30 hover:text-[#4CC9F0]"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-[#4CC9F0]/30 hover:text-[#4CC9F0]"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-[#4CC9F0]/30 hover:text-[#4CC9F0]"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-white/40 transition-colors hover:text-[#4CC9F0]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2024 FlowPilot AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/30">SOC 2 Type II</span>
            <span className="text-xs text-white/30">GDPR</span>
            <span className="text-xs text-white/30">ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
