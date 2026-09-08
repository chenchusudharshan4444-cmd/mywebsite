import React from 'react';
import { Award, BookOpen, Clock, Binary, Cpu, Database, Layers, Globe, Server } from 'lucide-react';
import { PERSONAL_INFO, COURSEWORK, TRAJECTORY } from '../data/portfolioData';

export const AcademicsSection: React.FC = () => {
  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary':
        return <Binary className="w-4 h-4 text-[#8b5cf6]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#38bdf8]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#8b5cf6]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#38bdf8]" />;
      case 'Globe':
        return <Globe className="w-4 h-4 text-[#8b5cf6]" />;
      case 'Server':
        return <Server className="w-4 h-4 text-[#38bdf8]" />;
      default:
        return <BookOpen className="w-4 h-4 text-[#8b5cf6]" />;
    }
  };

  return (
    <section id="academics" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-['JetBrains_Mono'] tracking-widest text-[#8b5cf6] font-semibold uppercase flex items-center gap-2">
            <span>04.</span>
            <span>ACADEMICS</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#f8fafc]">
            Education & Coursework
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#94a3b8] max-w-3xl leading-relaxed">
            Formal university foundations balancing mathematical theory with software engineering practicals.
          </p>
        </div>

        {/* 2 Major Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: University & Coursework Details */}
          <div
            id="academics-main-card"
            className="lg:col-span-7 bg-[#111827]/80 border border-[#1e293b] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md relative"
          >
            <div className="space-y-6">
              {/* Header Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#1e293b]">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[10px] font-['JetBrains_Mono'] text-[#c4e7ff] uppercase">
                    <span>Currently Enrolled • Semester 3</span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#f8fafc]">
                    {PERSONAL_INFO.degree}
                  </h3>
                  <p className="text-xs font-['Inter'] text-[#94a3b8]">
                    {PERSONAL_INFO.university} • Aug 2023 - {PERSONAL_INFO.expectedGraduation}
                  </p>
                </div>

                {/* GPA Badge */}
                <div className="p-3 rounded-xl bg-[#0b0f19] border border-[#1e293b] text-center shrink-0">
                  <div className="text-xl font-bold font-['Space_Grotesk'] text-[#38bdf8]">
                    {PERSONAL_INFO.gpa}
                  </div>
                  <div className="text-[10px] text-[#64748b] font-['JetBrains_Mono']">
                    Cumulative GPA
                  </div>
                </div>
              </div>

              {/* Coursework Grid */}
              <div className="space-y-3">
                <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#64748b]">
                  Relevant Coursework Completed & In-Progress
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COURSEWORK.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#0b0f19]/70 border border-[#1e293b] hover:border-[#8b5cf6]/30 transition-colors flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-[#111827] border border-[#1e293b] shrink-0 mt-0.5">
                        {getCourseIcon(course.iconName)}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-['Space_Grotesk'] font-bold text-[#f8fafc]">
                          {course.title}
                        </div>
                        <div className="text-[11px] font-['Inter'] text-[#64748b]">
                          {course.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Honors Badges */}
            <div className="mt-8 pt-6 border-t border-[#1e293b] flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1e293b]/60 border border-white/5 text-xs text-[#cbd5e1]">
                <Award className="w-4 h-4 text-[#f59e0b]" />
                <span>Dean's Honor List (Fall 2023, Spring 2024)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1e293b]/60 border border-white/5 text-xs text-[#cbd5e1]">
                <BookOpen className="w-4 h-4 text-[#38bdf8]" />
                <span>ACM Student Chapter Active Member</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Trajectory */}
          <div
            id="academics-trajectory-card"
            className="lg:col-span-5 bg-[#111827]/80 border border-[#1e293b] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1e293b]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-[#0b0f19] border border-[#1e293b]">
                    <Clock className="w-4 h-4 text-[#8b5cf6]" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] font-bold text-base text-[#f8fafc]">
                    Academic Trajectory
                  </h3>
                </div>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#64748b]">
                  4-year timeline
                </span>
              </div>

              {/* Trajectory Items */}
              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1e293b]">
                {TRAJECTORY.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle on the line */}
                    <div
                      className={`absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                        item.isCurrent
                          ? 'bg-[#8b5cf6] border-[#0b0f19] shadow-[0_0_10px_#8b5cf6]'
                          : 'bg-[#111827] border-[#64748b]'
                      }`}
                    />

                    <div
                      className={`p-3.5 rounded-xl border transition-all ${
                        item.isCurrent
                          ? 'bg-[#8b5cf6]/10 border-[#8b5cf6]/40 shadow-lg'
                          : 'bg-[#0b0f19]/60 border-[#1e293b]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-['Space_Grotesk'] text-xs font-bold text-[#f8fafc]">
                          {item.semester}
                        </span>
                        <span
                          className={`text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded-full ${
                            item.isCurrent
                              ? 'bg-[#8b5cf6]/30 text-[#c4e7ff] font-semibold'
                              : 'text-[#64748b]'
                          }`}
                        >
                          {item.term}
                        </span>
                      </div>
                      <div className="text-xs font-['Space_Grotesk'] font-medium text-[#cbd5e1] mb-1">
                        {item.courses}
                      </div>
                      <div className="text-[11px] font-['Inter'] text-[#94a3b8]">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Grad Footer Banner */}
            <div className="mt-6 pt-4 border-t border-[#1e293b] flex items-center justify-between text-xs font-['JetBrains_Mono']">
              <span className="text-[#64748b]">Expected Graduation:</span>
              <span className="text-[#38bdf8] font-bold">{PERSONAL_INFO.expectedGraduation}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
