import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Logo from "../assets/st-logo-color.png"

import hero1 from "../assets/hero-images/hero1.png";
import hero2 from "../assets/hero-images/hero2.png";
import hero3 from "../assets/hero-images/hero3.png";
import hero4 from "../assets/hero-images/hero4.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { img: hero1, title: "Custom Software", link: "#" },
    { img: hero2, title: "Mobile Apps", link: "#" },
    { img: hero3, title: "Web Development", link: "#" },
    { img: hero4, title: "E-commerce Solutions", link: "#" },
    { img: hero1, title: "Cloud Services", link: "#" },
    { img: hero2, title: "Product Engineering", link: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-6 ${
        isScrolled
          ? "bg-white/45 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">

          {/* MENU DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-1 text-gray-700 font-medium hover:text-gray-900 transition"
            >
              Menu <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 left-0 w-96 bg-white shadow-2xl rounded-2xl p-5 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <ChevronLeft size={20} className="cursor-pointer text-gray-400" />
                    <span className="font-semibold text-gray-900">Our Services</span>
                    <ChevronRight size={20} className="cursor-pointer text-gray-400" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {menuItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
                      >
                        <img
                          src={item.img}
                          className="w-12 h-12 rounded-lg object-cover"
                          alt=""
                        />
                        <span className="font-medium text-gray-800 text-sm leading-tight">
                          {item.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Normal Links */}
          <a className="text-gray-700 hover:text-gray-900 font-medium transition" href="#">Portfolio</a>
          <a className="text-gray-700 hover:text-gray-900 font-medium transition" href="#">About Us</a>
          <a className="text-gray-700 hover:text-gray-900 font-medium transition" href="#">Monday.com</a>
          <a className="text-gray-700 hover:text-gray-900 font-medium transition" href="#">Blog</a>
        </div>

        {/* Contact Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2.5 hidden md:block bg-black text-white rounded-lg font-medium shadow-sm hover:bg-gray-800 transition"
          href="#contact"
        >
          Contact Us
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4"
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-between w-full font-semibold text-gray-900"
            >
              Menu <ChevronDown />
            </button>

            {menuOpen && (
              <div className="grid grid-cols-1 gap-3 mt-2">
                {menuItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="flex gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <img
                      src={item.img}
                      className="w-12 h-12 rounded-lg"
                      alt=""
                    />
                    <span className="font-medium text-gray-800">{item.title}</span>
                  </a>
                ))}
              </div>
            )}

            <a href="#" className="block font-medium text-gray-700">Portfolio</a>
            <a href="#" className="block font-medium text-gray-700">About Us</a>
            <a href="#" className="block font-medium text-gray-700">Monday.com</a>
            <a href="#" className="block font-medium text-gray-700">Blog</a>

            <a
              href="#contact"
              className="block text-center py-2.5 bg-black text-white rounded-lg font-medium"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
