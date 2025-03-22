import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "500+", label: "Successful Placements" },
    { value: "100+", label: "Client Companies" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transform transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Nishav Solutions India</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Your Trusted Partner in Recruitment & IT Services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className={`transform transition-all duration-700 ${
              imageVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="HR consulting team" 
                  className="rounded-lg shadow-xl w-full h-auto mb-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Recruitment interview" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-between">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Hiring process" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <img 
                  src="https://images.unsplash.com/photo-1574631818614-c9f765602b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-xl w-full h-auto mt-4"
                />
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className={`transform transition-all duration-700 ${
              contentVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-600 mb-6">
              At Nishav Solutions, we are dedicated to providing top-notch recruitment and IT services to businesses locally and globally. With an extensive range of customized solutions, we help companies gain a commercial advantage in their respective sectors through cost-effective expertise.
            </p>
            <p className="text-gray-600 mb-6">
              Established in 2018 in Ahmedabad, India, formerly started as a consulting company, Nishav has emerged as a leading recruitment and IT services provider. We specialize in crafting engaging websites, mobile applications, SEO strategies, and end-to-end hiring solutions.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Expertise</h3>
            <p className="text-gray-600 mb-6">
              We excel in providing the best candidates across various fields through our strong network and vast talent database. Our operational system is industry-specific, ensuring that candidates are thoroughly vetted based on qualifications, skills, and personality traits.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-primary text-4xl font-bold">{stat.value}</div>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Why Choose Nishav?</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">•</span>
                <span><span className="font-semibold">Right Talent, Right Fit</span> – Our recruiters have years of practical industry experience in sourcing high-quality professionals.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">•</span>
                <span><span className="font-semibold">Fast & Efficient Hiring</span> – We ensure quick and reliable recruitment services through our strong and updated database.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">•</span>
                <span><span className="font-semibold">100% Satisfaction & Transparency</span> – We provide quality manpower solutions with complete trust and professionalism.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">•</span>
                <span><span className="font-semibold">Flexible Hiring Models</span> – Whether it's full-cycle recruitment, contract hiring, or dedicated resource deployment, we have you covered.</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">•</span>
                <span>Sourcing & Administrative Support</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">•</span>
                <span>Full-Cycle Recruitment Solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">•</span>
                <span>Dedicated Resource Deployment (Contract-to-Hire)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">•</span>
                <span>Third-Party Hiring Solutions</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
            <p className="text-gray-600 mb-6">
              At Nishav Business Solutions, we are committed to building long-term partnerships by delivering exceptional service. We understand that hiring the right people drives business success, and we take pride in being your trusted recruitment partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
