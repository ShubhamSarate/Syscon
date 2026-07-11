"use client";

import { useState, useEffect, useRef } from "react";

const INDUSTRIES_LIST = [
  "Corporate",
  "Government",
  "Retail",
  "Banking",
  "Education",
  "Healthcare",
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
            
            // easeOutQuad easing formula
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

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
  {
    number: "28+",
    numericValue: 28,
    suffix: "+",
    label: "Years in Business",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "1000+",
    numericValue: 1000,
    suffix: "+",
    label: "Happy Clients",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "3000+",
    numericValue: 3000,
    suffix: "+",
    label: "Projects Completed",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "50+",
    numericValue: 50,
    suffix: "+",
    label: "Expert Professionals",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: "24/7",
    numericValue: 24,
    suffix: "/7",
    label: "Support Available",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    number: "Pan India",
    label: "Service Network",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V10a2 2 0 00-2-2h-1a2 2 0 00-2-2h-1.5a3 3 0 00-3 3zm3 12.636V18a2 2 0 01-2 2v.945m8-2.945V17a2 2 0 00-2-2h-1a2 2 0 00-2-2v-1a2 2 0 00-2-2" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Industries We Serve */}
          <div className="lg:col-span-4">
            <h2 className="text-[16px] font-black text-[#d64545] uppercase tracking-[0.25em] mb-6">
              INDUSTRIES WE SERVE
            </h2>
            <ul className="space-y-4 mb-8">
              {INDUSTRIES_LIST.map((industry) => (
                <li key={industry} className="flex items-center gap-3 text-[16px] text-gray-800 font-semibold">
                  {/* Outline circle icon with building / check */}
                  <div className="w-5 h-5 rounded-full border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Metrics Grid (6 White Cards) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {METRICS_DATA.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-150/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow h-44"
              >
                {/* Metric Icon */}
                <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center flex-shrink-0 mb-4">
                  {metric.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-primary mb-1">
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
