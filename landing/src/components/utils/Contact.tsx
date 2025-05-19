import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Clock, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Setup intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const contactObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        contactObserver.disconnect();
      }
    }, observerOptions);
    
    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }
    
    return () => {
      contactObserver.disconnect();
    };
  }, []);
  
  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: "Address",
      content: "425 N Findlay Street STE 5, Dayton, OH 45404"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      content: "(937) 202-4808"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "info@xpstransport.com"
    },
    {
      icon: <Clock size={20} />,
      title: "Hours",
      content: [
        "Monday - Saturday: 9am - 5pm",
        "Sunday: Closed",
        "After Hours: Please contact (937) 202-4808"
      ]
    }
  ];
  
  return (
    <section id="contact" className="py-12 bg-white overflow-hidden" ref={contactRef}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Animated header section */}
        <div className="mb-8">
          <h2 
            className="text-2xl font-bold text-gray-900 mb-2 text-center transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-20px)'
            }}
          >
            Contact Information
          </h2>
          <div 
            className="transition-all duration-1000 delay-200 mx-auto mb-6"
            style={{
              width: isVisible ? '5rem' : '0',
              height: '0.25rem',
              backgroundColor: '#2563eb'
            }}
          ></div>
          <p 
            className="text-sm text-gray-600 max-w-2xl mx-auto text-center transition-all duration-700 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Have questions about our services? Need a quote? We're here to help with all your transportation needs.
          </p>
        </div>
        
        {/* Contact information with animated entries */}
        <div 
          className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden mb-8 transition-all duration-700 delay-400"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="p-6 transition-all duration-500 hover:bg-blue-50"
                style={{
                  transitionDelay: `${500 + index * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                <div className="flex items-center mb-3">
                  <div 
                    className="text-blue-600 mr-2 transition-transform duration-500"
                    style={{
                      transform: isVisible ? 'scale(1)' : 'scale(0)',
                      transitionDelay: `${700 + index * 150}ms`
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                </div>
                {Array.isArray(item.content) ? (
                  <div className="text-sm text-gray-600 pl-7">
                    {item.content.map((line, i) => (
                      <p 
                        key={i} 
                        className="mb-1 transition-all duration-300"
                        style={{
                          transitionDelay: `${800 + index * 150 + i * 100}ms`,
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p 
                    className="text-sm text-gray-600 pl-7 transition-all duration-300"
                    style={{
                      transitionDelay: `${800 + index * 150}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                    }}
                  >
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Animated CTA button */}
        <div 
          className="text-center transition-all duration-700 delay-1200"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <a 
            href="tel:+19372024808" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow hover:shadow-lg group"
          >
            <Phone size={18} className="animate-pulse" style={{ animationDuration: '2s' }} />
            Call Us Now
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;