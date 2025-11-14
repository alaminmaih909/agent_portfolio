
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const heroImg = "/dream2.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[85vh] min-h-[680px] flex items-center"
    >
      <Image
        src={heroImg}
        alt="Real Estate"
        fill
        className="object-cover brightness-65 "
        priority
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          Helping You Find Your Dream Property
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 text-sm md:text-lg text-white/90 max-w-2xl font-extrabold mx-auto"
        >
          Trusted Real Estate Agent with 7+ Years of Experience — serving ......
          and nearby areas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex gap-3 justify-center"
        >
          <a
            href="/properties"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium"
          >
            View Properties
          </a>
          <a
            href="#contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-md font-medium"
          >
            Book Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
