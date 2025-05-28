'use client'

import Image from 'next/image';

interface BatchCardProps {
  batch: string;
  applicationDate: string;
  applicationStatus: "open" | "closed";
  resultDate: string;
}

export default function BatchCard({ batch, applicationDate, applicationStatus, resultDate }: BatchCardProps) {
  return (
    <div className="bg-zinc-900/90 rounded-md p-8 transition-all duration-300 batch-card hover:bg-zinc-900 border border-zinc-800" style={{ opacity: 1 }}>
      <h3 className="text-orange-500 text-2xl font-medium mb-6">{batch}</h3>
      
      {/* Application Date Card */}
      <div className="bg-[#1a1a1a] rounded-md p-6 mb-8 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
        <div className="flex flex-col">
          <div className="mb-4">
            <Image 
              src="/file.svg" 
              alt="Notepad Icon" 
              width={50}
              height={50}
              className="opacity-90"
            />
          </div>
          <div>
            <h4 className={`${applicationStatus === "closed" ? "text-orange-500" : "text-white"} text-2xl font-medium`}>
              {applicationStatus === "closed" ? "Closed" : applicationDate}
            </h4>
            <p className="text-gray-500 mt-1">
              {applicationStatus === "closed" ? "Application Date" : "Application opens for Batch X"}
            </p>
          </div>
        </div>
      </div>
      
      {/* Results Date Card */}
      <div className="bg-[#1a1a1a] rounded-md p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
        <div className="flex flex-col">
          <div className="mb-4">
            <Image 
              src="/fe730c77dfbd4a12e3d181e39ed2c095cf853d27.png" 
              alt="Star Icon" 
              width={50}
              height={50}
              className="opacity-90"
            />
          </div>
          <div>
            <h4 className="text-white text-2xl font-medium">{resultDate}</h4>
            <p className="text-gray-500 mt-1">Result Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
