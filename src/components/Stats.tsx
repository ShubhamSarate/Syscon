export default function Stats() {
  const stats = [
    { number: "25+", label: "Years of IT Experience", icon: "✓", color: "from-yellow-400 to-orange-500" },
    { number: "360°", label: "Complete IT Solutions", icon: "✓", color: "from-green-400 to-emerald-500" },
    { number: "Pan-India", label: "Support Capability", icon: "✓", color: "from-blue-400 to-cyan-500" },
    { number: "Remote & Onsite", label: "IT Support", icon: "✓", color: "from-purple-400 to-pink-500" },
  ];

  return (
    <section className="bg-gradient-to-b from-light via-white to-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className={`bg-gradient-to-br ${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mx-auto mb-4 shadow-lg group-hover:shadow-xl transition transform group-hover:scale-110`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
