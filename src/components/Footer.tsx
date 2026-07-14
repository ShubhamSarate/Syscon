"use client";

import Link from "next/link";

export default function Footer() {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event("open-contact-modal"));
  };

  const handleScrollClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer id="support" className="bg-gradient-to-b from-primary to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Red top shape */}
                <path d="M50 10 L64 40 L50 68 L25 52 Z" fill="#d62525" />
                {/* Cyan bottom-left shape */}
                <path d="M25 52 L50 68 L34 92 L12 76 Z" fill="#00a2c2" />
                {/* Yellow bottom-right shape */}
                <path d="M64 40 L50 68 L88 90 Z" fill="#ffd000" />
              </svg>
              <div className="flex flex-col">
                <span className="font-extrabold text-[20px] text-white tracking-tight leading-none">SYSCON</span>
                <span className="font-black text-[7.5px] text-accent tracking-[0.05em] leading-none mt-1">TOTAL SOLUTION PROVIDER</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Technology Solutions That Power Progress. Delivering end-to-end IT infrastructure, security, and services across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition font-medium cursor-pointer"
                >
                  → About Us
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollClick(e, "services")}
                  className="hover:text-white transition font-medium cursor-pointer"
                >
                  → Services
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleScrollClick(e, "solutions")}
                  className="hover:text-white transition font-medium cursor-pointer"
                >
                  → Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleContactClick}
                  className="hover:text-white transition font-medium cursor-pointer"
                >
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Services</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <a href="#services" className="hover:text-white transition font-medium">
                  → IT Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition font-medium">
                  → IT Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition font-medium">
                  → AMC & Support
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition font-medium">
                  → Implementation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li>
                <strong className="text-white">👤 Proprietor :</strong>
                <br />
                Amitkumaar Jain
              </li>
              <li>
                <strong className="text-white">📞 Mobile :</strong>
                <br />
                +91 9820865540
              </li>
              <li>
                <strong className="text-white">💬 Telephone :</strong>
                <br />
                +91 022 2242 3787
              </li>
              <li>
                <strong className="text-white">📧 Email :</strong>
                <br />
                <a href="mailto:info@syscontech.net" className="hover:text-accent transition">info@syscontech.net</a>
              </li>
              <li>
                <strong className="text-white">📍 Address :</strong>
                <br />
                Office no. 42, 3rd Floor, Navyug House,<br />
                14 Old Hanuman Lane, Kalbadevi,<br />
                Mumbai - 400 002
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100 text-sm">
            © {new Date().getFullYear()} Syscon Computer Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-100 hover:text-white transition text-sm font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition text-sm font-medium">
              Terms of Service
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition text-sm font-medium">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
