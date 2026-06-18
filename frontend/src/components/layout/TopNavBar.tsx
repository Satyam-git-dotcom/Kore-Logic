import React from 'react';
import KoreLogicLogo from '@/components/KoreLogicLogo';

export default function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm h-20">
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-gutter">
        <div className="flex items-center gap-4">
          <KoreLogicLogo size={40} />
          <span className="font-display-lg text-headline-md font-bold text-primary">Kore Logic</span>
        </div>
        <div className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all" placeholder="Search for skills, roadmaps, or jobs..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button className="p-2 rounded-full hover:bg-surface-variant transition-colors relative">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-surface"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant">
            <div className="hidden md:block text-right">
              <p className="font-label-sm text-on-surface font-bold">Alex Chen</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Product Designer</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-secondary/20 p-0.5">
              <div className="w-full h-full rounded-full bg-cover bg-center" data-alt="A professional close-up headshot" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWoFfuvKkR88R0iVGBePwDu2X2dJ5TpN9p9djX7yfRVmGOoNDnYtQUwxLugcMK865pAje1wQNZFSmnN7DSbBQ9D7lMIAf7LWp0XwvJB7EEZYZHhpfiPT__cKjo8cXBoFeoyzXWj5hnKmzYi8aIRKRYas5Zo31M7Q4kXxdb1uBID9B01LrKZfLc8jMwnLtjgDpg3BfpssSwhSKWMhQ_2JfVazbDo96_WvfGwBgx_qDa51kvUdT7i4vYLG4tg5AUTFvbtaNCLdBT05w')" }}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
