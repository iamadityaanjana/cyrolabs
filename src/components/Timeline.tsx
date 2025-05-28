'use client'

import Image from 'next/image';

export default function Timeline() {
  return (
    <div 
      id="timeline" 
      className="w-full bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16 font-[var(--font-inter)] animate-on-scroll"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(15,15,15,1) 100%)",
        boxShadow: "inset 0 20px 20px -20px rgba(0,0,0,0.7)",
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease"
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Timeline Header */}
        <div className="flex justify-center items-center mb-16">
          <div className="h-[1px] bg-orange-500/30 w-16 md:w-28 mr-6"></div>
          <h2 className="text-white text-4xl md:text-5xl text-center font-normal tracking-wider uppercase">
            TIMELINE
          </h2>
          <div className="h-[1px] bg-orange-500/30 w-16 md:w-28 ml-6"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Border styling for desktop */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1 bg-orange-500 opacity-20 mr-[10px]"></div>
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-orange-500 opacity-40 ml-[10px]"></div>
          {/* Vertical line for mobile */}
          <div className="md:hidden absolute left-[22px] top-0 bottom-0 w-[2px] bg-orange-500/30"></div>
          
          {/* Batch 1 */}
          <div className="bg-zinc-900/70 rounded-sm p-8 border-l-4 border-orange-500 md:border-l-0 hover:bg-zinc-800/80 transition-all duration-300 batch-card hover-lift">
            <h3 className="text-orange-500 text-2xl font-medium mb-10">BATCH 1</h3>
            
            <div className="flex items-start mb-14">
              <div className="mr-5 mt-1">
                <Image 
                  src="/image (6).png" 
                  alt="Notepad Icon" 
                  width={44}
                  height={44}
                  className="opacity-90"
                />
              </div>
              <div>
                <h4 className="text-orange-500 text-xl md:text-2xl font-medium">Closed</h4>
                <p className="text-gray-400 mt-1">Application Date</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-5 mt-1">
                <Image 
                  src="/image (6).png" 
                  alt="Calendar Icon" 
                  width={44}
                  height={44}
                  className="opacity-90"
                />
              </div>
              <div>
                <h4 className="text-orange-500 text-xl md:text-2xl font-medium">March 15, 2023</h4>
                <p className="text-gray-400 mt-1">Results Date</p>
              </div>
            </div>
          </div>
          
          {/* Batch 2 */}
          <div className="bg-zinc-900/70 rounded-sm p-8 border-l-4 border-orange-500 md:border-l-0 hover:bg-zinc-800/80 transition-all duration-300 batch-card hover-lift">
            <h3 className="text-orange-500 text-2xl font-medium mb-10">BATCH 2</h3>
            
            <div className="flex items-start mb-14">
              <div className="mr-5 mt-1">
                <Image 
                  src="/image (6).png" 
                  alt="Notepad Icon" 
                  width={44}
                  height={44}
                  className="opacity-90"
                />
              </div>
              <div>
                <h4 className="text-orange-500 text-xl md:text-2xl font-medium">Closed</h4>
                <p className="text-gray-400 mt-1">Application Date</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-5 mt-1">
                <Image 
                  src="/image (6).png" 
                  alt="Calendar Icon" 
                  width={44}
                  height={44}
                  className="opacity-90"
                />
              </div>
              <div>
                <h4 className="text-orange-500 text-xl md:text-2xl font-medium">July 10, 2023</h4>
                <p className="text-gray-400 mt-1">Results Date</p>
              </div>
            </div>
          </div>
          
          {/* Batch 3 */}
          <div className="bg-zinc-900/70 rounded-sm p-8 border-l-4 border-orange-500 md:border-l-0 hover:bg-zinc-800/80 transition-all duration-300 batch-card hover-lift">
            <h3 className="text-orange-500 text-2xl font-medium mb-10">BATCH 3</h3>
            
            <div className="flex items-start mb-14">
              <div className="mr-5 mt-1">
                <Image 
                  src="/image (6).png" 
                  alt="Notepad Icon" 
                  width={44}
                  height={44}
                  className="opacity-90"
                />
              </div>
              <div>
                <h4 className="text-orange-500 text-xl md:text-2xl font-medium">October 1, 2023</h4>
                <p className="text-gray-400 mt-1">Application Date</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-5 mt-1">
                <Image 
                  src="/image (6).png" 
                  alt="Calendar Icon" 
                  width={44}
                  height={44}
                  className="opacity-90"
                />
              </div>
              <div>
                <h4 className="text-orange-500 text-xl md:text-2xl font-medium">November 15, 2023</h4>
                <p className="text-gray-400 mt-1">Results Date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
