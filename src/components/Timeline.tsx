'use client'

import BatchCard from './BatchCard';

export default function Timeline() {
  return (
    <div 
      id="timeline" 
      className="w-full bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16 font-[var(--font-inter)] animate-on-scroll"
      style={{
        background: "black",
        boxShadow: "inset 0 20px 20px -20px rgba(0,0,0,0.7)",
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Timeline Header */}
        <div className="flex justify-center items-center mb-16">
          <div className="h-[1px] bg-orange-500/30 w-16 md:w-28 mr-6"></div>
          <h2 className="text-white text-4xl md:text-5xl text-center font-normal tracking-wider uppercase">
            TIMELINE
          </h2>
          <div className="h-[1px] bg-orange-500/30 w-16 md:w-28 ml-6"></div>
        </div>

        {/* Timeline Grid with Border */}
        <div className="relative mx-auto p-4">
          {/* Border styling - orange border with gradient fade */}
          <div className="absolute inset-0 border rounded-lg timeline-border" style={{
            borderImage: 'linear-gradient(to right, transparent, #f97316 20%, #f97316 80%, transparent 100%) 1 0 100% 0',
            borderImageSlice: '1',
            borderWidth: '2px 0px',
            opacity: '0.6',
          }}></div>
          
          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-12 px-4 md:px-12 relative z-10">
          
            {/* Using the BatchCard component for each batch */}
            <BatchCard 
              batch="BATCH 1"
              applicationDate=""
              applicationStatus="closed"
              resultDate="15th June 2025"
            />
            
            <BatchCard 
              batch="BATCH 2"
              applicationDate="4th June 2025"
              applicationStatus="open"
              resultDate="15th June 2025"
            />
            
            <BatchCard 
              batch="BATCH 3"
              applicationDate="4th June 2025"
              applicationStatus="open"
              resultDate="15th June 2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
