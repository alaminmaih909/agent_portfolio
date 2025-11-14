// // components/ContactForm.js
// "use client";
// import { motion } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// export default function ContactForm() {
//   return (
//     <section className="py-16 bg-gray-50" id="contact">
//       <div className="container mx-auto px-5 text-center">
//         <motion.h2
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl font-bold text-blue-700 mb-10"
//         >
//           Get in Touch
//         </motion.h2>

//         <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
//           <form className="space-y-5">
//             <Input type="text" placeholder="Your Name" required />
//             <Input type="email" placeholder="Your Email" required />
//             <Input type="text" placeholder="Subject" />
//             <Textarea placeholder="Your Message..." rows={5} required />
//             <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
//               Send Message
//             </Button>
//           </form>

//           <div className="mt-6 text-center">
//             <a
//               href="https://wa.me/8801300000000"
//               target="_blank"
//               className="text-green-600 font-medium hover:underline"
//             >
//               💬 Message me on WhatsApp
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT - Contact Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email or Phone"
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-3 border rounded-lg"
            ></textarea>

            <Button className="w-full py-3 bg-blue-500 text-lg text-white cursor-pointer hover:text-blue-600 hover:bg-white hover:border-2 hover:border-blue-600">
              Send Message
            </Button>
          </form>
        </div>

        {/* RIGHT - Contact Info + Map */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
            <p className="text-gray-700">📞 Phone: +966 501234567</p>
            <p className="text-gray-700">📧 Email: agent@example.com</p>
            <p className="text-gray-700">📍 Location: Riyadh, Saudi Arabia</p>
          </div>

          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232711.67144876532!2d90.1787584!3d24.3074537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37560fbbdf39171d%3A0x4ab3fa742eb7098b!2sSakhipur%20Upazila!5e0!3m2!1sen!2sbd!4v1763117641282!5m2!1sen!2sbd"
              className="w-full h-full rounded-xl border"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
