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

        <section className="bg-[#001f3f] py-16 md:py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
            <div className="inline-block bg-accent/20 text-accent font-black text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-[0.2em] border border-accent/30">
              Established in 2000
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
              25+ Years of Building<br className="hidden lg:block" /> Better IT.
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
              Syscon Computer Systems is a Mumbai-based IT infrastructure and technology solutions company helping businesses build, manage and support reliable technology environments.
            </p>
            <p className="text-accent font-black mt-6 tracking-wide">We Keep Your Business Running.</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-4">
                  Our Journey & Story
                </h2>
                <h3 className="text-3xl font-extrabold text-primary mb-6 leading-tight">
                  Complete Technology Solutions Under One Roof
                </h3>
                <div className="space-y-6 text-gray-650 text-[15px] leading-relaxed font-medium">
                  <p>
                    Founded in <strong>2000</strong>, Syscon Computer Systems began with a simple belief: businesses should have access to reliable technology, practical solutions and dependable technical support.
                  </p>
                  <p>
                    Over the years, Syscon has evolved from an IT hardware and solutions provider into a comprehensive business technology partner, supporting organizations with computers, servers, networking, cloud, security, surveillance and IT infrastructure.
                  </p>
                  <p>
                    Our approach is simple: understand the business requirement, recommend the right technology, implement it professionally and remain available with ongoing support.
                  </p>
                  <p>
                    Whether you are setting up a new office, upgrading your infrastructure, moving to the cloud, strengthening security or simply looking for a dependable IT partner, Syscon provides the expertise and solutions to support your journey.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-primary rounded-[32px] blur opacity-30"></div>
                  <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                    <img src="/about-office.png" alt="Syscon business IT infrastructure team" className="w-full h-auto object-cover hover:scale-102 transition duration-500 ease-out" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-4">
                Our Value Pillars
              </h2>
              <p className="text-gray-600 text-[16px] font-semibold max-w-2xl mx-auto leading-relaxed">
                We believe technology should solve business problems, not create them. Our approach is built around practical solutions, dependable support and long-term relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                ["Customer Focus", "We understand your business requirements first and then recommend technology that delivers real value."],
                ["Reliability & Trust", "We believe in transparent communication, dependable solutions and long-term customer relationships."],
                ["Complete IT Solutions", "From infrastructure and networking to cloud, security and support, we provide a complete technology ecosystem under one roof."],
                ["Technical Expertise", "Our team combines practical IT experience with the technical knowledge required to design, implement and support business technology."],
              ].map(([title, desc]) => (
                <div key={title} className="bg-white rounded-3xl p-8 border border-gray-150/70 shadow-sm hover:shadow-md transition duration-300">
                  <div className="text-4xl mb-6 text-accent">●</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-semibold">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 space-y-6">
                <div className="relative overflow-hidden rounded-[32px] border border-gray-200/60 shadow-sm min-h-[420px] lg:min-h-[500px] lg:max-w-[420px] lg:justify-self-center bg-[#071420]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "url('/image/1000356605.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "brightness(0.72) contrast(1.08) saturate(0.9)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071420]/90 via-[#071420]/55 to-[#071420]/15" />
                  <div className="relative z-10 flex h-full min-h-[420px] lg:min-h-[500px] flex-col justify-end p-7 lg:p-8 text-white text-center">
                    <h3 className="text-3xl font-extrabold text-white mb-1">Amitkumar Jain</h3>
                    <p className="text-[#dfeaf7] font-black text-xs uppercase tracking-[0.22em] mb-5">Founder</p>

                    <div className="space-y-2 border-t border-white/20 pt-4 text-sm font-semibold text-gray-100/95 text-left">
                      <p>Location: Mumbai, Maharashtra</p>
                      <p>Experience: 25+ Years</p>
                      <p>Focus: Reliable Technology & Support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="relative overflow-hidden rounded-[32px] border border-gray-200/60 shadow-sm min-h-[420px] lg:min-h-[500px] lg:max-w-[420px] lg:justify-self-center bg-[#071420]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "url('/image/1000356603.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "brightness(0.72) contrast(1.08) saturate(0.9)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071420]/90 via-[#071420]/55 to-[#071420]/15" />
                  <div className="relative z-10 flex h-full min-h-[420px] lg:min-h-[500px] flex-col justify-end p-7 lg:p-8 text-white text-center">
                    <h3 className="text-3xl font-extrabold text-white mb-1">Jigar Vakharia</h3>
                    <p className="text-[#dfeaf7] font-black text-xs uppercase tracking-[0.22em] mb-5">Founder</p>

                    <div className="space-y-2 border-t border-white/20 pt-4 text-sm font-semibold text-gray-100/95 text-left">
                      <p>Location: Mumbai, Maharashtra</p>
                      <p>Experience: 25+ Years</p>
                      <p>Focus: Reliable Technology & Support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-4">
                  Leadership Profile
                </h2>
                <h3 className="text-3xl font-extrabold text-primary mb-6 leading-tight">
                  Building Syscon Through 25+ Years of Technology
                </h3>
                <div className="space-y-6 text-gray-650 text-[15px] leading-relaxed font-medium">
                  <p>
                    Jigar Vakharia & Amit Kumar founded Syscon Computer Systems in 2000 with a strong focus on customer service, reliable technology and long-term business relationships.
                  </p>
                  <p>
                    Over the years, he has guided Syscon through significant changes in business technology, from traditional computing and networking to cloud, security and integrated IT infrastructure.
                  </p>
                  <p>
                    His philosophy remains simple: understand the customer's business, recommend the right solution and provide dependable support so customers can focus on what they do best: running and growing their business.
                  </p>
                  <p>
                    At Syscon, technology is not just about products. It is about creating an IT environment that helps businesses work better, stay secure and grow with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#001f3f] py-16 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Need a Reliable IT Partner?
            </h2>
            <p className="text-blue-100 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              Whether you are setting up, upgrading or managing your business IT infrastructure, Syscon can help you plan the right technology solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleContactClick} className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl font-bold transition transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm select-none">
                Talk to an IT Expert <span>→</span>
              </button>
              <button onClick={handleContactClick} className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-xl font-bold transition transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-sm select-none">
                Get a Quote <span>→</span>
              </button>
            </div>
            <p className="mt-10 text-accent font-black tracking-wide">
              We Keep Your Business Running.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
