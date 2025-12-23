
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
            <p className="text-gray-700">📞 Phone: +1 501234567</p>
            <p className="text-gray-700">📧 Email: agent@example.com</p>
            <p className="text-gray-700">📍 Location: Florida, USA</p>
          </div>

          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14536521.851964673!2d-94.43999334550294!3d27.189134431776683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sbd!4v1766504495065!5m2!1sen!2sbd"
              className="w-full h-full rounded-xl border"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
