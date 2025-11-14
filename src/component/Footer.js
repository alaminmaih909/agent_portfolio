// // components/Footer.js
// "use client";
// import { Facebook, Instagram, Linkedin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-blue-700 text-white py-10">
//       <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

//         {/* Logo & About */}
//         <div className="text-center md:text-left">
//           <h2 className="text-2xl font-bold mb-2">MizanEstate</h2>
//           <p className="text-gray-200">
//             Professional Real Estate Services — helping you find your dream home
//             or sell your property smoothly.
//           </p>
//         </div>

//         {/* Social Links */}
//         <div className="text-center">
//           <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
//           <div className="flex justify-center md:justify-center gap-4">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               className="hover:text-gray-200"
//             >
//               <Facebook size={24} />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               className="hover:text-gray-200"
//             >
//               <Instagram size={24} />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               className="hover:text-gray-200"
//             >
//               <Linkedin size={24} />
//             </a>
//           </div>
//         </div>

//         {/* Call-to-action */}
//         <div className="text-center md:text-right">
//           <h3 className="text-lg font-semibold mb-3">Contact Me</h3>
//           <a
//             href="mailto:info@mizanrealestate.com"
//             className="block mb-2 hover:underline"
//           >
//             info@mizanrealestate.com
//           </a>
//           <a
//             href="https://wa.me/8801300000000"
//             target="_blank"
//             className="block hover:underline"
//           >
//             WhatsApp: +8801300000000
//           </a>
//         </div>
//       </div>

//       {/* Bottom copyright */}
//       <div className="mt-8 border-t border-blue-600 pt-4 text-center text-gray-200 text-sm">
//         © {new Date().getFullYear()} MizanEstate. All rights reserved.
//       </div>
//     </footer>
//   );
// }
"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-10 border-t border-gray-700/40 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Mizan Estate</h2>
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
          <p className="text-gray-400">📞 +966 501234567</p>
          <p className="text-gray-400">📧 agent@example.com</p>
          <p className="text-gray-400">📍 Riyadh, Saudi Arabia</p>
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
        © {new Date().getFullYear()} Mizan Estate — All Rights Reserved.
      </p>
    </footer>
  );
}
