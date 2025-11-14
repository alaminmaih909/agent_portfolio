
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";


const whatsapp = "/whatsapp.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Properties", href: "#properties" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-100 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-5 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-blue-700">
          MizanEstate
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-700 hover:text-blue-700 hover:font-bold font-bold transition"
            >
              {link.name}
            </a>
          ))}
          {/* WhatsApp Button */}
         <a
              href="https://wa.me/+8801735848428"
              target="_blank"
              className="relative inline-flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md font-medium overflow-hidden transition-all group hover:cursor-pointer hover:text-black"
            >
              WhatsApp
              {/* Blinking border effect */}
              <span className="absolute inset-0 border-3 border-blue-600 rounded-md animate-blink opacity-50 pointer-events-none"></span>
            </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="flex flex-col px-5 py-4 space-y-3">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+8801735848428"
              target="_blank"
              className="relative inline-flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md font-medium overflow-hidden transition-all group"
            >
              WhatsApp
              {/* Blinking border effect */}
              <span className="absolute inset-0 border-2 border-white rounded-md animate-blink opacity-50 pointer-events-none"></span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
