'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavigationProps {
  onNavigate?: () => void; // Optional callback for when navigation occurs
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // Call the onNavigate callback if provided
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <header className="w-full flex flex-col md:flex-row md:justify-between items-center pt-4 md:pt-6">
      <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-0">
        <Image
          src="/svgviewer-output.svg"
          alt="XION Logo"
          width={200}
          height={60}
          className="h-auto"
          priority
        />
      </div>

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          className="absolute top-6 right-4 text-white focus:outline-none z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            // Close Icon (X)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu Icon (Hamburger)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      )}

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="flex items-center space-x-6 md:space-x-10">
          <a 
            href="#timeline" 
            className="text-white hover:text-orange-400 transition-colors text-sm md:text-base"
            onClick={(e) => handleLinkClick(e, 'timeline')}
          >
            Timeline
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-orange-400 transition-colors text-sm md:text-base"
            onClick={(e) => handleLinkClick(e, 'about')}
          >
            About
          </a>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScUFdK8VBnsPEieusmci9b3xzJeQUfQJ94BdMxKTS3j6BCU-g/viewform" 
            className="bg-orange-500 text-white px-4 py-2 rounded transition-all hover:bg-orange-600 text-sm md:text-base"
          >
            Apply
          </a>
        </nav>
      )}

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <nav 
          className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 z-20 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } pt-20 px-6 shadow-xl`}
        >
          <div className="flex flex-col space-y-6">
            <a 
              href="#timeline" 
              className="text-white hover:text-orange-400 transition-colors text-lg"
              onClick={(e) => handleLinkClick(e, 'timeline')}
            >
              Timeline
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-orange-400 transition-colors text-lg"
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScUFdK8VBnsPEieusmci9b3xzJeQUfQJ94BdMxKTS3j6BCU-g/viewform" 
              className="bg-orange-500 text-white px-4 py-2 rounded transition-all hover:bg-orange-600 text-lg text-center"
            >
              Apply
            </a>
          </div>
        </nav>
      )}

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
