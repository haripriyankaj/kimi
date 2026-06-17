import { useEffect, useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#03045E]/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4CC9F0]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  fill="#03045E"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              FlowPilot<span className="text-[#4CC9F0]"> AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-white/70 transition-colors hover:text-[#4CC9F0]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 lg:flex">
            <button
              onClick={() => scrollToSection('#contact')}
              className="rounded-full bg-[#4CC9F0] px-5 py-2.5 text-sm font-semibold text-[#03045E] transition-all duration-300 btn-glow"
            >
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="rounded-lg p-2 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-white/10 bg-[#03045E]/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full rounded-lg px-3 py-3 text-left text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-[#4CC9F0]"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-4 w-full rounded-full bg-[#4CC9F0] px-5 py-3 text-sm font-semibold text-[#03045E]"
            >
              Book Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
