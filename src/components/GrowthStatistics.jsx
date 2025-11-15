import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Counter Animation Hook
const useCounter = (end, duration = 2, shouldStart) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

// Individual Stat Card Component
const StatCard = ({ number, label, icon, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCounter(number, 2, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className="relative flex flex-col items-start space-y-4"
    >
      {/* Top Border Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        className="w-full h-1 bg-linear-to-r from-purple-600 to-blue-600 origin-left"
      />

      {/* Number and Icon Row */}
      <div className="flex items-center justify-between w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-blue-600"
          initial={{ scale: 0.5 }}
          animate={isInView ? { scale: 1 } : { scale: 0.5 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {count}+
        </motion.h2>

        {/* Icon */}
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -180, opacity: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          className="text-blue-600"
        >
          {icon}
        </motion.div>
      </div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
        className="text-lg font-semibold text-gray-800"
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

// Main Growth Statistics Component
export default function GrowthStatistics() {
  const statsData = [
    {
      number: 50,
      label: "5-star\nClient Reviews",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="3" />
          <circle cx="8" cy="14" r="2" />
          <circle cx="16" cy="14" r="2" />
          <circle cx="12" cy="18" r="2" />
          <circle cx="6" cy="18" r="1.5" />
          <circle cx="18" cy="18" r="1.5" />
        </svg>
      ),
    },
    {
      number: 100,
      label: "Custom Software\nSolutions",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M23 12h-6m-6 0H5" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      ),
    },
    {
      number: 11,
      label: "Years of\nExperience",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      number: 100,
      label: "Software\nMasterminds",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
          <path d="M12 9c-4 0-7 2-7 5v3c0 2 1 3 3 3h8c2 0 3-1 3-3v-3c0-3-3-5-7-5z" />
          <circle cx="12" cy="13" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-6 bg-linear-to-br from-gray-50 to-blue-50/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Our Growth Statistics
        </motion.h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
