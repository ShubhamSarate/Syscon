export default function Partners() {
  const brands = [
    "DELL",
    "LENOVO",
    "HP",
    "CISCO",
    "SOPHOS",
    "D-LINK",
    "TP-LINK",
    "HIK VISION",
    "CP PLUS",
    "DAHUA",
    "TALLY",
    "SEAGATE",
    "WD",
    "MICROSOFT",
    "QUICK HEAL",
    "COREL",
    "PHOTOSHOP",
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-6">
          <div className="lg:w-1/5 flex-shrink-0 text-center lg:text-left">
            <span className="text-[#d64545] font-black text-[13px] uppercase tracking-[0.25em] block mb-0.5 animate-pulse">TRUSTED BY</span>
            <span className="text-primary font-black text-[18px] uppercase tracking-wide block leading-tight">LEADING BRANDS</span>
          </div>

          <div className="lg:w-4/5 w-full">
            <div className="brand-marquee">
              <div className="brand-track">
                {[...brands, ...brands].map((brand, index) => (
                  <span key={`${brand}-${index}`} className="brand-item">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
