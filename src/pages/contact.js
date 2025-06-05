// Contact Page
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">For inquiries, DMCA requests, or support, contact us at:</p>
      <p className="mb-4">Email: <a href="mailto:contact@yourdomain.com" className="text-blue-600 underline">contact@yourdomain.com</a></p>
      <form className="max-w-md bg-gray-50 dark:bg-[#232323] rounded p-4 flex flex-col gap-3 border border-gray-200 mt-4">
        <label className="font-medium">Your Name
          <input type="text" className="w-full mt-1 px-3 py-2 border rounded" placeholder="Name" required />
        </label>
        <label className="font-medium">Your Email
          <input type="email" className="w-full mt-1 px-3 py-2 border rounded" placeholder="Email" required />
        </label>
        <label className="font-medium">Message
          <textarea className="w-full mt-1 px-3 py-2 border rounded" placeholder="How can we help you?" required></textarea>
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
        <p className="text-xs text-gray-500 mt-2">*This form is a placeholder. Please email us directly for urgent matters.</p>
      </form>
    </Layout>
  );
}
