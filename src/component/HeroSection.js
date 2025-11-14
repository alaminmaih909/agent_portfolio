// components/Hero.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
//  import heroImg from "/public/dream.jpg";
const heroImg = "/dream.jpg";
export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <Image
        src={heroImg}
        alt="Real Estate"
        fill
        className="object-cover brightness-75"
      />
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Helping You Find Your Dream Home
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl mb-6"
        >
          Trusted Real Estate Agent with 7+ Years of Experience
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mr-3">
            View Properties
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md">
            Book Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
