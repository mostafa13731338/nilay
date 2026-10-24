import React from 'react';

interface NilayLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const NilayLogo: React.FC<NilayLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'dark',
}) => {
  const isDarkBg = variant === 'light';

  // Dimension scaling
  const emblemSizes = {
    sm: { width: 32, height: 32 },
    md: { width: 44, height: 44 },
    lg: { width: 64, height: 64 },
  };

  const currentSize = emblemSizes[size];

  return (
    <div
      dir="ltr"
      className={`inline-flex items-center gap-2 sm:gap-3 select-none text-left shrink-0 ${className}`}
    >
      {/* SVG Emblem faithfully matching the official Nilay Trade logo */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${
          size === 'sm'
            ? 'w-7 h-7 sm:w-8 sm:h-8'
            : size === 'lg'
            ? 'w-14 h-14 sm:w-16 sm:h-16'
            : 'w-8 h-8 sm:w-11 sm:h-11'
        }`}
      >
        <defs>
          {/* Gradient for the rising export growth arrow from teal to gold */}
          <linearGradient id="nilayArrowGrad" x1="40" y1="130" x2="160" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F8B8D" />
            <stop offset="50%" stopColor="#14a3a6" />
            <stop offset="85%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#E5B82C" />
          </linearGradient>

          {/* Mask for globe lat/long lines */}
          <clipPath id="globeClip">
            <circle cx="68" cy="100" r="32" />
          </clipPath>
        </defs>

        {/* The Bold Navy "N" */}
        <path
          d="M 58 38 L 88 38 L 138 100 L 138 38 L 164 38 L 164 158 L 134 158 L 84 96 L 84 158 L 58 158 Z"
          fill={isDarkBg ? "#FFFFFF" : "#071D35"}
        />

        {/* The Right Pillar / "I" in Teal */}
        <rect
          x="142"
          y="70"
          width="22"
          height="88"
          fill="#0F8B8D"
          rx="2"
        />

        {/* The Globe Sphere */}
        <circle
          cx="68"
          cy="100"
          r="32"
          fill="#071D35"
          stroke={isDarkBg ? "#FFFFFF" : "#071D35"}
          strokeWidth="3"
        />

        {/* Globe Latitude & Longitude Grid Lines */}
        <g clipPath="url(#globeClip)">
          {/* Horizontal Equator & Latitude lines */}
          <line x1="36" y1="100" x2="100" y2="100" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M 36 84 Q 68 90 100 84" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          <path d="M 36 116 Q 68 110 100 116" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />

          {/* Vertical Meridian curves */}
          <ellipse cx="68" cy="100" rx="16" ry="32" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="68" y1="68" x2="68" y2="132" stroke="#FFFFFF" strokeWidth="2.5" />
        </g>

        {/* Globe Base Swoosh */}
        <path
          d="M 44 116 C 42 128 52 138 68 138 C 76 138 84 135 90 130"
          stroke="#071D35"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* The Dynamic Rising Arrow from Globe to Global Markets (Teal to Gold) */}
        <path
          d="M 52 136 C 85 138 126 108 158 48"
          fill="none"
          stroke="url(#nilayArrowGrad)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Gold Arrowhead pointing up and right */}
        <polygon
          points="162,26 172,58 142,48"
          fill="#E5B82C"
          stroke="#C9A227"
          strokeWidth="1"
        />
      </svg>

      {/* Typography: Exactly "Nilay" in Navy, "Trade" in Teal, strictly LTR */}
      {showText && (
        <div dir="ltr" className="flex flex-col text-left leading-tight shrink-0">
          <div className="flex items-center gap-1 sm:gap-1.5 text-base sm:text-xl font-bold tracking-tight">
            <span className={isDarkBg ? "text-white" : "text-[#071D35]"}>
              Nilay
            </span>
            <span className="text-[#0F8B8D]">
              Trade
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold text-slate-400">
            International B2B
          </span>
        </div>
      )}
    </div>
  );
};
