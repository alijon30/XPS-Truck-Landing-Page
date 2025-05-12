import React from 'react';
import { Truck, ThermometerSnowflake, Table, Package, ArrowRight, Check } from 'lucide-react';
import fleet1 from '../../assets/trucks/fleet1.png';
import fleet2 from '../../assets/trucks/fleet2.png';
import fleet3 from '../../assets/trucks/fleet3.png';
import fleet4 from '../../assets/trucks/fleet4.png';

interface FleetItemProps {
  image: string;
  title: string;
  specs: string[];
  icon: React.ReactNode;
  description: string;
}

const FleetItem = ({ image, title, specs, icon, description }: FleetItemProps) => (
  <div className="bg-white rounded-sm overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
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
        {specs.map((spec, index) => (
          <li key={index} className="text-gray-700 flex items-start">
            <Check size={16} className="text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>{spec}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <button className="group flex items-center gap-2 text-sm font-medium text-blue-700">
          View details
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </div>
);

const Fleet = () => {
  const fleetItems = [
    {
      image: fleet1,
      title: "Class 8 Trucks",
      icon: <Truck size={20} />,
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
      icon: <ThermometerSnowflake size={20} />,
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
      icon: <Table size={20} />,
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
      icon: <Package size={20} />,
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
    <section id="fleet" className="py-24 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Our Equipment
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Modern Fleet Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Well-maintained trucks and specialized equipment to handle all your transportation needs with safety and reliability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {fleetItems.map((item, index) => (
            <FleetItem
              key={index}
              image={item.image}
              title={item.title}
              specs={item.specs}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-md shadow-lg max-w-4xl mx-auto overflow-hidden relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-md p-6 text-white shadow-lg">
                <Truck size={36} />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Transportation Solutions</h3>
              <p className="text-gray-600">
                Don't see what you need? Our fleet is constantly expanding. Contact us to discuss 
                specialized equipment options for your unique transportation requirements.
              </p>
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center gap-2 text-blue-700 font-medium group">
                  Contact us today
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;