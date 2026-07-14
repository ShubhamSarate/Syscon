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
          {/* Left Content */}
          <div className="z-10">
            <div className="inline-block bg-accent/10 text-accent font-bold text-xs px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
              ✨ Established in 1998
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-primary">
              Technology Solutions That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-600">Power Progress</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-lg">
              SYSCON Computers & Services is a Mumbai-based IT solutions provider
              delivering end-to-end infrastructure, security, and IT services
              across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleTalkToExpert}
                className="bg-gradient-to-r from-primary to-blue-900 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-primary/50 transition transform hover:-translate-y-1 inline-flex items-center gap-2 justify-center cursor-pointer"
              >
                💬 Talk to an Expert
                <span>→</span>
              </button>
              <Link
                href="/solutions"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition transform hover:-translate-y-1 inline-flex items-center gap-2 justify-center cursor-pointer select-none"
              >
                🚀 Explore Solutions
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Content - Enhanced Illustration */}
          <div className="flex justify-center items-center w-full mt-12 md:mt-0">
            <div className="relative w-full max-w-md md:max-w-none">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 rounded-3xl blur-3xl opacity-60 -z-10 animate-pulse"></div>

              {/* Main 3D City Illustration Image */}
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-blue-100/50 bg-white">
                <img
                  src="/hero-city.jpg"
                  alt="SYSCON 3D City - Integrated Technology Infrastructure"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Stats Row */}
        <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition duration-300">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[20px] sm:text-[26px] font-black text-primary leading-none mb-1 sm:mb-1.5">28+</h4>
              <p className="text-gray-500 text-[11px] sm:text-[13px] font-bold leading-tight">Years of Excellence</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition duration-300">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h4 className="text-[20px] sm:text-[26px] font-black text-primary leading-none mb-1 sm:mb-1.5">1000+</h4>
              <p className="text-gray-500 text-[11px] sm:text-[13px] font-bold leading-tight">Projects Delivered</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition duration-300">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V10a2 2 0 00-2-2h-1a2 2 0 00-2-2h-1.5a3 3 0 00-3 3zm3 12.636V18a2 2 0 01-2 2v.945m8-2.945V17a2 2 0 00-2-2h-1a2 2 0 00-2-2v-1a2 2 0 00-2-2" />
              </svg>
            </div>
            <div>
              <h4 className="text-[20px] sm:text-[26px] font-black text-primary leading-none mb-1 sm:mb-1.5">Pan India</h4>
              <p className="text-gray-500 text-[11px] sm:text-[13px] font-bold leading-tight">Service Network</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition duration-300">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[20px] sm:text-[26px] font-black text-primary leading-none mb-1 sm:mb-1.5">Remote & Onsite</h4>
              <p className="text-gray-500 text-[11px] sm:text-[13px] font-bold leading-tight">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
