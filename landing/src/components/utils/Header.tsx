import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import xpsLogoWhite from '../../assets/trucks/xps_logo3.png';
import xpsLogoOriginal from '../../assets/trucks/xps_logo.png';
import SmoothScrollLink from './SmoothScrollLink';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['home', 'services', 'about-us', 'fleet', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    e.preventDefault();
    setMenuOpen(false);
    
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      // Add an offset to account for the fixed header height
      const headerElement = document.querySelector('header');
      const headerHeight = headerElement ? headerElement.offsetHeight : 0;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSmoothScrollAndCloseMenu = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    // Close the mobile menu
    setMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about-us', id: 'about-us' },
    { name: 'Our Fleet', href: '#fleet', id: 'fleet' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-3' : 'bg-white/95 md:bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center transition-all duration-300"
          onClick={(e) => handleNavClick(e, 'home')}
        >
            <img 
                src={scrolled || window.innerWidth < 768 ? xpsLogoOriginal : xpsLogoWhite} 
                alt="XPS Logo" 
                className="h-8 md:h-10 w-auto object-contain" 
            />
        </a>
        
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+19372024808" className={`flex items-center gap-1.5 ${scrolled ? 'text-blue-800' : 'text-white'} hover:text-blue-600 transition-colors duration-300 mr-6`}>
            <Phone size={16} />
            <span className="font-medium">(937) 202-4808</span>
          </a>
        </div>
        
        <button 
          className="md:hidden flex items-center justify-center p-1.5 hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} className="text-blue-800" />
          ) : (
            <Menu size={24} className="text-blue-800" />
          )}
        </button>
        
        <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white/95 md:bg-transparent shadow-md md:shadow-none ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        } md:translate-y-0 md:opacity-100 md:pointer-events-auto transition-all duration-300 ease-in-out`}>
          <ul className="md:flex md:items-center p-5 md:p-0">
            {navItems.map((item) => (
              <li key={item.id} className="mb-4 md:mb-0 md:mr-8">
                <SmoothScrollLink
                  href={item.href}
                  className={`
                    text-gray-800 ${scrolled ? 'md:text-gray-800' : 'md:text-white'} 
                    hover:text-blue-600
                    ${activeSection === item.id ? 'text-blue-600 font-semibold' : 'font-medium'}
                    block py-2 md:py-1 relative 
                    after:absolute after:bottom-0 after:left-0 
                    after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
                    ${activeSection === item.id ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                  `}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.name}
                </SmoothScrollLink>
              </li>
            ))}
            <li className="md:hidden mb-4">
              <a href="tel:+19372024808" className="flex items-center gap-1.5 text-gray-800 hover:text-blue-600">
                <Phone size={16} />
                <span className="font-medium">(937)-202-4808</span>
              </a>
            </li>
            <li>
              <SmoothScrollLink 
                href="#contact" 
                className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg font-medium transition duration-300 inline-block w-full md:w-auto text-center shadow-sm hover:shadow md:flex md:items-center md:gap-2"
                onClick={handleSmoothScrollAndCloseMenu}
              >
                Contact Us
              </SmoothScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;