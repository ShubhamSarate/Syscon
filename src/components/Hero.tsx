"use client";

import Link from "next/link";

export default function Hero() {
  const handleTalkToExpert = () => {
    const phoneNumber = "919820865540";
    const message = "Hello! I would like to talk to an expert about SYSCON IT services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className="bg-gradient-to-b from-white via-blue-50 to-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-block bg-accent/10 text-accent font-bold text-xs px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
              Established in 2000
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-primary">
              Technology That Keeps Your Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-600">Running.</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-lg">
              Syscon Computer Systems is a trusted IT infrastructure and technology solutions partner for businesses, providing complete solutions across computers, servers, networking, cloud, security, surveillance and ongoing IT support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleTalkToExpert}
                className="bg-gradient-to-r from-primary to-blue-900 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-primary/50 transition transform hover:-translate-y-1 inline-flex items-center gap-2 justify-center cursor-pointer"
              >
                Talk to an IT Expert
                <span>→</span>
              </button>
              <Link
                href="/solutions"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition transform hover:-translate-y-1 inline-flex items-center gap-2 justify-center cursor-pointer select-none"
              >
                Explore Our Solutions
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center w-full mt-12 md:mt-0">
            <div className="relative w-full max-w-md md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 rounded-3xl blur-3xl opacity-60 -z-10 animate-pulse"></div>
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-blue-100/50 bg-white">
                <img
                  src="/hero-city.jpg"
                  alt="SYSCON integrated business IT infrastructure"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-8">
          {[
            ["25+", "Years of IT Experience"],
            ["360°", "Complete IT Solutions"],
            ["Pan-India", "Support Capability"],
            ["Remote & Onsite", "IT Support"],
          ].map(([number, label]) => (
            <div key={label} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[20px] sm:text-[26px] font-black text-primary leading-none mb-1 sm:mb-1.5">{number}</h4>
                <p className="text-gray-500 text-[11px] sm:text-[13px] font-bold leading-tight">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-primary font-black tracking-wide text-lg">
          We Keep Your Business Running.
        </p>
      </div>
    </section>
  );
}
