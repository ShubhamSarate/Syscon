export default function Partners() {
  const brands = [
    { name: "Dell", logo: "https://cdn.simpleicons.org/dell/007DB8" },
    { name: "Lenovo", logo: "https://cdn.simpleicons.org/lenovo/E2231A" },
    { name: "HP", logo: "https://cdn.simpleicons.org/hp/0096D6" },
    { name: "Cisco", logo: "https://cdn.simpleicons.org/cisco/049FD9" },
    { name: "Sophos", logo: "https://www.google.com/s2/favicons?domain=sophos.com&sz=128" },
    { name: "D-Link", logo: "https://www.google.com/s2/favicons?domain=dlink.com&sz=128" },
    { name: "TP-Link", logo: "https://cdn.simpleicons.org/tplink/4ACBD6" },
    { name: "Hikvision", logo: "https://www.google.com/s2/favicons?domain=hikvision.com&sz=128" },
    { name: "CP Plus", logo: "https://www.google.com/s2/favicons?domain=cpplusworld.com&sz=128" },
    { name: "Dahua", logo: "https://www.google.com/s2/favicons?domain=dahuasecurity.com&sz=128" },
    { name: "Tally", logo: "https://www.google.com/s2/favicons?domain=tallysolutions.com&sz=128" },
    { name: "Seagate", logo: "https://cdn.simpleicons.org/seagate/6EBE49" },
    { name: "WD", logo: "https://www.google.com/s2/favicons?domain=westerndigital.com&sz=128" },
    { name: "Microsoft", logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128" },
    { name: "Quick Heal", logo: "https://www.google.com/s2/favicons?domain=quickheal.com&sz=128" },
    { name: "Corel", logo: "https://www.corel.com/static/corel/images/corel-wordmark-color-on-light.svg" },
    { name: "Photoshop", logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop-56.svg" },
    { name: "Digisol", logo: "https://www.google.com/s2/favicons?domain=digisol.com&sz=128" },
    { name: "Samsung", logo: "https://cdn.simpleicons.org/samsung/1428A0" },
    { name: "Godrej", logo: "https://www.godrej.com/resources/logo.png" },
    { name: "Hewlett Packard Enterprise", logo: "https://www.google.com/s2/favicons?domain=hpe.com&sz=128" },
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
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      title={brand.name}
                      loading="lazy"
                      className={`${brand.name === "Samsung" ? "h-14 w-14" : "h-10 w-auto max-w-[88px]"} object-contain opacity-75 transition duration-300 hover:scale-110 hover:opacity-100`}
                    />
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
