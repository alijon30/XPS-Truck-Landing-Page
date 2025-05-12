import React from 'react';
import { Truck, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import truckImg from '../../assets/trucks/truck_img3.jpeg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gray-900 bg-no-repeat bg-center 
             bg-[length:160%] sm:bg-[length:100%]"
      style={{ backgroundImage: `url(${truckImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blue-900/80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-800/80 px-4 py-2 rounded-full mb-5">
              <span className="text-blue-50 font-medium text-sm tracking-wider uppercase">XPS Transport</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Reliable Transportation <span className="text-blue-300">Solutions</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-100 font-medium mb-5">
              Your Trusted Partner in Logistics Since 2022
            </h2>
            
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Professional truck transportation services focused on building long-lasting, 
              respectful relationships with our customers and employees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <a 
                href="#contact" 
                className="group bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-200 text-center flex-1 sm:flex-none shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <div className="flex items-center group hover:bg-blue-900/20 p-2 rounded-lg transition-colors">
              <div className="bg-blue-800/30 p-3 rounded-lg mr-3 group-hover:bg-blue-700/40 transition duration-200">
                <Truck size={22} className="text-blue-300" />
              </div>
              <div>
                <span className="block text-white font-medium">Nationwide Coverage</span>
              </div>
            </div>
            <div className="flex items-center group hover:bg-blue-900/20 p-2 rounded-lg transition-colors">
              <div className="bg-blue-800/30 p-3 rounded-lg mr-3 group-hover:bg-blue-700/40 transition duration-200">
                <Clock size={22} className="text-blue-300" />
              </div>
              <div>
                <span className="block text-white font-medium">24/7 Support</span>
              </div>
            </div>
            <div className="flex items-center group hover:bg-blue-900/20 p-2 rounded-lg transition-colors">
              <div className="bg-blue-800/30 p-3 rounded-lg mr-3 group-hover:bg-blue-700/40 transition duration-200">
                <ShieldCheck size={22} className="text-blue-300" />
              </div>
              <div>
                <span className="block text-white font-medium">Safety First</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg">
              Call us directly at <a href="tel:+19372024808" className="text-blue-300 hover:text-blue-200 font-semibold">(937) 202-4808</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;