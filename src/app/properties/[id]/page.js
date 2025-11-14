"use client";
import { useParams } from "next/navigation";
import { properties } from "@/lib/data/property";
import { useState } from "react";

export default function PropertyDetail() {
  const params = useParams();
  const property = properties.find((p) => p.id === parseInt(params.id));

  const [currentImage, setCurrentImage] = useState(0);

  if (!property) return <p className="p-8 text-center">Property not found</p>;

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{property.title}</h2>
      <p className="text-gray-600 mb-6">{property.location}</p>

      {/* Image Carousel */}
      <div className="flex gap-2 mb-6">
        <div className="flex-1 relative">
          <img
            src={property.images[currentImage]}
            alt="property"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-24">
          {property.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumb"
              className={`w-24 h-24 object-cover rounded cursor-pointer border-2 ${
                i === currentImage ? "border-blue-600" : "border-transparent"
              }`}
              onClick={() => setCurrentImage(i)}
            />
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Property Details</h3>
          <p>{property.description}</p>
          <ul className="mt-4 space-y-1">
            <li>Type: {property.type}</li>
            <li>Price: {property.price}</li>
            <li>Bedrooms: {property.bedrooms}</li>
            <li>Bathrooms: {property.bathrooms}</li>
            <li>Area: {property.area}</li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <iframe
            src={property.mapEmbed}
            className="w-full h-80 rounded-md"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
        <p>📞 +966 501234567</p>
        <p>📧 agent@example.com</p>
        <a
          href="https://wa.me/+8801735848428"
          target="_blank"
          className="inline-block mt-3 px-4 py-2 bg-green-500 text-white rounded-md"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
