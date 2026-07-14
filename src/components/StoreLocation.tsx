"use client";

export default function StoreLocation() {
  const mapQuery = encodeURIComponent(
    "Office no. 42, 3rd Floor, Navyug House, 14 Old Hanuman Lane, Kalbadevi, Mumbai - 400 002"
  );
  const mapUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <section id="location" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent font-bold text-xs px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
            📍 Locate Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Visit Our Store
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find us in Mumbai. Drop by for repair services, product consultations, or support.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-stretch">
          {/* Address Details Card */}
          <div className="md:col-span-2 bg-[#f5f6f8] rounded-3xl p-8 flex flex-col justify-between border border-gray-200/50 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Store Address</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-2xl mt-1">📍</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Syscon Computer Systems,<br />
                      Office no. 42, 3rd Floor, Navyug House,<br />
                      14 Old Hanuman Lane, Kalbadevi,<br />
                      Mumbai - 400 002
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl mt-1">🕒</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600 text-sm">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl mt-1">📞</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-600 text-sm">
                      Mobile : +91 9820865540<br />
                      Telephone : +91 022 2242 3787<br />
                      Email : info@syscontech.net
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary/95 text-white py-4 px-6 rounded-2xl font-semibold transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                🗺️ Get Directions on Map
              </a>
            </div>
          </div>

          {/* Interactive Map Iframe */}
          <div className="md:col-span-3 min-h-[350px] md:min-h-full rounded-3xl overflow-hidden border border-gray-250/60 shadow-xl relative group">
            <iframe
              src={mapUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="SYSCON Store Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
