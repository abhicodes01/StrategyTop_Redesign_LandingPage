import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, LucideTruckElectric, Zap, Star } from "lucide-react";

import ReactLogo from "../assets/logos/React.png";
import NextLogo from "../assets/logos/Next.js.png";
import NodeLogo from "../assets/logos/Node.js.png";
import PythonLogo from "../assets/logos/Python.png";
import DjangoLogo from "../assets/logos/Django.png";

import hero1 from "../assets/hero-images/hero1.png";
import hero2 from "../assets/hero-images/hero2.png";
import hero3 from "../assets/hero-images/hero3.png";
import hero4 from "../assets/hero-images/hero4.png";

export default function ServicesSection() {
  const techList = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Django",
    "PHP",
    "Laravel",
    "Shopify",
    "WordPress",
    "Flutter",
    "AWS",
    "Azure",
    "MongoDB",
    "PostgreSQL",
  ];

  // Updated ratings data with logo, rating, platform
  const ratings = [
    {
      platform: "Clutch",
      logo: ReactLogo, // Replace with actual rating platform logos
      rating: 4.9,
      stars: 5,
      gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    },
    {
      platform: "DesignRush",
      logo: NextLogo,
      rating: 4.9,
      stars: 5,
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    },
    {
      platform: "GoodFirms",
      logo: NodeLogo,
      rating: 4.9,
      stars: 5,
      gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
    },
    {
      platform: "Sortlist",
      logo: PythonLogo,
      rating: 4.7,
      stars: 5,
      gradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
    },
    {
      platform: "Techbehemoths",
      logo: DjangoLogo,
      rating: 4.7,
      stars: 5,
      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    },
  ];

  const cardsData = [
    {
      id: 1,
      title: "Custom Web Development",
      desc: "High-performance web apps tailored to your business.",
      img: hero1,
      tech: ["React", "Node.js", "AWS"],
    },
    {
      id: 2,
      title: "Mobile App Development",
      desc: "Beautiful iOS & Android apps built with modern tech.",
      img: hero2,
      tech: ["Flutter", "Node.js"],
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      desc: "Scalable commerce platforms with seamless UX.",
      img: hero3,
      tech: ["Shopify", "Next.js"],
    },
    {
      id: 4,
      title: "Product Engineering Services",
      desc: "Scalable commerce platforms with seamless UX.",
      img: hero4,
      tech: ["Shopify", "Next.js"],
    },
    {
      id: 5,
      title: "ERP Implementations",
      desc: "Scalable commerce platforms with seamless UX.",
      img: hero1,
      tech: ["Shopify", "Next.js"],
    },
    {
      id: 6,
      title: "Digital Marketing Services",
      desc: "Scalable commerce platforms with seamless UX.",
      img: hero2,
      tech: ["Shopify", "Next.js"],
    },
    {
      id: 7,
      title: "UI/UX Services",
      desc: "Scalable commerce platforms with seamless UX.",
      img: hero3,
      tech: ["Shopify", "Next.js"],
    },
  ];

  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTech, setSelectedTech] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const toggleTech = (tech) => {
    setCurrentPage(1);
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const filteredCards = cardsData.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTech =
      selectedTech.length === 0 ||
      card.tech.some((t) => selectedTech.includes(t));

    return matchesSearch && matchesTech;
  });

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const paginatedCards = filteredCards.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <motion.section
      className="py-24 px-6 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        {/* Badge */}
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
              fill: "url(#icon-gradient)",
            }}
          />
          <span
            className="font-semibold text-sm"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Expertise
          </span>
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="icon-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
          Crafting Innovative, <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
            }}
          >
            Digital Solutions
          </span>
        </h2>
      </motion.div>

      {/* AUTO-SCROLLING RATING CARDS */}
      <motion.div
        className="overflow-hidden mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex gap-6 marquee mb-8">
          {[...ratings, ...ratings, ...ratings].map((rating, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="shrink-0 w-60 p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              {/* Logo with gradient border */}
              <div className="flex justify-center mb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    borderImage: rating.gradient,
                    borderImageSlice: 1,
                  }}
                >
                  <img
                    src={rating.logo}
                    alt={rating.platform}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Rating Number and Stars */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg font-bold text-gray-900">
                  {rating.rating}
                </span>
                <div className="flex gap-1">
                  {[...Array(rating.stars)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Platform Name */}
              <p className="text-center text-sm font-medium text-gray-600">
                Rating on {rating.platform}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-10">
        {paginatedCards.map((card, idx) => (
          <motion.div
            key={card.id}
            className="
              rounded-3xl overflow-hidden shadow-2xl relative
              bg-gray-900 text-white min-h-[420px]
            "
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
              delay: idx * 0.15,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={card.img} className="w-full h-56 object-cover" />

            <div className="absolute inset-0 top-40 bg-linear-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-0 p-6 w-full">
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-gray-200 text-sm">{card.desc}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="
                  mt-5 w-full py-3 bg-white text-gray-900 font-semibold
                  rounded-xl shadow hover:bg-gray-200 transition
                "
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center mt-14 gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className={`px-4 py-2 rounded-xl transition 
            ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400"
                : "bg-gray-200 hover:bg-gray-300"
            } 
          `}
        >
          ← Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-xl font-medium transition 
                ${
                  page === currentPage
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 hover:bg-gray-200"
                }
              `}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className={`px-4 py-2 rounded-xl transition 
            ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400"
                : "bg-gray-200 hover:bg-gray-300"
            } 
          `}
        >
          Next →
        </button>
      </div>
    </motion.section>
  );
}
