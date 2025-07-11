"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only show if not accepted
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookieConsent");
      if (consent !== "true") {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    // Do not set localStorage, so banner will show again on refresh
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed right-6 bottom-6 z-[9999] max-w-xs md:max-w-sm bg-[#1a237e] text-white rounded-xl shadow-2xl p-6 flex flex-col gap-4 border border-blue-100 animate-fade-in">
      <div className="text-base mb-1">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. <a href="/privacy-policy" className="underline text-blue-200 ml-1">Learn more</a>
      </div>
      <div className="flex gap-3 justify-end">
        <button
          onClick={handleDecline}
          className="bg-white text-[#1a237e] font-bold rounded-lg px-4 py-2 border border-blue-700 hover:bg-blue-50 transition"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="bg-[#1976d2] text-white font-bold rounded-lg px-4 py-2 hover:bg-blue-800 transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
} 