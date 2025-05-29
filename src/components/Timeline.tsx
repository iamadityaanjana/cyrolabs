import React from 'react';
import StatusCard from './ui/StatusCard';

const Timeline = () => {
  const batches = [
    {
      title: 'BATCH 1',
      applicationDate: { title: 'Closed', date: 'Application Date' },
      resultDate: { title: '15th June 2025', date: 'Result Date' }
    },
    {
      title: 'BATCH 2',
      applicationDate: { title: '4th June 2025', date: 'Application Date' },
      resultDate: { title: '15th June 2025', date: 'Result Date' }
    },
    {
      title: 'BATCH 3',
      applicationDate: { title: '4th June 2025', date: 'Application Date' },
      resultDate: { title: '15th June 2025', date: 'Result Date' }
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white py-20 px-4" id='timeline'>
      <h1 className="text-4xl font-bold text-center mb-16">TIMELINE</h1>
      
      <div className="max-w-7xl mx-auto relative">
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
        
        <div className="relative grid grid-cols-3 gap-8 p-8">
          {/* Batch Headers */}
          {batches.map((batch, index) => (
            <div key={`header-${index}`} className="text-[#D35400] text-2xl font-bold mb-5">
              {batch.title}
            </div>
          ))}
          
          {/* Application Date Cards (Row 2) */}
          {batches.map((batch, index) => (
            <StatusCard
              key={`application-${index}`}
              title={batch.applicationDate.title}
              label={batch.applicationDate.date}
              icon="notepad"
              className="h-full"
            />
          ))}
          
          {/* Result Date Cards (Row 3) */}
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
      </div>
    </div>
  );
};

export default Timeline;
