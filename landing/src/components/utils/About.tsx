import React from 'react';
import { 
  Truck, 
  Users, 
  Clock, 
  Shield, 
  BarChart, 
  ArrowRight, 
  CheckCircle,
  MapPin,
  Award,
  Zap
} from 'lucide-react';
import truckFleet from '../../assets/trucks/truck_fleet3.png';

const About = () => {
  const transportCards = [
    {
      icon: <Truck size={24} />,
      title: "Full-spectrum freight services",
      description: "Offering FTL and LTL shipping, expedited deliveries, specialized care, and global shipping for diverse transportation needs.",
      highlighted: false
    },
    {
      icon: <BarChart size={24} />,
      title: "Packing and preparing for shipment",
      description: "Comprehensive services for safely packing and preparing items for transport, including palletizing and protecting fragile items.",
      highlighted: true
    },
    {
      icon: <Users size={24} />,
      title: "Warehousing and inventory management",
      description: "Offering storage space and inventory management services for clients who need to store goods before further distribution.",
      highlighted: false
    }
  ];
  
  const stats = [
    { value: "50+", label: "Vehicle Fleet", icon: <Truck size={20} /> },
    { value: "98.7%", label: "On-Time Delivery", icon: <CheckCircle size={20} /> },
    { value: "10+", label: "Avg. Driver Experience", icon: <Award size={20} /> }
  ];
  
  const standards = [
    {
      icon: <Shield size={24} />,
      title: "Safety & Compliance",
      description: "We maintain rigorous safety protocols exceeding DOT requirements. Our fleet meets all current emissions standards with comprehensive preventative maintenance programs and advanced safety technologies."
    },
    {
      icon: <Clock size={24} />,
      title: "Reliability & Performance",
      description: "Our 98.7% on-time delivery rate is backed by real-time tracking and 24/7 customer support. We continuously measure performance metrics to ensure service excellence across all operations."
    }
  ];

  const industries = ["Manufacturing", "Retail", "Healthcare", "Construction", "Food & Beverage", "Technology"];

  return (
    <section id="about-us" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero section with animated gradient badge */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-medium mb-4 animate-pulse">
            Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About <span className="text-blue-800">XPS Transport</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto md:mx-0">
            XPS Transport delivers specialized logistics solutions with experienced owner-operators, 
            ensuring reliability and service excellence across all operations.
          </p>
        </div>
        
        {/* Main content with image - using grid for better responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-blue-800 pl-4">Industry Experience & Expertise</h2>
            
            <p className="text-gray-700 leading-relaxed">
              Founded in 2022, XPS Transport operates with owner-operators bringing 10+ years of professional CDL experience. 
              Our team serves industries across North America with specialized knowledge in time-critical shipments 
              and temperature-controlled transportation.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Our operations are backed by advanced logistics technology and professional drivers with extensive safety training. 
              We maintain a 98.7% on-time delivery rate while prioritizing regulatory compliance and operational efficiency.
            </p>
            
            <div className="py-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Industries We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 text-sm font-medium">
                    <CheckCircle size={14} className="mr-1.5" />
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            
            <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-blue-700 to-blue-900 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-800 hover:to-blue-950 transition duration-300 shadow-md hover:shadow-lg group">
              Request a Quote
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-sm shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={truckFleet} 
                alt="XPS Transport truck fleet" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="block text-white text-xl font-bold">Our Modern Fleet</span>
                  <span className="block text-blue-100 text-sm">Safety and efficiency on the road</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats with improved styling and animations */}
        <div className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-8px] border-t-4 border-blue-800"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 mr-3">
                    {stat.icon}
                  </div>
                  <span className="block text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-700 to-blue-900 mb-3 rounded-full"></div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Transportation Solutions with card hover effects */}
        <div className="mb-24">
          <div className="flex items-center mb-10">
            <div className="w-12 h-1 bg-blue-800 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">Transportation Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportCards.map((card, index) => (
              <div 
                key={index}
                className={`${
                  card.highlighted 
                    ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white' 
                    : 'bg-white'
                } rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl group`}
              >
                <div className="p-8 relative z-10 h-full flex flex-col">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 ${
                    card.highlighted ? 'bg-blue-600/30' : 'bg-blue-50'
                  }`}>
                    <span className={`text-${card.highlighted ? 'white' : 'blue-700'} transition-transform duration-500 group-hover:scale-125`}>
                      {card.icon}
                    </span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${card.highlighted ? 'text-white' : 'text-gray-900'} mb-4`}>
                    {card.title}
                  </h3>
                  
                  <p className={`text-${card.highlighted ? 'blue-100' : 'gray-600'} mb-6 flex-grow`}>
                    {card.description}
                  </p>
                  
                  <div className="flex justify-end mt-auto">
                    <button className={`group inline-flex items-center gap-2 text-sm font-medium ${
                      card.highlighted ? 'text-white' : 'text-blue-700'
                    }`}>
                      Learn more
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                    </button>
                  </div>
                </div>
                
                {/* Background decoration */}

              </div>
            ))}
          </div>
        </div>
        
        
        
        {/* CTA section with improved design */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">

          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <div className="flex items-center mb-4">
                <Zap size={24} className="text-yellow-300 mr-2" />
                <h3 className="text-3xl font-bold text-white">Ready to optimize your logistics?</h3>
              </div>
              <p className="text-blue-100 text-lg max-w-2xl">
                Contact our transportation specialists today for a customized solution that meets your specific shipping needs.
              </p>
            </div>
            <div>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 bg-white text-blue-800 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition duration-300 shadow-md hover:shadow-xl group text-lg"
              >
                <MapPin size={20} />
                Request a Consultation
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;