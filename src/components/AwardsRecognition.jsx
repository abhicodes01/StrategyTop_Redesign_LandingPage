import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Lightbulb } from "lucide-react";
import a1 from "../assets/awards-images/a1.png";
import a2 from "../assets/awards-images/a2.png";
import a3 from "../assets/awards-images/a3.png";
import a4 from "../assets/awards-images/a4.png";
import a5 from "../assets/awards-images/a5.png";
import a6 from "../assets/awards-images/a6.png";
import a7 from "../assets/awards-images/a7.png";
import a8 from "../assets/awards-images/a8.png";
import a9 from "../assets/awards-images/a9.png";

export default function AwardsRecognition() {
  const awards = [
    { name: "Expertise", year: "2020", image: a1 },
    { name: "Software Suggest", year: "2025", image: a2 },
    { name: "GoodFirms", year: "2018", image: a3 },
    { name: "Oracle", year: "2023", image: a4 },
    { name: "CommerceTools", year: "2024", image: a5 },
    { name: "Web Excellence", year: "2023", image: a6 },
    { name: "Top Developers", year: "2024", image: a7 },
    { name: "Best Search", year: "2025", image: a8  },
    { name: "Clutch", year: "2024", image: a9 },
  ];

  const achievements = [
    {
      icon: <Award size={28} />,
      title: "Excellence in Web Development",
      description: "Recognized for delivering cutting-edge web solutions with innovation and precision",
    },
    {
      icon: <Users size={28} />,
      title: "Client Satisfaction Award",
      description: "Honored for consistently exceeding client expectations with seamless digital experiences",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Trusted by Industry Leaders",
      description: "Acknowledged for partnering with top brands and businesses to craft impactful digital solutions",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Innovation & Creativity Award",
      description: "Celebrated for pushing the boundaries of design and development in web and app solutions",
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-6 relative overflow-hidden bg-white">
      {/* Background Gradient Decorations */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 blur-3xl opacity-20 -z-10"
        style={{
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 blur-3xl opacity-20 -z-10"
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Awards and <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
              }}
            >
              Recognitions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recognized for delivering high-quality projects that drive growth and success for our clients. 
            Celebrated for pushing the boundaries of design and development in web and app solutions.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              {/* Icon with Gradient Background */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{
                  background: `linear-gradient(135deg, ${
                    index % 2 === 0 ? '#3B82F6, #8B5CF6' : '#7C3AED, #EC4899'
                  })`
                }}
              >
                {achievement.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {achievement.description}
              </p>

              {/* Decorative Gradient Border */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{
                  background: `linear-gradient(90deg, ${
                    index % 2 === 0 ? '#3B82F6, #8B5CF6' : '#7C3AED, #EC4899'
                  })`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Awards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 md:p-12 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F3E8FF 100%)'
          }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Prestigious Certifications
          </h3>

          {/* Awards Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-full h-24 flex items-center justify-center mb-3">
                  <img
                    src={award.image}
                    alt={award.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {award.name}
                </span>
                <span className="text-xs text-gray-500 mt-1">{award.year}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all"
            >
              View All Achievements
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
