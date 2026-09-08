import React from 'react';
import { Sparkles, GitCommit } from 'lucide-react';
import { JOURNEY_PHASES } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-['JetBrains_Mono'] tracking-widest text-[#8b5cf6] font-semibold uppercase flex items-center gap-2">
            <span>05.</span>
            <span>GROWTH STORY</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#f8fafc]">
            My Learning Journey
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#94a3b8] max-w-3xl leading-relaxed">
            From zero programming knowledge to designing distributed college web utilities. Each phase represents deliberate curiosity and practical milestones.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative border-l-2 border-[#1e293b] ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
          {JOURNEY_PHASES.map((item, idx) => (
            <div
              key={idx}
              id={`journey-phase-${idx + 1}`}
              className="relative group"
            >
              {/* Node Icon on Timeline */}
              <div
                className={`absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${
                  item.isActive
                    ? 'bg-[#8b5cf6] border-[#0b0f19] shadow-[0_0_15px_#8b5cf6]'
                    : 'bg-[#111827] border-[#334155] group-hover:border-[#8b5cf6]'
                }`}
              >
                {item.isActive ? (
                  <Sparkles className="w-3 h-3 text-white" />
                ) : (
                  <GitCommit className="w-3 h-3 text-[#94a3b8]" />
                )}
              </div>

              {/* Phase Card */}
              <div
                className={`p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md ${
                  item.isActive
                    ? 'bg-[#111827]/90 border-[#8b5cf6]/50 shadow-xl shadow-[#8b5cf6]/10 ring-1 ring-[#8b5cf6]/30'
                    : 'bg-[#111827]/70 border-[#1e293b] hover:border-[#38bdf8]/40 shadow-lg hover:-translate-y-0.5'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#8b5cf6]">
                      {item.phase}
                    </span>
                    <span className="text-[#64748b]">•</span>
                    <span className="text-xs font-['JetBrains_Mono'] text-[#94a3b8]">
                      {item.year}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full ${
                      item.isActive
                        ? 'bg-[#8b5cf6]/20 text-[#c4e7ff] font-semibold border border-[#8b5cf6]/40 animate-pulse-subtle'
                        : 'bg-[#1e293b] text-[#94a3b8]'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-[#f8fafc] mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {item.title}
                </h3>

                <p className="font-['Inter'] text-sm text-[#94a3b8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
