'use client'

import Image from 'next/image';

interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="relative animate-pulse" style={{ animationDuration: '1.4s' }}>
              <Image
                src="/logo.svg"
                alt="Cyro Labs"
                width={160}
                height={23}
                priority
              />
            </div>
          </div>
        </div>
      )}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
    </>
  );
}
