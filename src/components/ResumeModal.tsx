import React from 'react';
import { X, Printer, Download, GraduationCap, Code2, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0f172a] border border-[#334155] rounded-2xl shadow-2xl shadow-black p-6 sm:p-10 text-[#f8fafc]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#334155]">
          <div className="flex items-center gap-2">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#38bdf8] bg-[#38bdf8]/10 px-2.5 py-1 rounded-full border border-[#38bdf8]/20">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-xs font-['Space_Grotesk'] font-medium text-[#cbd5e1] hover:text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:brightness-110 text-xs font-['Space_Grotesk'] font-bold text-white transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1e293b] text-[#94a3b8] hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="space-y-6 text-[#cbd5e1] font-['Inter']">
          {/* Header */}
          <div className="border-b border-[#334155] pb-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 className="font-['Space_Grotesk'] text-3xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-['Space_Grotesk'] text-sm text-[#38bdf8] font-medium mt-0.5">
                Computer Science Undergraduate • Systems & Frontend Developer
              </p>
            </div>
            <div className="mt-3 sm:mt-0 text-xs font-['JetBrains_Mono'] text-[#94a3b8] space-y-0.5 sm:text-right">
              <div>{PERSONAL_INFO.email}</div>
              <div>{PERSONAL_INFO.linkedin}</div>
              <div>{PERSONAL_INFO.github}</div>
              <div>{PERSONAL_INFO.location}</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider text-[#8b5cf6] flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="bg-[#1e293b]/50 p-4 rounded-xl border border-[#334155]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="font-['Space_Grotesk'] font-bold text-sm text-white">
                  {PERSONAL_INFO.university}
                </div>
                <div className="text-xs text-[#cbd5e1]">
                  {PERSONAL_INFO.degree} • Sophomore (3rd Semester)
                </div>
              </div>
              <div className="text-right font-['JetBrains_Mono'] text-xs text-[#94a3b8]">
                <div className="text-[#38bdf8] font-bold">GPA: {PERSONAL_INFO.gpa}</div>
                <div>Aug 2023 - May 2027</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider text-[#8b5cf6] flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="bg-[#1e293b]/50 p-4 rounded-xl border border-[#334155]/60 space-y-2 text-xs">
              <div>
                <span className="font-semibold text-white">Languages:</span> C++, C, Python, JavaScript (ES6+), TypeScript, Java (Basic)
              </div>
              <div>
                <span className="font-semibold text-white">Frameworks & Web:</span> React.js, Tailwind CSS, HTML5/CSS3, Node.js, Express, Chart.js
              </div>
              <div>
                <span className="font-semibold text-white">Databases & Cloud:</span> SQLite, Firebase / Firestore, REST APIs, Vercel
              </div>
              <div>
                <span className="font-semibold text-white">Design & Tools:</span> Figma (Auto-Layout, Design Systems), Git & GitHub, Linux/Bash, VS Code
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider text-[#8b5cf6] flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Key Projects</span>
            </h2>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#1e293b]/40 border border-[#334155]/60 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-['Space_Grotesk'] font-bold text-white">
                    CampusPulse — College Event & Club Hub
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#38bdf8]">
                    React, Tailwind CSS, Firebase
                  </span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Engineered full responsive portal for 40+ student clubs. Integrated Firestore realtime listeners, multi-filter event categorizer, and automated RSVP reminder feeds. Top 10 finalist at HackCampus 2024.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1e293b]/40 border border-[#334155]/60 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-['Space_Grotesk'] font-bold text-white">
                    UniGrade — Academic Records Management System
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#38bdf8]">
                    Python, SQLite, Flask
                  </span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Designed 3NF normalized relational database schema with SQLite. Created weighted GPA calculation engine and clean UI to simulate required final exam grades to hit academic goals.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1e293b]/40 border border-[#334155]/60 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-['Space_Grotesk'] font-bold text-white">
                    FinTrack — Personal Student Expense Tracker
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#38bdf8]">
                    JavaScript, Chart.js, Tailwind
                  </span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Developed interactive cash-flow dashboard with SVG doughnut visualizations, local storage schemas with JSON export backups, and automated weekly burn rate warnings.
                </p>
              </div>
            </div>
          </div>

          {/* Honors & Activities */}
          <div className="space-y-2">
            <h2 className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider text-[#8b5cf6] flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Honors & Leadership</span>
            </h2>
            <ul className="list-disc list-inside text-xs space-y-1 text-[#94a3b8]">
              <li><span className="text-[#cbd5e1] font-medium">Dean's Honor List:</span> Fall 2023 & Spring 2024 (Awarded for maintaining &gt;3.75 GPA)</li>
              <li><span className="text-[#cbd5e1] font-medium">HackCampus 2024 Top 10 Finalist:</span> Built CampusPulse in 36-hr intercollegiate competition</li>
              <li><span className="text-[#cbd5e1] font-medium">Technical Committee Member:</span> University Coding Club — conducting Git & DSA mentoring</li>
              <li><span className="text-[#cbd5e1] font-medium">200+ Competitive Problems Solved:</span> Two pointers, trees, and linked list patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
