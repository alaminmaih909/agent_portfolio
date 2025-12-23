
"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-10 border-t border-gray-700/40 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Real Estate</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium Real Estate services helping you find your dream property.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 ">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#properties" className="hover:text-white transition">Properties</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
          <p className="text-gray-400">📞 +1 123456789987</p>
          <p className="text-gray-400">📧 agent@example.com</p>
          <p className="text-gray-400">📍 Florida, USA</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex items-center space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-600 transition"><Facebook /></a>
            <a href="#" className="hover:text-pink-500 transition"><Instagram /></a>
            <a href="#" className="hover:text-blue-700 transition"><Linkedin /></a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Real Estate — All Rights Reserved.
      </p>
    </footer>
  );
}
