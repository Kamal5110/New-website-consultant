import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
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
    <section 
      id="home" 
      className="hero-section min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div 
          ref={ref}
          className={`transform transition-all duration-700 ${
            isVisible 
              ? "translate-y-0 opacity-100" 
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Connecting Talent With Opportunity
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Nishav Solutions India provides strategic HR consulting services to help businesses build exceptional teams and optimize workforce potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
              onClick={() => scrollToSection('waitlist')}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
