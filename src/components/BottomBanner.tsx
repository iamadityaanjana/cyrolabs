'use client'

import Image from 'next/image';
import React from 'react';

export default function BottomBanner() {
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="min-h-[60vh] md:min-h-[45vh] w-9/10 mx-auto flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-16 font-[var(--font-inter)] text-white relative rounded-lg mb-10 overflow-hidden" // Changed w-full to w-4/5, added mx-auto, rounded-lg, and overflow-hidden
      style={{
        backgroundImage: "url('/bottom.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black", // Fallback color
      }}
    >
      {/* Darkening Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Increased opacity from 60 to 75 */}

      {/* Gradient Overlays to fade into borders */}
      
      
      <div className="absolute left-0 top-0 h-full w-2 md:w-15 bg-gradient-to-r from-black to-transparent z-1 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-2 md:w-15 bg-gradient-to-l from-black to-transparent z-1 pointer-events-none"></div>

      <div className="text-center relative z-10"> {/* Content on top */}
        <p className="text-sm md:text-base lg:text-lg font-light tracking-wider uppercase mb-3 md:mb-4">
          ENROLL NOW AND BE PART OF
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          <div className="w-[80px] md:w-[150px] lg:w-[180px]"> {/* Adjusted size for potentially smaller logo if needed */}
            <Image 
              src="/svgviewer-output (2).svg" // Assuming this is the XION logo
              alt="XION Logo" 
              width={180} // Max width
              height={63} // Max height, adjust aspect ratio as needed
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wider uppercase">
            HOUSE OF BUILDERS
          </h1>
        </div>
        <div>
          <a 
            href="#timeline" // Assuming this button also scrolls to timeline, adjust if different
            className="bg-orange-500 text-white py-3 px-7 md:py-3.5 md:px-10 rounded-md font-medium transition-all hover:bg-orange-600 inline-block text-base md:text-lg border-2 border-amber-500"
            onClick={(e) => handleButtonClick(e, 'timeline')}
          >
            Apply for Batch 2
          </a>
        </div>
      </div>
    </div>
  );
}
