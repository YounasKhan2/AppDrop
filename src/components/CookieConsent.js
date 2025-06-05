import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check both cookie and localStorage for legacy support
    if (!Cookies.get("cookieConsent") && !localStorage.getItem("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365, sameSite: "Lax" });
    localStorage.setItem("cookieConsent", "true"); // For legacy support
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col sm:flex-row items-center justify-between z-50">
      <span className="mb-2 sm:mb-0">
        We use cookies and similar technologies to personalize content and ads, provide social media features, and analyze our traffic. By using this site, you consent to our use of cookies. See our <Link href="/privacy-policy" className="underline">Privacy Policy</Link> for more information.
      </span>
      <button onClick={acceptCookies} className="bg-blue-600 px-4 py-2 rounded font-semibold ml-0 sm:ml-4 mt-2 sm:mt-0">Accept</button>
    </div>
  );
}
