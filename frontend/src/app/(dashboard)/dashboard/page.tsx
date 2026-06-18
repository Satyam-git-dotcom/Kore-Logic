"use client";

import React, { useState, useEffect } from 'react';
import TopNavBar from '@/components/layout/TopNavBar';
import SideNavBar from '@/components/layout/SideNavBar';
import { fetchUser, fetchAiPredictions } from '@/lib/api';

export default function DashboardPage() {
  const [userName, setUserName] = useState("Alex");
  const [readiness, setReadiness] = useState(92);
  const [probability, setProbability] = useState(88);
  const [streak, setStreak] = useState(16);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [learning, setLearning] = useState(45);
  
  useEffect(() => {
    const loadPredictions = async () => {
      try {
        const user = await fetchUser(1);
        if (user) {
          const firstName = user.name ? user.name.split(' ')[0] : 'User';
          setUserName(firstName);
          
          const skillNames = user.skills ? user.skills.map((s: { name: string }) => s.name) : ['python', 'react'];
          const projectsCount = user.projects ? user.projects.length : 2;
          const streakDays = user.progress && user.progress.length > 0 ? user.progress[0].weekly_streak : 16;
          const learningHours = user.progress && user.progress.length > 0 ? user.progress[0].learning_hours : 45;
          
          setStreak(streakDays);
          setLearning(learningHours);
          
          const res = await fetchAiPredictions(skillNames, projectsCount, streakDays);
          setReadiness(Math.round(res.readiness_score));
          setProbability(Math.round(res.internship_match_probability));
        }
      } catch (err) {
        console.error("Failed to load user stats", err);
      }
    };
    
    loadPredictions();
  }, []);

  return (
    <>
      <TopNavBar />
      <SideNavBar />
      
      {/* Main Canvas */}
      <main className="md:ml-[280px] pt-28 px-margin-mobile md:px-margin-desktop pb-12 max-w-container-max mx-auto">
        
        {/* Welcome Header */}
        <header className="mb-10">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">Welcome back, {userName}.</h1>
          <p className="text-on-surface-variant mt-2 font-body-lg">Your career readiness has improved by <span className="text-secondary font-bold">4%</span> this week. Keep it up!</p>
        </header>
        
        {/* Top Metrics Bento Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          {/* Metric Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/50 flex flex-col justify-between group hover:border-secondary/30 transition-all">
            <span className="text-on-surface-variant font-label-sm uppercase tracking-widest mb-4">Readiness</span>
            <div className="flex items-end justify-between">
              <span className="font-metric-xl text-primary">{readiness}%</span>
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
              </div>
            </div>
          </div>
          {/* Metric Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/50 flex flex-col justify-between group hover:border-secondary/30 transition-all">
            <span className="text-on-surface-variant font-label-sm uppercase tracking-widest mb-4">Skill Progress</span>
            <div className="flex items-end justify-between">
              <span className="font-metric-xl text-primary">78%</span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined text-[18px]">auto_graph</span>
              </div>
            </div>
          </div>
          {/* Metric Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/50 flex flex-col justify-between group hover:border-secondary/30 transition-all">
            <span className="text-on-surface-variant font-label-sm uppercase tracking-widest mb-4">Probability</span>
            <div className="flex items-end justify-between">
              <span className="font-metric-xl text-primary">{probability}%</span>
              <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
              </div>
            </div>
          </div>
          {/* Metric Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/50 flex flex-col justify-between group hover:border-secondary/30 transition-all">
            <span className="text-on-surface-variant font-label-sm uppercase tracking-widest mb-4">Streak</span>
            <div className="flex items-end justify-between">
              <span className="font-metric-xl text-primary">{streak}d</span>
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
              </div>
            </div>
          </div>
          {/* Metric Card 5 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/50 flex flex-col justify-between group hover:border-secondary/30 transition-all">
            <span className="text-on-surface-variant font-label-sm uppercase tracking-widest mb-4">Learning</span>
            <div className="flex items-end justify-between">
              <span className="font-metric-xl text-primary">{learning}h</span>
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
              </div>
            </div>
          </div>
          {/* Metric Card 6 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/50 flex flex-col justify-between group hover:border-secondary/30 transition-all">
            <span className="text-on-surface-variant font-label-sm uppercase tracking-widest mb-4">Matches</span>
            <div className="flex items-end justify-between">
              <span className="font-metric-xl text-primary">24</span>
              <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </div>
            </div>
          </div>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* AI Suggestion Column */}
          <div className="lg:col-span-1 flex flex-col gap-gutter">
            <div className="ai-accent-card p-8 rounded-2xl flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl">psychology</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full w-fit mb-6">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>spark</span>
                <span className="font-label-sm">AI MENTOR SAYS</span>
              </div>
              <h3 className="font-headline-md text-primary mb-4 leading-tight">Focus on &quot;System Architecture&quot; projects this week.</h3>
              <p className="text-on-surface-variant mb-8 flex-grow">Based on your recent skill analysis, adding one more high-complexity backend project will put you in the top 5% of applicants for the Senior Product Designer role at Fintech Hub.</p>
              <button className="flex items-center justify-center gap-2 w-full py-4 bg-secondary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-secondary/20 transition-all active:scale-95">
                Update Roadmap
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-outline-variant/50 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md text-primary">Skill Distribution</h3>
                <button className="text-secondary font-label-sm hover:underline">Full Report</button>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">User Research</span>
                    <span className="text-on-surface-variant">95%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Interaction Design</span>
                    <span className="text-on-surface-variant">82%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Web Architecture</span>
                    <span className="text-on-surface-variant">45%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary/50 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Activity Feed Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-outline-variant/50 shadow-sm flex flex-col h-full">
              <div className="p-8 border-b border-outline-variant/30 flex justify-between items-center">
                <div>
                  <h3 className="font-headline-md text-primary">Recent Activity</h3>
                  <p className="text-on-surface-variant text-sm mt-1">Updates from your learning journey and job matches.</p>
                </div>
                <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-variant/30">
                  <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
                </button>
              </div>
              <div className="p-0">
                <div className="divide-y divide-outline-variant/20">
                  {/* Activity Item 1 */}
                  <div className="p-6 flex gap-4 hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined">description</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-on-surface group-hover:text-secondary transition-colors">Case Study Published</h4>
                        <span className="text-[11px] text-on-surface-variant uppercase font-medium">2 hours ago</span>
                      </div>
                      <p className="text-sm text-on-surface-variant">&quot;Redesigning Banking Experience&quot; was added to your profile. AI verified skill: High-Fidelity Prototyping (+12xp).</p>
                    </div>
                  </div>
                  {/* Activity Item 2 */}
                  <div className="p-6 flex gap-4 hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex-shrink-0 flex items-center justify-center text-green-600">
                      <span className="material-symbols-outlined">work</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-on-surface group-hover:text-secondary transition-colors">New Internship Match</h4>
                        <span className="text-[11px] text-on-surface-variant uppercase font-medium">5 hours ago</span>
                      </div>
                      <p className="text-sm text-on-surface-variant">Adobe posted a &quot;Creative Cloud Design Intern&quot; role that matches 94% of your core skill set.</p>
                      <div className="mt-3 flex gap-2">
                        <span className="px-2 py-1 bg-surface-container rounded text-[10px] font-bold text-on-surface-variant">94% MATCH</span>
                        <span className="px-2 py-1 bg-surface-container rounded text-[10px] font-bold text-on-surface-variant">REMOTE</span>
                      </div>
                    </div>
                  </div>
                  {/* Activity Item 3 */}
                  <div className="p-6 flex gap-4 hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex-shrink-0 flex items-center justify-center text-purple-600">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-on-surface group-hover:text-secondary transition-colors">Course Completed</h4>
                        <span className="text-[11px] text-on-surface-variant uppercase font-medium">Yesterday</span>
                      </div>
                      <p className="text-sm text-on-surface-variant">You finished &quot;Behavioral Psychology in UX&quot;. Career readiness score increased by 2.1 points.</p>
                    </div>
                  </div>
                  {/* Activity Item 4 */}
                  <div className="p-6 flex gap-4 hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex-shrink-0 flex items-center justify-center text-orange-600">
                      <span className="material-symbols-outlined">quiz</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-on-surface group-hover:text-secondary transition-colors">Skill Assessment Ready</h4>
                        <span className="text-[11px] text-on-surface-variant uppercase font-medium">Yesterday</span>
                      </div>
                      <p className="text-sm text-on-surface-variant">AI Mentor has prepared a 10-minute assessment on &quot;Advanced React Hooks&quot; for you.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-surface-container-low mt-auto border-t border-outline-variant/30 text-center rounded-b-2xl">
                <button className="text-secondary font-bold text-sm hover:underline">View All Activity</button>
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
