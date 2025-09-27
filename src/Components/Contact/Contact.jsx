import React, { useState } from "react";
import { motion } from "framer-motion";
import contactSvg from "../../assets/contact.svg";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmed = window.confirm("Do you want to send this message?");
    if (!confirmed) return;

    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_h76tst7", "template_1wrqt4i", templateParams, "kZOEQbZ407vC3MSPj")
      .then(() => {
        alert("Message sent Successfully.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center bg-gradient-to-r from-pink-50 to-purple-100 py-12 sm:py-16 overflow-hidden"
    >
      {/* Animated background circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-purple-200 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 sm:right-20 w-44 sm:w-60 h-44 sm:h-60 bg-pink-200 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Contact Form */}
        <motion.div
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 sm:px-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 px-2 sm:px-0">
            I’d love to hear from you! Drop a message and I will get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm sm:max-w-md">
            {/* Name */}
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />

            {/* Email */}
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />

            {/* Message */}
            <motion.textarea
              name="message"
              value={formData.message}
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSending}
              className={`w-full py-2 sm:py-3 text-lg sm:text-xl rounded-lg font-semibold text-white transition-all duration-300 cursor-pointer ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600"
              }`}
              whileHover={{ scale: isSending ? 1 : 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Right: SVG Image */}
        <motion.div
          className="flex justify-center items-center mt-8 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ y: -20 }}
        >
          <img
            src={contactSvg}
            alt="Contact Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-3 sm:bottom-5 left-0 w-full text-center text-base sm:text-xl font-bold text-gray-600 px-2">
        Made with <span className="text-red-500">❤️</span> by Rahul Vishwakarma
      </div>
    </section>
  );
};

export default Contact;
