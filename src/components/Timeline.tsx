'use client'

import BatchCard from './BatchCard';

export default function Timeline() {
  return (
    <div 
      id="timeline" 
      className="w-full bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16 animate-on-scroll"
      style={{
        background: "black",
        boxShadow: "inset 0 20px 20px -20px rgba(0,0,0,0.7)",
        fontFamily: "Rany, system-ui, sans-serif"
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
          {/* Border styling - orange border with opposite corners */}
          <div className="absolute inset-0 timeline-border" style={{
            borderTop: "2px solid #FF6B00",
            borderRight: "2px solid #FF6B00",
            borderBottom: "0px",
            borderLeft: "0px",
            boxShadow: "0 0 10px rgba(255, 107, 0, 0.4)",
          }}></div>
          
          {/* Border styling - opposite corners */}
          <div className="absolute inset-0 timeline-border" style={{
            borderTop: "0px",
            borderRight: "0px", 
            borderBottom: "2px solid #FF6B00",
            borderLeft: "2px solid #FF6B00",
            boxShadow: "0 0 10px rgba(255, 107, 0, 0.4)",
          }}></div>
          
          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16 pb-16 px-6 md:px-14 relative z-10">
          
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
