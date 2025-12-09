export const properties = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Luxury Apartment #${i + 1}`,
  type: i % 2 === 0 ? "Apartment" : "Villa",
  location: i % 3 === 0 ? "Florida" : i % 3 === 1 ? "Texas" : "Florida",
  location: i % 3 === 0 ? "Florida" : i % 3 === 1 ? "Texas" : "Florida",
  price: `$${(100 + i) * 1000}`,
  bedrooms: 3,
  bathrooms: 2,
  area: "1500 sq.ft",
  description: "Beautiful property with modern amenities and prime location."
  images: ["/property.jpeg", "/property1.jpeg", "/property2.jpeg"],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1765256574689!5m2!1sen!2sbd",
   

}));

// "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1765129901541!5m2!1sen!2sbd",