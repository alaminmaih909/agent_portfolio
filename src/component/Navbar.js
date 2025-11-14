"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // এখনকার পেজ path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Properties", href: "/properties" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition backdrop-blur-sm ${
        scrolled ? "bg-white/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <a href="/" className="text-3xl font-extrabold text-yellow-500">
          Real Estate
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, i) => {
            const isPropertiesPage = pathname.includes("/properties");
            const isHomePage = pathname === "/";
            const colorClass = isPropertiesPage
              ? "text-black"
              : isHomePage
              ? "text-blue-300   "
              : "text-gray-800";

            return (
              <a
                key={i}
                href={link.href}
                className={`${colorClass} hover:font-semibold hover:border-b-2 font-medium transition`}
              >
                {link.name}
              </a>
            );
          })}

          <a
            href="https://wa.me/+8801302531461"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md font-medium btn-blink focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        {/* Mobile icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-black bg-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col px-5 py-4 gap-3">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 py-2 border-b border-gray-100 font-medium"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile WhatsApp Button */}
              <a
                href="https://wa.me/+8801302531461"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md font-medium btn-blink"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// "use client";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { motion } from "framer-motion";

// const whatsapp = "/whatsapp.png";
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#hero" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Properties", href: "#properties" },
//     { name: "Testimonials", href: "#testimonials" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-gray-100 shadow-md fixed w-full z-50">
//       <div className="container mx-auto px-5 flex justify-between items-center h-16">
//         {/* Logo */}
//         <a href="#hero" className="text-2xl font-bold text-blue-700">
//           MizanEstate
//         </a>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link, i) => (
//             <a
//               key={i}
//               href={link.href}
//               className="text-gray-700 hover:text-blue-700 hover:font-bold font-bold transition"
//             >
//               {link.name}
//             </a>
//           ))}
//           {/* WhatsApp Button */}
//          <a
//               href="https://wa.me/+8801735848428"
//               target="_blank"
//               className="relative inline-flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md font-medium overflow-hidden transition-all group hover:cursor-pointer hover:text-black"
//             >
//               WhatsApp
//               {/* Blinking border effect */}
//               <span className="absolute inset-0 border-3 border-blue-600 rounded-md animate-blink opacity-50 pointer-events-none"></span>
//             </a>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ height: 0, opacity: 0 }}
//           animate={{ height: "auto", opacity: 1 }}
//           exit={{ height: 0, opacity: 0 }}
//           className="md:hidden bg-white shadow-md"
//         >
//           <div className="flex flex-col px-5 py-4 space-y-3">
//             {navLinks.map((link, i) => (
//               <a
//                 key={i}
//                 href={link.href}
//                 className="text-gray-700 hover:text-blue-700 font-medium"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}
//             {/* WhatsApp Button */}
//             <a
//               href="https://wa.me/+8801735848428"
//               target="_blank"
//               className="relative inline-flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md font-medium overflow-hidden transition-all group"
//             >
//               WhatsApp
//               {/* Blinking border effect */}
//               <span className="absolute inset-0 border-2 border-white rounded-md animate-blink opacity-50 pointer-events-none"></span>
//             </a>
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// }
// "use client";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/#about" },
//     { name: "Services", href: "/#services" },
//     { name: "Properties", href: "properties" },
//     { name: "Testimonials", href: "/#testimonials" },
//     { name: "Contact", href: "/#contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) setScrolled(true);
//       else setScrolled(false);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
//         scrolled ? "bg-white/90 shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <a
//           href="#hero"
//           className={`text-3xl font-extrabold transition-colors ${
//             scrolled ? "text-black" : "text-blue-800"
//           }`}
//         >
//           Real Estate
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link, i) => (
//             <a
//               key={i}
//               href={link.href}
//               className={`font-medium transition-all border-b-2 pb-1 ${
//                 scrolled
//                   ? "text-black border-transparent hover:border-blue-500 hover:font-semibold"
//                   : "text-blue-800 border-transparent hover:border-blue-500 hover:font-semibold"
//               }`}
//             >
//               {link.name}
//             </a>
//           ))}

//           {/* WhatsApp Button */}
//           <a
//             href="https://wa.me/+8801735848428"
//             target="_blank"
//             rel="noreferrer"
//             className="relative inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md font-medium overflow-hidden transition-all hover:bg-green-600 btn-blink"
//           >
//             <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
//             WhatsApp
//             <span className="absolute inset-0 border-2 border-blue-600 rounded-md animate-ping opacity-50 pointer-events-none"></span>
//           </a>
//         </div>

//         {/* Mobile Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//             className={`p-2 rounded-md transition-colors ${
//               scrolled ? "text-black" : "text-blue-800"
//             }`}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
// <AnimatePresence>
//   {isOpen && (
//     <motion.div
//       initial={{ height: 0, opacity: 0 }}
//       animate={{ height: "auto", opacity: 1 }}
//       exit={{ height: 0, opacity: 0 }}
//       className="md:hidden bg-white shadow-md"
//     >
//       <div className="flex flex-col px-5 py-4 gap-3">
//         {navLinks.map((link, i) => (
//           <a
//             key={i}
//             href={link.href}
//             onClick={() => setIsOpen(false)}
//             className="block text-gray-700 py-2 border-b border-gray-100 font-medium"
//           >
//             {link.name}
//           </a>
//         ))}

//         {/* Mobile WhatsApp Button */}
//         <a
//           href="https://wa.me/+8801735848428"
//           target="_blank"
//           rel="noreferrer"
//           className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md font-medium btn-blink"
//         >
//           <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
//           WhatsApp
//           <span className="absolute inset-0 border-2 border-blue-600 rounded-md animate-ping opacity-50 pointer-events-none"></span>
//         </a>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
//     </nav>
//   );
// }
