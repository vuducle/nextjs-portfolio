"use client";
import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CookieBanner() {
  const [mounted, setMounted] = useState<Boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Essential Only"
      enableDeclineButton
      flipButtons
      cookieName="portfolioCookieConsent"
      style={{
        background: "#1e293b",
        alignItems: "center",
        padding: "1rem",
        fontSize: "0.875rem",
      }}
      buttonStyle={{
        background: "#059669",
        color: "white",
        padding: "0.5rem 1rem",
        borderRadius: "0.375rem",
        fontWeight: 500,
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#94a3b8",
        border: "1px solid #94a3b8",
        padding: "0.5rem 1rem",
        borderRadius: "0.375rem",
        fontWeight: 500,
      }}
      expires={365}
      overlay
      overlayClasses="fixed inset-0 bg-black/50 z-[100]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-gray-100">
          We use cookies to enhance your experience. By continuing to visit this
          site, you agree to our use of cookies 🍪.{" "}
          {/* <Link href="/privacy" className="text-emerald-300 hover:underline">
            Learn more
          </Link> */}
        </p>
      </motion.div>
    </CookieConsent>
  );
}
