"use client";

export default function StoreLocation() {
  const storeAddress =
    "Syscon Computer Systems, 14 Old Hanuman Lane, Navyug House Bldg, 3rd Floor, Office No 42, Mangaldas Market, Kalbadevi Road, Hedgewar Chowk-Kalbadevi, Mumbai-400002, Maharashtra";
  const mapQuery = encodeURIComponent(storeAddress);
  const mapUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl =
    "https://www.google.com/maps/place/Syscon+Computer+Systems/@18.9485032,72.8287204,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x3be7ce221d09695d:0xd8beb7f8389c58e9!2sSyscon+Computer+Systems,+Office+no.+42,+3rd+Floor,+Navyug+House,+Old+Hanuman+Lane+10%2F18,+Dhirubhai,+Nathalal+Parikh+Marg,+Kalbadevi,+Mumbai,+Maharashtra+400002!2m2!1d72.8312953!2d18.9485032!3m5!1s0x3be7ce221d09695d:0xd8beb7f8389c58e9!8m2!3d18.9485032!4d72.8312953!16s%2Fg%2F11hyn8r1x3?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="location" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent font-bold text-xs px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
            Visit Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Let's Talk About Your IT Needs.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visit our Mumbai office for IT consultations, product requirements, infrastructure planning and technical support.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-stretch">
          <div className="md:col-span-2 bg-[#f5f6f8] rounded-3xl p-8 flex flex-col justify-between border border-gray-200/50 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Corporate Office</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-2xl mt-1">📍</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {storeAddress}
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
                  <span className="text-2xl mt-1">☎</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-600 text-sm">
                      022-46683787<br />
                      022-22423787<br />
                      WhatsApp: 022-22423787<br />
                      Email: info@syscontech.net
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
                Get Directions
              </a>
            </div>
          </div>

          <div className="md:col-span-3 min-h-[350px] md:min-h-full rounded-3xl overflow-hidden border border-gray-250/60 shadow-xl relative group">
            <iframe
              src={mapUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="SYSCON Corporate Office Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
