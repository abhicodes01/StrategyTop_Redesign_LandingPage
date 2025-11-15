import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight, Zap } from "lucide-react";
import hero1 from "../assets/hero-images/hero1.png";
import hero2 from "../assets/hero-images/hero2.png";
import hero3 from "../assets/hero-images/hero3.png";
import hero4 from "../assets/hero-images/hero4.png";

export default function OurWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const works = [
    {
      id: 1,
      title: "Web Development",
      image: hero1, // Replace with your image paths
      category: "Development",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    },
    {
      id: 2,
      title: "UI/UX Design",
      image: hero2,
      category: "Design",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    },
    {
      id: 3,
      title: "Brand Identity",
      image: hero3,
      category: "Branding",
      gradient: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
    },
    {
      id: 4,
      title: "Mobile App",
      image: hero1,
      category: "Development",
      gradient: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
    },
    {
      id: 5,
      title: "E-commerce",
      image: hero2,
      category: "Development",
      gradient: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + works.length) % works.length;
    const next = (currentIndex + 1) % works.length;
    return [prev, currentIndex, next];
  };

  const visibleCards = getVisibleCards();

  return (
    <section 
      className="w-full py-20 px-4 md:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F9FAFB 0%, #EFF6FF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            Our Work
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
            Showcasing Excellence in <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
              }}
            >
              Development
            </span>
          </h2>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {visibleCards.map((cardIndex, position) => {
                const work = works[cardIndex];
                const isCenter = position === 1;
                const isLeft = position === 0;
                const isRight = position === 2;

                return (
                  <motion.div
                    key={work.id}
                    custom={direction}
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                      x: direction > 0 ? 300 : -300,
                    }}
                    animate={{
                      scale: isCenter ? 1 : 0.75,
                      opacity: isCenter ? 1 : 0.4,
                      x: isLeft ? -400 : isRight ? 400 : 0,
                      y: isCenter ? 0 : 40,
                      z: isCenter ? 0 : -200,
                      rotateY: isLeft ? 15 : isRight ? -15 : 0,
                      zIndex: isCenter ? 20 : 10,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    className="absolute"
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    <motion.div
                      whileHover={isCenter ? { scale: 1.02 } : {}}
                      className={`
                        relative w-[400px] h-[500px] rounded-3xl overflow-hidden
                        ${isCenter ? "shadow-2xl" : "shadow-lg"}
                        cursor-pointer
                      `}
                      style={{
                        background: work.gradient
                      }}
                    >
                      {/* Card Header */}
                      <div className="absolute top-0 left-0 right-0 p-6 z-10">
                        <motion.h3
                          className="text-3xl font-bold text-white mb-2"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {work.title}
                        </motion.h3>
                        <span className="text-white/80 text-sm font-medium">
                          {work.category}
                        </span>
                      </div>

                      {/* Project Image */}
                      <div className="absolute inset-0 top-20">
                        <div className="relative w-full h-full p-6">
                          <motion.div
                            className="w-full h-full bg-white/95 rounded-2xl shadow-xl overflow-hidden"
                            whileHover={isCenter ? { y: -10 } : {}}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </div>
                      </div>

                      {/* Arrow Button */}
                      {isCenter && (
                        <motion.button
                          initial={{ scale: 1 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="absolute bottom-12 right-8 w-16 h-16 rounded-full flex bg-white items-center justify-center shadow-lg hover:scale-110 transition-transform z-20"
                        >
                          <ArrowUpRight className="text-black" size={28} />
                        </motion.button>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="absolute left-4 md:left-5 z-30 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ChevronLeft className="text-gray-900" size={28} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="absolute right-4 md:right-5 z-30 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ChevronRight className="text-gray-900" size={28} />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {works.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8"
                  : "w-2 bg-gray-300"
              }`}
              style={index === currentIndex ? {
                background: 'linear-gradient(90deg, #2563EB 0%, #7C3AED 100%)'
              } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
