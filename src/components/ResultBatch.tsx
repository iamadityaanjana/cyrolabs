"use client"

import Image from "next/image"

export default function BatchResults() {
  return (
    <div className="min-h-screen bg-black text-white py-8 px-4">
      <BatchSection batchNumber="FIRST" />
      <BatchSection batchNumber="SECOND" />
      <BatchSection batchNumber="THIRD" />
    </div>
  )
}

function BatchSection({ batchNumber }: { batchNumber: string }) {
  return (
    <div className="mb-16">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-orange-500 text-sm font-medium tracking-wider mb-2">RESULT</p>
        <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wider">{batchNumber} BATCH</h2>
      </div>

      {/* Scrolling Images Section */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        {/* Infinite Scrolling Images */}
        <div className="absolute inset-0">
          <InfiniteScrollImages />
        </div>

        {/* Overlay with blur effect */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Central Coming Soon Element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ComingSoonRotator />
        </div>
      </div>
    </div>
  )
}

function InfiniteScrollImages() {
  return (
    <div className="flex animate-scroll-left">
      {/* First set of images */}
      <div className="flex shrink-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-40 h-40 md:w-48 md:h-48 relative">
            <Image src="/image.png" alt="Batch image" fill className="object-cover" />
          </div>
        ))}
      </div>
      {/* Duplicate set for seamless loop */}
      <div className="flex shrink-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`dup-${i}`} className="w-40 h-40 md:w-48 md:h-48 relative">
            <Image src="/image.png" alt="Batch image" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ComingSoonRotator() {
  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48">
      {/* Central star */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 relative">
          <Image src="/star.svg" alt="Star" fill className="object-contain" />
        </div>
      </div>

      {/* Rotating text */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg className="w-full h-full" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path id="circle" d="M 120, 120 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0" />
          </defs>
          <text className="fill-white text-xs md:text-sm font-medium tracking-widest">
            <textPath href="#circle" startOffset="0%">
              COMING SOON • COMING SOON • COMING SOON •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}
