import React, { useEffect, useState } from 'react';
import { Truck, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import truckImg from '../../assets/trucks/truck_img3.jpeg';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  
  useEffect(() => {
    // Trigger initial animations after component mounts
    setTimeout(() => setIsVisible(true), 300);
    setTimeout(() => setFeaturesVisible(true), 1200);
  }, []);

  // Placeholder for truck image
  
  // Animation classes
  const fadeIn = "transition-all duration-1000 ease-out";
  const slideUp = "transition-all duration-700 ease-out";
  const staggeredDelay = (index: number) => `transition-all duration-500 delay-${index * 100}`;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gray-900 bg-no-repeat bg-center 
             bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${truckImg})` }}
    >
      {/* Dark overlay with animation */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-black/80 to-blue-900/80 z-0 ${fadeIn} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Badge animation */}
            <div 
              className={`inline-flex items-center gap-2 bg-blue-800/80 px-4 py-2 rounded-full mb-5 ${fadeIn} ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'}`}
            >
              <span className="text-blue-50 font-medium text-sm tracking-wider uppercase">XPS Transport</span>
            </div>
            
            {/* Heading animation */}
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight ${slideUp} ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            >
              Reliable Transportation <span className="text-blue-300">Solutions</span>
            </h1>
            
            {/* Subheading animation with slight delay */}
            <h2 
              className={`text-xl md:text-2xl text-gray-100 font-medium mb-5 ${slideUp} transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            >
              Your Trusted Partner in Logistics Since 2022
            </h2>
            
            {/* Paragraph animation with more delay */}
            <p 
              className={`text-lg text-gray-200 mb-8 leading-relaxed ${slideUp} transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-6'}`}
            >
              Professional truck transportation services focused on building long-lasting, 
              respectful relationships with our customers and employees.
            </p>
            
            {/* Button animation with even more delay */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 mb-12 justify-center ${fadeIn} transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-200 text-center flex-1 sm:flex-none shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          
          {/* Features with staggered animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: <Truck size={22} className="text-blue-300" />, text: "Nationwide Coverage" },
              { icon: <Clock size={22} className="text-blue-300" />, text: "24/7 Support" },
              { icon: <ShieldCheck size={22} className="text-blue-300" />, text: "Safety First" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-center group hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-500 transform ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className="bg-blue-800/30 p-3 rounded-lg mr-3 group-hover:bg-blue-700/40 transition duration-200">
                  {feature.icon}
                </div>
                <div>
                  <span className="block text-white font-medium">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action animation */}
          <div 
            className={`text-center mt-12 ${fadeIn} delay-1000 ${featuresVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="text-gray-300 text-lg">
              Call us directly at <a href="tel:+19372024808" className="text-blue-300 hover:text-blue-200 font-semibold transition-colors">(937) 202-4808</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;