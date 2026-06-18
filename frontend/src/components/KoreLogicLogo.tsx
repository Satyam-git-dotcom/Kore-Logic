import React from 'react';

interface KoreLogicLogoProps {
  size?: number;
  className?: string;
}

export default function KoreLogicLogo({ size = 40, className = '' }: KoreLogicLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dark background square with rounded corners */}
      <rect width="200" height="200" rx="40" fill="#0B1026" />
      {/* "K" letterform in white */}
      <path
        d="M70 140V60H85V100L115 60H135L105 100L135 140H115L85 100V140H70Z"
        fill="#FFFFFF"
      />
      {/* Pink accent dot (top right) */}
      <circle cx="140" cy="60" r="15" fill="#FF2D7A" />
      {/* Cross / plus inside the accent dot */}
      <path
        d="M135 60L145 60M140 55L140 65"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
