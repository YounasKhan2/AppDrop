import { useEffect, useRef } from "react";

// Generic AdSense Ad component
export function AdSenseAd({
  adClient,
  adSlot,
  style = {},
  format = "auto",
  fullWidthResponsive = true,
  layout = undefined,
  layoutKey = undefined,
  className = "",
  ...rest
}) {
  const adRef = useRef(null);
  useEffect(() => {
    if (adRef.current && window.adsbygoogle) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {}
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      {...(layout ? { "data-ad-layout": layout } : {})}
      {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
      {...rest}
    ></ins>
  );
}

// Pre-configured ad types for convenience
export function DisplayAd(props) {
  return (
    <AdSenseAd
      adClient="ca-pub-9113733158673282"
      adSlot="4111391939"
      style={{ display: "block" }}
      format="auto"
      fullWidthResponsive={true}
      {...props}
    />
  );
}

export function SideRailAd(props) {
  return (
    <AdSenseAd
      adClient="ca-pub-9113733158673282"
      adSlot="1234567890"
      style={{ display: "block", width: 160, height: 600 }}
      format="vertical"
      fullWidthResponsive={false}
      {...props}
    />
  );
}
