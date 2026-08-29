"use client";

import Link from "next/link";

const SERVICES_DATA = [
  {
    title: "IT Consulting",
    description: "Practical technology consulting that aligns your IT infrastructure with your business requirements, operational needs and future growth.",
    color: "bg-teal-600",
  },
  {
    title: "IT Infrastructure & Services",
    description: "Complete business IT infrastructure covering computers, servers, networking, storage, cloud, security and ongoing technical support.",
    color: "bg-red-700",
  },
  {
    title: "AMC & IT Support",
    description: "Reliable Annual Maintenance Contracts and ongoing support designed to reduce downtime and keep your business technology running smoothly.",
    color: "bg-yellow-600",
  },
  {
    title: "Implementation & Deployment",
    description: "End-to-end implementation, configuration and deployment of IT systems, hardware, networking and business technology solutions.",
    color: "bg-blue-900",
  },
];

const BENEFITS = [
  "25+ Years of Experience",
  "Complete 360° IT Solutions",
  "Reliable & Cost-Effective Solutions",
  "Experienced Technical Team",
  "Pan-India Support Capability",
  "Long-Term Technology Partnership",
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-3 flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#d64545] rounded-full inline-block"></span>
            Our Core Services
            <span className="w-2.5 h-2.5 bg-[#d64545] rounded-full inline-block"></span>
          </h2>
          <p className="text-gray-600 text-base font-medium max-w-3xl mx-auto leading-relaxed">
            From planning and implementation to ongoing support, Syscon provides the technology expertise businesses need to operate efficiently, securely and reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow relative"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
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

          <div className="lg:col-span-4 bg-[#001f3f] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight leading-tight">
                Why Businesses Choose Syscon
              </h3>
              <ul className="space-y-4">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm">
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
                Know More About Syscon
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
