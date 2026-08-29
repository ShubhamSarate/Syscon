"use client";

import { useState, useEffect, useRef } from "react";

const INDUSTRIES_LIST = [
  "Corporate",
  "Retail",
  "Government",
  "Banking & Financial Services",
  "Education",
  "Healthcare",
  "Professional Services",
];

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * value));

            if (progress < 1) requestAnimationFrame(animate);
            else setCount(value);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={containerRef}>
      {count}
      {suffix}
    </span>
  );
}

const METRICS_DATA = [
  { number: "25+", numericValue: 25, suffix: "+", label: "Years of IT Experience" },
  { number: "360°", label: "IT Solutions" },
  { number: "Pan-India", label: "Support Capability" },
  { number: "Remote & Onsite", label: "Technical Support" },
  { number: "One Partner", label: "Complete IT Infrastructure" },
  { number: "Long-Term", label: "Business Relationships" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-6">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8">
              Every industry has different technology requirements. We understand the operational needs of businesses and provide practical IT solutions designed around their environment.
            </p>
            <ul className="space-y-4 mb-8">
              {INDUSTRIES_LIST.map((industry) => (
                <li key={industry} className="flex items-center gap-3 text-[16px] text-gray-800 font-semibold">
                  <div className="w-5 h-5 rounded-full border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {METRICS_DATA.map((metric) => (
              <div
                key={metric.label}
                className="bg-white rounded-2xl p-6 border border-gray-150/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow h-44"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center flex-shrink-0 mb-4 text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-primary mb-1 leading-tight">
                    {metric.numericValue !== undefined ? (
                      <AnimatedCounter value={metric.numericValue} suffix={metric.suffix} />
                    ) : (
                      metric.number
                    )}
                  </h3>
                  <p className="text-gray-500 text-xs font-semibold leading-snug">
                    {metric.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
