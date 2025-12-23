
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";


export default function Testimonials() {
  const testimonials = [
    {
      name: "Rafiq Ahmed",
      review:
        "Mizan bhai helped me find my dream apartment within just 2 weeks! Excellent service.",
      gender: "male",
    },
    {
      name: "Shila Begum",
      review:
        "Very honest and professional agent. Highly recommended for property buying.",
      gender: "female",
    },
    {
      name: "Mohammad Salman",
      review: "Great experience! He guided me through all paperwork smoothly. Thanks",
      gender: "male",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-md rounded-2xl p-4 bg-white">
                <CardContent className="flex flex-col items-center text-center">
                  <img
                    src={item.gender === "female" ? "/female.png" : "/male.png"}
                    alt="avatar"
                    className="w-16 h-16 rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-700 italic mb-4">“{item.review}”</p>
                  <h4 className="font-bold text-lg">{item.name}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
