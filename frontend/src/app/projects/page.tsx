"use client";

import React, { useState, useEffect } from 'react';
import TopNavBar from '@/components/layout/TopNavBar';
import SideNavBar from '@/components/layout/SideNavBar';
import { fetchProjects } from '@/lib/api';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      const data = await fetchProjects(2); // user_id 2 is Alex Thorne from seed
      if (data && data.length > 0) {
        setProjects(data);
      }
      setIsLoading(false);
    };
    loadProjects();
  }, []);

  return (
    <>
      <TopNavBar />
      <SideNavBar />

      <main className="md:ml-[280px] min-h-screen pt-28 px-margin-mobile md:px-margin-desktop pb-20">
        {/* Header Section */}
        <header className="mb-12 max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-secondary font-label-sm text-label-sm tracking-widest uppercase">Career Accelerator</span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mt-2">Project Recommendations</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mt-4">
                Curated high-impact technical projects tailored to your current skill gap and career aspirations. Build what matters to recruiters.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-surface-container rounded-xl p-2 h-fit">
              <button className="px-4 py-2 bg-white shadow-sm rounded-lg text-primary font-label-sm text-label-sm">All Levels</button>
              <button className="px-4 py-2 text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors">Web Dev</button>
              <button className="px-4 py-2 text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors">Machine Learning</button>
            </div>
          </div>
        </header>

        {/* Bento-style Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
          </div>
        ) : (
          <section className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <article key={idx} className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-xl overflow-hidden flex flex-col group transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 w-full relative overflow-hidden bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-secondary opacity-50">integration_instructions</span>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-label-sm font-label-sm text-secondary">
                    {project.difficulty}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col border-l-2 border-l-[#FF2D7A]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-primary">{project.title}</h3>
                    <span className="material-symbols-outlined text-outline-variant cursor-pointer hover:text-error transition-colors">favorite</span>
                  </div>
                  <p className="text-on-surface-variant text-body-md font-body-md mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  {/* Metrics Section */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col">
                      <span className="text-label-sm text-on-surface-variant/60 font-label-sm">Resume Impact</span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{ width: `${project.resume_impact_score}%` }}></div>
                        </div>
                        <span className="text-label-sm font-bold text-secondary">{project.resume_impact_score}%</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-label-sm text-on-surface-variant/60 font-label-sm">Portfolio Value</span>
                      <span className="text-body-md font-bold text-primary">{project.portfolio_value_score}%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8 text-label-sm text-on-surface-variant font-label-sm">
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      <span>GitHub Ready ({project.github_readiness_score}%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">code</span>
                      <span>{project.tech_stack?.join(', ')}</span>
                    </div>
                  </div>
                  {/* CTA Actions */}
                  <div className="mt-auto flex gap-3">
                    <button className="flex-1 py-3 bg-secondary text-white rounded-lg font-label-sm text-label-sm font-bold active:scale-95 transition-all">
                      Start Building
                    </button>
                    <button className="px-4 py-3 border border-outline-variant rounded-lg text-primary hover:bg-surface-variant/20 transition-all">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {/* Pagination/Load More */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 border-2 border-secondary text-secondary rounded-xl font-body-md text-body-md font-bold hover:bg-secondary/5 transition-all active:scale-95">
            Load More Projects
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="md:ml-[280px] bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant py-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
          <div>
            <h3 className="font-headline-md text-headline-md text-primary">Kore Logic</h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">© 2026 Kore Logic. Precision in Career Intelligence.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Help Center</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">API</a>
          </div>
        </div>
      </footer>
    </>
  );
}
