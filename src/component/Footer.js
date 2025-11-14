// components/Footer.js
"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Logo & About */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">MizanEstate</h2>
          <p className="text-gray-200">
            Professional Real Estate Services — helping you find your dream home
            or sell your property smoothly.
          </p>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-gray-200"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-gray-200"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-gray-200"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-3">Contact Me</h3>
          <a
            href="mailto:info@mizanrealestate.com"
            className="block mb-2 hover:underline"
          >
            info@mizanrealestate.com
          </a>
          <a
            href="https://wa.me/8801300000000"
            target="_blank"
            className="block hover:underline"
          >
            WhatsApp: +8801300000000
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 border-t border-blue-600 pt-4 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} MizanEstate. All rights reserved.
      </div>
    </footer>
  );
}
