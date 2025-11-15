import { motion } from "framer-motion";
import { Zap, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const offices = [
    {
      city: "San Diego",
      address: "8155 Mercury Ct, Suite 120, San Diego, CA 92111",
      color: "#3B82F6",
    },
    {
      city: "Los Angeles",
      address: "3343 Keystone Ave, Suite 7, Los Angeles, CA 90034",
      color: "#8B5CF6",
    },
    {
      city: "Los Altos",
      address: "878 Lockhaven CT, Los Altos, CA 94024",
      color: "#7C3AED",
    },
    {
      city: "Pune",
      address: "402, 4th Floor, TRANSBAY Balewadi, Pune, Maharashtra India",
      color: "#06B6D4",
    },
    {
      city: "Indore",
      address: "MPSEDC IT Park, 142-A, Electronic Complex, Indore, MP, India 452010",
      color: "#EC4899",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full py-20 px-4 md:px-6 relative overflow-hidden bg-white">
      {/* Background Gradient Decorations */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] blur-3xl opacity-10 -z-10"
        style={{
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] blur-3xl opacity-10 -z-10"
        style={{
          background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-12 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #EFF6FF 0%, #F3E8FF 100%)'
            }}
          >
            {/* Form Header */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Let's start a new project
            </h3>
            <div 
              className="w-20 h-1 rounded-full mb-8"
              style={{
                background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)'
              }}
            />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors text-gray-900"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors text-gray-900"
                  required
                />
              </div>

              {/* Company Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors text-gray-900"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 focus:border-blue-600 rounded-xl outline-none transition-colors text-gray-900 resize-none"
                  required
                />
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="bg-gray-100 p-4 rounded-xl border-2 border-gray-300">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="w-5 h-5" required />
                  <span>I'm not a robot</span>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-black text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT SIDE - Office Addresses */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md mb-6"
            >
              <Zap 
                size={20} 
                className="text-transparent"
                style={{
                  fill: 'url(#icon-gradient)',
                }}
              />
              <span 
                className="font-semibold text-sm"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Meet Us
              </span>
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Create <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
                }}
              >
                Digital Excellence Together
              </span>
            </h2>

            {/* Office Address Heading */}
            <h3 
              className="text-2xl font-bold mt-12 mb-6"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Office Address
            </h3>

            {/* Office List */}
            <div className="space-y-6">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="relative pl-6 border-l-4 py-2"
                  style={{
                    borderColor: office.color,
                  }}
                >
                  <h4 
                    className="font-bold text-lg mb-2"
                    style={{ color: office.color }}
                  >
                    {office.city}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                    <MapPin size={16} className="mt-1 shrink-0" style={{ color: office.color }} />
                    <span>{office.address}</span>
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Dots Pattern */}
            <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
              <div className="grid grid-cols-8 gap-2">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-gray-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
