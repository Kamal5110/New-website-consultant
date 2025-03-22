import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      title: "E-commerce Platform",
      description: "A comprehensive online shopping solution with inventory management and payment gateway integration.",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Healthcare Management System",
      description: "An integrated solution for patient records, appointment scheduling, and clinical workflows.",
      technologies: ["Angular", ".NET Core", "SQL Server"]
    },
    {
      image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Fintech Mobile App",
      description: "A secure financial services application with transaction management and real-time analytics.",
      technologies: ["React Native", "Firebase", "GraphQL"]
    },
    {
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Education Platform",
      description: "A comprehensive learning management system with video streaming and interactive assessments.",
      technologies: ["Vue.js", "Python", "AWS"]
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      title: "Enterprise Resource Planning",
      description: "A centralized ERP solution for streamlining business processes and resource management.",
      technologies: ["Java", "Spring Boot", "PostgreSQL"]
    },
    {
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "IoT Dashboard",
      description: "A real-time monitoring and control system for connected devices with data visualization.",
      technologies: ["TypeScript", "MQTT", "Elastic Stack"]
    }
  ];

  const getBadgeColor = (tech: string) => {
    const colors: Record<string, string> = {
      React: "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
      MongoDB: "bg-purple-100 text-purple-800",
      Angular: "bg-blue-100 text-blue-800",
      ".NET Core": "bg-green-100 text-green-800",
      "SQL Server": "bg-red-100 text-red-800",
      "React Native": "bg-blue-100 text-blue-800",
      Firebase: "bg-yellow-100 text-yellow-800",
      GraphQL: "bg-indigo-100 text-indigo-800",
      "Vue.js": "bg-blue-100 text-blue-800",
      Python: "bg-green-100 text-green-800",
      AWS: "bg-orange-100 text-orange-800",
      Java: "bg-blue-100 text-blue-800",
      "Spring Boot": "bg-green-100 text-green-800",
      PostgreSQL: "bg-pink-100 text-pink-800",
      TypeScript: "bg-blue-100 text-blue-800",
      MQTT: "bg-red-100 text-red-800",
      "Elastic Stack": "bg-purple-100 text-purple-800"
    };
    
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-16 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Explore our portfolio of successful projects delivered across various industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className={`text-xs font-medium px-2.5 py-0.5 rounded ${getBadgeColor(tech)}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
