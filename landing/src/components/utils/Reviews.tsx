import React, { useState, useEffect, useRef } from 'react';

// Define types
interface Review {
  id: number;
  customerName: string;
  company?: string;
  rating: number;
  comment: string;
  date: string;
}

const Reviews = () => {
  // Sample reviews data customized for XPS Transportation
  const reviews: Review[] = [
    {
      id: 1,
      customerName: "James Wilson",
      company: "Wilson Freight Solutions",
      rating: 5,
      comment: "XPS always pays on time and their dispatchers actually answer the phone - means a lot when you're on the road. Best company I've worked with in 15 years driving.",
      date: "2025-03-18"
    },
    {
      id: 2,
      customerName: "Lisa Martinez",
      company: "Martinez Shipping LLC",
      rating: 5,
      comment: "My husband and I run team with XPS. Consistent miles, good rates, and they get us home when promised. Their fuel card program is a real money-saver.",
      date: "2025-04-05"
    },
    {
      id: 3,
      customerName: "Mike Johnson",
      company: "Johnson Logistics",
      rating: 4,
      comment: "Been using XPS for our Midwest deliveries for 3 years. Even during holiday rushes, they come through with reliable capacity and on-time service.",
      date: "2025-02-12"
    },
    {
      id: 4,
      customerName: "Dave Thomas",
      rating: 5,
      comment: "As an owner-operator, XPS treats me like a partner, not just a truck number. Making better money here than I did with the mega carriers.",
      date: "2025-03-22"
    },
    {
      id: 5,
      customerName: "Sarah Chen",
      company: "Meridian Electronics",
      rating: 5,
      comment: "We ship sensitive electronics and XPS drivers handle our freight with care. Their on-time delivery rate is outstanding. True professionals.",
      date: "2025-01-29"
    },
    {
      id: 6,
      customerName: "Robert Jackson",
      company: "Jackson Refrigerated Transport",
      rating: 5,
      comment: "Switched all our reefer loads to XPS. Their drivers understand temperature-sensitive freight, and dispatch is proactive about any issues.",
      date: "2025-02-08"
    }
  ];

  const [isAnimating, setIsAnimating] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`text-lg md:text-xl ${i <= rating ? 'text-blue-500' : 'text-gray-200'}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };
  
  // Set up the sliding animation (for non-mobile)
  useEffect(() => {
    if (!carouselRef.current || isMobile) return;
    
    // Clone the first few items and append them to the end for seamless looping
    const carousel = carouselRef.current;
    const items = Array.from(carousel.children);
    
    // Calculate total width
    let totalWidth = 0;
    items.forEach(item => {
      totalWidth += (item as HTMLElement).offsetWidth + 32; // width + gap
    });
    
    // Set animation duration based on content length
    const animationDuration = totalWidth / 50; // pixels per second
    
    const moveCarousel = () => {
      if (!carousel) return;
      
      carousel.animate(
        [
          { transform: 'translateX(0)' },
          { transform: `translateX(-${totalWidth / 2}px)` }
        ],
        {
          duration: animationDuration * 1000,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    };
    
    if (isAnimating) {
      moveCarousel();
    }
    
    return () => {
      carousel.getAnimations().forEach(animation => animation.cancel());
    };
  }, [isAnimating, isMobile]);
  
  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsAnimating(false);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isMobile || !carouselRef.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    const carousel = carouselRef.current;
    
    // If swipe is significant enough
    if (Math.abs(diff) > 50) {
      // Get current transform value
      const computedStyle = window.getComputedStyle(carousel);
      const transform = new DOMMatrix(computedStyle.transform);
      const currentX = transform.m41;
      
      // Calculate new position
      let newPosition = currentX - diff;
      
      // Apply new transform
      carousel.style.transition = 'transform 0.3s ease-out';
      carousel.style.transform = `translateX(${newPosition}px)`;
      
      // Reset after transition
      setTimeout(() => {
        carousel.style.transition = '';
        setIsAnimating(true);
      }, 300);
    } else {
      setIsAnimating(true);
    }
  };
  
  // Pause animation on hover (desktop) or touch (mobile)
  const handleMouseEnter = () => !isMobile && setIsAnimating(false);
  const handleMouseLeave = () => !isMobile && setIsAnimating(true);
  
  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
  // Double the reviews array to ensure enough content for continuous scrolling
  const extendedReviews = [...reviews, ...reviews];
  
  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">What Our Partners Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            From owner-operators to nationwide shippers, hear what people are saying about XPS Transportation
          </p>
        </div>
        
        {/* Mobile-friendly touch instructions */}
        {isMobile && (
          <div className="text-center mb-4 text-gray-500 text-sm flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
            Swipe to see more reviews
          </div>
        )}
        
        <div 
          className="relative overflow-hidden -mx-4 px-4" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="py-4 md:py-6 overflow-x-auto md:overflow-x-visible scrollbar-hide">
            <div 
              ref={carouselRef}
              className="flex space-x-4 md:space-x-8 py-2 md:py-4"
              style={{ 
                paddingLeft: isMobile ? '0' : undefined,
                display: 'flex',
                scrollSnapType: isMobile ? 'x mandatory' : undefined
              }}
            >
              {extendedReviews.map((review, index) => (
                <div 
                  key={`${review.id}-${index}`}
                  className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-md flex-none w-72 md:w-96 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                  style={{ scrollSnapAlign: isMobile ? 'center' : undefined }}
                >
                  {/* Header with customer info and rating */}
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base md:text-lg group-hover:text-blue-600 transition-colors">
                        {review.customerName}
                      </h3>
                      {review.company ? (
                        <div className="text-blue-600 text-xs md:text-sm flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {review.company}
                        </div>
                      ) : (
                        <div className="text-blue-600 text-xs md:text-sm flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Owner-Operator
                        </div>
                      )}
                    </div>
                    
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  
                  {/* Review content with quotes */}
                  <div className="relative">
                    <span className="absolute -top-4 -left-1 text-3xl md:text-4xl text-blue-300 leading-none pointer-events-none">
                      ❝
                    </span>
                    <div className="text-gray-700 text-sm md:text-base mb-4 md:mb-5 pt-2 pl-6 pr-6 pb-2">
                      {review.comment}
                    </div>
                    <span className="absolute -bottom-4 -right-1 text-3xl md:text-4xl text-blue-300 leading-none pointer-events-none">
                      ❞
                    </span>
                  </div>
                  
                  {/* Date footer */}
                  <div className="text-gray-500 text-xs md:text-sm flex items-center mt-4 md:mt-8 pt-3 md:pt-4 border-t border-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-4 w-3 md:w-4 mr-1 md:mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

// Add this CSS to hide scrollbar but allow scrolling
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;             /* Chrome, Safari and Opera */
  }
`;

// You'll need to add this to your global CSS or a style tag in your document
// For the component to properly hide scrollbars on mobile

export default Reviews;