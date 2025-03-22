import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const testimonials = [
    {
      rating: 5,
      text: "Nishav Solutions India provided exceptional web development services for our company. Their team was professional, responsive, and delivered beyond our expectations.",
      name: "Rajesh Sharma",
      position: "CEO, TechVision Ltd",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      rating: 5,
      text: "Working with Nishav Solutions India was a game-changer for our business. Their mobile app development expertise helped us reach new customers and streamline operations.",
      name: "Priya Patel",
      position: "Director, GlobalRetail",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      rating: 4.5,
      text: "The cloud migration services provided by Nishav Solutions India were excellent. They made a complex process seamless and helped us achieve significant cost savings.",
      name: "Vikram Singh",
      position: "CTO, FinanceHub",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Hear what our clients have to say about their experience working with Nishav Solutions India.
          </p>
        </div>
        
        <div className="testimonial-slider relative">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary transform transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="text-yellow-400 mb-4 flex">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <Star key={i} className="fill-current" />
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <div className="relative">
                        <Star className="fill-current" />
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-white"></div>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 italic mb-6">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
