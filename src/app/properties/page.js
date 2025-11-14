"use client";
import { useState } from "react";
import Link from "next/link";
import { properties } from "@/lib/data/property";

export default function PropertiesPage() {
  const [typeFilter, setTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filtered = properties.filter((p) => {
    return (
      (typeFilter ? p.type === typeFilter : true) &&
      (locationFilter ? p.location === locationFilter : true)
    );
  });

  const types = Array.from(new Set(properties.map((p) => p.type)));
  const locations = Array.from(new Set(properties.map((p) => p.location)));

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Our Properties</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          <option value="">All Types</option>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          <option value="">All Locations</option>
          {locations.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Link key={p.id} href={`/properties/${p.id}`}>
            <div className="border rounded-lg overflow-hidden shadow-md p-2 hover:shadow-xl transition cursor-pointer">
              <img src={p.images[0]} alt={p.title} className="w-full h-48 object-cover " />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.location}</p>
                <p className="text-blue-600 font-semibold mt-2">{p.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
