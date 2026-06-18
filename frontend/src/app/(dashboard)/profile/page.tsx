"use client";

import React, { useState, useRef, useCallback } from 'react';
import TopNavBar from '@/components/layout/TopNavBar';
import SideNavBar from '@/components/layout/SideNavBar';
import { uploadResume } from '@/lib/api';

export default function ProfilePage() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<{ extracted_skills: string[]; text_preview: string } | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file.name.endsWith('.pdf')) {
      setUploadError('Only PDF files are supported.');
      return;
    }
    setIsUploading(true);
    setUploadError(null);
    setUploadResult(null);
    const result = await uploadResume(file);
    setIsUploading(false);
    if (result) {
      setUploadResult(result);
    } else {
      setUploadError('Failed to parse the resume. Please try again.');
    }
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, []);

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => setIsDragging(false);

  return (
    <>
      <TopNavBar />
      <SideNavBar />
      
      <main className="md:ml-[280px] pt-28 pb-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
          
          {/* Top action row */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline-md text-headline-md text-primary">Your Profile</h2>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-white rounded-xl font-body-md text-body-md shadow-md hover:shadow-xl transition-all active:scale-95">
              <span className="material-symbols-outlined text-[20px]">save</span>
              Update Profile
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Personal Info & Identity */}
            <div className="lg:col-span-4 space-y-8">
              {/* Personal Info Card */}
              <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/30 flex flex-col items-center text-center">
                <div className="relative group cursor-pointer mb-6">
                  <div className="w-32 h-32 rounded-full border-4 border-surface-container overflow-hidden bg-surface-container-high flex items-center justify-center">
                    <img alt="A professional, close-up studio portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI5QOJGiTu7L7N3msyLaEncqN_Vafziq_qf73Zx4nZ8K8orYyuyHCuZmXZ5DDYc-MkrBcEU6OsSiHc2wQFPSQ-Mn4nGeIPriTdz6drdJGF1X0czc-0gGKcRTCf7ZuFEZ5_EUs9JybkP4vVXi9Nc7SmAxdW-RJ_oqb02ldVRoXgv9wfuh7awh5wl1i-EmLaD-63-9-VZqZIpRohVet_JPoVY48yNpkO3VN_jPC5ZV3DzHZRtCgEBSJ-Wqh-dJ7v7vVrRGR9q3s0TMc"/>
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white">photo_camera</span>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md mb-1">Alex Thorne</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Senior UX Researcher &amp; Product Strategist</p>
                <div className="flex gap-2 mb-8">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm">Active Explorer</span>
                  <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm">Top 5% Skill Match</span>
                </div>
                <div className="w-full space-y-4 text-left pt-6 border-t border-outline-variant/30">
                  <div>
                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Email Address</label>
                    <p className="font-body-md text-body-md">alex.thorne@korelogic.ai</p>
                  </div>
                  <div>
                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Location</label>
                    <p className="font-body-md text-body-md">San Francisco, CA (Hybrid)</p>
                  </div>
                  <div>
                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Availability</label>
                    <p className="font-body-md text-body-md text-green-600 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Open to Opportunities
                    </p>
                  </div>
                </div>
              </section>

              {/* Target Role & Preferences */}
              <section className="bg-white rounded-xl p-8 shadow-sm border-l-[2px] border-l-[#FF2D7A] border border-outline-variant/20">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-[#FF2D7A]">flag</span>
                  <h4 className="font-headline-md text-headline-md text-primary">Target Role</h4>
                </div>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-body-md text-body-md font-bold mb-2">Desired Title</h5>
                    <p className="font-body-md text-body-md text-on-surface-variant">Lead Product Designer or Head of Design</p>
                  </div>
                  <div>
                    <h5 className="font-body-md text-body-md font-bold mb-2">Preferences</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-lg border border-outline-variant text-on-surface-variant font-label-sm text-label-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">home_work</span> Remote Friendly
                      </span>
                      <span className="px-3 py-1.5 rounded-lg border border-outline-variant text-on-surface-variant font-label-sm text-label-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">payments</span> $180k - $220k
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─── Resume Upload Card ─── */}
              <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-2 mb-5">
                  <span className="material-symbols-outlined text-secondary">description</span>
                  <h4 className="font-headline-md text-headline-md text-primary">Resume Parser</h4>
                </div>
                <p className="text-body-md text-on-surface-variant mb-5">Upload your PDF resume to auto-extract your skills and pre-fill your profile.</p>

                {/* Drop Zone */}
                <div
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-secondary bg-secondary/5 scale-[1.01]'
                      : 'border-outline-variant hover:border-secondary hover:bg-secondary/5'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                  />
                  {isUploading ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-secondary"></div>
                      <p className="text-body-md text-secondary font-bold">Parsing your resume...</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-secondary text-3xl">upload_file</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        <span className="text-secondary font-bold">Click to upload</span> or drag &amp; drop
                      </p>
                      <p className="text-label-sm text-on-surface-variant/60">PDF only, max 10MB</p>
                    </div>
                  )}
                </div>

                {/* Error */}
                {uploadError && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">error</span>
                    {uploadError}
                  </div>
                )}

                {/* Result */}
                {uploadResult && (
                  <div className="mt-5 space-y-4">
                    <div className="flex items-center gap-2 text-green-700">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="font-bold text-body-md">Skills Extracted!</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {uploadResult.extracted_skills.length > 0 ? (
                        uploadResult.extracted_skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-full font-label-sm text-label-sm font-bold capitalize">
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-on-surface-variant text-body-md">No common skills detected. Try a more detailed resume.</p>
                      )}
                    </div>
                    <details className="text-label-sm text-on-surface-variant cursor-pointer">
                      <summary className="hover:text-primary transition-colors">Preview extracted text</summary>
                      <p className="mt-2 p-3 bg-surface-container rounded-lg text-xs leading-relaxed">{uploadResult.text_preview}</p>
                    </details>
                  </div>
                )}
              </section>
            </div>

            {/* Right Column: Skills, History, Projects */}
            <div className="lg:col-span-8 space-y-8">
              {/* Career Goals */}
              <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/30">
                <h4 className="font-headline-md text-headline-md mb-4">Career Vision</h4>
                <p className="font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed">
                  &quot;I aim to bridge the gap between complex AI architectures and human-centric design, creating tools that empower creatives rather than replacing them. My goal is to lead a multi-disciplinary team within the next 18 months.&quot;
                </p>
              </section>

              {/* Skills Bento Grid */}
              <section>
                <div className="flex justify-between items-end mb-4 px-2">
                  <h4 className="font-headline-md text-headline-md">Skill Ecosystem</h4>
                  <button className="text-secondary font-label-sm text-label-sm hover:underline">View Deep Analysis</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-2">design_services</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Expert</p>
                    <p className="font-body-md text-body-md font-bold">Product UI/UX</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-2">code</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Advanced</p>
                    <p className="font-body-md text-body-md font-bold">Frontend Dev</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-2">bar_chart</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Intermediate</p>
                    <p className="font-body-md text-body-md font-bold">Data Strategy</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-2">auto_awesome</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Expert</p>
                    <p className="font-body-md text-body-md font-bold">AI Prompting</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 px-2">
                  <span className="bg-surface-container text-on-surface px-4 py-2 rounded-full font-label-sm text-label-sm">Figma</span>
                  <span className="bg-surface-container text-on-surface px-4 py-2 rounded-full font-label-sm text-label-sm">React.js</span>
                  <span className="bg-surface-container text-on-surface px-4 py-2 rounded-full font-label-sm text-label-sm">Python</span>
                  <span className="bg-surface-container text-on-surface px-4 py-2 rounded-full font-label-sm text-label-sm">LLM Orchestration</span>
                  <span className="bg-surface-container text-on-surface px-4 py-2 rounded-full font-label-sm text-label-sm">User Research</span>
                  <span className="bg-surface-container text-on-surface px-4 py-2 rounded-full font-label-sm text-label-sm">+12 more</span>
                </div>
              </section>

              {/* Education & Certs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/30">
                  <h4 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface-variant">school</span> Education
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <p className="font-body-md text-body-md font-bold">Stanford University</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">M.S. Human-Computer Interaction</p>
                      <p className="font-label-sm text-label-sm text-secondary mt-1">Class of 2018</p>
                    </div>
                    <div>
                      <p className="font-body-md text-body-md font-bold">UC Berkeley</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">B.A. Cognitive Science</p>
                      <p className="font-label-sm text-label-sm text-secondary mt-1">Class of 2015</p>
                    </div>
                  </div>
                </section>
                
                <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/30">
                  <h4 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface-variant">verified</span> Certifications
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary text-xl">workspace_premium</span>
                      </div>
                      <div>
                        <p className="font-body-md text-body-md font-bold">Google Data Analytics</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Verified Professional Certificate</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary text-xl">workspace_premium</span>
                      </div>
                      <div>
                        <p className="font-body-md text-body-md font-bold">AI Ethics &amp; Governance</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">MIT Sloan Exec Education</p>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>

              {/* Project Gallery */}
              <section>
                <div className="flex justify-between items-end mb-6 px-2">
                  <h4 className="font-headline-md text-headline-md">Project Gallery</h4>
                  <button className="flex items-center gap-1 text-secondary font-label-sm text-label-sm hover:underline">
                    <span className="material-symbols-outlined text-[18px]">add</span> Add Project
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group bg-white rounded-xl overflow-hidden border border-outline-variant/30 hover:shadow-xl transition-all duration-300">
                    <div className="h-48 relative overflow-hidden bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-secondary/40">design_services</span>
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary/80 backdrop-blur text-white px-3 py-1 rounded-full font-label-sm text-label-sm">Case Study</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="font-body-md text-body-md font-bold mb-2">FinTech Evolution 2024</h5>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mb-4 line-clamp-2">Reimagining mobile banking for Gen Z through biometric personalization and AI-led budgeting.</p>
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container flex items-center justify-center text-[10px] font-bold">FD</div>
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container flex items-center justify-center text-[10px] font-bold">UX</div>
                        </div>
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-white rounded-xl overflow-hidden border border-outline-variant/30 hover:shadow-xl transition-all duration-300">
                    <div className="h-48 relative overflow-hidden bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-secondary/40">integration_instructions</span>
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary/80 backdrop-blur text-white px-3 py-1 rounded-full font-label-sm text-label-sm">Open Source</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="font-body-md text-body-md font-bold mb-2">Nexus AI Framework</h5>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mb-4 line-clamp-2">A library for building ethical AI interfaces with built-in bias detection and transparency layers.</p>
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container flex items-center justify-center text-[10px] font-bold">AI</div>
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container flex items-center justify-center text-[10px] font-bold">JS</div>
                        </div>
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
