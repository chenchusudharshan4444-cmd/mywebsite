import React from 'react';
import { GraduationCap, FolderGit2, TerminalSquare, Flame, Flag } from 'lucide-react';
import { HIGHLIGHT_STATS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#8b5cf6]" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5 text-[#38bdf8]" />;
      case 'TerminalSquare':
        return <TerminalSquare className="w-5 h-5 text-[#8b5cf6]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#38bdf8]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#8b5cf6]" />;
    }
  };

  const focusTags = [
    'Human-Computer Interaction',
    'Full-Stack Web Engineering',
    'Design Systems',
    'Data Structures in C++',
    'Open Source Collaboration',
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Title */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-['JetBrains_Mono'] tracking-widest text-[#8b5cf6] font-semibold uppercase flex items-center gap-2">
            <span>01.</span>
            <span>ABOUT ME</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#f8fafc]">
            Building Foundations in Systems & Interfaces
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#94a3b8] max-w-3xl leading-relaxed">
            An authentic look at where I am currently in my college journey, what drives my late-night coding sessions, and where I want to go next.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Large Narrative Card */}
          <div
            id="about-profile-card"
            className="lg:col-span-7 bg-[#111827]/80 border border-[#1e293b] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md relative overflow-hidden"
          >
            {/* Subtle corner light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1e293b] gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-[#8b5cf6]" />
                  </div>
                  <span className="font-['Space_Grotesk'] font-bold text-base text-[#f8fafc]">
                    University Student Profile
                  </span>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#94a3b8]">
                  Austin, TX • Open to Remote
                </span>
              </div>

              {/* Narrative paragraphs */}
              <div className="space-y-4 text-sm text-[#cbd5e1] leading-relaxed font-['Inter']">
                <p>
                  I am currently in my <span className="text-[#f8fafc] font-semibold">3rd Semester</span> pursuing a Bachelor of Science in Computer Science & Engineering. My interest began when I modified game configs in high school, which quickly spiraled into writing command-line utilities in C and building web apps.
                </p>
                <p>
                  What makes me unique as an early-stage engineer is that I don't treat aesthetics as an afterthought. I believe the cleanest backend data model is only as effective as the human experience delivering it. When I'm not debugging memory leaks or graph algorithms, I am refining user flows in Figma and participating in campus developer hackathons.
                </p>
              </div>

              {/* Current Focus & Deep Interests */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#64748b]">
                  Current Focus & Deep Interests
                </div>
                <div className="flex flex-wrap gap-2">
                  {focusTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] bg-[#1e293b]/70 border border-white/5 text-[#c4e7ff] hover:border-[#8b5cf6]/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Immediate Career Aspiration Callout */}
            <div className="mt-8 pt-5 border-t border-[#1e293b]">
              <div className="p-4 rounded-xl bg-[#0b0f19]/70 border border-[#8b5cf6]/20 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#8b5cf6]/15 text-[#8b5cf6] shrink-0 mt-0.5">
                  <Flag className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-['Space_Grotesk'] font-bold text-sm text-[#f8fafc]">
                    Immediate Career Aspiration
                  </h4>
                  <p className="text-xs text-[#94a3b8] leading-relaxed font-['Inter']">
                    Seeking a Software Engineering or UI/UX Design Summer 2025 Internship where I can learn inside a fast-paced production team, contribute clean code, and absorb engineering best practices from experienced mentors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Stat Cards in 2x2 Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHT_STATS.map((stat) => (
              <div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                className="bg-[#111827]/80 border border-[#1e293b] hover:border-[#8b5cf6]/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b0f19] border border-[#1e293b] flex items-center justify-center group-hover:border-[#38bdf8]/40 transition-colors">
                    {getStatIcon(stat.icon)}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-['Space_Grotesk'] font-semibold text-[#cbd5e1]">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#64748b] font-['Inter']">
                    {stat.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
