import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ClientsSection from "@/components/clients-section";
import IndustriesSection from "@/components/industries-section";
import TestimonialsSection from "@/components/testimonials-section";
import ValuesSection from "@/components/values-section";
import WaitlistSection from "@/components/waitlist-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  // Load FontAwesome on component mount
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    document.head.appendChild(link);

    // Clean up on unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-poppins scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <IndustriesSection />
        <TestimonialsSection />
        <ValuesSection />
        <WaitlistSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
