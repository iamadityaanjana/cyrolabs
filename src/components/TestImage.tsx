'use client'

import Image from 'next/image';

export default function TestImage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h2 className="text-white mb-4">Testing Image Display:</h2>
        <div className="border border-gray-500 p-4 inline-block">
          <Image 
            src="/svgviewer-output (2).svg" 
            alt="XION Logo" 
            width={80}
            height={80}
            className="mx-auto" 
            priority
          />
        </div>
        <p className="text-white mt-4">Image should appear above</p>
      </div>
    </div>
  );
}
