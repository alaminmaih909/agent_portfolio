export const properties = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Luxury Apartment #${i + 1}`,
  type: i % 2 === 0 ? "Apartment" : "Villa",
  location: i % 3 === 0 ? "Riyadh" : i % 3 === 1 ? "Jeddah" : "Dammam",
  price: `$${(100 + i) * 1000}`,
  bedrooms: 3,
  bathrooms: 2,
  area: "1500 sq.ft",
  description: "Beautiful property with modern amenities and prime location.",
  images: ["/property.jpeg", "/property1.jpeg", "/property2.jpeg"],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232711.67144876532!2d90.1787584!3d24.3074537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37560fbbdf39171d%3A0x4ab3fa742eb7098b!2sSakhipur%20Upazila!5e0!3m2!1sen!2sbd!4v1763117641282!5m2!1sen!2sbd",
}));
