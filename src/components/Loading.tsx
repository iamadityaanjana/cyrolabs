'use client'

import Image from 'next/image';

interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  return (
    <>
    {/* Loading Overlay */}
    {loading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <Image 
                    src="/svgviewer-output.svg" 
                    alt="XION Logo" 
                    width={200}
                    height={200}
                    className="animate-pulse" 
                    style={{ animationDuration: "1s" }}
                    priority
                />
            </div>
        </div>
    )}

    {/* Fade-out overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>
    </>
  );
}
