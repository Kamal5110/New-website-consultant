import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Building2, HardHat, Droplet, Monitor, Landmark, Headphones, ShoppingCart, Truck, Pill, GraduationCap, Building } from "lucide-react";

export default function IndustriesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const industries = [
    { name: "IT & ITES", icon: Monitor },
    { name: "Engineering & Manufacturing", icon: HardHat },
    { name: "Oil & Gas", icon: Droplet },
    { name: "Software & Technology", icon: Monitor },
    { name: "Banking & Finance", icon: Landmark },
    { name: "BPO & Call Centers", icon: Headphones },
    { name: "Retail & FMCG", icon: ShoppingCart },
    { name: "Automobile & Logistics", icon: Truck },
    { name: "Pharmaceutical & Healthcare", icon: Pill },
    { name: "Education & Telecom", icon: GraduationCap },
    { name: "Real Estate & Construction", icon: Building },
  ];

  return (
    <section id="industries" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries <span className="text-primary">Serviced</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We provide specialized recruitment and IT solutions across a wide range of industries.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const { ref, isVisible } = useScrollAnimation();
            const Icon = industry.icon;
            
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-gray-50 rounded-lg p-6 text-center flex flex-col items-center hover:bg-primary hover:text-white transition-all duration-300 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4 text-primary group-hover:text-white">
                  <Icon size={36} className="transition-colors duration-300" />
                </div>
                <h3 className="font-medium text-gray-800 group-hover:text-white">{industry.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}