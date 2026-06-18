"use client";

import React, { useState } from 'react';
import TopNavBar from '@/components/layout/TopNavBar';
import SideNavBar from '@/components/layout/SideNavBar';

export default function SettingsPage() {
  const [theme, setTheme] = useState('light');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);

  return (
    <>
      <TopNavBar />
      <div className="flex">
        <SideNavBar />

        {/* Main Content Canvas */}
        <main className="flex-1 md:ml-[280px] px-margin-mobile md:px-margin-desktop py-28 max-w-container-max mx-auto bg-surface-container-lowest min-h-screen">
          {/* Page Header */}
          <header className="mb-12">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-2 text-primary">Settings</h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg">Manage your account preferences and career intelligence engine.</p>
          </header>

          {/* Settings Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Preference Groups */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Appearance & Notifications Card */}
              <section className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-xl p-8">
                <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-secondary">palette</span>
                  General Preferences
                </h3>
                <div className="space-y-8">
                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-body-md text-body-md font-semibold text-primary">Theme Mode</p>
                      <p className="text-on-surface-variant font-label-sm text-label-sm">Toggle between Light and Dark visual interfaces.</p>
                    </div>
                    <div className="flex bg-surface-container rounded-full p-1 border border-outline-variant">
                      <button 
                        onClick={() => setTheme('light')}
                        className={`px-4 py-1.5 rounded-full text-label-sm font-semibold transition-all ${theme === 'light' ? 'bg-white shadow-sm text-secondary' : 'hover:text-secondary text-on-surface-variant'}`}
                      >
                        Light
                      </button>
                      <button 
                        onClick={() => setTheme('dark')}
                        className={`px-4 py-1.5 rounded-full text-label-sm font-semibold transition-all ${theme === 'dark' ? 'bg-white shadow-sm text-secondary' : 'hover:text-secondary text-on-surface-variant'}`}
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                  <hr className="border-outline-variant/30" />
                  {/* Notifications */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-body-md text-body-md font-semibold text-primary">Real-time Notifications</p>
                      <p className="text-on-surface-variant font-label-sm text-label-sm">Get notified about new skill match opportunities.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={notificationsEnabled} 
                        onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                      />
                      <div className="w-11 h-6 bg-outline-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                  </div>
                  <hr className="border-outline-variant/30" />
                  {/* Email Preferences */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-body-md text-body-md font-semibold text-primary">Email Summary</p>
                      <p className="text-on-surface-variant font-label-sm text-label-sm">Weekly career progress and AI-generated roadmap updates.</p>
                    </div>
                    <select className="bg-surface border border-outline-variant rounded-lg px-3 py-2 text-label-sm font-medium focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none text-on-surface">
                      <option>Weekly</option>
                      <option>Monthly</option>
                      <option>Never</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Connected Accounts */}
              <section className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-xl p-8">
                <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-secondary">link</span>
                  Integrations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* GitHub */}
                  <div className="p-4 border border-outline-variant rounded-xl flex items-center justify-between hover:border-secondary/50 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface">code</span>
                      </div>
                      <div>
                        <p className="font-body-md text-body-md font-semibold text-primary">GitHub</p>
                        <p className="text-on-surface-variant text-[12px]">Sync repositories</p>
                      </div>
                    </div>
                    <button className="text-secondary font-label-sm hover:underline">Connected</button>
                  </div>
                  {/* LinkedIn */}
                  <div className="p-4 border border-outline-variant rounded-xl flex items-center justify-between hover:border-secondary/50 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface">work</span>
                      </div>
                      <div>
                        <p className="font-body-md text-body-md font-semibold text-primary">LinkedIn</p>
                        <p className="text-on-surface-variant text-[12px]">Import profile</p>
                      </div>
                    </div>
                    <button className="text-secondary font-label-sm hover:underline font-semibold">Connect</button>
                  </div>
                </div>
              </section>

              {/* Privacy & Data */}
              <section className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-xl p-8">
                <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-secondary">lock</span>
                  Privacy &amp; Data
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-body-md text-body-md font-semibold text-primary">Private Profile</p>
                      <p className="text-on-surface-variant font-label-sm text-label-sm">Hide your progress and roadmap from recruiters.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={privateProfile} 
                        onChange={() => setPrivateProfile(!privateProfile)}
                      />
                      <div className="w-11 h-6 bg-outline-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-outline-variant/30">
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-surface-container-high rounded-lg text-label-sm font-semibold hover:bg-surface-variant transition-all text-on-surface">
                      <span className="material-symbols-outlined text-on-surface-variant text-body-md">download</span>
                      Export All Data
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 text-error font-semibold text-label-sm hover:bg-error/5 rounded-lg transition-all border border-transparent hover:border-error/20">
                      <span className="material-symbols-outlined text-body-md">delete</span>
                      Delete Account
                    </button>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column: Contextual AI Card & Quick Tips */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* AI Insight Card */}
              <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,38,0.05)] rounded-xl p-6 relative overflow-hidden border-l-[3px] border-l-[#FF2D7A]">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF2D7A]/5 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#FF2D7A] mb-3">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    <span className="font-label-sm uppercase tracking-wider font-semibold">AI Optimizer</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-2 text-primary">Better Results?</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                    Users with connected <b>GitHub</b> and <b>LinkedIn</b> accounts see 45% more accurate skill gap analysis.
                  </p>
                  <button className="w-full bg-primary text-white py-3 rounded-lg font-label-sm hover:opacity-90 transition-all font-bold">
                    Complete Profile
                  </button>
                </div>
              </div>

              {/* Quick Support */}
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/30">
                <h4 className="font-body-md font-bold mb-4 text-primary">Need Help?</h4>
                <ul className="space-y-3">
                  <li><a className="text-label-sm flex items-center justify-between text-on-surface-variant hover:text-secondary transition-colors group" href="#">Help Center <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span></a></li>
                  <li><a className="text-label-sm flex items-center justify-between text-on-surface-variant hover:text-secondary transition-colors group" href="#">Security Audit <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span></a></li>
                  <li><a className="text-label-sm flex items-center justify-between text-on-surface-variant hover:text-secondary transition-colors group" href="#">API Documentation <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span></a></li>
                </ul>
              </div>

            </div>
          </div>
        </main>
      </div>

      {/* Footer Component */}
      <footer className="w-full py-12 bg-surface-container-highest border-t border-outline-variant md:ml-[280px]">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <h1 className="font-headline-md text-headline-md text-primary font-bold">Kore Logic</h1>
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant">© 2026 Kore Logic. Precision in Career Intelligence.</p>
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
