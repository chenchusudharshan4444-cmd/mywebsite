import React, { useState } from 'react';
import { ArrowDownRight, Play, Code2, Sparkles, Layers, Terminal as TerminalIcon, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume: _onOpenResume }) => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '// 6 repos deployed, seeking summer SDE intern role',
    '// Type "help" or click suggestions below to explore terminal mode',
  ]);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = '';

    switch (trimmed) {
      case 'help':
        response = 'Available commands: about, skills, projects, academics, gpa, contact, clear';
        break;
      case 'about':
        response = 'Alex Rivera: 3rd Sem CS Sophomore @ University Institute of Technology, Austin TX. Focus: Systems & UI/UX.';
        break;
      case 'skills':
        response = 'Languages: C++, C, Python, Java | Web: React, JS, Tailwind, HTML/CSS | Design: Figma, Prototyping';
        break;
      case 'projects':
        response = 'Projects: CampusPulse (01), FinTrack (02), UniGrade (03), SkyCast (04), TaskFlow (05), MindEase (06)';
        break;
      case 'academics':
      case 'gpa':
        response = 'Cumulative GPA: 3.8 / 4.0 | Dean\'s Honor List (Fall 2023, Spring 2024) | Expected Grad: May 2027';
        break;
      case 'contact':
        response = 'Email: alex.rivera.dev@example.edu | GitHub: @alexrivera-dev | LinkedIn: @alex-rivera-student';
        break;
      case 'clear':
        setTerminalOutput([]);
        setTerminalInput('');
        return;
      case 'git status':
        response = 'On branch main: Your branch is up to date with origin/main. 6 projects deployed. Looking for Summer 2025 SDE internship!';
        break;
      default:
        response = `zsh: command not found: ${trimmed}. Type "help" for a list of commands.`;
    }

    setTerminalOutput((prev) => [...prev, `$ ${cmd}`, response]);
    setTerminalInput('');
  };

  const handleCopyBash = () => {
    navigator.clipboard.writeText('git status // 6 repos deployed, seeking summer SDE intern role');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glow fields */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#8b5cf6]/15 to-[#38bdf8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Terminal */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill Badge */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827]/80 border border-[#1e293b] text-xs font-['JetBrains_Mono'] text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="tracking-wider uppercase font-medium">{PERSONAL_INFO.statusBadge}</span>
            </div>

            {/* Intro Monospace Tag */}
            <div className="text-xs font-['JetBrains_Mono'] tracking-widest text-[#94a3b8] flex items-center gap-2">
              <span className="text-[#8b5cf6] font-semibold">&lt;INTRO&gt;</span>
              <span className="text-[#1e293b]">——</span>
              <span className="text-[#cbd5e1]">SEMESTER_03.INIT()</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f8fafc] leading-[1.1]"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-['Space_Grotesk'] text-lg sm:text-xl font-medium text-[#c0c1ff] tracking-tight">
              {PERSONAL_INFO.shortTitle}
            </p>

            {/* Narrative Body */}
            <p className="font-['Inter'] text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                id="hero-cta-work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-['Space_Grotesk'] font-semibold text-sm bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white hover:brightness-110 shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-['Space_Grotesk'] font-medium text-sm bg-[#111827]/70 hover:bg-[#1e293b] border border-[#1e293b] hover:border-[#38bdf8]/50 text-[#f8fafc] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Contact Me</span>
                <Play className="w-3.5 h-3.5 fill-current text-[#38bdf8]" />
              </a>
            </div>

            {/* Bash Terminal Widget */}
            <div
              id="hero-terminal-card"
              className="w-full mt-4 rounded-xl bg-[#111827]/90 border border-[#1e293b] shadow-2xl shadow-black/50 overflow-hidden font-['JetBrains_Mono'] text-xs backdrop-blur-md"
            >
              {/* Terminal Window Header */}
              <div className="px-4 py-2.5 bg-[#0b0f19] border-b border-[#1e293b] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]/90" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]/90" />
                  <div className="w-3 h-3 rounded-full bg-[#10b981]/90" />
                  <span className="text-[#64748b] text-[11px] ml-2">alex@terminal:~/portfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyBash}
                    className="text-[#64748b] hover:text-[#f8fafc] transition-colors p-1"
                    title="Copy status command"
                  >
                    {copiedCmd ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[#64748b] text-[11px]">bash</span>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 space-y-2 text-[#94a3b8] max-h-48 overflow-y-auto">
                <div className="flex items-center gap-2 text-[#38bdf8]">
                  <span className="text-[#8b5cf6] font-bold">$</span>
                  <span className="text-[#f8fafc] font-semibold">git status</span>
                  <span className="text-[#64748b]">// 6 repos deployed, seeking summer SDE intern role</span>
                </div>

                {terminalOutput.map((line, idx) => (
                  <div
                    key={idx}
                    className={line.startsWith('$') ? 'text-[#38bdf8]' : 'text-[#94a3b8] text-[11.5px] leading-relaxed'}
                  >
                    {line}
                  </div>
                ))}

                {/* Input prompt */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (terminalInput) handleCommand(terminalInput);
                  }}
                  className="flex items-center gap-2 pt-1"
                >
                  <span className="text-[#10b981] font-bold">❯</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="type 'help', 'projects', 'skills', or 'clear'..."
                    className="flex-1 bg-transparent border-none outline-none text-[#f8fafc] placeholder-[#475569] font-['JetBrains_Mono'] text-xs"
                  />
                </form>
              </div>

              {/* Terminal Quick Chips */}
              <div className="px-4 py-2 bg-[#0b0f19]/60 border-t border-[#1e293b]/70 flex flex-wrap items-center gap-2 text-[10px]">
                <span className="text-[#64748b]">quick run:</span>
                {['skills', 'projects', 'academics', 'contact', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => handleCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-[#1e293b]/60 hover:bg-[#8b5cf6]/30 hover:text-[#f8fafc] text-[#94a3b8] border border-white/5 transition-colors cursor-pointer"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Framed Developer Portrait with Floating Metadata Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square flex items-center justify-center">
              {/* Outer circular gradient glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#8b5cf6]/30 via-[#38bdf8]/20 to-transparent blur-2xl -z-10 animate-pulse-subtle" />
              <div className="absolute -inset-2 rounded-full border border-[#8b5cf6]/20 -z-10" />
              <div className="absolute -inset-6 rounded-full border border-[#38bdf8]/10 -z-10 border-dashed animate-[spin_60s_linear_infinite]" />

              {/* Main Avatar Container */}
              <div className="w-64 sm:w-76 md:w-80 aspect-square rounded-full p-1.5 bg-gradient-to-b from-[#8b5cf6]/60 via-[#1e293b] to-[#38bdf8]/40 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#111827] relative">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge 1: Top Left - Tech Stack */}
              <div
                id="hero-badge-tech"
                className="absolute -top-3 -left-4 sm:-left-6 bg-[#111827]/90 border border-[#1e293b] rounded-xl px-3.5 py-2 shadow-xl backdrop-blur-md flex items-center gap-2.5 hover:border-[#8b5cf6]/50 transition-all hover:-translate-y-0.5"
              >
                <div className="w-7 h-7 rounded-lg bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 flex items-center justify-center text-[#8b5cf6]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-['JetBrains_Mono'] tracking-wider text-[#64748b]">
                    Tech Stack
                  </div>
                  <div className="text-xs font-['Space_Grotesk'] font-semibold text-[#f8fafc]">
                    React • C++ • Python
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Top Right - Focus */}
              <div
                id="hero-badge-focus"
                className="absolute -top-1 -right-4 sm:-right-6 bg-[#111827]/90 border border-[#1e293b] rounded-xl px-3.5 py-2 shadow-xl backdrop-blur-md flex items-center gap-2.5 hover:border-[#38bdf8]/50 transition-all hover:-translate-y-0.5"
              >
                <div className="w-7 h-7 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-['JetBrains_Mono'] tracking-wider text-[#64748b]">
                    Focus
                  </div>
                  <div className="text-xs font-['Space_Grotesk'] font-semibold text-[#f8fafc]">
                    Figma • UI/UX
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Center - CS Standing */}
              <div
                id="hero-badge-standing"
                className="absolute -bottom-4 bg-[#111827]/90 border border-[#1e293b] rounded-full px-4 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#cbd5e1] hover:border-white/20 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                <span>CS Sophomore • 2023-2027</span>
              </div>

              {/* Floating Badge 4: Bottom Left - Semester Progress */}
              <div
                id="hero-badge-sem"
                className="absolute bottom-6 -left-6 sm:-left-8 bg-[#111827]/90 border border-[#1e293b] rounded-lg px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#94a3b8]"
              >
                <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="font-semibold text-[#f8fafc]">{PERSONAL_INFO.semesterProgress}</span>
              </div>

              {/* Floating Badge 5: Bottom Right - GPA */}
              <div
                id="hero-badge-gpa"
                className="absolute bottom-6 -right-6 sm:-right-8 bg-[#111827]/90 border border-[#1e293b] rounded-lg px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-['JetBrains_Mono']"
              >
                <span className="px-1.5 py-0.5 rounded bg-[#8b5cf6]/25 text-[#c4e7ff] font-bold text-[11px] border border-[#8b5cf6]/40">
                  3.8
                </span>
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-[#64748b]">Academics</div>
                  <div className="text-[11px] font-medium text-[#f8fafc]">Cumulative GPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
