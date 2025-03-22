import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: "users",
      title: "Recruitment & Staffing",
      description: "End-to-end recruitment solutions to help you identify, attract, and retain top talent across various industries and roles."
    },
    {
      icon: "landmark",
      title: "HR Compliance",
      description: "Expert guidance on regulatory compliance, policy development, and risk management to protect your organization."
    },
    {
      icon: "chart-bar",
      title: "Performance Management",
      description: "Comprehensive performance evaluation systems and coaching programs to maximize employee productivity and engagement."
    },
    {
      icon: "graduation-cap",
      title: "Training & Development",
      description: "Customized training programs designed to enhance employee skills, knowledge, and overall organizational capabilities."
    },
    {
      icon: "sitemap",
      title: "Organizational Development",
      description: "Strategic initiatives to enhance organizational effectiveness, manage change, and align company culture with business goals."
    },
    {
      icon: "handshake",
      title: "Employee Relations",
      description: "Specialized services to foster positive workplace relationships, resolve conflicts, and improve communication."
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We offer comprehensive HR consulting services designed to optimize your workforce, improve employee engagement, and drive organizational success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={ref}
                className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-primary text-4xl mb-4">
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
