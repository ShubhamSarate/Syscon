"use client";

export default function CTA() {
  const handleGetInTouch = () => {
    window.dispatchEvent(new Event("open-contact-modal"));
  };

  return (
    <section id="contact" className="bg-[#001f3f] py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title */}
          <div className="lg:col-span-5 text-left text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              Ready to Build a Stronger<br />Technology Backbone?
            </h2>
          </div>

          {/* Center Description */}
          <div className="lg:col-span-4 text-left text-blue-100/90 text-[15px] leading-relaxed">
            Let's connect and create reliable, secure, and scalable IT solutions for your business.
          </div>

          {/* Right Button */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <button
              onClick={handleGetInTouch}
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl font-bold transition transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm select-none"
            >
              Get in Touch
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
