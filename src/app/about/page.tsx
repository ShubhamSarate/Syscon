"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const handleContactClick = () => {
    window.dispatchEvent(new Event("open-contact-modal"));
  };

  return (
    <main className="w-full min-h-screen bg-gray-50/50 flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Banner */}
        <section className="bg-[#001f3f] py-16 md:py-24 text-white relative overflow-hidden">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
            <div className="inline-block bg-accent/20 text-accent font-black text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-[0.2em] border border-accent/30 animate-pulse">
              ✨ Established in 1998
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
              Pioneering IT Excellence<br className="hidden lg:block" />
              For Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">28 Years</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
              Learn about Syscon Computer Systems - Mumbai's trusted partner for integrated technology, surveillance, and enterprise IT support.
            </p>
          </div>
        </section>

        {/* Our Story Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Story content */}
              <div className="lg:col-span-7">
                <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-4">
                  OUR JOURNEY & STORY
                </h2>
                <h3 className="text-3xl font-extrabold text-primary mb-6 leading-tight">
                  Providing End-to-End Technology Solutions Under One Roof
                </h3>
                <div className="space-y-6 text-gray-650 text-[15px] leading-relaxed font-medium">
                  <p>
                    Founded in <strong>1998</strong> by <strong>Amitkumaar Jain</strong>, Syscon Computer Systems began with a simple but powerful mission: to make premium technology solutions accessible, reliable, and affordable for businesses in Mumbai.
                  </p>
                  <p>
                    Over the past three decades, we have grown from a local hardware repair specialist into a leading systems integrator. Today, we are proud to serve over <strong>1,000 clients</strong> across multiple sectors—ranging from government bodies and banking systems to corporate offices, retail giants, and educational institutes.
                  </p>
                  <p>
                    Under the visionary guidance of Amitkumaar Jain, we have continuously expanded our offerings. Whether you require structured networking cabling, advanced biometric systems, virtualization setups, or robust CCTV security surveillance, we offer a comprehensive portfolio tailored to secure, scale, and future-proof your business operations.
                  </p>
                </div>
              </div>

              {/* Right Column: Office Graphic Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  {/* Subtle decorative shadow shape */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-primary rounded-[32px] blur opacity-30"></div>
                  
                  <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                    <img
                      src="/about-office.png"
                      alt="Syscon Mumbai Corporate IT Collaboration Office"
                      className="w-full h-auto object-cover hover:scale-102 transition duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-4">
                OUR VALUE PILLARS
              </h2>
              <p className="text-gray-600 text-[16px] font-semibold max-w-2xl mx-auto leading-relaxed">
                We believe in providing honest, robust, and transparent technology services that build long-term business partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Customer Focus",
                  desc: "We design technology systems around your workflow to resolve real operational challenges.",
                  icon: "🎯",
                },
                {
                  title: "Reliability & Trust",
                  desc: "Building relationships through transparent SLA/Annual Maintenance Contracts.",
                  icon: "🤝",
                },
                {
                  title: "Pan-India Reach",
                  desc: "Supporting multi-location clients with standard rollouts and localized engineering.",
                  icon: "🌍",
                },
                {
                  title: "Technical Expertise",
                  desc: "Driven by 28+ years of field experience and certified tech support professionals.",
                  icon: "🛡️",
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-150/70 shadow-sm hover:shadow-md transition duration-300">
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-semibold">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Profile */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Profile Card */}
              <div className="lg:col-span-4 bg-[#f8f9fa] border border-gray-200/60 rounded-[32px] p-8 shadow-sm flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mb-6">
                  {/* Circular User Icon SVG */}
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-1">Amitkumaar Jain</h3>
                <p className="text-accent font-black text-xs uppercase tracking-wider mb-4">Founder & Proprietor</p>
                <div className="border-t border-gray-200 w-full pt-4 space-y-2 text-sm font-semibold text-gray-500">
                  <p>📍 Location: Mumbai, MH</p>
                  <p>🛡️ Experience: 28+ Years</p>
                  <p>💼 Focus: Customer Support & SLA</p>
                </div>
              </div>

              {/* Right Column: Bio */}
              <div className="lg:col-span-8">
                <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-4">
                  LEADERSHIP PROFILE
                </h2>
                <h3 className="text-3xl font-extrabold text-primary mb-6 leading-tight">
                  Steering Syscon Through Three Decades of Innovation
                </h3>
                <div className="space-y-6 text-gray-650 text-[15px] leading-relaxed font-medium">
                  <p>
                    Amitkumaar Jain founded Syscon in 1998 with a simple commitment: <strong>customer satisfaction above all else</strong>. His customer-first vision has steered the company through massive technological shifts—from basic local area networks and dial-up infrastructures to modern cloud servers, virtualization, fiber optics, and advanced biometrics.
                  </p>
                  <p>
                    By building a reputation for integrity and reliable, prompt support, Amitkumaar personally oversees major enterprise setups and SLA partnerships. His goal has always been to build long-term relationships where customers focus entirely on their business, knowing that their technology backbone is secure and managed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Page Bottom Section */}
        <section className="bg-[#001f3f] py-16 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Need a Custom IT Infrastructure Plan?
            </h2>
            <p className="text-blue-100 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              Get in touch with our proprietor Amitkumaar Jain and team for a free consultation or custom SLA contract quote.
            </p>
            <button
              onClick={handleContactClick}
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl font-bold transition transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm mx-auto select-none"
            >
              Get in Touch
              <span>→</span>
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
