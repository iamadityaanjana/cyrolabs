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
    <div style={{ 
      opacity: 1,
      fontFamily: "Rany, system-ui, sans-serif"
    }}>
      <h3 className="text-orange-500 text-2xl font-medium mb-4">{batch}</h3>
      
      {/* Application Date Card */}
      <div className="bg-[#131313] rounded-sm mb-5 transition-all duration-300 hover:bg-[#121212]">
        <div className="p-8">
          <div className="mb-4">
            <Image 
              src="/file.svg" 
              alt="Notepad Icon" 
              width={60}
              height={60}
              className="opacity-90"
            />
          </div>
          <div className="mt-4">
            <h4 className={`${applicationStatus === "closed" ? "text-orange-500" : "text-white"} text-3xl font-medium`}>
              {applicationStatus === "closed" ? "Closed" : applicationDate}
            </h4>
            <p className="text-gray-400 mt-1 text-lg">
              Application Date
            </p>
          </div>
        </div>
      </div>
      
      {/* Results Date Card */}
      <div className="bg-[#131313] rounded-sm transition-all duration-300 hover:bg-[#121212]">
        <div className="p-8">
          <div className="mb-4">
            <Image 
              src="/fe730c77dfbd4a12e3d181e39ed2c095cf853d27.png" 
              alt="Star Icon" 
              width={60}
              height={60}
              className="opacity-90"
            />
          </div>
          <div className="mt-4">
            <h4 className="text-white text-3xl font-medium">{resultDate}</h4>
            <p className="text-gray-400 mt-1 text-lg">Result Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
