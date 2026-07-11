export default function Partners() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div className="lg:w-1/5 flex-shrink-0 text-center lg:text-left">
            <span className="text-[#d64545] font-black text-[13px] uppercase tracking-[0.25em] block mb-0.5 animate-pulse">TRUSTED BY</span>
            <span className="text-primary font-black text-[18px] uppercase tracking-wide block leading-tight">LEADING BRANDS</span>
          </div>

          {/* Right Brand Logos/Names */}
          <div className="lg:w-4/5 w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-center text-center">
            <div className="text-gray-400 font-black text-[17px] hover:text-primary transition select-none tracking-tight">
              CISCO
            </div>
            <div className="text-gray-400 font-black text-[17px] hover:text-primary transition select-none tracking-tight">
              DIGISOL
            </div>
            <div className="text-gray-400 font-black text-[17px] hover:text-primary transition select-none tracking-tight">
              SEAGATE
            </div>
            <div className="text-gray-400 font-black text-[17px] hover:text-primary transition select-none tracking-tight">
              SAMSUNG
            </div>
            <div className="text-gray-400 font-black text-[17px] hover:text-primary transition select-none tracking-tight">
              GODREJ
            </div>
            <div className="text-gray-400 font-black text-[17px] hover:text-primary transition select-none tracking-tight">
              DELL
            </div>
            <div className="text-gray-400 font-black text-[11px] leading-[13px] hover:text-primary transition select-none tracking-tight">
              HEWLETT PACKARD<br />ENTERPRISE
            </div>
            <div className="text-gray-400 font-black text-[17px] hover:text-primary transition select-none tracking-tight">
              MICROSOFT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
