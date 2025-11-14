// components/ContactForm.js
"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-5 text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-10"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-5">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Input type="text" placeholder="Subject" />
            <Textarea placeholder="Your Message..." rows={5} required />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="https://wa.me/8801300000000"
              target="_blank"
              className="text-green-600 font-medium hover:underline"
            >
              💬 Message me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
