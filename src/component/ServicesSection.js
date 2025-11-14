// // components/ServicesSection.js
// "use client";
// import { motion } from "framer-motion";
// import { Home, Building, Users, MapPin } from "lucide-react";

// const services = [
//   {
//     icon: <Home className="w-10 h-10 text-blue-600" />,
//     title: "Property Buying",
//     desc: "I help you find the best property that matches your dream and budget.",
//   },
//   {
//     icon: <Building className="w-10 h-10 text-blue-600" />,
//     title: "Property Selling",
//     desc: "Sell your property fast and at the best market value.",
//   },
//   {
//     icon: <Users className="w-10 h-10 text-blue-600" />,
//     title: "Consultation",
//     desc: "Get expert advice about real estate investment and opportunities.",
//   },
//   {
//     icon: <MapPin className="w-10 h-10 text-blue-600" />,
//     title: "Property Location",
//     desc: "Find the perfect location for your business or family home.",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-16 bg-gray-50" id="services">
//       <div className="container mx-auto px-5">
//         <motion.h2
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10"
//         >
//           My Services
//         </motion.h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {services.map((service, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white rounded-xl shadow-md p-6 text-center"
//             >
//               <div className="flex justify-center mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600">{service.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { Home, Building, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Home className="w-10 h-10" />,
    title: "Property Buying",
    desc: "Find the best property that matches your dream and budget.",
  },
  {
    icon: <Building className="w-10 h-10" />,
    title: "Property Selling",
    desc: "Sell your property fast and at the best market value.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Consultation",
    desc: "Get expert advice about real estate investments.",
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    title: "Property Location",
    desc: "Find the perfect location for your business or family home.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10"
        >
          My Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow p-6 text-center"
            >
              <div className="flex items-center justify-center mb-4 text-blue-600">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
