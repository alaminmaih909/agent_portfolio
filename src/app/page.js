"use client"
import AboutSection from "@/component/AboutSection";
import ContactForm from "@/component/ContactForm";
import Hero from "@/component/HeroSection";
import ServicesSection from "@/component/ServicesSection";
import Testimonials from "@/component/Testimonials";


export default function HomePage() {
  return (
    <>
     
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <ContactForm />
    </>
  );
}
