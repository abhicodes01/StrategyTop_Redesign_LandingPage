import { motion } from "framer-motion";
import HeroImage from "../assets/hero-images/vecteezy_3d-laptop-with-graph_17303677.png";
import HeroImage1 from "../assets/hero-images/vecteezy_iridescent-geometric-crystal-abstract-3d-render_55849142.png";
import HeroImage2 from "../assets/hero-images/3d-cursor-illustration-png-removebg-preview.png";

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #E8EEFF 0%, #E8EEFF 40%, #5B7FFF 70%, #7B5FE8 100%)",
      }}
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center pt-24 pb-16 relative z-10">
        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            Software Development &
            <span className="block mt-2">Consulting</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-800 max-w-lg leading-relaxed">
            Software development and consulting company. But we are more than just developers.
            Whether in HealthTech, EduTech, Solar Energy, or beyond, our mission is to give you tailored solutions 
            that drive growth, efficiency, and success.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition"
            >
              Get Started
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="#"
              className="flex items-center gap-2 text-gray-900 font-medium hover:text-black transition"
            >
              Learn more
              <span className="text-xl">→</span>
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - 3D IMAGES WITH ANIMATIONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center h-[500px] md:h-[600px]"
        >
          {/* CENTER - Main Laptop Image (Medium) */}
          <motion.img
            src={HeroImage}
            alt="Hero 3D Visual"
            className="w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl z-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: { duration: 0.3, ease: "easeOut" }, // Add this for smooth scale transition
            }}
            whileHover={{
              scale: 1.05,
              rotate: 5,
            }}
          />

          {/* TOP LEFT - Crystal Shape (Small) */}
          <motion.img
            src={HeroImage1}
            alt="Crystal Shape"
            className="absolute top-5 left-20 w-24 h-24 md:w-32 md:h-32 object-contain z-10 drop-shadow-xl"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: { duration: 0.3, ease: "easeOut" }, // Add this
            }}
            whileHover={{
              scale: 1.1,
              rotate: 15,
            }}
          />

          {/* BOTTOM RIGHT - Cursor (Extra Small) */}
          <motion.img
            src={HeroImage2}
            alt="3D Cursor"
            className="absolute bottom-8 right-5 w-16 h-16 md:w-20 md:h-20 object-contain z-10 drop-shadow-xl"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: { duration: 0.3, ease: "easeOut" }, // Add this
            }}
            whileHover={{
              scale: 1.15,
              rotate: 15,
            }}
          />

          {/* Floating Glow Effect */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-full h-full blur-3xl rounded-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(91, 127, 255, 0.3), rgba(123, 95, 232, 0.3), rgba(167, 139, 250, 0.3))",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
