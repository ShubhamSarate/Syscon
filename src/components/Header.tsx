"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (id === "contact") {
      window.dispatchEvent(new Event("open-contact-modal"));
      return;
    }
    if (id === "about") {
      window.location.href = "/about";
      return;
    }
    if (id === "solutions") {
      window.location.href = "/solutions";
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex-shrink-0 group-hover:scale-105 transition transform duration-300">
                <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Red top shape */}
                  <path d="M50 10 L64 40 L50 68 L25 52 Z" fill="#d62525" />
                  {/* Cyan bottom-left shape */}
                  <path d="M25 52 L50 68 L34 92 L12 76 Z" fill="#00a2c2" />
                  {/* Yellow bottom-right shape */}
                  <path d="M64 40 L50 68 L88 90 Z" fill="#ffd000" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[20px] text-primary tracking-tight leading-none">SYSCON</span>
                <span className="font-black text-[7.5px] text-gray-500 tracking-[0.05em] leading-none mt-1">TOTAL SOLUTION PROVIDER</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-semibold transition cursor-pointer text-[16px] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary font-semibold transition cursor-pointer text-[16px] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About Us
            </Link>
            <button
              onClick={() => handleNavClick("services")}
              className="text-gray-700 hover:text-primary font-semibold transition cursor-pointer text-[16px] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("solutions")}
              className="text-gray-700 hover:text-primary font-semibold transition cursor-pointer text-[16px] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Solutions
            </button>
            <button
              onClick={() => handleNavClick("industries")}
              className="text-gray-700 hover:text-primary font-semibold transition cursor-pointer text-[16px] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Industries
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className="text-gray-700 hover:text-primary font-semibold transition cursor-pointer text-[16px] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("support")}
              className="text-gray-700 hover:text-primary font-semibold transition cursor-pointer text-[16px] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Support
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-gray-700 hover:text-primary font-semibold transition cursor-pointer text-[16px] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick("contact")}
            className="hidden lg:block bg-gradient-to-r from-primary to-blue-900 text-white px-6 py-3.5 rounded-full font-bold hover:shadow-lg hover:shadow-primary/50 transition transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer text-[15px] group"
          >
            Get a Quote
            <span className="transition-transform group-hover:translate-x-1 duration-300">→</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary text-[16px] font-semibold transition transform hover:translate-x-1 duration-200 text-left hover:bg-blue-50 px-3 py-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary text-[16px] font-semibold transition transform hover:translate-x-1 duration-200 text-left hover:bg-blue-50 px-3 py-2 rounded-lg"
            >
              About Us
            </Link>
            <button
              onClick={() => handleNavClick("services")}
              className="text-gray-700 hover:text-primary text-[16px] font-semibold transition transform hover:translate-x-1 duration-200 text-left hover:bg-blue-50 px-3 py-2 rounded-lg"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("solutions")}
              className="text-gray-700 hover:text-primary text-[16px] font-semibold transition transform hover:translate-x-1 duration-200 text-left hover:bg-blue-50 px-3 py-2 rounded-lg"
            >
              Solutions
            </button>
            <button
              onClick={() => handleNavClick("industries")}
              className="text-gray-700 hover:text-primary text-[16px] font-semibold transition transform hover:translate-x-1 duration-200 text-left hover:bg-blue-50 px-3 py-2 rounded-lg"
            >
              Industries
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className="text-gray-700 hover:text-primary text-[16px] font-semibold transition transform hover:translate-x-1 duration-200 text-left hover:bg-blue-50 px-3 py-2 rounded-lg"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("support")}
              className="text-gray-700 hover:text-primary text-[16px] font-semibold transition transform hover:translate-x-1 duration-200 text-left hover:bg-blue-50 px-3 py-2 rounded-lg"
            >
              Support
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-gray-700 hover:text-primary text-[16px] font-semibold transition transform hover:translate-x-1 duration-200 text-left hover:bg-blue-50 px-3 py-2 rounded-lg"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-gradient-to-r from-primary to-blue-900 text-white px-6 py-3.5 rounded-full font-bold w-full hover:shadow-lg hover:shadow-primary/50 transition mt-2 text-center text-[15px] group"
            >
              Get a Quote <span className="inline-block transition-transform group-hover:translate-x-1 duration-300">→</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
