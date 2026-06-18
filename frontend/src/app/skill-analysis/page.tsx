"use client";

import React, { useEffect, useRef } from 'react';
import TopNavBar from '@/components/layout/TopNavBar';
import SideNavBar from '@/components/layout/SideNavBar';

export default function SkillAnalysisPage() {
  const heatmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heatmapRef.current) {
      const grid = heatmapRef.current;
      grid.innerHTML = '';
      const colors = [
        'bg-surface-container',
        'bg-secondary/20',
        'bg-secondary/40',
        'bg-secondary/70',
        'bg-secondary',
      ];
      for (let i = 0; i < 60; i++) {
        const div = document.createElement('div');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        div.className = `h-10 rounded-md ${randomColor} transition-all hover:scale-110 cursor-pointer shadow-sm`;
        grid.appendChild(div);
      }
    }
  }, []);

  return (
    <>
      <TopNavBar />
      <SideNavBar />
      
      <main className="md:ml-[280px] pt-28 px-margin-mobile md:px-margin-desktop pb-12 max-w-container-max mx-auto bg-surface-container-lowest min-h-screen">
        <div className="space-y-gutter">
          {/* Bento Grid Section 1: Overview & Top Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Radar Chart Container */}
            <div className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] p-8 rounded-3xl min-h-[450px] flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">Skill Competency Matrix</h3>
                  <p className="text-on-surface-variant text-sm mt-1">Comparing Current Proficiency vs. Senior Level Target</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-xs font-medium">Current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
                    <span className="text-xs font-medium">Target</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center relative">
                {/* Simulated Radar Chart with SVG */}
                <svg className="w-full max-w-[320px] h-auto drop-shadow-lg" viewBox="0 0 400 400">
                  {/* Background Circles */}
                  <circle cx="200" cy="200" fill="none" r="150" stroke="#E2E8F0" strokeDasharray="4" strokeWidth="1"></circle>
                  <circle cx="200" cy="200" fill="none" r="100" stroke="#E2E8F0" strokeDasharray="4" strokeWidth="1"></circle>
                  <circle cx="200" cy="200" fill="none" r="50" stroke="#E2E8F0" strokeDasharray="4" strokeWidth="1"></circle>
                  {/* Axes */}
                  <line stroke="#E2E8F0" x1="200" x2="200" y1="50" y2="350"></line>
                  <line stroke="#E2E8F0" x1="50" x2="350" y1="200" y2="200"></line>
                  <line stroke="#E2E8F0" x1="94" x2="306" y1="94" y2="306"></line>
                  <line stroke="#E2E8F0" x1="94" x2="306" y1="306" y2="94"></line>
                  {/* Target Polygon */}
                  <polygon fill="rgba(119, 118, 126, 0.05)" points="200,60 330,120 340,250 200,340 60,250 70,120" stroke="#77767e" strokeWidth="2"></polygon>
                  {/* Current Polygon */}
                  <polygon className="transition-all duration-500 ease-out" fill="rgba(45, 79, 207, 0.2)" points="200,100 280,160 290,200 200,280 120,200 130,140" stroke="#2d4fcf" strokeWidth="3"></polygon>
                  {/* Skill Labels */}
                  <text className="text-[10px] font-bold fill-primary" textAnchor="middle" x="200" y="40">Architecture</text>
                  <text className="text-[10px] font-bold fill-primary" textAnchor="start" x="360" y="125">Frontend</text>
                  <text className="text-[10px] font-bold fill-primary" textAnchor="start" x="360" y="275">Backend</text>
                  <text className="text-[10px] font-bold fill-primary" textAnchor="middle" x="200" y="370">DevOps</text>
                  <text className="text-[10px] font-bold fill-primary" textAnchor="end" x="40" y="275">Testing</text>
                  <text className="text-[10px] font-bold fill-primary" textAnchor="end" x="40" y="125">Leadership</text>
                </svg>
              </div>
            </div>

            {/* Top 5 Skills Progress */}
            <div className="lg:col-span-5 bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] p-8 rounded-3xl flex flex-col">
              <h3 className="font-headline-md text-headline-md text-primary mb-6">Top Proficiency Skills</h3>
              <div className="space-y-6">
                {/* Skill 1 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body-md font-semibold">React &amp; Next.js</span>
                    <span className="text-secondary font-bold">85%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[85%] rounded-full"></div>
                  </div>
                </div>
                {/* Skill 2 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body-md font-semibold">TypeScript</span>
                    <span className="text-secondary font-bold">72%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[72%] rounded-full"></div>
                  </div>
                </div>
                {/* Skill 3 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body-md font-semibold">UI/UX Design</span>
                    <span className="text-secondary font-bold">64%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[64%] rounded-full"></div>
                  </div>
                </div>
                {/* Skill 4 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body-md font-semibold">Node.js</span>
                    <span className="text-secondary font-bold">58%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[58%] rounded-full"></div>
                  </div>
                </div>
                {/* Skill 5 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body-md font-semibold">Project Management</span>
                    <span className="text-secondary font-bold">45%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[45%] rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="text-sm text-on-surface-variant italic">Kore AI Score: <strong className="text-primary">7.8 / 10</strong></span>
                <button className="text-secondary font-bold text-sm flex items-center hover:underline">
                  View All Skills <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Heatmap Section */}
          <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] p-8 rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">Skill Density Heatmap</h3>
                <p className="text-on-surface-variant text-sm mt-1">Activity and mastery growth over the last 6 months</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-on-surface-variant">Lower Activity</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-surface-container rounded-sm"></div>
                  <div className="w-4 h-4 bg-secondary/30 rounded-sm"></div>
                  <div className="w-4 h-4 bg-secondary/60 rounded-sm"></div>
                  <div className="w-4 h-4 bg-secondary rounded-sm"></div>
                </div>
                <span className="text-[10px] text-on-surface-variant">Expert Mastery</span>
              </div>
            </div>
            <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">
              <div ref={heatmapRef} className="min-w-[800px] grid grid-cols-12 gap-2">
                {/* Dynamically populated via useEffect */}
              </div>
            </div>
          </div>

          {/* Missing Skills & Priority */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* High Priority Card */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] p-6 rounded-3xl border-l-[3px] !border-l-[#FF2D7A] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">priority_high</span>
              </div>
              <div className="mb-4">
                <span className="bg-error/10 text-error text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">High Priority</span>
              </div>
              <h4 className="font-headline-md text-xl text-primary mb-4">Critical Infrastructure</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-on-surface text-sm">Kubernetes Orchestration</span>
                  <span className="material-symbols-outlined text-error text-xl">trending_down</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-on-surface text-sm">System Design Patterns</span>
                  <span className="material-symbols-outlined text-error text-xl">trending_down</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-on-surface text-sm">Cloud Security (IAM/VPC)</span>
                  <span className="material-symbols-outlined text-error text-xl">trending_down</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-xs text-on-surface-variant">Recommended for your target: Senior Cloud Architect</p>
              </div>
            </div>

            {/* Medium Priority Card */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] p-6 rounded-3xl border-l-2 !border-l-secondary/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">update</span>
              </div>
              <div className="mb-4">
                <span className="bg-secondary/10 text-secondary text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Medium Priority</span>
              </div>
              <h4 className="font-headline-md text-xl text-primary mb-4">Growth Expansions</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-on-surface text-sm">Unit &amp; Integration Testing</span>
                  <span className="material-symbols-outlined text-secondary text-xl">remove</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-on-surface text-sm">CI/CD Pipeline Automation</span>
                  <span className="material-symbols-outlined text-secondary text-xl">remove</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-on-surface text-sm">NoSQL Database Modeling</span>
                  <span className="material-symbols-outlined text-secondary text-xl">remove</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-xs text-on-surface-variant">Will increase overall versatility by 25%</p>
              </div>
            </div>

            {/* Low Priority Card */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] p-6 rounded-3xl border-l-2 !border-l-outline-variant relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">add_circle</span>
              </div>
              <div className="mb-4">
                <span className="bg-on-surface-variant/10 text-on-surface-variant text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Low Priority</span>
              </div>
              <h4 className="font-headline-md text-xl text-primary mb-4">Supporting Skills</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-on-surface text-sm">Public Speaking/Demoing</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">trending_flat</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-on-surface text-sm">Technical Documentation</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">trending_flat</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-on-surface text-sm">SEO Fundamentals</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">trending_flat</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-xs text-on-surface-variant">Bonus skills to differentiate your portfolio</p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="pt-8 pb-12 flex flex-col items-center">
            <div className="bg-primary-container p-8 md:p-12 rounded-[2rem] w-full max-w-4xl text-center space-y-6 shadow-2xl relative overflow-hidden">
              {/* Animated Gradient Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary blur-[100px] opacity-20"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-error blur-[100px] opacity-10"></div>
              
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white font-bold leading-tight relative z-10">
                Ready to bridge the gap?
              </h2>
              <p className="text-on-primary-container font-body-lg text-lg max-w-2xl mx-auto relative z-10">
                Our AI has identified the fastest path to mastering your critical missing skills. Generate a tailored roadmap today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative z-10">
                <button className="bg-secondary hover:bg-secondary-container text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                  <span>Generate Roadmap</span>
                  <span className="material-symbols-outlined">auto_awesome</span>
                </button>
                <button className="bg-transparent border border-outline/30 hover:bg-white/5 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all">
                  Save Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="md:ml-[280px] w-full py-12 border-t border-outline-variant bg-surface-container-highest">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
          <div className="text-center md:text-left">
            <p className="font-headline-md text-primary mb-2">Kore Logic</p>
            <p className="font-label-sm text-on-surface-variant">© 2026 Kore Logic. Precision in Career Intelligence.</p>
          </div>
          <div className="flex gap-8">
            <a className="text-on-surface-variant hover:text-secondary font-label-sm transition-colors" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-secondary font-label-sm transition-colors" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-secondary font-label-sm transition-colors" href="#">Help Center</a>
            <a className="text-on-surface-variant hover:text-secondary font-label-sm transition-colors" href="#">API</a>
          </div>
        </div>
      </footer>
    </>
  );
}
