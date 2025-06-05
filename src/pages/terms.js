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
      <p>For questions, contact us at <a href="mailto:younaskk120@gmail.com" className="text-blue-600 underline">younaskk120@gmail.com</a>.</p>
    </Layout>
  );
}
