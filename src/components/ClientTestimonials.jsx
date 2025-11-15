import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap, Quote } from "lucide-react";

import c1 from "../assets/Clients/c1.png";
import c2 from "../assets/Clients/c2.png";
import c3 from "../assets/Clients/c3.png";
import c4 from "../assets/Clients/c4.png";
import c5 from "../assets/Clients/c5.png";
import c6 from "../assets/Clients/c6.png";
import c7 from "../assets/Clients/c7.png";
import c8 from "../assets/Clients/c8.png";
import c9 from "../assets/Clients/c9.png";
import c10 from "../assets/Clients/c10.png";
import c11 from "../assets/Clients/c11.png";
import c12 from "../assets/Clients/c12.png";
import man1 from "../assets/Clients/man1.jpg";
import woman1 from "../assets/Clients/woman1.jpg";

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const clients = [
    { name: "TriMark", logo: c1},
    { name: "Sports360", logo: c2},
    { name: "Bee's Knees", logo:  c3},
    { name: "Digital Energy", logo:  c4},
    { name: "Bee's Knees 2", logo: c5},
    { name: "TechServs", logo:c6},
    { name: "Wellness", logo: c7},
    { name: "Bridge", logo: c8},
    { name: "Innovation", logo: c9},
    { name: "RealFlight", logo: c10},
    { name: "Medical Hospital", logo: c11},
    { name: "Top Gun", logo: c12},
  ];

  const testimonials = [
    {
      id: 1,
      name: "Anna Taylor",
      company: "TriMark",
      image: c1,
      text: "Our company became a Synergy Top client in 2015 and since that time we've been extremely impressed with their programming and web-based services. They have done everything from helping us migrate to a new internet server to troubleshoot functionality glitches to develop new website features and user capabilities.",
      link: "#",
    },
    {
      id: 2,
      name: "John Smith",
      company: "Sports360",
      image: c2,
      text: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched. They transformed our digital presence and helped us reach new heights in customer engagement.",
      link: "#",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      company: "Bee's Knees",
      image: c3,
      text: "The professionalism and technical expertise displayed throughout our project exceeded all expectations. They delivered on time, within budget, and created a solution that perfectly aligned with our business goals.",
      link: "#",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
        {/* Section Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
              Meet Our Clients
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

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our client <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
              }}
            >
              love us
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Client Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #EFF6FF 0%, #F3E8FF 100%)'
            }}
          >
            <div className="grid grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="aspect-square bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center p-4"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[500px] p-8 md:p-12">
              {/* Quote Icon */}
              <div 
                className="absolute top-8 left-8 w-16 h-16 rounded-2xl flex items-center justify-center opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
                }}
              >
                <Quote size={32} className="text-white" />
              </div>

              {/* Testimonial Carousel */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  {/* Company Logo */}
                  <div className="mb-8 mt-8">
                    <img
                      src={clients[currentIndex].logo}
                      alt={testimonials[currentIndex].company}
                      className="h-12 object-contain"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {testimonials[currentIndex].text}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div>
                      <h4 
                        className="font-bold text-lg"
                        style={{
                          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Watch Video Link */}
                  <a
                    href={testimonials[currentIndex].link}
                    className="inline-block text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors"
                  >
                    Watch video testimonial →
                  </a>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute bottom-8 right-8 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition"
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>

              {/* Gradient Border Accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)'
                }}
              />
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8" : "w-2 bg-gray-300"
                  }`}
                  style={index === currentIndex ? {
                    background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)'
                  } : {}}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
