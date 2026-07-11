"use client";

const STORIES_DATA = [
  {
    title: "Multi-Location Connectivity",
    category: "RETAIL",
    description: "Seamless connectivity across 50+ outlets nationwide.",
    image: "/success-retail.jpg",
  },
  {
    title: "Network & Server Upgrade",
    category: "IT SERVICES",
    description: "Infrastructure upgrade for better performance and reliability.",
    image: "/success-server.jpg",
  },
  {
    title: "90% Theft Reduction",
    category: "SURVEILLANCE SOLUTIONS",
    description: "Advanced surveillance system for minimized losses.",
    image: "/success-cctv.jpg",
  },
  {
    title: "40% Infrastructure Savings",
    category: "DATA CENTER SOLUTIONS",
    description: "Virtualization implementation that reduced costs significantly.",
    image: "/success-datacenter.jpg",
  },
];

export default function SuccessStories() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-gray-100 pb-6">
          <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-1">
            SUCCESS STORIES
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORIES_DATA.map((story, index) => (
            <div
              key={index}
              className="relative h-[380px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-end p-6 hover:shadow-xl transition bg-cover bg-center group"
              style={{ backgroundImage: `url('${story.image}')` }}
            >
              {/* Dark overlay mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-0 group-hover:via-black/55 transition duration-300"></div>

              {/* Card Content */}
              <div className="relative z-10 text-white flex flex-col h-full justify-end">
                <div className="mb-auto self-start">
                  {/* Category tag */}
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
