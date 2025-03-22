import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ValuesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const values = [
    {
      icon: "handshake",
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our interactions and operations."
    },
    {
      icon: "lightbulb",
      title: "Innovation",
      description: "We constantly explore new ideas and technologies to deliver cutting-edge solutions."
    },
    {
      icon: "users",
      title: "Collaboration",
      description: "We work closely with our clients, fostering partnerships that drive mutual success."
    },
    {
      icon: "chart-line",
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in everything we do."
    }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-white">Values</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            The core principles that guide everything we do at Nishav Solutions India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={ref}
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="inline-block p-4 rounded-full bg-white/20 mb-6">
                  <i className={`fas fa-${value.icon} text-4xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
