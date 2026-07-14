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
  {
    title: "Networking & Structured Cabling",
    description: "High-performance, reliable network connectivity solutions for modern office buildings and industrial sites.",
    category: "infrastructure",
    features: [
      "Structured copper (CAT6/CAT6A) & fiber optic cabling layout",
      "Server rack design, patch panel integration & neat cable dressing",
      "Fluke testing, network troubleshooting & bandwidth certification",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Surveillance & Security Systems",
    description: "Integrated digital surveillance networks offering 24/7 round-the-clock monitoring and visual asset safety.",
    category: "security",
    features: [
      "High-definition IP, bullet, dome & PTZ camera installations",
      "Network Video Recorder (NVR/DVR) and central storage setups",
      "Secure remote viewing on mobile devices & central command screens",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Biometric Attendance Solutions",
    description: "Accurate, contactless, and foolproof attendance capture tools that seamlessly integrate with payroll systems.",
    category: "security",
    features: [
      "AI facial recognition, fingerprint readers & RFID terminals",
      "Cloud-based multi-location attendance and shift management",
      "Real-time payroll integration & access control gating",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Servers & Storage, Data Center",
    description: "Enterprise-grade computational and storage architecture tailored for business resilience, backup, and high-availability.",
    category: "infrastructure",
    features: [
      "Tower & rackmount server builds (Dell, HP, Lenovo)",
      "High-availability Network Attached Storage (NAS) & SAN setups",
      "Automated local & offsite backup & storage replication systems",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "Virtualization & Cloud Platform",
    description: "Consolidate your hardware footprints, maximize efficiency, and migrate workload components to hybrid cloud infrastructures.",
    category: "infrastructure",
    features: [
      "VMware ESXi & Microsoft Hyper-V virtualization design",
      "Active Directory, hosted email & public cloud server migrations",
      "Virtual desktop infrastructure (VDI) setups for remote teams",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Computing Devices",
    description: "Tailored laptop fleets, powerful CAD/office workstations, and standard business PCs curated for peak operational workflows.",
    category: "workplace",
    features: [
      "Business-series laptops & desktop client PC supplies",
      "Custom high-performance developer & design workstations",
      "Standard client OS imaging, deployment & endpoint protection",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Office Printing Solutions",
    description: "Durable printers, scanners, and multi-function copying units backed by proactive consumable supply and support SLAs.",
    category: "workplace",
    features: [
      "Enterprise Multi-Function Printers (MFP) & document scanners",
      "Pay-per-page Managed Print Services (MPS) contract models",
      "On-demand consumable delivery, service kits & standby units",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    title: "Business Software Solutions",
    description: "Maximize organizational productivity with database systems, operating suites, and industry-standard management utilities.",
    category: "workplace",
    features: [
      "Microsoft 365, Google Workspace & Windows OS licensing",
      "Tally Prime ERP setup, server management & data synchronization",
      "Network firewalls, client-side antivirus & cloud backup utilities",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Power Backup Systems",
    description: "Ensure zero business downtime with industrial-grade uninterruptible power systems and smart load switches.",
    category: "infrastructure",
    features: [
      "Online & line-interactive UPS supply (1kVA to 120kVA)",
      "High-durability tubular battery banks & monitoring units",
      "Automatic Transfer Switches (ATS) & load balancing configs",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Commercial Displays",
    description: "Elevate your visibility with high-brightness commercial display monitors, active screens, and interactive lobby signages.",
    category: "av",
    features: [
      "Interactive smart boards & touch kiosks for modern lobbies",
      "High-brightness commercial displays, digital menu boards & signs",
      "Ultra-narrow bezel LED video walls & display array controllers",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: "Laptop Body Fabrication",
    description: "Highly specialized structural repairs, hinge rebuilds, custom chassis reinforcements, and industrial terminal shell builds.",
    category: "av",
    features: [
      "Laptop chassis fabrication, frame welding & panel rebuilding",
      "Broken display hinge replacements & thread reconstruction",
      "Custom metal enclosure fabrication for retail kiosks",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "AudioVisual Solutions",
    description: "State-of-the-art AV presentation architecture configured for seamless executive boardrooms, hybrid meetings, and seminar venues.",
    category: "av",
    features: [
      "Boardroom conferencing systems with active beamforming mics",
      "Professional audio mixers, PA speakers & echo cancellation",
      "Central matrix controllers, HDMI switchers & cabling",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "IT Hardware Rental",
    description: "Optimize capital expenditures with short-term project leases and long-term bulk deployments of IT hardware assets.",
    category: "workplace",
    features: [
      "Bulk laptop & desktop renting for temporary setups & projects",
      "High-power server & switch rentals for sandbox testing",
      "Inclusive hardware warranty, replacement & support SLA options",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleInquire = (serviceName: string) => {
    window.dispatchEvent(
      new CustomEvent("open-contact-modal", { detail: { service: serviceName } })
    );
  };

  const filteredSolutions =
    activeCategory === "all"
      ? SOLUTIONS_DATA
      : SOLUTIONS_DATA.filter((s) => s.category === activeCategory);

  return (
    <main className="w-full min-h-screen bg-gray-50/50 flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="bg-[#001f3f] py-16 md:py-24 text-white relative overflow-hidden">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
            <div className="inline-block bg-accent/20 text-accent font-black text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-[0.2em] border border-accent/30 animate-pulse">
              💡 Product & Solutions Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
              Technology Solutions <br className="hidden lg:block" />
              That Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Progress</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
              Explore our core offerings. From system design and cabling layout to server deployment, security, and AV setups, we customize services to match your goals.
            </p>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="py-10 bg-white border-b border-gray-100 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition transform active:scale-95 cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/70 hover:border-primary/20 rounded-[28px] p-8 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                        {solution.icon}
                      </div>
                      <h3 className="text-xl font-bold text-primary leading-snug">
                        {solution.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                      {solution.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-500 font-semibold leading-relaxed animate-fade-in">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✔</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <button
                    onClick={() => handleInquire(solution.title)}
                    className="w-full bg-gradient-to-r from-primary to-blue-900 text-white py-3 px-5 rounded-xl font-bold text-sm hover:shadow-md transition active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Inquire Now
                    <span>→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom SLA banner */}
        <section className="bg-gradient-to-r from-[#001f3f] to-blue-950 py-16 text-white text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold mb-4">
              Need Multi-Location or Standard SLAs?
            </h2>
            <p className="text-blue-100 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              We provide custom SLA-based Annual Maintenance Contracts (AMC) and enterprise deployment contracts across major cities in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleInquire("Product-Related Benefits")}
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl font-bold transition transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm select-none"
              >
                Inquire for SLA Contract
                <span>→</span>
              </button>
              <a
                href="https://wa.me/919820865540?text=Hello!%20I%20would%20like%20to%20talk%20to%20an%20expert%20about%20SYSCON%20IT%20SLA%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-xl font-bold transition transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-sm select-none"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
