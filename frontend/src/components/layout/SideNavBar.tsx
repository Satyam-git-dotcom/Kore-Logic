import React from 'react';
import Link from 'next/link';

export default function SideNavBar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] bg-surface-container-low border-r border-outline-variant/50 hidden md:flex flex-col py-8 px-4 gap-2 z-40 pt-28 overflow-y-auto custom-scrollbar">
      <nav className="flex flex-col gap-1">
        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/10 text-secondary border-l-4 border-secondary transition-all duration-300">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-body-md font-semibold">Dashboard</span>
        </Link>
        <Link href="/skill-analysis" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/30 transition-all">
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-body-md">Skill Analysis</span>
        </Link>
        <Link href="/roadmap" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/30 transition-all">
          <span className="material-symbols-outlined">map</span>
          <span className="font-body-md">Roadmap</span>
        </Link>
        <Link href="/projects" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/30 transition-all">
          <span className="material-symbols-outlined">rocket_launch</span>
          <span className="font-body-md">Projects</span>
        </Link>
        <Link href="/internships" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/30 transition-all">
          <span className="material-symbols-outlined">handshake</span>
          <span className="font-body-md">Internships</span>
        </Link>
        <Link href="/ai-mentor" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/30 transition-all">
          <span className="material-symbols-outlined">psychology</span>
          <span className="font-body-md">AI Mentor</span>
        </Link>
        <Link href="/reports" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/30 transition-all">
          <span className="material-symbols-outlined">assessment</span>
          <span className="font-body-md">Weekly Reports</span>
        </Link>
        <div className="my-4 border-t border-outline-variant/30"></div>
        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/30 transition-all">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-body-md">Settings</span>
        </Link>
      </nav>
      <div className="mt-auto p-4 bg-primary-container rounded-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"></div>
        <div className="relative z-10">
          <p className="font-headline-md text-white text-sm mb-1">Upgrade to Pro</p>
          <p className="text-[11px] text-on-primary-container mb-4">Unlock advanced AI interview simulations.</p>
          <button className="w-full py-2 bg-secondary text-white rounded-lg text-sm font-bold hover:scale-[1.02] transition-transform">Get Started</button>
        </div>
      </div>
    </aside>
  );
}
