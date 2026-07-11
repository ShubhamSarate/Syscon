export default function WhyChoose() {
  const benefits = [
    "28+ Years of Excellence",
    "Certified Professionals",
    "Pan India Presence",
    "Remote & On-site Support",
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-white via-blue-50 to-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why Businesses Choose Syscon
            </h2>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4 text-lg">
                  <span className="text-accent text-3xl font-bold mt-1 flex-shrink-0">✓</span>
                  <span className="font-semibold">{benefit}</span>
                </li>
              ))}
            </ul>
            <button className="mt-10 bg-white text-primary px-8 py-4 rounded-full font-bold hover:shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
              📖 More About Us →
            </button>
          </div>

          {/* Right Content */}
          <div className="bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-3xl p-8 md:p-12 h-96 flex items-center justify-center shadow-xl border-2 border-blue-200">
            <div className="text-center">
              <div className="text-8xl mb-4 drop-shadow-lg">🏢</div>
              <p className="text-gray-700 font-bold text-lg">
                Team & Office Image
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Add your professional team/office image here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
