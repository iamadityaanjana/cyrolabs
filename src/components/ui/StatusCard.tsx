import React from 'react';
import Image from 'next/image';

interface StatusCardProps {
  title: string;
  label: string;
  className?: string;
  icon?: 'notepad' | 'star';
}

const StatusCard: React.FC<StatusCardProps> = ({ title, label, className = '', icon = 'notepad' }) => {
  const iconSrc = icon === 'notepad' 
    ? '/image (6).png'
    : '/fe730c77dfbd4a12e3d181e39ed2c095cf853d27.png';
  
  return (
    <div className={`flex flex-col items-center md:items-start space-y-2 md:space-y-3 p-3 md:p-4 bg-[#1A1A1A] rounded-lg ${className}`}>
      <div className="relative w-12 h-12 md:w-14 md:h-14">
        <Image
          src={iconSrc}
          alt={icon}
          fill
          className="object-contain"
        />
      </div>
      
      {/* Status text */}
      <div className="space-y-0.5 md:space-y-1 text-center pt-1 md:pt-10 md:text-left">
        <h3 className="text-lg md:text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="text-gray-500 text-sm md:text-lg">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatusCard;
