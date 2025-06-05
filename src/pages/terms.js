// Terms of Service Page
import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout title="Terms of Service">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">By accessing and using APKDrop, you agree to the following terms and conditions. Please read them carefully.</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Use this website and its content at your own risk.</li>
        <li>Do not upload, share, or distribute any illegal, pirated, or copyrighted content.</li>
        <li>We reserve the right to remove any content or restrict access at our discretion.</li>
        <li>Users are responsible for complying with local laws regarding APK downloads and usage.</li>
        <li>We may update these terms at any time. Continued use of the site constitutes acceptance of the new terms.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 mt-8">User Responsibilities</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You must be at least 13 years old to use this website.</li>
        <li>You agree not to misuse the site or its content for illegal activities.</li>
        <li>You are responsible for your own device security and data privacy.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 mt-8">Intellectual Property</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>All trademarks, logos, and app names belong to their respective owners.</li>
        <li>APKDrop does not claim ownership of third-party app content.</li>
        <li>Content on this site is for informational and educational purposes only.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 mt-8">Limitation of Liability</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>APKDrop is not liable for any damages resulting from the use or inability to use the site or downloaded files.</li>
        <li>We do not guarantee the accuracy, completeness, or safety of any APK files.</li>
        <li>All downloads are at your own risk. Always scan files before installing.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 mt-8">AdSense & Affiliate Disclosure</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>This site displays Google AdSense ads and may use affiliate links.</li>
        <li>We may earn a commission from qualifying purchases or ad clicks.</li>
        <li>Ads are clearly marked and do not influence our app listings or reviews.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 mt-8">Changes to Terms</h2>
      <p className="mb-4">We may update these terms at any time. Continued use of the site constitutes acceptance of the new terms. Please review this page regularly.</p>
      <p>For questions, contact us at <a href="mailto:younaskk120@gmail.com" className="text-blue-600 underline">younaskk120@gmail.com</a>.</p>
    </Layout>
  );
}
