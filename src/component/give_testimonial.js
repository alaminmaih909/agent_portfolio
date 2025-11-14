"use client";
import { useState } from "react";
import { useAddTestimonialMutation } from "@/features/testimonialApi";

export default function GiveTestimonialPage() {
  const [addTestimonial] = useAddTestimonialMutation();
  const [form, setForm] = useState({
    name: "",
    review: "",
    gender: "male",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    await addTestimonial(formData);
    alert("Testimonial submitted successfully!");
    setForm({ name: "", review: "", gender: "male", image: null });
  };

  return (
    <div className="container mx-auto py-16 px-5">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Give Your Testimonial
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md rounded-xl p-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-4 rounded"
        />

        <textarea
          name="review"
          placeholder="Write your review..."
          value={form.review}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-4 rounded"
        />

        <div className="flex justify-between mb-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Testimonial
        </button>
      </form>
    </div>
  );
}
