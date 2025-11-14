import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testimonialApi = createApi({
  reducerPath: "testimonialApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Testimonial"],
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => "/testimonials",
      providesTags: ["Testimonial"],
    }),
    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonials",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Testimonial"],
    }),
  }),
});

export const { useGetTestimonialsQuery, useAddTestimonialMutation } = testimonialApi;
