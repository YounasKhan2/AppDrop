// Privacy Policy Page
import Layout from "@/components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">This Privacy Policy explains how we collect, use, and protect your information. We comply with all Google AdSense requirements and privacy laws.</p>
      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>We use cookies and similar technologies to personalize ads, analyze traffic, and improve user experience. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites.</li>
        <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</li>
        <li>We may collect your IP address, device information, browser type, and usage data for analytics and security.</li>
        <li>If you submit feedback or download APKs, we may collect your name, email (if provided), and feedback content. Download logs may include IP address and timestamp for security and abuse prevention.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>We use Google AdSense to display ads. Google and its partners may use cookies and collect data as described above.</li>
        <li>We may use Google Analytics and other ad networks for analytics and advertising purposes.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">User Rights &amp; Opt-Out Options</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You can opt out of personalized ads by adjusting your browser settings or visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</li>
        <li>We comply with GDPR and CCPA. Contact us to request data removal or access.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">More Information</h2>
      <p className="mb-4">Google&apos;s Advertising Principles are outlined here: <a href="https://www.google.com/policies/technologies/ads/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/technologies/ads/</a></p>
      <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at <span className="break-all">younaskk120@gmail.com</span>. We&apos;re committed to protecting your privacy and ensuring a safe experience on APKDrop.</p>
      <p className="mb-4">We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we&apos;ll promptly remove it.</p>
    </Layout>
  );
}
