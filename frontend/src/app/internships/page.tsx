"use client";

import React, { useState, useEffect } from 'react';
import TopNavBar from '@/components/layout/TopNavBar';
import SideNavBar from '@/components/layout/SideNavBar';
import { fetchInternships } from '@/lib/api';

export default function InternshipsPage() {
  const [internships, setInternships] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInternships = async () => {
      setIsLoading(true);
      const data = await fetchInternships();
      if (data && data.length > 0) {
        setInternships(data);
      }
      setIsLoading(false);
    };
    loadInternships();
  }, []);

  return (
    <>
      <TopNavBar />
      <SideNavBar />

      <main className="md:ml-[280px] pt-28 px-margin-mobile md:px-margin-desktop min-h-screen pb-20 bg-surface-container-lowest">
        {/* Header Section */}
        <header className="max-w-6xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">Internship Matching</h1>
              <p className="text-on-surface-variant text-body-lg max-w-2xl">Our AI analyzed your profile against 4,200+ roles. Here are your most compatible opportunities.</p>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-high p-1 rounded-xl h-fit">
              <button className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-secondary text-label-sm">Best Match</button>
              <button className="px-4 py-2 text-on-surface-variant font-medium text-label-sm hover:text-primary">Most Recent</button>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-28 bg-white/80 backdrop-blur-md border border-outline-variant/30 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-headline-md text-primary">Filters</h3>
                <button className="text-secondary text-label-sm font-bold hover:underline">Clear all</button>
              </div>

              {/* Industry */}
              <div className="mb-8">
                <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-4">Industry</label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox" />
                    <span className="text-body-md text-on-surface group-hover:text-primary">Technology</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox" />
                    <span className="text-body-md text-on-surface group-hover:text-primary">Finance</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox" />
                    <span className="text-body-md text-on-surface group-hover:text-primary">Health &amp; Biotech</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox" />
                    <span className="text-body-md text-on-surface group-hover:text-primary">Creative Arts</span>
                  </label>
                </div>
              </div>

              {/* Location */}
              <div className="mb-8">
                <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-4">Location</label>
                <select className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 font-body-md text-on-surface focus:ring-2 focus:ring-secondary/20 outline-none">
                  <option>Remote</option>
                  <option>Hybrid</option>
                  <option>On-site</option>
                  <option>Global</option>
                </select>
              </div>

              {/* Salary */}
              <div className="mb-8">
                <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-4">Min. Monthly Stipend</label>
                <input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary" max="10000" min="0" step="500" type="range" defaultValue="2500" />
                <div className="flex justify-between mt-2">
                  <span className="text-label-sm text-on-surface-variant font-medium">$0</span>
                  <span className="text-label-sm text-secondary font-bold">$2,500+</span>
                  <span className="text-label-sm text-on-surface-variant font-medium">$10k</span>
                </div>
              </div>

              {/* Skills */}
              <div>
                <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-4">Must-have Skills</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-secondary/10 text-secondary text-label-sm rounded-full font-bold flex items-center gap-1">Python <span className="material-symbols-outlined text-sm">close</span></span>
                  <span className="px-3 py-1.5 bg-secondary/10 text-secondary text-label-sm rounded-full font-bold flex items-center gap-1">React <span className="material-symbols-outlined text-sm">close</span></span>
                  <span className="px-3 py-1.5 bg-surface-container-high text-on-surface-variant text-label-sm rounded-full font-medium cursor-pointer hover:bg-surface-container">+ Add</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Results List */}
          <section className="flex-1 space-y-4">
            {isLoading ? (
               <div className="flex justify-center items-center py-20">
                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
               </div>
            ) : internships.map((internship, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-6 shadow-[0_4px_20px_rgba(11,16,38,0.05)] hover:shadow-md transition-all group relative overflow-hidden">
                {idx === 0 && (
                  <div className="absolute top-0 left-0 h-full w-[6px] bg-secondary group-hover:w-2 transition-all"></div>
                )}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-surface-container overflow-hidden flex-shrink-0 border border-outline-variant/20 flex items-center justify-center p-2">
                    <span className="material-symbols-outlined text-3xl text-secondary">business</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">{internship.role}</h3>
                        <p className="text-body-md text-on-surface-variant">{internship.company} • {internship.location}</p>
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${idx === 0 ? 'bg-secondary-container/10 border border-secondary-container/20' : 'bg-surface-container-high'}`}>
                        <span className={`material-symbols-outlined ${idx === 0 ? 'text-secondary' : 'text-on-surface-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                        <span className={`font-bold font-label-sm ${idx === 0 ? 'text-secondary' : 'text-on-surface-variant'}`}>90% AI Match</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center mt-4 pt-4 border-t border-outline-variant/20">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-lg">payments</span>
                        <span className="font-label-sm">{internship.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-lg">code</span>
                        <span className="font-label-sm">{internship.required_skills?.join(', ')}</span>
                      </div>
                      <div className="ml-auto flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                        <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors ml-auto sm:ml-0"><span className="material-symbols-outlined">bookmark</span></button>
                        <button className="bg-secondary text-on-secondary px-6 py-2 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 w-full sm:w-auto" onClick={() => window.open(internship.application_link, '_blank')}>Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Load More / Pagination */}
            <div className="pt-8 flex flex-col items-center gap-4">
              <button className="px-8 py-3 border border-outline-variant text-primary font-bold rounded-xl hover:bg-surface-container transition-all flex items-center gap-2">
                Load more opportunities
                <span className="material-symbols-outlined">expand_more</span>
              </button>
              <p className="text-label-sm text-on-surface-variant">Showing {internships.length} of 42 active matches</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="md:ml-[280px] bg-surface-container-highest border-t border-outline-variant py-12">
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
