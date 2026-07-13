"use client";

import { useState, useEffect } from "react";

const SERVICES = [
  "CCTV Repair & Services",
  "CCTV Installation",
  "Digital Video Recorder Repair",
  "CCTV camera Repair",
  "Resolving Hard Disk Drive Issues",
  "CCTV DVR Repair",
  "Restoring The Power Supply Module",
  "Refurbishing Of Cable",
  "Product-Related Benefits",
  "Free Installation",
];

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      setIsOpen(true);
      // Reset form states when opening
      setName("");
      setEmail("");
      setMobile("");
      
      const requestedService = customEvent.detail?.service;
      if (requestedService && SERVICES.includes(requestedService)) {
        setSelectedService(requestedService);
      } else {
        setSelectedService(SERVICES[0]);
      }
      
      setSubmitStatus("idle");
      setErrorMessage("");
    };

    window.addEventListener("open-contact-modal", handleOpen as EventListener);
    return () => {
      window.removeEventListener("open-contact-modal", handleOpen as EventListener);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage("Please enter your name");
      setSubmitStatus("error");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage("Please enter a valid email address");
      setSubmitStatus("error");
      return;
    }

    if (!mobile.trim() || !/^\+?[0-9\s\-()]{7,15}$/.test(mobile.trim())) {
      setErrorMessage("Please enter a valid mobile number");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: selectedService,
          name: name.trim(),
          email: email.trim(),
          mobile: mobile.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
      } else {
        setErrorMessage(data.error || "Failed to submit. Please try again.");
        setSubmitStatus("error");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-[4px] transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Centering container */}
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        {/* Modal Card container */}
        <div className="relative w-full max-w-[480px] bg-white rounded-[24px] sm:rounded-[32px] border border-gray-100 shadow-2xl p-6 sm:p-10 text-left z-10 transition-all transform scale-100 duration-300">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition p-1.5 rounded-full hover:bg-gray-100"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {submitStatus === "success" ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your inquiry has been successfully sent. We will get back to you shortly.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-primary hover:bg-primary/95 text-white px-8 py-3.5 rounded-xl font-bold transition w-full shadow-lg shadow-primary/20"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Dropdown Container */}
              <div className="mb-6">
                <label htmlFor="service-select" className="block text-sm font-semibold text-gray-700 mb-2.5">
                  Select what you are looking for?
                </label>
                <div className="relative">
                  <select
                    id="service-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full appearance-none bg-gray-50/80 rounded-2xl border border-transparent focus:border-primary/20 focus:bg-white focus:shadow-sm transition-all duration-300 px-5 py-4 text-gray-800 text-[16px] outline-none pr-12 cursor-pointer font-medium"
                    disabled={isSubmitting}
                  >
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Inputs Container */}
              <div className="flex flex-col gap-4 mb-6">
                {/* Name Input */}
                <div className="flex items-center gap-3 px-5 py-4 bg-gray-50/80 rounded-2xl border border-transparent focus-within:border-primary/20 focus-within:bg-white focus-within:shadow-sm transition-all duration-300">
                  <div className="flex-shrink-0 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent text-gray-800 text-[16px] placeholder-gray-400 outline-none border-none"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Input */}
                <div className="flex items-center gap-3 px-5 py-4 bg-gray-50/80 rounded-2xl border border-transparent focus-within:border-primary/20 focus-within:bg-white focus-within:shadow-sm transition-all duration-300">
                  <div className="flex-shrink-0 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-gray-800 text-[16px] placeholder-gray-400 outline-none border-none"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Mobile Input */}
                <div className="flex items-center gap-3 px-5 py-4 bg-gray-50/80 rounded-2xl border border-transparent focus-within:border-primary/20 focus-within:bg-white focus-within:shadow-sm transition-all duration-300">
                  <div className="flex-shrink-0 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    placeholder="Mobile No."
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full bg-transparent text-gray-800 text-[16px] placeholder-gray-400 outline-none border-none"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Error Message */}
              {submitStatus === "error" && errorMessage && (
                <div className="text-red-500 text-sm mb-4 px-2 font-medium flex items-center gap-1.5 animate-shake">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white py-4 px-6 rounded-2xl text-lg font-semibold transition-all shadow-md select-none flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-primary/70 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/90 active:scale-[0.99] hover:shadow-lg hover:shadow-primary/20"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Now"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
