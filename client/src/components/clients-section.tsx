import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Building2, Award, Zap, Monitor, Package, Activity, Puzzle, Hammer, 
  BarChart, BookOpen, Database, Code, Server, Hexagon, Factory, Globe 
} from "lucide-react";

export default function ClientsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  // New client list with icons and colors
  const clients = [
    { name: "Parceldeck", icon: Package, color: "#FF6B35" },
    { name: "Shreehari Education", icon: BookOpen, color: "#1A936F" },
    { name: "Radiance Technologies", icon: Zap, color: "#3A86FF" },
    { name: "Maintedge Techlabs", icon: Hammer, color: "#8338EC" },
    { name: "AavGO", icon: Globe, color: "#FF9F1C" },
    { name: "TeroTAM Technolabs", icon: Database, color: "#5E60CE" },
    { name: "Astics Techlabs", icon: Server, color: "#FF5C8D" },
    { name: "Abilities India Pistons & Rings", icon: Factory, color: "#4361EE" },
    { name: "Oizom", icon: Activity, color: "#2EC4B6" },
    { name: "Fitcast", icon: BarChart, color: "#9D4EDD" },
    { name: "Webosphere", icon: Hexagon, color: "#6A994E" },
    { name: "QLTech", icon: Code, color: "#00BBF9" },
    { name: "Kalintis", icon: Puzzle, color: "#F9C80E" },
    { name: "Comptech Equipments", icon: Monitor, color: "#F15BB5" },
    { name: "Fuji Silvertech", icon: Building2, color: "#4F5D75" },
    { name: "TD Engineering & Consulting", icon: Award, color: "#FB8500" }
  ];

  return (
    <section id="clients" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Trusted Clients</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We're proud to have partnered with these innovative companies to deliver exceptional talent and IT solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {clients.map((client, index) => {
            const { ref, isVisible } = useScrollAnimation();
            const Icon = client.icon;
            
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 group ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ 
                  borderTop: `4px solid ${client.color}`,
                  transitionDelay: `${index * 0.05}s` 
                }}
              >
                <div className="mb-4 w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto group-hover:bg-opacity-50 transition-all duration-300"
                  style={{ backgroundColor: `${client.color}20` }}>
                  <Icon 
                    size={24} 
                    style={{ color: client.color }}
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">{client.name}</h3>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12 p-6 bg-primary bg-opacity-5 rounded-lg max-w-4xl mx-auto">
          <p className="text-gray-700 italic text-lg font-medium">
            "Partnering with the best in the industry to deliver exceptional results."
          </p>
        </div>
      </div>
    </section>
  );
}