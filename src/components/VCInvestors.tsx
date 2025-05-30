import React from 'react';
import Image from 'next/image';

const VCInvestors = () => {
  return (
    <section className="w-full bg-[#090909] text-white py-20 px-4" id="vc-investors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="md:w-1/3 mb-10 md:mb-0 md:pr-10">
          <p className="text-xl md:text-2xl text-[#D35400] font-medium uppercase">
            CHANCE TO
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mt-2">
            raise from
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold">
            top vc&apos;s
          </h2>
        </div>

        {/* Right Side: Logos Image */}
        <div className="md:w-2/3">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/images/logos.png"
              alt="VC Investors Logos"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VCInvestors;
