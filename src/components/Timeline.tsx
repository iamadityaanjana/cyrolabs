import React from 'react';
import StatusCard from './ui/StatusCard';

const Timeline = () => {
  const batches = [
    {
      title: 'BATCH 1',
      applicationDate: { title: 'Closed', date: 'Application Date' },
      resultDate: { title: '7th June 2025', date: 'Result Date' }
    },
    {
      title: 'BATCH 2',
      applicationDate: { title: '1st June 2025', date: 'Application Date' },
      resultDate: { title: '1st July 2025', date: 'Result Date' }
    },
    {
      title: 'BATCH 3',
      applicationDate: { title: '15th June 2025', date: 'Application Date' },
      resultDate: { title: '10th July 2025', date: 'Result Date' }
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white py-10 md:py-20 px-2 md:px-4 relative" id='timeline'>
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 relative z-0">TIMELINE</h1>
      
      <div className="max-w-7xl mx-auto relative z-0">
        {/* Border design with gradient fade */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Top-left to right gradient */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#D35400] to-transparent" />
          {/* Top-left to bottom gradient */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D35400] to-transparent" />
          {/* Bottom-right to left gradient */}
          <div className="absolute bottom-0 right-0 h-1 w-full bg-gradient-to-l from-[#D35400] to-transparent" />
          {/* Bottom-right to top gradient */}
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-[#D35400] to-transparent" />
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8">
          {/* Desktop Layout */}
          <div className="hidden md:contents">
            {/* Batch Headers */}
            {batches.map((batch, index) => (
              <div key={`header-${index}`} className="text-[#D35400] text-2xl font-bold mb-5 text-left">
                {batch.title}
              </div>
            ))}
            
            {/* Application Date Cards */}
            {batches.map((batch, index) => (
              <StatusCard
                key={`application-${index}`}
                title={batch.applicationDate.title}
                label={batch.applicationDate.date}
                icon="notepad"
                className="h-full"
              />
            ))}
            
            {/* Result Date Cards */}
            {batches.map((batch, index) => (
              <StatusCard
                key={`result-${index}`}
                title={batch.resultDate.title}
                label={batch.resultDate.date}
                icon="star"
                className="h-full"
              />
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {batches.map((batch, index) => (
              <div key={`mobile-batch-${index}`} className="space-y-4">
                {/* Batch Header */}
                <div className="text-[#D35400] text-xl font-bold mb-3 text-center">
                  {batch.title}
                </div>
                
                {/* Application Date Card */}
                <StatusCard
                  title={batch.applicationDate.title}
                  label={batch.applicationDate.date}
                  icon="notepad"
                  className="h-full"
                />
                
                {/* Result Date Card */}
                <StatusCard
                  title={batch.resultDate.title}
                  label={batch.resultDate.date}
                  icon="star"
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default Timeline;
