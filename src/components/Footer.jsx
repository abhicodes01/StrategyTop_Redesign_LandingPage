import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Logo from "../assets/st-logo-color.png"


export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 md:px-12 text-gray-700">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-6">

        {/* LEFT / BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={Logo} alt="Logo"/>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            At SynergyTop, we are more than just an IT company,
            we are your strategic partner for digital success. 
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-4 text-gray-600">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Github size={20} /></a>
          </div>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gray-900">Web Development</a></li>
            <li><a href="#" className="hover:text-gray-900">Mobile App Development</a></li>
            <li><a href="#" className="hover:text-gray-900">Ecommerce Development</a></li>
            <li><a href="#" className="hover:text-gray-900">Digital Marketing</a></li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Technologies</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gray-900">Python</a></li>
            <li><a href="#" className="hover:text-gray-900">React.js</a></li>
            <li><a href="#" className="hover:text-gray-900">Next.js</a></li>
            <li><a href="#" className="hover:text-gray-900">Node.js</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gray-900">Industry Expertise</a></li>
            <li><a href="#" className="hover:text-gray-900">Industry Recognition</a></li>
            <li><a href="#" className="hover:text-gray-900">Client Testimonials</a></li>
            <li><a href="#" className="hover:text-gray-900">Leadership</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-600" />
              <span>(91) 98765 4321 54</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-600" />
              <span>support@mail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t text-sm flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500">
        <p>© Copyright by SynergyTop. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-800">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800">Terms of Use</a>
          <a href="#" className="hover:text-gray-800">Legal</a>
          <a href="#" className="hover:text-gray-800">Site Map</a>
        </div>
      </div>
    </footer>
  );
}
