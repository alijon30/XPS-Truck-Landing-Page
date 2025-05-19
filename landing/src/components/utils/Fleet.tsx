import React, { useEffect, useRef, useState } from 'react';
import { Truck, ThermometerSnowflake, Table, Package, ArrowRight, Check } from 'lucide-react';
import fleet1 from '../../assets/trucks/fleet1.png';
import fleet2 from '../../assets/trucks/fleet2.png';
import fleet3 from '../../assets/trucks/fleet3.png';
import fleet4 from '../../assets/trucks/fleet4.png';
import SmoothScrollLink from './SmoothScrollLink';

interface FleetItemProps {
  image: string;
  title: string;
  specs: string[];
  description: string;
  index: number;
  isVisible: boolean;
}

const FleetItem = ({ image, title, specs, description, index, isVisible }: FleetItemProps) => {
  // Calculate animation delay based on index
  const animationDelay = `${200 + (index * 150)}ms`;
  
  return (
    <div 
      className="bg-white rounded-sm overflow-hidden shadow-lg transition-all duration-500 group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateY(0) scale(1)' 
          : 'translateY(40px) scale(0.95)',
        transitionDelay: animationDelay
      }}
    >
      <div className="h-52 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-4">
          {specs.map((spec, specIndex) => (
            <li 
              key={specIndex} 
              className="text-gray-700 flex items-start transition-all duration-300"
              style={{ 
                transitionDelay: isVisible ? `${500 + (index * 150) + (specIndex * 100)}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
              }}
            >
              <Check size={16} className="text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Fleet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  
  const fleetRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Setup intersection observers for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    // Create observers
    const fleetObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        fleetObserver.disconnect();
      }
    }, observerOptions);
    
    const ctaObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsCtaVisible(true);
        ctaObserver.disconnect();
      }
    }, observerOptions);
    
    // Start observing
    if (fleetRef.current) {
      fleetObserver.observe(fleetRef.current);
    }
    
    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current);
    }
    
    // Cleanup
    return () => {
      fleetObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  const fleetItems = [
    {
      image: fleet1,
      title: "Class 8 Trucks",
      description: "Long-haul transportation for maximum efficiency",
      specs: [
        "53' Dry Van trailers",
        "Up to 80,000 lbs capacity",
        "Climate-controlled environment",
        "GPS tracking and monitoring"
      ]
    },
    {
      image: fleet2,
      title: "Reefer Trucks",
      description: "Temperature-controlled shipping for perishable goods",
      specs: [
        "Temperature range: -20°F to 70°F",
        "48' to 53' reefer trailers",
        "Real-time temperature monitoring",
        "Multi-temperature zones available"
      ]
    },
    {
      image: fleet3,
      title: "Flatbed Trucks",
      description: "Open deck solutions for oversized loads",
      specs: [
        "48' to 53' flatbed trailers",
        "Up to 48,000 lbs capacity",
        "Specialized cargo handling",
        "Secured load transportation"
      ]
    },
    {
      image: fleet4,
      title: "Box Trucks",
      description: "Versatile local delivery and distribution options",
      specs: [
        "16' to 26' length options",
        "Perfect for local deliveries",
        "Urban-friendly dimensions",
        "Liftgate equipped options"
      ]
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div 
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)'
          }}
        >
          <div className="inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-sm font-medium mb-4 animate-pulse">
            Our Equipment
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 delay-100"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-20px)'
            }}
          >
            Modern Fleet Solutions
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-20px)'
            }}
          >
            Well-maintained trucks and specialized equipment to handle all your transportation needs with safety and reliability
          </p>
        </div>
        
        <div 
          ref={fleetRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1"
        >
          {fleetItems.map((item, index) => (
            <FleetItem
              key={index}
              image={item.image}
              title={item.title}
              specs={item.specs}
              description={item.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className="mt-16 bg-white p-8 rounded-md shadow-lg max-w-4xl mx-auto overflow-hidden relative transition-all duration-1000"
          style={{
            opacity: isCtaVisible ? 1 : 0,
            transform: isCtaVisible ? 'translateY(0)' : 'translateY(40px)'
          }}
        >
          {/* Animated background elements */}
          <div 
            className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full transition-all duration-1000 delay-300"
            style={{
              opacity: isCtaVisible ? 1 : 0,
              transform: isCtaVisible ? 'translate(50%, -50%)' : 'translate(50%, -50%) scale(0)'
            }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-full transition-all duration-1000 delay-500"
            style={{
              opacity: isCtaVisible ? 1 : 0,
              transform: isCtaVisible ? 'translate(-50%, 50%)' : 'translate(-50%, 50%) scale(0)'
            }}
          ></div>
          
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div 
              className="md:w-1/4 mb-6 md:mb-0 flex justify-center transition-all duration-700 delay-400"
              style={{
                opacity: isCtaVisible ? 1 : 0,
                transform: isCtaVisible ? 'translateX(0)' : 'translateX(-20px)'
              }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-md p-6 text-white shadow-lg transition-all duration-500 hover:scale-105">
                <Truck size={36} className={isCtaVisible ? 'animate-bounce' : ''} style={{ animationDuration: '2s' }} />
              </div>
            </div>
            <div 
              className="md:w-3/4 md:pl-8 transition-all duration-700 delay-600"
              style={{
                opacity: isCtaVisible ? 1 : 0,
                transform: isCtaVisible ? 'translateX(0)' : 'translateX(20px)'
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Transportation Solutions</h3>
              <p className="text-gray-600">
                Don't see what you need? Our fleet is constantly expanding. Contact us to discuss 
                specialized equipment options for your unique transportation requirements.
              </p>
              <div 
                className="mt-6 transition-all duration-500 delay-800"
                style={{
                  opacity: isCtaVisible ? 1 : 0,
                  transform: isCtaVisible ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="inline-flex items-center gap-2 text-blue-700 font-medium group"
                >
                  Contact us today
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;