import { AdSenseAd } from "@/components/AdSenseAd";

export default function SideRailAd() {
  return (
    <div className="hidden lg:block fixed top-24 right-4 z-40">
      <AdSenseAd
        adClient="ca-pub-9113733158673282"
        adSlot="1234567890"
        format="vertical"
        style={{ width: 160, height: 600 }}
      />
    </div>
  );
}
