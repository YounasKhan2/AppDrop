// Disclaimer Page
import Layout from "@/components/Layout";

export default function Disclaimer() {
  return (
    <Layout title="Disclaimer">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <p className="mb-4">All APK files provided on this site are for testing and educational purposes only. Users must download apps only from official stores like Google Play if available.</p>
      <ul className="list-disc pl-6 mb-4">
        <li>We do not distribute paid or cracked apps. If you are the owner of an app and want it removed, contact us immediately at <a href="mailto:younaskk120@gmail.com" className="text-blue-600 underline">younaskk120@gmail.com</a>.</li>
        <li>We are not responsible for any damage caused by APKs. Download and install at your own risk.</li>
        <li>We comply with DMCA. Send takedown requests to <a href="mailto:younaskk120@gmail.com" className="text-blue-600 underline">younaskk120@gmail.com</a>.</li>
      </ul>
      <p>By using this site, you agree to these terms.</p>
    </Layout>
  );
}
