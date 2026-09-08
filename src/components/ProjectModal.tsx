import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111827] border border-[#1e293b] rounded-2xl shadow-2xl shadow-black/80 p-6 sm:p-8 text-[#dfe2f1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-project-modal-btn"
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#0b0f19] border border-[#1e293b] text-[#94a3b8] hover:text-white hover:border-white/20 transition-all cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#8b5cf6] px-2 py-0.5 rounded bg-[#8b5cf6]/10 border border-[#8b5cf6]/30">
            PROJECT {project.num}
          </span>
          <span className="text-xs font-['JetBrains_Mono'] text-[#38bdf8] px-2.5 py-0.5 rounded-full bg-[#1e293b]">
            {project.category}
          </span>
        </div>

        {/* Title and Subtitle */}
        <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#f8fafc]">
          {project.title}
        </h3>
        <p className="font-['Space_Grotesk'] text-sm sm:text-base text-[#94a3b8] mt-1 mb-6">
          {project.subtitle}
        </p>

        {/* Hero Image in Modal */}
        <div className="relative rounded-xl overflow-hidden border border-[#1e293b] mb-6 aspect-video max-h-72 w-full bg-[#0b0f19]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60" />
        </div>

        {/* Problem & Overview */}
        <div className="space-y-4 mb-6">
          <h4 className="font-['Space_Grotesk'] text-sm uppercase tracking-wider font-bold text-[#f8fafc] flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#8b5cf6]" />
            <span>Problem & Architectural Overview</span>
          </h4>
          <p className="text-sm font-['Inter'] text-[#cbd5e1] leading-relaxed">
            {project.overview || project.description}
          </p>
        </div>

        {/* Architecture Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="space-y-3 mb-6">
            <h4 className="font-['Space_Grotesk'] text-sm uppercase tracking-wider font-bold text-[#f8fafc] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
              <span>Key Architectural Decisions</span>
            </h4>
            <ul className="space-y-2">
              {project.architectureHighlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94a3b8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] mt-2 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6">
            <h4 className="font-['Space_Grotesk'] text-sm uppercase tracking-wider font-bold text-[#f8fafc] flex items-center gap-2 mb-3">
              <BarChart2 className="w-4 h-4 text-[#10b981]" />
              <span>Performance Benchmarks & Metrics</span>
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3 rounded-xl bg-[#0b0f19] border border-[#1e293b] text-center">
                  <div className="text-sm sm:text-base font-bold font-['Space_Grotesk'] text-[#38bdf8]">
                    {m.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#64748b] font-['JetBrains_Mono'] mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="space-y-2 mb-8">
          <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#64748b]">
            Technologies & Libraries
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] bg-[#1e293b] border border-white/5 text-[#c4e7ff]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#1e293b]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-['Space_Grotesk'] font-medium bg-[#0b0f19] border border-[#1e293b] hover:border-white/20 text-[#cbd5e1] hover:text-white transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
          <a
            href={project.liveUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-['Space_Grotesk'] font-bold bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white hover:brightness-110 shadow-lg shadow-[#8b5cf6]/20 transition-all"
          >
            <span>{project.isCaseStudy ? 'Open Figma Specs' : 'Launch Prototype'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
