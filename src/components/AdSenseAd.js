import { useEffect, useRef, useState } from "react";

// Generic AdSense Ad component
export function AdSenseAd({
  adClient,
  adSlot,
  style = {},
  format = "auto",
  fullWidthResponsive = true,
  adType = "display", // display, in-feed, in-article, multiplex
  className = "",
  ...rest
}) {
  const adRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined" && adRef.current) {
      // Load AdSense script if not already present
      if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
        script.onload = () => {
          if (window.adsbygoogle && window.adsbygoogle.push) {
            window.adsbygoogle.push({});
          }
        };
      } else if (window.adsbygoogle && window.adsbygoogle.push) {
        window.adsbygoogle.push({});
      }
    }
  }, [adClient, adSlot]);

  // Ad type specific attributes
  let adProps = {
    className: `adsbygoogle ${className}`.trim(),
    style: { display: "block", ...style },
    "data-ad-client": adClient,
    "data-ad-slot": adSlot,
    "data-ad-format": format,
    "data-full-width-responsive": fullWidthResponsive ? "true" : "false",
    ref: adRef,
    ...rest
  };
  if (adType === "in-feed") {
    adProps["data-ad-layout"] = "in-feed";
  } else if (adType === "in-article") {
    adProps["data-ad-format"] = "fluid";
    adProps["data-ad-layout"] = "in-article";
  } else if (adType === "multiplex") {
    adProps["data-ad-format"] = "autorelaxed";
  }

  // Only render on client to avoid hydration error
  if (!isClient) return null;
  return <ins {...adProps}></ins>;
}

// Usage example (in any component):
// <AdSenseAd adClient="ca-pub-xxxx" adSlot="1234567890" />
// <AdSenseAd adClient="ca-pub-xxxx" adSlot="..." adType="in-feed" />
// <AdSenseAd adClient="ca-pub-xxxx" adSlot="..." adType="in-article" />
// <AdSenseAd adClient="ca-pub-xxxx" adSlot="..." adType="multiplex" />
