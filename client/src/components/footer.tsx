import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Industries", href: "#industries" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];
  
  const services = [
    { name: "Recruitment Services", href: "#" },
    { name: "HR Consulting", href: "#" },
    { name: "Talent Acquisition", href: "#" },
    { name: "Executive Search", href: "#" },
    { name: "IT Staffing", href: "#" },
    { name: "RPO Services", href: "#" }
  ];
  
  const contactInfo = [
    { icon: MapPin, text: "404, 4th Floor, Vishwas Building 2, District Center, Janakpuri, New Delhi - 110058" },
    { icon: Phone, text: "+91 987-654-3210" },
    { icon: Mail, text: "info@nishavsolutions.com" },
    { icon: Clock, text: "Monday - Friday: 9:00 AM - 6:00 PM" }
  ];
  
  const socialLinks = [
    { icon: Facebook, href: "#", color: "#1877F2" },
    { icon: Twitter, href: "#", color: "#1DA1F2" },
    { icon: Linkedin, href: "#", color: "#0A66C2" },
    { icon: Instagram, href: "#", color: "#E4405F" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-dark text-white pt-20 pb-8">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12"
          fill="var(--primary)"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and company intro area */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Nishav <span className="text-primary">Solutions</span> India
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Your trusted partner in recruitment and IT services, helping businesses connect with top talent since 2018.
          </p>
        </div>
        
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Contact Information */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-primary pb-3">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start">
                    <Icon className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-primary pb-3">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center"
                  >
                    <span className="text-primary mr-2">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-primary pb-3">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-primary transition-colors flex items-center"
                  >
                    <span className="text-primary mr-2">›</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-primary pb-3">Newsletter</h3>
            <p className="mb-6 text-gray-300">
              Subscribe to our newsletter for the latest updates on recruitment trends and job opportunities.
            </p>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-primary focus:border-primary text-white"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-10">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a 
                key={index} 
                href={link.href}
                className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                style={{ color: link.color }}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-lg font-medium">&copy; {currentYear} <span className="text-primary font-bold">Nishav Solutions India</span>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
