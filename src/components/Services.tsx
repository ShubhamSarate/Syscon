"use client";

import Link from "next/link";

const SERVICES_DATA = [
  {
    title: "IT Consulting",
    description: "Strategic IT consulting to align technology with your business goals and drive growth.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-teal-600",
  },
  {
    title: "IT Services",
    description: "Comprehensive infrastructure, network, and enterprise IT support services.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-red-700",
  },
  {
    title: "AMC (Maintenance)",
    description: "Reliable Annual Maintenance Contracts for uninterrupted business operations.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "bg-yellow-600",
  },
  {
    title: "Implementation",
    description: "End-to-end implementation of systems, hardware, and custom IT solutions.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
    color: "bg-blue-900",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-3 flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#d64545] rounded-full inline-block"></span>
            OUR CORE SERVICES
            <span className="w-2.5 h-2.5 bg-[#d64545] rounded-full inline-block"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Services 2x2 Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow relative"
              >
                {/* Icon Square */}
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Why Businesses Choose Syscon Card */}
          <div className="lg:col-span-4 bg-[#001f3f] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight leading-tight">
                Why Businesses Choose Syscon
              </h3>
              <ul className="space-y-4">
                {[
                  "28+ Years of IT Excellence",
                  "Cost-effective & Reliable Solutions",
                  "Certified Professionals",
                  "Pan India Presence",
                  "Remote & On-site Support",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-emerald-400 font-bold text-base select-none mt-0.5">✓</span>
                    <span className="text-blue-100 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="w-full bg-white hover:bg-gray-100 text-primary py-4 px-6 rounded-2xl font-bold transition flex items-center justify-center gap-2 cursor-pointer text-sm text-center animate-bounce-subtle"
              >
                More About Us
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
