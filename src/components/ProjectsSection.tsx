import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'systems' | 'design'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.categoryType === filter;
  });

  const filterTabs = [
    { id: 'all', label: 'All 6 Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'systems', label: 'Systems & DB' },
    { id: 'design', label: 'Figma / Design' },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs font-['JetBrains_Mono'] tracking-widest text-[#8b5cf6] font-semibold uppercase flex items-center gap-2">
              <span>03.</span>
              <span>PORTFOLIO</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#f8fafc]">
              Featured Projects
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base text-[#94a3b8] max-w-2xl leading-relaxed">
              Tangible, end-to-end applications built to solve genuine university problems and demonstrate architectural thinking.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#111827] border border-[#1e293b] self-start md:self-auto overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-['JetBrains_Mono'] transition-all whitespace-nowrap cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#1e293b] text-[#38bdf8] font-semibold shadow-sm'
                    : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e293b]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3x2 Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="bg-[#111827]/80 border border-[#1e293b] hover:border-[#8b5cf6]/50 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0b0f19]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#8b5cf6] px-2 py-0.5 rounded bg-[#0b0f19]/90 border border-[#8b5cf6]/30 backdrop-blur-sm">
                      {project.num}
                    </span>
                    <span className="text-[11px] font-['JetBrains_Mono'] text-[#38bdf8] px-2.5 py-0.5 rounded-full bg-[#0b0f19]/90 border border-white/10 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#64748b] group-hover:text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="font-['Space_Grotesk'] text-xs font-medium text-[#a5b4fc]">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="font-['Inter'] text-xs sm:text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-['JetBrains_Mono'] bg-[#1e293b]/70 border border-white/5 text-[#c4e7ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-['Space_Grotesk'] font-semibold flex items-center justify-center gap-2 bg-[#1e293b]/60 hover:bg-[#8b5cf6]/20 border border-white/5 hover:border-[#8b5cf6]/40 text-[#f8fafc] transition-all group-hover:text-white"
                >
                  <span>{project.isCaseStudy ? 'View Case Study' : 'View Project'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8b5cf6]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal when a project is selected */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
