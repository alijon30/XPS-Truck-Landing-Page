import React, { ReactNode, MouseEvent } from 'react';

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void; // Add this line
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ 
  href, 
  children, 
  className = '', 
  offset = 0,
  duration = 2000,
  onClick  // Add this line
}) => {
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Call the onClick handler if provided
    if (onClick) {
      onClick(e);
    }
    
    const targetId = href;
    const targetElement = document.querySelector(targetId) as HTMLElement;
    
    if (targetElement) {
      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      // Easing function for smoother acceleration/deceleration
      const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <a 
      href={href}
      onClick={handleSmoothScroll}
      className={className}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;