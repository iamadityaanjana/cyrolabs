'use client';

import Image from 'next/image';
import React from 'react';

export default function Footer() {
  const handleApplyNowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Attempt to scroll to a section with ID 'timeline'
    // You can change 'timeline' to whatever section "Apply Now" should link to
    const targetElement = document.getElementById('https://docs.google.com/forms/d/e/1FAIpQLScUFdK8VBnsPEieusmci9b3xzJeQUfQJ94BdMxKTS3j6BCU-g/viewform');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    } else {
      // Fallback behavior if the target element isn't found, e.g., scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      console.warn("Footer 'Apply Now': Target section '#timeline' not found. Scrolled to top.");
    }
  };

  return (
    <footer className="bg-black text-gray-400 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top part: Logos */}
        <div className="flex items-center mb-5">
          {/* Cyro Labs Logo */}
          
          

          {/* XION INDIA Logo */}
          <div className="flex items-center">
            <Image
              src="/svgviewer-output.svg"
              alt="XION"
              width={40} 
              height={16} 
              className="h-4 sm:h-[17px] w-auto" 
            />
          </div>
        </div>

        {/* Bottom part: Copyright and Apply Now */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm border-t border-gray-800 pt-5">
          <p className="text-gray-500 mb-2 sm:mb-0">
            &copy;{new Date().getFullYear()} Xion house of builders
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScUFdK8VBnsPEieusmci9b3xzJeQUfQJ94BdMxKTS3j6BCU-g/viewform" // Default link, adjust as needed
            className="text-gray-400 hover:text-white transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </footer>
  );
}
