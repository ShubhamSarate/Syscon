"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CATEGORIES = [
  { id: "all", label: "All Solutions" },
  { id: "infrastructure", label: "IT Infrastructure" },
  { id: "security", label: "Security & Surveillance" },
  { id: "workplace", label: "Workplace & Software" },
  { id: "av", label: "AV & Displays" },
];

const SOLUTIONS_DATA = [
  { title: "Networking & Structured Cabling", description: "Reliable wired and wireless networking, structured cabling and connectivity solutions designed for performance and scalability.", category: "infrastructure", features: ["Structured copper and fibre cabling", "Server rack, patch panel and cable dressing", "Network troubleshooting and connectivity planning"] },
  { title: "Surveillance & Security Systems", description: "CCTV surveillance, access control and security solutions designed to protect your people, premises and business assets.", category: "security", features: ["IP, bullet, dome and PTZ camera installations", "NVR/DVR and central storage setups", "Secure remote viewing and monitoring"] },
  { title: "Biometric & Attendance Solutions", description: "Reliable biometric attendance and access solutions for efficient workforce management and controlled access.", category: "security", features: ["Fingerprint, RFID and facial-recognition terminals", "Multi-location attendance support", "Access control and workforce reporting"] },
  { title: "Servers, Storage & Data Centre Solutions", description: "Business-grade servers, storage and data centre solutions designed for performance, reliability and scalability.", category: "infrastructure", features: ["Tower and rack server planning", "NAS, SAN and backup architecture", "Data centre infrastructure support"] },
  { title: "Virtualization & Cloud Solutions", description: "Flexible virtualization and cloud solutions that improve accessibility, efficiency, collaboration and business continuity.", category: "infrastructure", features: ["VMware and Hyper-V planning", "Cloud migration and hosted services", "Remote access and continuity solutions"] },
  { title: "Computers & Laptops", description: "Business desktops, laptops, workstations and customized computing solutions from leading technology brands.", category: "workplace", features: ["Business desktops and laptops", "Workstations for office and specialist use", "Device setup, imaging and endpoint readiness"] },
  { title: "Office Printing Solutions", description: "Printers, multifunction devices, consumables and printing solutions for modern business environments.", category: "workplace", features: ["Printers and multifunction devices", "Consumables and service support", "Office printing workflow guidance"] },
  { title: "Business Software Solutions", description: "Technology solutions that help businesses streamline operations, improve productivity and manage their day-to-day processes.", category: "workplace", features: ["Productivity suites and business tools", "Licensing and deployment support", "Security, backup and operational software"] },
  { title: "Power Backup Solutions", description: "Reliable UPS and power backup solutions designed to protect critical IT infrastructure from power interruptions.", category: "infrastructure", features: ["UPS planning and supply", "Battery and backup sizing", "Protection for critical IT equipment"] },
  { title: "Commercial Displays", description: "Professional display and digital presentation solutions for offices, retail environments and business communication.", category: "av", features: ["Commercial displays and signage", "Interactive presentation displays", "Retail and office communication setups"] },
  { title: "Audio Visual Solutions", description: "Professional audio, video, conferencing and presentation solutions for modern workplaces.", category: "av", features: ["Conference room audio and video", "Presentation and display integration", "Workplace communication systems"] },
  { title: "IT Hardware Rental", description: "Flexible IT hardware rental solutions for temporary requirements, projects, events and business needs.", category: "workplace", features: ["Laptop and desktop rental", "Temporary project hardware", "Short-term and long-term rental support"] },
];

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleInquire = (serviceName: string) => {
    window.dispatchEvent(new CustomEvent("open-contact-modal", { detail: { service: serviceName } }));
  };

  const filteredSolutions = activeCategory === "all"
    ? SOLUTIONS_DATA
    : SOLUTIONS_DATA.filter((solution) => solution.category === activeCategory);

  return (
    <main className="w-full min-h-screen bg-gray-50/50 flex flex-col justify-between">
      <div>
        <Header />

        <section className="bg-[#001f3f] py-16 md:py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
            <div className="inline-block bg-accent/20 text-accent font-black text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-[0.2em] border border-accent/30">
              Product & Solutions Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
              Complete Technology Solutions <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Under One Roof</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
              From everyday business computing to complete IT infrastructure, Syscon provides the technology products and solutions your business needs under one roof.
            </p>
          </div>
        </section>

        <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-nowrap overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 gap-3 justify-start [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((cat) => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition transform active:scale-95 cursor-pointer whitespace-nowrap flex-shrink-0 ${activeCategory === cat.id ? "bg-primary text-white shadow-lg shadow-primary/25" : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent"}`}>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution) => (
                <div key={solution.title} className="bg-white border border-gray-200/70 hover:border-primary/20 rounded-[28px] p-8 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <h3 className="text-xl font-bold text-primary leading-snug">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">{solution.description}</p>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-500 font-semibold leading-relaxed">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button onClick={() => handleInquire(solution.title)} className="w-full bg-gradient-to-r from-primary to-blue-900 text-white py-3 px-5 rounded-xl font-bold text-sm hover:shadow-md transition active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer">
                    Inquire Now <span>→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#001f3f] to-blue-950 py-16 text-white text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold mb-4">End-to-End Technology Solutions Under One Roof</h2>
            <p className="text-blue-100 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              From consultation and design to deployment and ongoing support, Syscon helps businesses build secure, reliable and scalable IT infrastructure that is ready for today and prepared for tomorrow.
            </p>
            <button onClick={() => handleInquire("Technology Solutions")} className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl font-bold transition transform hover:-translate-y-0.5 active:scale-[0.99] inline-flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm select-none">
              Talk to an IT Expert <span>→</span>
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
