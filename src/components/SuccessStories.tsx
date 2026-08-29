"use client";

const STORIES_DATA = [
  {
    title: "Multi-Location Connectivity",
    category: "Retail",
    description: "Reliable connectivity across multiple business locations.",
    image: "/success-retail.jpg",
  },
  {
    title: "Network & Server Upgrade",
    category: "IT Services",
    description: "Infrastructure upgrades designed to improve performance, reliability and scalability.",
    image: "/success-server.jpg",
  },
  {
    title: "Surveillance & Security",
    category: "Security Solutions",
    description: "Integrated surveillance solutions designed to improve security and visibility.",
    image: "/success-cctv.jpg",
  },
  {
    title: "IT Infrastructure Upgrade",
    category: "Data Centre Solutions",
    description: "Technology infrastructure designed to support business growth and operational efficiency.",
    image: "/success-datacenter.jpg",
  },
];

export default function SuccessStories() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-gray-100 pb-6">
          <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-3">
            Success Stories
          </h2>
          <p className="text-gray-600 text-base font-medium max-w-3xl leading-relaxed">
            See how Syscon helps businesses improve connectivity, strengthen infrastructure, enhance security and build reliable technology environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORIES_DATA.map((story) => (
            <div
              key={story.title}
              className="relative h-[380px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-end p-6 hover:shadow-xl transition bg-cover bg-center group"
              style={{ backgroundImage: `url('${story.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-0 group-hover:via-black/55 transition duration-300"></div>
              <div className="relative z-10 text-white flex flex-col h-full justify-end">
                <div className="mb-auto self-start">
                  <span className="bg-white/15 text-white font-bold text-[9px] uppercase tracking-wider py-1 px-3.5 rounded-full inline-block backdrop-blur-sm">
                    {story.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-black leading-tight mb-2 text-white">
                    {story.title}
                  </h3>
                  <p className="text-gray-300 text-xs font-semibold leading-relaxed mb-1">
                    {story.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
