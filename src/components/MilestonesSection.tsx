import React from 'react';
import { Award, Trophy, Code2, CheckCircle, Users } from 'lucide-react';
import { MILESTONES } from '../data/portfolioData';

export const MilestonesSection: React.FC = () => {
  const getMilestoneIcon = (id: string) => {
    switch (id) {
      case 'meta-cert':
        return <Award className="w-5 h-5 text-[#38bdf8]" />;
      case 'hack-campus':
        return <Trophy className="w-5 h-5 text-[#8b5cf6]" />;
      case 'leetcode':
        return <Code2 className="w-5 h-5 text-[#38bdf8]" />;
      case 'gdsc':
        return <CheckCircle className="w-5 h-5 text-[#10b981]" />;
      case 'coding-club':
        return <Users className="w-5 h-5 text-[#c084fc]" />;
      default:
        return <Award className="w-5 h-5 text-[#8b5cf6]" />;
    }
  };

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/30';
      case 'Finalist':
        return 'bg-[#8b5cf6]/15 text-[#c4e7ff] border-[#8b5cf6]/40';
      case 'Consistent':
        return 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/30';
      case 'Completed':
        return 'bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30';
      case 'Leadership':
        return 'bg-[#a855f7]/15 text-[#e9d5ff] border-[#a855f7]/30';
      default:
        return 'bg-[#1e293b] text-[#94a3b8] border-white/5';
    }
  };

  return (
    <section id="milestones" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-['JetBrains_Mono'] tracking-widest text-[#8b5cf6] font-semibold uppercase flex items-center gap-2">
            <span>06.</span>
            <span>MILESTONES</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#f8fafc]">
            Certifications & Achievements
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#94a3b8] max-w-3xl leading-relaxed">
            Verified continuous learning outside of lecture halls, competitive coding milestones, and campus leadership.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MILESTONES.map((item) => (
            <div
              key={item.id}
              id={`milestone-card-${item.id}`}
              className="bg-[#111827]/80 border border-[#1e293b] hover:border-[#8b5cf6]/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Header with Icon and Status */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1e293b]">
                  <div className="w-10 h-10 rounded-xl bg-[#0b0f19] border border-[#1e293b] flex items-center justify-center group-hover:border-[#8b5cf6]/40 transition-colors">
                    {getMilestoneIcon(item.id)}
                  </div>
                  <span
                    className={`text-[11px] font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full border font-medium ${getStatusBadgeStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Title & Provider */}
                <div className="space-y-1 mb-3">
                  <h3 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-['Inter'] text-[#8b5cf6] font-medium">
                    {item.provider}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm font-['Inter'] text-[#94a3b8] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Meta Footer */}
              <div className="pt-4 border-t border-[#1e293b]/70 flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#64748b]">
                <span>{item.metaLeft}</span>
                {item.metaRight && (
                  <span className="text-[#cbd5e1] font-medium">{item.metaRight}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
