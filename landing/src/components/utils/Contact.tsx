import React from 'react';
import { Mail, Phone, Clock, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Streamlined header section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Contact Information</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto text-center">
            Have questions about our services? Need a quote? We're here to help with all your transportation needs.
          </p>
        </div>
        
        {/* Contact information in table-like layout */}
        <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {contactInfo.map((item, index) => (
              <div key={index} className="p-6">
                <div className="flex items-center mb-3">
                  <div className="text-blue-600 mr-2">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                </div>
                {Array.isArray(item.content) ? (
                  <div className="text-sm text-gray-600 pl-7">
                    {item.content.map((line, i) => (
                      <p key={i} className="mb-1">{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-600 pl-7">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;