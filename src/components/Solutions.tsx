"use client";

const SOLUTIONS_DATA = [
  ["Networking & Structured Cabling", "Reliable wired and wireless networking, structured cabling and connectivity solutions designed for performance and scalability."],
  ["Surveillance & Security Systems", "CCTV surveillance, access control and security solutions designed to protect your people, premises and business assets."],
  ["Biometric & Attendance Solutions", "Reliable biometric attendance and access solutions for efficient workforce management and controlled access."],
  ["Servers, Storage & Data Centre Solutions", "Business-grade servers, storage and data centre solutions designed for performance, reliability and scalability."],
  ["Virtualization & Cloud Solutions", "Flexible virtualization and cloud solutions that improve accessibility, efficiency, collaboration and business continuity."],
  ["Computers & Laptops", "Business desktops, laptops, workstations and customized computing solutions from leading technology brands."],
  ["Office Printing Solutions", "Printers, multifunction devices, consumables and printing solutions for modern business environments."],
  ["Business Software Solutions", "Technology solutions that help businesses streamline operations, improve productivity and manage day-to-day processes."],
  ["Power Backup Solutions", "Reliable UPS and power backup solutions designed to protect critical IT infrastructure from power interruptions."],
  ["Commercial Displays", "Professional display and digital presentation solutions for offices, retail environments and business communication."],
  ["Audio Visual Solutions", "Professional audio, video, conferencing and presentation solutions for modern workplaces."],
  ["IT Hardware Rental", "Flexible IT hardware rental solutions for temporary requirements, projects, events and business needs."],
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-left">
          <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-3">
            Our Solutions & Technology Offerings
          </h2>
          <p className="text-gray-600 text-base font-medium max-w-3xl leading-relaxed">
            From everyday business computing to complete IT infrastructure, Syscon provides the technology products and solutions your business needs under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {SOLUTIONS_DATA.map(([title, description]) => (
              <div key={title} className="flex items-start gap-4 p-4 rounded-2xl border border-transparent transition">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-primary mb-1 leading-snug">{title}</h3>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="lg:col-span-4 rounded-[32px] overflow-hidden relative shadow-2xl flex flex-col justify-end p-8 min-h-[400px] lg:min-h-full border border-gray-100 bg-cover bg-center"
            style={{ backgroundImage: `url('/solutions-bg.jpg')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-transparent z-0"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-bold mb-4 leading-tight tracking-tight">
                End-to-End Technology Solutions Under One Roof
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                From consultation and design to deployment and ongoing support, Syscon helps businesses build secure, reliable and scalable IT infrastructure that is ready for today and prepared for tomorrow.
              </p>
              <a href="/solutions" className="inline-flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-xl text-sm font-bold hover:bg-gray-100 transition">
                Explore Our Solutions <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
