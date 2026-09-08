import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1e293b] bg-[#0b0f19] pt-12 pb-16 text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#111827] border border-[#1e293b] flex items-center justify-center text-[#8b5cf6]">
              <Terminal className="w-4 h-4 text-[#8b5cf6]" />
            </div>
            <div>
              <div className="font-['Space_Grotesk'] font-bold text-sm text-[#f8fafc]">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] font-['JetBrains_Mono'] text-[#64748b]">
                {PERSONAL_INFO.university} • Class of 2027
              </div>
            </div>
          </div>

          {/* Center: System Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#1e293b] text-[11px] font-['JetBrains_Mono'] text-[#cbd5e1]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>ONLINE • DEV_BUILD: 2024.10_SEMESTER_03</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={`https://${PERSONAL_INFO.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111827] border border-[#1e293b] text-[#94a3b8] hover:text-[#f8fafc] hover:border-white/20 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`https://${PERSONAL_INFO.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111827] border border-[#1e293b] text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-[#111827] border border-[#1e293b] text-[#94a3b8] hover:text-[#8b5cf6] hover:border-[#8b5cf6]/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#111827] border border-[#1e293b] text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors cursor-pointer"
              title="Return to top"
              aria-label="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1e293b]/70 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-2 font-['Inter']">
          <p>© {new Date().getFullYear()} Alex Rivera. Crafted with React, Tailwind CSS, & TypeScript.</p>
          <p className="font-['JetBrains_Mono'] text-[11px]">3rd_Semester_CS_Portfolio.v3.2</p>
        </div>
      </div>
    </footer>
  );
};
