import { motion } from "framer-motion";
import { Zap, Calendar, ArrowRight, Clock } from "lucide-react";
import hero1 from "../assets/hero-images/hero1.png";
import hero2 from "../assets/hero-images/hero2.png";
import hero3 from "../assets/hero-images/hero3.png";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "REST API vs RESTful API: What's the Difference?",
      excerpt: "Why this guide? A few years ago, our team at SynergyTop was brought in to audit an eCommerce platform. that was struggling with integrations. The client told us, 'We already...",
      date: "1 Sep, 2025",
      readTime: "5 min read",
      category: "Development",
      image: hero1,
      gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    },
    {
      id: 2,
      title: "The Hidden Costs of Using Non-Scalable Healthcare Software",
      excerpt: "Healthcare software solutions are more than just a tool today. They are the backbone of operations, care delivery, and compliance. Using outdated or non-scalable software may seem cost-effective at...",
      date: "20 Aug, 2025",
      readTime: "7 min read",
      category: "Healthcare",
      image:  hero2,
      gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
    },
    {
      id: 3,
      title: "Top 10 Healthcare Software Development Companies in the USA",
      excerpt: "The healthcare sector in the USA is undergoing rapid digital transformation. Demand for custom healthcare software is surging. Especially tools such as EHR, telemedicine, and inter-system data...",
      date: "6 Aug, 2025",
      readTime: "8 min read",
      category: "Healthcare",
      image: hero3 ,
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-6 relative overflow-hidden bg-white">
      {/* Background Gradient Decorations */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] blur-3xl opacity-10 -z-10"
        style={{
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] blur-3xl opacity-10 -z-10"
        style={{
          background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
              Our Blogs
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

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Exploring Trends, <br />
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
              }}
            >
              Sharing Knowledge
            </span>
          </h2>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Blog Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                  style={{
                    background: blog.gradient
                  }}
                />

                {/* Category Badge */}
                <div 
                  className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-white text-xs font-semibold shadow-lg"
                  style={{
                    background: blog.gradient
                  }}
                >
                  {blog.category}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Date Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-semibold"
                    style={{
                      background: blog.gradient
                    }}
                  >
                    <Calendar size={14} />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Clock size={14} />
                    {blog.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Read More
                  <ArrowRight size={16} className="text-blue-600" />
                </motion.a>
              </div>

              {/* Bottom Gradient Border */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{
                  background: blog.gradient
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2"
          >
            View All Blogs
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
