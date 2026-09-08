import React, { useState, useEffect } from 'react';
import { Download, Terminal, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'academics', 'journey', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#academics', id: 'academics' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f19]/85 backdrop-blur-md border-b border-[#1e293b]/70 py-3 shadow-lg shadow-black/30'
          : 'bg-[#0b0f19]/40 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Handle */}
        <a
          href="#hero"
          id="nav-logo"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#111827] border border-[#1e293b] flex items-center justify-center text-[#8b5cf6] group-hover:border-[#8b5cf6]/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
            <Terminal className="w-4 h-4 text-[#8b5cf6]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk'] font-bold text-base text-[#f8fafc] tracking-tight group-hover:text-[#38bdf8] transition-colors">
                Alex Chen
              </span>
            </div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#94a3b8] -mt-0.5 tracking-wider">
              {PERSONAL_INFO.navHandle}
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-[#111827]/70 border border-[#1e293b] rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              id={`nav-link-${link.id}`}
              className={`px-3.5 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-[#f8fafc] bg-[#1e293b] shadow-sm font-semibold'
                  : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e293b]/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Resume & Avatar */}
        <div className="flex items-center gap-3">
          <button
            id="download-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-2 text-xs sm:text-sm font-['Space_Grotesk'] font-medium bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:brightness-110 text-white px-3.5 sm:px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>

          {/* Profile mini avatar with pulse */}
          <div className="relative group cursor-pointer" onClick={onOpenResume} title="Alex Rivera Profile">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#8b5cf6]/50 p-0.5 bg-[#111827]">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt="Alex Rivera"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10b981] ring-2 ring-[#0b0f19] animate-pulse" />
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#111827] border border-[#1e293b] text-[#94a3b8] hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="md:hidden bg-[#0b0f19]/95 border-b border-[#1e293b] px-4 py-4 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                activeSection === link.id
                  ? 'bg-[#1e293b] text-[#38bdf8] font-semibold'
                  : 'text-[#94a3b8] hover:bg-[#111827] hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
