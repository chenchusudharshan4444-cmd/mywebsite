import React from 'react';
import { Code, Globe, PenTool, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (badgeType: string) => {
    switch (badgeType) {
      case 'Core':
        return <Code className="w-4 h-4 text-[#8b5cf6]" />;
      case 'Frontend':
        return <Globe className="w-4 h-4 text-[#38bdf8]" />;
      case 'Design':
        return <PenTool className="w-4 h-4 text-[#c084fc]" />;
      case 'DevOps':
        return <Terminal className="w-4 h-4 text-[#34d399]" />;
      default:
        return <Code className="w-4 h-4 text-[#8b5cf6]" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-['JetBrains_Mono'] tracking-widest text-[#8b5cf6] font-semibold uppercase flex items-center gap-2">
            <span>02.</span>
            <span>TECHNICAL TOOLKIT</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#f8fafc]">
            Skills & Competencies
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#94a3b8] max-w-3xl leading-relaxed">
            Categorized transparency by depth. No fabricated 100% mastery bars—just honest classifications of what I can build with and what I am actively expanding.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              id={`skill-card-${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-[#111827]/80 border border-[#1e293b] hover:border-[#8b5cf6]/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1e293b]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-md bg-[#0b0f19] border border-[#1e293b]">
                      {getCategoryIcon(cat.badgeType)}
                    </div>
                    <h3 className="font-['Space_Grotesk'] font-bold text-base text-[#f8fafc]">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 rounded-full bg-[#1e293b] text-[#94a3b8] border border-white/5 font-medium">
                    {cat.badge}
                  </span>
                </div>

                {/* Skill items */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-['Space_Grotesk'] text-sm font-semibold text-[#f1f5f9] group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded-full font-medium ${
                            skill.status === 'Proficient'
                              ? 'bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20'
                              : 'bg-[#64748b]/15 text-[#94a3b8] border border-white/5'
                          }`}
                        >
                          {skill.status}
                        </span>
                      </div>
                      <p className="text-xs font-['Inter'] text-[#64748b]">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-[#1e293b]/70 flex items-center justify-center">
                <span className="text-[11px] font-['JetBrains_Mono'] tracking-wide text-[#64748b] group-hover:text-[#94a3b8] transition-colors">
                  {cat.footerText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
