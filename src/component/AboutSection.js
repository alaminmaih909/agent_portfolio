
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const agentImg = "/agent.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={agentImg}
            alt="Agent"
            width={250}
            height={320}
            className="rounded-2xl shadow-lg object-cover mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
         
        >
          <h2 className="text-3xl md:text-4xl text-center md:text-left lg:text-left font-bold text-blue-700 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 mb-4 text-center lg:text-left md:text-left leading-relaxed">
            Hello! I'm <b>Alex</b>, a passionate real estate agent with
            over 7 years of experience helping clients find their dream
            properties across Florida,USA and surrounding areas.
          </p>
          <p className="text-gray-700 mb-6 text-center lg:text-left md:text-left">
            My mission is simple — to provide honest advice, top-notch service,
            and make the buying/selling process smooth and stress-free.
          </p>
          <span className="flex justify-center items-center lg:justify-between  md:justify-between">
            <a
            href="#contact"
            className="inline-block bg-blue-600 text-center hover:bg-blue-700 text-white px-6 py-3 rounded-md"
          > Contact Me
          </a></span>
           
        </motion.div>
      </div>
    </section>
  );
}
