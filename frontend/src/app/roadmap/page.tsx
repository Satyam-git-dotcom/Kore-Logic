/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from 'react';
import TopNavBar from '@/components/layout/TopNavBar';
import SideNavBar from '@/components/layout/SideNavBar';
import { fetchRoadmaps } from '@/lib/api';

export default function RoadmapPage() {
  const [completedWeeks, setCompletedWeeks] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState(0);
  const [roadmapData, setRoadmapData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadRoadmaps = async () => {
      setIsLoading(true);
      const data = await fetchRoadmaps(2); // user_id 2
      if (data && data.length > 0) {
        const activeRoadmap = data[0]; // Just take the first roadmap for now
        setRoadmapData(activeRoadmap);
        
        // Initialize completed status
        const initialCompleted: Record<string, boolean> = {};
        if (activeRoadmap.weeks_data) {
          activeRoadmap.weeks_data.forEach((w: any) => {
            initialCompleted[`week${w.week}`] = w.status === 'completed';
          });
        }
        setCompletedWeeks(initialCompleted);
      }
      setIsLoading(false);
    };
    loadRoadmaps();
  }, []);

  useEffect(() => {
    if (roadmapData && roadmapData.weeks_data) {
      const checkedCount = Object.values(completedWeeks).filter(Boolean).length;
      const totalWeeks = roadmapData.duration_weeks || 12;
      setProgress(Math.round((checkedCount / totalWeeks) * 100));
    }
  }, [completedWeeks, roadmapData]);

  const handleCheckboxChange = (week: string) => {
    setCompletedWeeks(prev => ({
      ...prev,
      [week]: !prev[week as keyof typeof prev]
    }));
  };

  return (
    <>
      <TopNavBar />
      <SideNavBar />

      <main className="md:ml-[280px] pt-28 px-margin-mobile md:px-margin-desktop pb-12 max-w-container-max mx-auto bg-surface-container-lowest min-h-screen">
        {/* Header & Progress Tracker */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">
                {roadmapData ? roadmapData.target_role : 'Career'} Roadmap
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-2xl">
                A curated {roadmapData?.duration_weeks || 12}-week journey tailored to your goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/30 w-full md:w-80">
              <div className="flex justify-between items-center mb-2">
                <span className="text-label-sm font-bold text-secondary">YOUR PROGRESS</span>
                <span className="text-metric-xl font-metric-xl text-primary">{progress}%</span>
              </div>
              <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                <div 
                  className="transition-all duration-800 ease-[cubic-bezier(0.65,0,0.35,1)] h-full bg-secondary rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-on-surface-variant mt-2">
                {Object.values(completedWeeks).filter(Boolean).length} of {roadmapData?.duration_weeks || 12} weeks completed
              </p>
            </div>
          </div>
        </header>

        {/* Interactive Timeline Container */}
        <div className="relative">
          {/* Animated Background Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 opacity-20 md:left-12" style={{ background: 'repeating-linear-gradient(to bottom, #2d4fcf 0px, #2d4fcf 10px, transparent 10px, transparent 20px)' }}></div>
          
          <div className="space-y-12">
            {isLoading ? (
               <div className="flex justify-center items-center py-20">
                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
               </div>
            ) : roadmapData && roadmapData.weeks_data ? (
              roadmapData.weeks_data.map((weekData: any, idx: number) => {
                const isCompleted = completedWeeks[`week${weekData.week}`];
                const isActive = weekData.status === 'in_progress';
                const isLocked = weekData.status === 'locked';

                return (
                  <div key={idx} className={`relative flex gap-8 md:gap-12 group ${isLocked ? 'opacity-60 hover:opacity-100 transition-opacity' : ''}`}>
                    <div className={`z-10 flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg ring-8 ring-background ${isCompleted ? 'bg-secondary text-white' : isActive ? 'bg-white border-4 border-secondary text-secondary animate-pulse' : 'bg-surface-container text-on-surface-variant shadow-sm'}`}>
                      {isCompleted ? (
                        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      ) : (
                        <span className="text-2xl font-bold font-metric-xl">0{weekData.week}</span>
                      )}
                    </div>
                    
                    <div className={`bg-white/80 backdrop-blur-md border border-slate-200/50 flex-1 p-6 md:p-8 rounded-3xl shadow-sm transition-all hover:shadow-md ${isActive ? 'ring-2 ring-secondary/5 border-l-[4px] !border-l-secondary' : isCompleted ? 'border-l-[4px] !border-l-secondary' : 'grayscale hover:grayscale-0'}`}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${isCompleted ? 'bg-surface-container-high text-secondary-fixed-variant' : isActive ? 'bg-secondary text-white' : 'bg-surface-container-high text-on-surface-variant'}`}>
                            {isCompleted ? `Week ${weekData.week}` : isActive ? 'In Progress' : `Week ${weekData.week}`}
                          </span>
                          <h3 className="font-headline-md text-headline-md text-primary mt-2">{weekData.focus}</h3>
                        </div>
                      </div>

                      {!isLocked ? (
                        <>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary text-lg">list_alt</span> Modules
                              </h4>
                              <ul className="text-sm text-on-surface-variant space-y-1">
                                {weekData.modules?.map((m: string, i: number) => (
                                  <li key={i}>• {m}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-6 pt-6 border-t border-outline-variant/30 flex flex-wrap gap-4 items-center">
                            {isActive && (
                              <a className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg text-sm font-bold shadow-sm hover:opacity-90" href="#">
                                <span className="material-symbols-outlined text-lg">play_circle</span> Start Module
                              </a>
                            )}
                            <label className="ml-auto flex items-center gap-2 cursor-pointer group">
                              <input 
                                checked={!!completedWeeks[`week${weekData.week}`]} 
                                onChange={() => handleCheckboxChange(`week${weekData.week}`)}
                                className="w-5 h-5 rounded border-secondary text-secondary focus:ring-secondary" 
                                type="checkbox"
                              />
                              <span className={`text-sm font-bold ${isCompleted ? 'text-secondary' : 'text-on-surface-variant group-hover:text-secondary'} transition-colors`}>
                                {isCompleted ? 'Week Complete' : 'Mark Complete'}
                              </span>
                            </label>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-on-surface-variant bg-surface-container-low px-4 py-2 rounded-lg inline-flex">
                          <span className="material-symbols-outlined text-lg">lock</span> Complete previous weeks to unlock
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-on-surface-variant py-10">No roadmap found.</div>
            )}
          </div>

          {/* Future weeks placeholder for layout balance */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-surface-container text-on-surface-variant rounded-full text-sm font-bold hover:bg-surface-variant transition-colors">
              View More Weeks
            </button>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <span className="material-symbols-outlined">help</span>
        <div className="absolute right-full mr-4 bg-primary text-white text-xs px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Ask AI Mentor
        </div>
      </button>

      <footer className="md:ml-[280px] w-full py-12 border-t border-outline-variant bg-surface-container-highest">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
          <div className="text-center md:text-left">
            <p className="font-headline-md text-primary mb-2">Kore Logic</p>
            <p className="font-label-sm text-on-surface-variant">© 2026 Kore Logic. Precision in Career Intelligence.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
