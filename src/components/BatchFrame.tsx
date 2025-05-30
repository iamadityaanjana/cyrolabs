import Image from "next/image";
import React from "react";

const BATCHES = [
  { name: "FIRST BATCH" },
  { name: "SECOND BATCH" },
  // Add more batches as needed
];

const IMAGES_COUNT = 6;

function CircularComingSoon() {
  // SVG circular text with star in center
  return (
    <div className="relative flex items-center justify-center w-24 h-24 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
        <defs>
          <path
            id="circlePath"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text fill="#fff" fontSize="8" fontFamily="sans-serif">
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

function InfiniteScrollImages() {
  // Two sets for seamless infinite scroll, blur on the whole row
  return (
    <div className="relative overflow-hidden w-full py-4 flex items-center justify-center">
      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Blurred overlay on the whole row */}
      <div className="absolute inset-0 z-10 pointer-events-none backdrop-blur-sm" />
      <div className="flex gap-6 animate-infinite-scroll">
        {[...Array(IMAGES_COUNT * 2)].map((_, i) => (
          <div
            key={i}
            className="relative w-32 h-40 md:w-40 md:h-52 rounded-xl overflow-hidden flex-shrink-0"
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
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          width: max-content;
          animation: infinite-scroll 18s linear infinite;
          /* Removed padding-left and padding-right to fix scroll jump */
        }
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
    <div className="w-full px-2 md:px-0 max-w-6xl mx-auto">
      {BATCHES.map((batch, idx) => (
        <div key={batch.name} className="mb-16 md:mb-24">
          <div className="text-center mb-2">
            <span className="text-orange-500 text-xs tracking-widest font-bold">RESULT</span>
          </div>
          <div className="text-center mb-6">
            <span className="text-2xl md:text-4xl font-bold text-white tracking-wide">{batch.name}</span>
          </div>
          {/* Container for images and the overlayed CircularComingSoon */}
          <div className="relative">
            <InfiniteScrollImages />
            {/* Centered circular coming soon, overlayed with higher z-index */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <CircularComingSoon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
