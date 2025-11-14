/* 
"use client";
import { motion } from "framer-motion";
import { useGetTestimonialsQuery } from "@/features/testimonialApi";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Testimonials() {
  const { data = [], isLoading } = useGetTestimonialsQuery();
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < data.length - 1) setIndex(index + 1);
    else setIndex(0);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(data.length - 1);
  };

  if (isLoading) return <p className="text-center">Loading testimonials...</p>;

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-5 text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-10"
        >
          Client Testimonials
        </motion.h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <ChevronLeft size={24} />
          </button>

          {data.length > 0 && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto"
            >
              <Card className="shadow-md rounded-2xl p-6">
                <CardContent>
                  <img
                    src={data[index].image || "/default-avatar.png"}
                    alt={data[index].name}
                    className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 italic mb-4">
                    “{data[index].review}”
                  </p>
                  <h4 className="text-blue-600 font-semibold">
                    {data[index].name}{" "}
                    <span className="text-gray-500 text-sm">
                      ({data[index].gender})
                    </span>
                  </h4>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <button
            onClick={nextSlide}
            className="absolute right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8">
          <Link
            href="/write_review"
            className="text-blue-600 font-semibold underline hover:text-blue-800"
          >
            Want to share your experience? Give a testimonial →
          </Link>
        </div>
      </div>
    </section>
  );
}
 */


// components/Testimonials.js
"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rafiq Ahmed",
    review:
      "Mizan bhai helped me find my dream apartment within just 2 weeks! Excellent service and communication.",
  },
  {
    name: "Shila Begum",
    review:
      "Very honest and professional agent. I sold my flat smoothly with his guidance. Highly recommended!",
  },
  {
    name: "Tanvir Hasan",
    review:
      "Best real estate experience ever. Everything was transparent and fast. Thank you!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-5 text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-10"
        >
          Client Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-md rounded-2xl p-6 h-full">
                <CardContent>
                  <p className="text-gray-700 italic mb-4">“{item.review}”</p>
                  <h4 className="text-blue-600 font-semibold">{item.name}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
