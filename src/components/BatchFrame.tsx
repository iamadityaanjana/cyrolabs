import Image from "next/image";
import React from "react";

const BATCHES = [
  { name: "FIRST BATCH" },
  { name: "SECOND BATCH" },
  { name: "THIRD BATCH" }
];

const IMAGES_COUNT = 6;

function CircularComingSoon() {
  return (
    <div className="relative flex items-center justify-center w-24 h-24 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
        <defs>
          <path
            id="circlePath"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text fill="#fff" fontSize="14.5" fontFamily="sans-serif">
          <textPath xlinkHref="#circlePath" startOffset="0">
            COMING SOON COMING SOON COMING SOON
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <Image src="/star.svg" alt="star" width={32} height={32} />
      </span>
    </div>
  );
}

function StaticImages() {
  return (
    <div className="relative w-full py-4 flex items-center justify-center overflow-hidden">
      {/* Strong gradient fades to hide overflow images naturally */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
      
      {/* Blurred overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none backdrop-blur-sm" />
      
      {/* All images displayed - overflow will be naturally hidden by gradients */}
      <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
        {[...Array(IMAGES_COUNT)].map((_, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden flex-shrink-0 w-28 h-36 sm:w-32 sm:h-40 md:w-40 md:h-52"
          >
            <Image
              src="/image.png"
              alt="coming soon"
              fill
              className="object-cover brightness-75"
              style={{ zIndex: 1 }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export function Frame() {
  return (
    <div className="w-full px-2 md:px-0 max-w-6xl mx-auto mt-5">
      {BATCHES.map((batch, idx) => (
        <div key={batch.name} className="mb-16 md:mb-24">
          <div className="text-center mb-2">
            <span className="text-orange-500 text-xs tracking-widest font-bold">RESULT</span>
          </div>
          <div className="text-center mb-6">
            <span className="text-2xl md:text-4xl font-bold text-white tracking-wide">{batch.name}</span>
          </div>
          <div className="relative">
            <StaticImages />
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <CircularComingSoon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}