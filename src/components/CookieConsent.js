import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col sm:flex-row items-center justify-between z-50">
      <span className="mb-2 sm:mb-0">We use cookies to personalize ads and analyze traffic. By using this site, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a>.</span>
      <button onClick={acceptCookies} className="bg-blue-600 px-4 py-2 rounded font-semibold ml-0 sm:ml-4 mt-2 sm:mt-0">Accept</button>
    </div>
  );
}
