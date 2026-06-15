'use client'

interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FF6B35, #FF8C42)' }}
              >
                <span className="text-white font-bold text-2xl tracking-tight">CL</span>
              </div>
              <div
                className="absolute inset-0 rounded-2xl animate-pulse"
                style={{ background: 'rgba(255,107,53,0.3)', animationDuration: '1s' }}
              />
            </div>
            <span className="text-white text-sm tracking-[0.3em] uppercase opacity-60">
              Cyro Labs
            </span>
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
