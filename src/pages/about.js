// About & Contact Page
import Layout from "@/components/Layout";
import emailjs from 'emailjs-com';
import { useState } from "react";

function Popup({ message, type, onClose }) {
  if (!message) return null;
  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded shadow-lg text-white ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
      role="alert">
      {message}
      <button onClick={onClose} className="ml-4 text-white font-bold">&times;</button>
    </div>
  );
}

export default function About() {
  const [formData, setFormData] = useState({ from_name: "", from_email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get current date in a readable format
    const currentDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Karachi',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    try {
      await emailjs.send(
        'service_f3g9cml',    // Service ID
        'template_e1jl6lo',   // Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          current_date: currentDate
        },
        'VAbyDzYrPrPRaoZaB'   // Public Key
      );
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      setPopup({ message: 'Thank you for your message! I will get back to you soon.', type: 'success' });
      setTimeout(() => setPopup({ message: '', type: '' }), 4000);
    } catch (error) {
      setPopup({ message: `Failed to send message. ${error.text || error.message}`, type: 'error' });
      setTimeout(() => setPopup({ message: '', type: '' }), 4000);
    }
    setIsSubmitting(false);
  };

  return (
    <Layout title="About & Contact">
      <Popup message={popup.message} type={popup.type} onClose={() => setPopup({ message: '', type: '' })} />
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="mb-4">We are a team of Android enthusiasts dedicated to sharing safe and free APKs for testing and educational purposes. Our mission is to help users discover and enjoy Android apps securely.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8">Contact Us</h2>
      <p className="mb-2">For inquiries, DMCA requests, or support, contact us at:</p>
      <p className="mb-4">Email: <a href="mailto:contact@yourdomain.com" className="text-blue-600 underline">contact@yourdomain.com</a></p>
      <form onSubmit={handleSubmit} className="max-w-md bg-gray-50 dark:bg-[#232323] rounded p-4 flex flex-col gap-3 border border-gray-200 mt-4">
        <label className="font-medium">Your Name
          <input name="from_name" type="text" className="w-full mt-1 px-3 py-2 border rounded" placeholder="Name" value={formData.from_name} onChange={handleChange} required />
        </label>
        <label className="font-medium">Your Email
          <input name="from_email" type="email" className="w-full mt-1 px-3 py-2 border rounded" placeholder="Email" value={formData.from_email} onChange={handleChange} required />
        </label>
        <label className="font-medium">Subject
          <input name="subject" type="text" className="w-full mt-1 px-3 py-2 border rounded" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        </label>
        <label className="font-medium">Message
          <textarea name="message" className="w-full mt-1 px-3 py-2 border rounded" placeholder="How can we help you?" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</button>
        <p className="text-xs text-gray-500 mt-2">*This form sends feedback to our team. Please email us directly for urgent matters.</p>
      </form>
    </Layout>
  );
}
