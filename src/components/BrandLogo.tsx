import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light' | 'footer';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'dark',
  showSubtitle = true,
  className = '',
}) => {
  // Size classes
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-2xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
  };

  const subtitleSizes = {
    sm: 'text-[10px] tracking-[0.2em]',
    md: 'text-xs md:text-sm tracking-[0.25em]',
    lg: 'text-sm md:text-base tracking-[0.3em]',
  };

  const textColors = {
    dark: {
      title: 'text-[#A26868]',
      subtitle: 'text-[#8A5252]',
    },
    light: {
      title: 'text-white',
      subtitle: 'text-rose-100',
    },
    footer: {
      title: 'text-white',
      subtitle: 'text-rose-100/90',
    },
  };

  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {/* 5-Petal Organic Flower Icon matching the original document logo */}
      <div className={`relative mb-1 transition-transform hover:scale-105 duration-300 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8C5C5" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#D8A7A7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C48B8B" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#E6CA65" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>

          {/* 5 organic rounded petals radiating around center */}
          <g stroke="url(#goldBorder)" strokeWidth="1.8" fill="url(#petalGrad)">
            {/* Top petal */}
            <path d="M 50 15 C 38 18, 36 38, 50 48 C 64 38, 62 18, 50 15 Z" />
            {/* Top Right petal */}
            <path d="M 50 48 C 63 38, 83 45, 80 59 C 75 73, 56 60, 50 48 Z" />
            {/* Bottom Right petal */}
            <path d="M 50 48 C 56 60, 68 80, 54 86 C 39 90, 42 68, 50 48 Z" />
            {/* Bottom Left petal */}
            <path d="M 50 48 C 42 68, 46 90, 31 86 C 17 80, 29 60, 50 48 Z" />
            {/* Top Left petal */}
            <path d="M 50 48 C 29 60, 10 73, 5 59 C 2 45, 22 38, 50 48 Z" />
          </g>

          {/* Center delicate rose gold circle */}
          <circle cx="50" cy="48" r="4" fill="#FAF5F0" stroke="url(#goldBorder)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Brand Script Title */}
      <h1 className={`font-script font-normal leading-none ${titleSizes[size]} ${textColors[variant].title}`}>
        Íntegra Odontologia
      </h1>

      {/* Subtitle Dra. Marcela Souza */}
      {/* {showSubtitle && (
        <span
          className={`font-sans-body uppercase font-semibold mt-0.5 ${subtitleSizes[size]} ${textColors[variant].subtitle}`}
        >
          Dra. Marcela Souza
        </span>
      )} */}
    </div>
  );
};
