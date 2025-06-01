'use client'

import Image from 'next/image';
import Navigation from './Navigation';

interface HeroSectionProps {
  loading: boolean;
}

export default function HeroSection({ loading }: HeroSectionProps) {
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
      className={`min-h-screen w-full flex flex-col items-center justify-between py-6 px-4 md:px-8 lg:px-16 font-[var(--font-inter)] overflow-hidden relative ${loading ? 'hidden' : 'block'}`}
      style={{
        backgroundImage: "url('/image (5).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black", // Fallback color
      }}
    >
      {/* Header with Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center my-auto w-full max-w-7xl">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <div className="md:mr-3 w-[100px] md:w-[200px]">
              <Image 
                src="/svgviewer-output (2).svg" 
                alt="XION Logo" 
                width={200}
                height={70}
                priority
              />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wider uppercase">
              HOUSE OF BUILDERS
            </h1>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScUFdK8VBnsPEieusmci9b3xzJeQUfQJ94BdMxKTS3j6BCU-g/viewform" 
            className="bg-orange-500 text-white py-3.5 px-8 md:px-10 rounded-md font-medium transition-all hover:bg-orange-600 inline-block text-base md:text-lg border-2 border-amber-500 "
          >
            Apply for Batch 2
          </a>
        </div>
      </main>

      {/* Empty footer to maintain spacing */}
      <footer className="w-full"></footer>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
