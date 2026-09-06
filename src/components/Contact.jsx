import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");

    const formData = new FormData(event.target);
    formData.append("access_key", "d6c625b4-faa1-4dd5-94cc-9f0f44c5a62c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-20 px-6 bg-slate-950 text-white border-t border-slate-800"
    >
      <div className="max-w-xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center text-cyan-400">
          Get In Touch
        </h2>

        <form
          onSubmit={onSubmit}
          className="space-y-4 bg-slate-900 p-6 rounded-xl border border-slate-800"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white outline-none transition-colors focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white outline-none transition-colors focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white outline-none transition-colors focus:border-cyan-500"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-700 text-slate-950 font-bold py-3 rounded-lg transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          <AnimatePresence mode="wait">
            {result && (
              <motion.p
                key={result}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-center text-sm font-medium text-cyan-400 pt-2"
              >
                {result}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </AnimatedSection>
  );
}
