import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollNavbar } from "@/hooks/use-scroll-navbar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollNavbar(50);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed w-full bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              <span className="text-primary font-bold text-2xl">Nishav Solutions India</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'clients', 'industries', 'testimonials', 'contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                className="text-dark hover:text-primary font-medium transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-dark focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {['home', 'about', 'services', 'clients', 'industries', 'testimonials', 'contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                  className="text-dark hover:text-primary font-medium transition-colors py-2"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
