/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from 'react';
import TopNavBar from '@/components/layout/TopNavBar';
import SideNavBar from '@/components/layout/SideNavBar';
import { fetchReports } from '@/lib/api';

export default function WeeklyReportsPage() {
  const [reportData, setReportData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadReport = async () => {
      setIsLoading(true);
      const data = await fetchReports(2);
      if (data && data.length > 0) {
        setReportData(data[data.length - 1]); // Load latest report
      }
      setIsLoading(false);
    };
    loadReport();
  }, []);

  return (
    <>
      <TopNavBar />
      <SideNavBar />

      <main className="pt-24 pb-12 px-margin-mobile md:pl-[320px] md:pr-margin-desktop max-w-container-max mx-auto bg-surface-container-lowest min-h-screen">
        {/* Header & Action Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">Performance Intelligence</h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg">
              {reportData ? new Date(reportData.week_start_date).toLocaleDateString() : 'Loading...'}
            </p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-body-md text-body-md font-semibold hover:shadow-lg transition-all active:scale-95">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>download</span>
            Download PDF
          </button>
        </div>

        {isLoading ? (
           <div className="flex justify-center items-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
           </div>
        ) : !reportData ? (
           <div className="text-center text-on-surface-variant py-10">No report available.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Metrics Block */}
            <div className="md:col-span-4 space-y-6">
              {/* Consistency Score */}
              <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-2xl p-6 flex flex-col items-center text-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Consistency Score</span>
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-secondary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset={364.4 * (1 - reportData.consistency_score / 100)} strokeWidth="8"></circle>
                  </svg>
                  <span className="absolute font-metric-xl text-metric-xl text-primary font-bold">{reportData.consistency_score}%</span>
                </div>
                <p className="text-on-surface-variant font-body-md text-body-md">You&apos;re in the <span className="text-secondary font-bold">top 5%</span> of consistent learners this week.</p>
              </div>

              {/* Productivity Score */}
              <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Productivity</span>
                  <span className="text-green-600 font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">trending_up</span> +12%
                  </span>
                </div>
                <div className="flex items-end gap-2 h-24 mb-4">
                  <div className="flex-1 bg-surface-container-highest rounded-t-md h-[40%]"></div>
                  <div className="flex-1 bg-surface-container-highest rounded-t-md h-[65%]"></div>
                  <div className="flex-1 bg-surface-container-highest rounded-t-md h-[55%]"></div>
                  <div className="flex-1 bg-secondary rounded-t-md" style={{ height: `${reportData.productivity_score}%` }}></div>
                  <div className="flex-1 bg-surface-container-highest rounded-t-md h-[70%]"></div>
                  <div className="flex-1 bg-surface-container-highest rounded-t-md h-[85%]"></div>
                  <div className="flex-1 bg-surface-container-highest rounded-t-md h-[95%]"></div>
                </div>
                <p className="font-body-md text-body-md text-on-surface">Weekly Score: <span className="font-bold">{reportData.productivity_score}</span></p>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined">emoji_events</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary" style={{ fontSize: '18px' }}>Achievements</h4>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {reportData.achievements_summary}
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary" style={{ fontSize: '18px' }}>Core Strengths</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {reportData.strengths?.map((s: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-label-sm text-label-sm font-semibold">{s}</span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined">center_focus_strong</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary" style={{ fontSize: '18px' }}>Weaknesses</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {reportData.weaknesses?.map((w: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-label-sm text-label-sm font-semibold">{w}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Motivation */}
            <div className="md:col-span-12 bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-2xl p-8 border-l-[3px] border-l-[#FF2D7A]">
              <div className="flex flex-col md:flex-row gap-10 h-full">
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-[#FF2D7A]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                    <h3 className="font-headline-md text-headline-md text-primary">AI Insight</h3>
                  </div>
                  <blockquote className="font-body-lg text-body-lg text-on-surface italic mb-6 leading-relaxed">
                    &quot;{reportData.motivation_message}&quot;
                  </blockquote>
                  <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 mt-auto">
                    <p className="font-body-md text-body-md font-bold text-primary mb-2">Next Step Recommendation</p>
                    <p className="font-body-md text-body-md text-on-surface-variant">{reportData.ai_suggestions}</p>
                  </div>
                </div>
                <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
                  <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Skill Growth (Δ this week)</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-body-md text-body-md">Frontend Logic</span>
                        <span className="text-secondary font-bold">+24%</span>
                      </div>
                      <div className="w-full bg-surface-container rounded-full h-3">
                        <div className="bg-secondary h-3 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-surface-container-highest border-t border-outline-variant md:ml-[280px]">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-headline-md text-headline-md text-primary">Kore Logic</h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">© 2026 Kore Logic. Precision in Career Intelligence.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
