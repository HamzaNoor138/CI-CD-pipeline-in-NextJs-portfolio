"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { useState, useEffect, useCallback } from "react";

export default function MemberNav({ slug, navItems }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  
  // Find the current active item based on scroll position
  const getActiveIndex = () => {
    if (activeSection === 'services') return 1; // Services
    if (activeSection === 'skills') return 2; // Skills
    if (activeSection === 'projects') return 3; // Projects
    if (activeSection === 'about') return 4; // About
    if (activeSection === 'contact') return 5; // Contact
    return 0; // Home
  };

  // Handle scroll to detect active section - optimized with useCallback
  const handleScroll = useCallback(() => {
    const sections = [
      { id: 'services-section', name: 'services' },
      { id: 'skills-section', name: 'skills' },
      { id: 'projects-section', name: 'projects' },
      { id: 'about-section', name: 'about' },
      { id: 'contact-section', name: 'contact' }
    ];

    const windowHeight = window.innerHeight;
    const threshold = windowHeight * 0.3; // 30% of viewport height

    let currentSection = 'home';

    // Check each section
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        // If section is in viewport or just above it
        if (elementTop <= threshold && elementBottom > 0) {
          currentSection = section.name;
          break; // Exit early once we find the active section
        }
      }
    }

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    // Use passive scroll listener for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive scroll listener and reduce frequency
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Call once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  const activeIndex = getActiveIndex();

  // Handle navigation button clicks
  const handleNavClick = (e, sectionName) => {
    e.preventDefault();
    const sectionId = sectionName === 'Home' ? 'top' : `${sectionName.toLowerCase()}-section`;
    
    if (sectionName === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav className="relative flex items-center space-x-1 xs:space-x-2 sm:space-x-2.5 md:space-x-3 bg-white/10 backdrop-blur-md rounded-full p-1.5 xs:p-2 sm:p-2.5 md:p-3 border border-white/20">
      {navItems.map((item, index) => {
        const isActive = index === activeIndex;
        
        return (
          <button
            key={item}
            onClick={(e) => handleNavClick(e, item)}
            className={`relative z-10 px-2 xs:px-3 md:px-4 py-1.5 xs:py-2 rounded-full text-xs sm:text-xs md:text-sm font-medium transition-all duration-300 ease-in-out ${
              isActive 
                ? 'text-white font-semibold bg-gradient-to-r from-[#6c5ce7] to-[#00cec9]' 
                : 'text-gray-300 hover:text-white hover:scale-105 hover:bg-white/10'
            }`}
          >
            <span className="hidden xs:inline">{item}</span>
            <span className="inline xs:hidden">
              {item === 'Home' ? '🏠' : 
               item === 'Services' ? '⚙️' : 
               item === 'Skills' ? '💡' : 
               item === 'Projects' ? '💼' : 
               item === 'About' ? '👤' : 
               item === 'Contact' ? '📧' : item}
            </span>
          </button>
        );
      })}
      {/* Exit Button */}
      <Link
        href="/"
        className="relative z-10 flex items-center px-2 xs:px-3 md:px-4 py-1.5 xs:py-2 rounded-full text-xs sm:text-xs md:text-sm font-medium transition-all duration-300 ease-in-out text-white hover:text-[#fd79a8] hover:scale-105 ml-1 xs:ml-2"
        style={{ fontWeight: 600 }}
        title="Exit to Home"
      >
        <FiLogOut className="mr-0 xs:mr-1 text-sm xs:text-lg md:text-xl" /> 
        <span className="hidden xs:inline">Exit</span>
      </Link>
    </nav>
  );
} 