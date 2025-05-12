import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Contact", href: "#contact" }
  ];
  
  const serviceLinks = [
    { name: "Long Haul Transport", href: "#services" },
    { name: "Logistics Management", href: "#services" },
    { name: "Specialized Cargo", href: "#services" },
    { name: "Just-in-Time Delivery", href: "#services" }
  ];
  
  
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white pt-16 pb-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">XPS Transport</h2>
              <p className="text-blue-200">Your trusted partner in logistics</p>
            </div>
            
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-700 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-blue-200 hover:text-white transition duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-700 inline-block">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-blue-200 hover:text-white transition duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-700 inline-block">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-blue-200">425 N Findlay Street STE 5<br />Dayton, OH 45404</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-blue-300 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-blue-200 hover:text-white">(937) 202-4808</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-blue-300 mr-3 flex-shrink-0" />
                <a href="mailto:info@vgttransport.com" className="text-blue-200 hover:text-white">info@xpstransport.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-blue-800/50 text-center">
          <p className="text-blue-300">&copy; {currentYear} XPS Transport LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;