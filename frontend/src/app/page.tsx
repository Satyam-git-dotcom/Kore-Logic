"use client";

import React from 'react';
import Link from 'next/link';
import KoreLogicLogo from '@/components/KoreLogicLogo';

export default function LandingPage() {
  return (
    <div className="text-on-surface bg-surface-container-lowest min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
        <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex items-center gap-3">
            <KoreLogicLogo size={40} />
            <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md font-bold text-primary">Kore Logic</h1>
          </div>
          <div className="hidden md:flex items-center gap-8 font-body-md text-body-md">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Platform</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Resources</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="hidden md:block text-on-surface-variant font-medium hover:text-primary">
              Login
            </Link>
            <Link href="/dashboard" className="bg-secondary text-white px-6 py-2.5 rounded-xl font-medium shadow-sm hover:scale-105 active:scale-95 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
            <div className="z-10">
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full font-label-sm text-label-sm mb-6 uppercase tracking-wider font-semibold">The Future of Work</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
                Build Your Career <span className="text-secondary">With AI</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Kore Logic creates personalized learning paths, projects, internships, and career roadmaps tailored to your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard" className="bg-secondary text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 group font-semibold">
                  Get Started
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <button className="border border-outline-variant bg-surface px-8 py-4 rounded-xl font-medium hover:bg-surface-container-low transition-all flex items-center justify-center gap-2 font-semibold">
                  <span className="material-symbols-outlined text-secondary">play_circle</span>
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Animated Dashboard Mockup */}
            <div className="relative animate-[float_4s_ease-in-out_infinite]">
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl relative z-20 border border-white/50">
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary">Student Dashboard</h3>
                    <p className="text-on-surface-variant font-label-sm">Welcome back, Alex</p>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-blue-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-500">person</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Career Score */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/20">
                    <span className="font-label-sm text-on-surface-variant uppercase mb-4 block">Career Score</span>
                    <div className="flex items-end gap-2">
                      <span className="font-metric-xl text-metric-xl text-secondary font-bold">92%</span>
                      <span className="material-symbols-outlined text-green-500 mb-1">trending_up</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full mt-4 overflow-hidden">
                      <div className="bg-secondary h-full rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  {/* Weekly Streak */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/20">
                    <span className="font-label-sm text-on-surface-variant uppercase mb-4 block">Weekly Streak</span>
                    <div className="flex items-center gap-3">
                      <span className="font-metric-xl text-metric-xl text-on-surface font-bold">14</span>
                      <span className="material-symbols-outlined text-[#FF2D7A]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                    </div>
                    <p className="text-label-sm text-on-surface-variant mt-2">Days active</p>
                  </div>
                  {/* Internship Match */}
                  <div className="col-span-2 border-l-2 border-l-[#FF2D7A] bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/20">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-label-sm text-secondary font-bold">New Internship Match</span>
                      <span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary-container p-3 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary-container">rocket_launch</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Frontend Engineer Intern</h4>
                        <p className="text-label-sm text-on-surface-variant">TechFlow AI • San Francisco</p>
                      </div>
                      <button className="ml-auto text-secondary font-bold text-label-sm">Apply Now</button>
                    </div>
                  </div>
                </div>
                
                {/* AI Mentor Widget Floating */}
                <div className="absolute -bottom-8 -right-8 bg-primary-container text-on-primary-container p-5 rounded-2xl shadow-xl max-w-[240px] border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">psychology</span>
                    </div>
                    <span className="font-bold text-body-md text-white">AI Career Mentor</span>
                  </div>
                  <p className="text-label-sm opacity-80 leading-relaxed text-white">&quot;Alex, you&apos;ve reached 92% readiness for Google&apos;s SWE role. Focus on System Design next.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-20">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Master Your Future</h2>
              <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">Precision tools designed to give you an unfair advantage in the competitive job market.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-white p-10 rounded-[2rem] shadow-sm border border-outline-variant/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">route</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary">Personalized Paths</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">AI-driven learning roadmaps that adapt in real-time to your progress and changing industry trends.</p>
                <a className="text-secondary font-bold inline-flex items-center gap-2" href="#">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
              {/* Feature 2 */}
              <div className="group bg-white p-10 rounded-[2rem] shadow-sm border border-outline-variant/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">terminal</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary">Project Engine</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">Get matched with industry-relevant projects that build the exact portfolio hiring managers want to see.</p>
                <a className="text-secondary font-bold inline-flex items-center gap-2" href="#">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
              {/* Feature 3 */}
              <div className="group bg-white p-10 rounded-[2rem] shadow-sm border border-outline-variant/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">psychology</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary">AI Mentorship</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">24/7 access to an intelligent mentor that answers technical questions and provides career guidance.</p>
                <a className="text-secondary font-bold inline-flex items-center gap-2" href="#">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (Bento Style) */}
        <section className="py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">How It Works</h2>
                <p className="text-on-surface-variant font-body-lg">Three simple steps to transform your career trajectory with Kore Logic&apos;s precision intelligence.</p>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium font-semibold">Explore The Platform</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Step 1: Analyze */}
              <div className="md:col-span-8 bg-white rounded-[2rem] p-10 flex flex-col md:flex-row gap-10 items-center overflow-hidden border border-outline-variant/20 shadow-sm relative group">
                <div className="md:w-1/2">
                  <span className="text-secondary font-metric-xl text-metric-xl opacity-20 block mb-4 font-bold">01</span>
                  <h3 className="font-headline-md text-headline-md mb-4 text-primary">Analyze Your Profile</h3>
                  <p className="text-on-surface-variant leading-relaxed">Our AI scans your existing skills, github repositories, and aspirations to identify current strengths and critical gaps.</p>
                </div>
                <div className="md:w-1/2 relative flex justify-center items-center">
                  <div className="w-full h-48 bg-surface-container-highest rounded-2xl flex items-center justify-center border border-outline-variant/30 group-hover:scale-105 transition-transform duration-500">
                    <span className="material-symbols-outlined text-6xl text-secondary">analytics</span>
                  </div>
                </div>
              </div>
              {/* Step 2: Recommend */}
              <div className="md:col-span-4 bg-primary-container text-on-primary-container rounded-[2rem] p-10 border border-white/10 shadow-sm">
                <span className="text-secondary-fixed-dim font-metric-xl text-metric-xl opacity-30 block mb-4 font-bold text-white">02</span>
                <h3 className="font-headline-md text-headline-md mb-4 text-white">Smart Recommendations</h3>
                <p className="opacity-80 leading-relaxed text-white">Receive a tailor-made curriculum of courses, open-source projects, and certifications curated for your target roles.</p>
                <div className="mt-12 flex justify-center">
                  <span className="material-symbols-outlined text-8xl text-secondary opacity-50">auto_awesome</span>
                </div>
              </div>
              {/* Step 3: Grow */}
              <div className="md:col-span-12 bg-white rounded-[2rem] p-10 flex flex-col md:flex-row gap-10 items-center border border-outline-variant/20 shadow-sm overflow-hidden group">
                <div className="md:w-1/3">
                  <span className="text-secondary font-metric-xl text-metric-xl opacity-20 block mb-4 font-bold">03</span>
                  <h3 className="font-headline-md text-headline-md mb-4 text-primary">Grow and Secure</h3>
                  <p className="text-on-surface-variant leading-relaxed">Track your career score, complete projects, and get directly matched with internship opportunities at global tech companies.</p>
                </div>
                <div className="md:w-2/3 flex gap-4 overflow-hidden">
                  <div className="flex-shrink-0 w-64 p-6 bg-surface-container rounded-2xl border border-outline-variant/20 group-hover:-translate-x-4 transition-transform duration-700">
                    <div className="h-10 w-10 bg-white rounded shadow-sm mb-4"></div>
                    <div className="h-4 w-3/4 bg-on-surface-variant/20 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-on-surface-variant/10 rounded"></div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-6 bg-surface-container rounded-2xl border border-outline-variant/20 group-hover:-translate-x-8 transition-transform duration-1000">
                    <div className="h-10 w-10 bg-white rounded shadow-sm mb-4"></div>
                    <div className="h-4 w-3/4 bg-on-surface-variant/20 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-on-surface-variant/10 rounded"></div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-6 bg-surface-container rounded-2xl border border-outline-variant/20 group-hover:-translate-x-12 transition-transform duration-500">
                    <div className="h-10 w-10 bg-white rounded shadow-sm mb-4"></div>
                    <div className="h-4 w-3/4 bg-on-surface-variant/20 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-on-surface-variant/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary-container text-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div>
                <p className="font-metric-xl text-metric-xl text-secondary-fixed mb-2 font-bold text-blue-300">42%</p>
                <p className="font-label-sm uppercase tracking-widest opacity-80">Avg. Salary Increase</p>
              </div>
              <div>
                <p className="font-metric-xl text-metric-xl text-secondary-fixed mb-2 font-bold text-blue-300">180h+</p>
                <p className="font-label-sm uppercase tracking-widest opacity-80">Time Saved Annually</p>
              </div>
              <div>
                <p className="font-metric-xl text-metric-xl text-secondary-fixed mb-2 font-bold text-blue-300">15k+</p>
                <p className="font-label-sm uppercase tracking-widest opacity-80">Students Placed</p>
              </div>
              <div>
                <p className="font-metric-xl text-metric-xl text-secondary-fixed mb-2 font-bold text-blue-300">94%</p>
                <p className="font-label-sm uppercase tracking-widest opacity-80">Match Accuracy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Proven Success</h2>
              <p className="text-on-surface-variant font-body-lg">Hear from students who used Kore Logic to land their dream roles.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/30 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-500">face</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Sarah Jenkins</h4>
                    <p className="text-label-sm text-on-surface-variant">SWE at Google</p>
                  </div>
                </div>
                <p className="text-on-surface-variant italic leading-relaxed">&quot;Kore Logic&apos;s AI mentor was better than any career coach I&apos;ve ever had. It gave me the exact roadmap I needed to bridge my skills gap for Google.&quot;</p>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/30 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-500">face_3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">David Chen</h4>
                    <p className="text-label-sm text-on-surface-variant">Data Analyst at Stripe</p>
                  </div>
                </div>
                <p className="text-on-surface-variant italic leading-relaxed">&quot;The project recommendations were so relevant. Hiring managers at Stripe specifically mentioned my portfolio projects from Kore Logic during the interview.&quot;</p>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/30 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-purple-500">face_4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Elena Rodriguez</h4>
                    <p className="text-label-sm text-on-surface-variant">UX Designer at Meta</p>
                  </div>
                </div>
                <p className="text-on-surface-variant italic leading-relaxed">&quot;I went from a confused student to landing a Meta internship in just 4 months. The personalized path really kept me focused on what mattered.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-outline-variant/20 overflow-hidden">
                <button className="w-full p-6 text-left flex justify-between items-center group text-primary">
                  <span className="font-bold">How does the AI Career Score work?</span>
                  <span className="material-symbols-outlined transition-transform">expand_more</span>
                </button>
                <div className="px-6 pb-6 text-on-surface-variant">
                  Our AI analyzes hundreds of thousands of successful job placements to determine the key milestones needed for specific roles. It then maps your current profile against these benchmarks to give you an accurate readiness percentage.
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-outline-variant/20 overflow-hidden">
                <button className="w-full p-6 text-left flex justify-between items-center group text-primary">
                  <span className="font-bold">Are the internship matches exclusive?</span>
                  <span className="material-symbols-outlined transition-transform">expand_more</span>
                </button>
              </div>
              <div className="bg-white rounded-2xl border border-outline-variant/20 overflow-hidden">
                <button className="w-full p-6 text-left flex justify-between items-center group text-primary">
                  <span className="font-bold">Is Kore Logic suitable for non-technical careers?</span>
                  <span className="material-symbols-outlined transition-transform">expand_more</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Ready to Accelerate Your Career?</h2>
            <p className="text-on-surface-variant font-body-lg mb-10">Join 15,000+ students building their future with Kore Logic today.</p>
            <Link href="/dashboard" className="inline-block bg-secondary text-white px-12 py-5 rounded-xl font-bold text-lg shadow-xl hover:scale-105 hover:shadow-secondary/20 transition-all">Start Your Journey For Free</Link>
            <p className="mt-6 text-label-sm text-on-surface-variant">No credit card required. Cancel anytime.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 gap-8">
          <div className="flex items-center gap-3">
            <KoreLogicLogo size={32} />
            <h1 className="font-headline-md text-headline-md text-primary font-bold">Kore Logic</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-label-sm text-label-sm">
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Help Center</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">API</a>
          </div>
          <div className="text-on-surface-variant font-label-sm">
            © 2026 Kore Logic. Precision in Career Intelligence.
          </div>
        </div>
      </footer>
    </div>
  );
}
