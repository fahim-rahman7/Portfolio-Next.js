"use client";
import { useState } from "react";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6 border-t border-gray-200 dark:border-[#1B153D]">
      {/* Header Badge */}
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-300 border border-purple-800/50 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          Let's Connect
        </span>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          Get In <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300/80 max-w-md mx-auto text-sm">
          Whether you have a project in mind or just want to say hi, feel free to drop a message!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white dark:bg-[#120E2E] border border-gray-200 dark:border-[#221B52] space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-purple-300 mb-2 uppercase tracking-wider">
              Your Name
            </label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1C1642] border border-gray-200 dark:border-[#2C2361] text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-purple-300 mb-2 uppercase tracking-wider">
              Your Email
            </label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1C1642] border border-gray-200 dark:border-[#2C2361] text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-purple-300 mb-2 uppercase tracking-wider">
            Message
          </label>
          <textarea 
            rows="5" 
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..." 
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1C1642] border border-gray-200 dark:border-[#2C2361] text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 transition"
          ></textarea>
        </div>

        {/* Status Alerts */}
        {status === "success" && (
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
            🎉 Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
            ❌ Something went wrong. Please try again or email directly.
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === "loading"}
          className="w-full py-4 bg-purple-600 text-white font-medium rounded-xl shadow-lg shadow-purple-600/30 hover:bg-purple-700 transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <FaSpinner className="animate-spin" size={18} />
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane size={16} />
              Send Message
            </>
          )}
        </button>
      </form>
    </section>
  );
}