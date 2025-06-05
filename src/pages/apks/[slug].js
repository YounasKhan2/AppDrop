// APK Details Page
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function ApkDetails() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout title="APK Details">
      <h1 className="text-2xl font-bold mb-4">APK Details: {slug}</h1>
      {/* Download button, screenshots, changelog, etc. */}
      <div className="text-gray-500">Coming soon: APK details for {slug}.</div>
    </Layout>
  );
}
