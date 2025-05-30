import React from 'react';
import Image from 'next/image';

interface BenefitItemProps {
  imageSrc: string;
  title: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ imageSrc, title }) => {
  return (
    <div className="w-full aspect-[16/10] relative bg-[#1A1A1A] rounded-lg overflow-hidden group transition-all duration-300 hover:bg-[#252525]">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0  z-10" />
      
      {/* Image */}
      <div className="absolute inset-0 -top-12">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-6"
          priority
        />
      </div>
      
      {/* Title */}
      <h3 className="absolute bottom-3 left-6 text-1xl md:text-2xl font-medium text-white z-20 ">
        {title}
      </h3>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "In depth Xion sessions",
      imageSrc: "/images/one.png"
    },
    {
      title: "Monthly incentive",
      imageSrc: "/images/two.svg"
    },
    {
      title: "Your first Xion project",
      imageSrc: "/images/three.svg"
    },
    {
      title: "Top mentors",
      imageSrc: "/images/four.png"
    },
    {
      title: "Fire merch",
      imageSrc: "/images/five.svg"
    },
    {
      title: "Trip to best crypto event",
      imageSrc: "/images/six.svg"
    }
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-4" id="benefits">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          WHAT THIS FELLOWSHIP PROVIDES?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              imageSrc={benefit.imageSrc}
              title={benefit.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
