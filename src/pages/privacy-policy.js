// Privacy Policy Page
import Layout from "@/components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">This Privacy Policy explains how we collect, use, and protect your information. We comply with all Google AdSense requirements.</p>
      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>We use cookies to personalize ads and analyze traffic. Google AdSense may collect your IP address and device information.</li>
        <li>We may use tracking technologies to improve user experience and serve relevant ads.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>We use Google AdSense to display ads. Google&apos;s use of advertising cookies enables it to serve ads based on your visits to our site and other sites on the Internet.</li>
        <li>We may use Google Analytics and other ad networks for analytics and advertising purposes.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">User Rights & Opt-Out Options</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You can opt out of personalized ads by adjusting your browser settings or visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</li>
        <li>We comply with GDPR and CCPA. Contact us to request data removal or access.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">More Information</h2>
      <p className="mb-4">Google's Advertising Principles are outlined here: <a href="https://www.google.com/policies/technologies/ads/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/technologies/ads/</a></p>
      <p>For questions, contact us at <a href="mailto:contact@yourdomain.com" className="text-blue-600 underline">contact@yourdomain.com</a>.</p>
    </Layout>
  );
}
