'use client';

import { useEffect, useState } from 'react';

interface AdSlotProps {
  slot: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export function AdSlot({ slot, className = '' }: AdSlotProps) {
  const [isMonetized, setIsMonetized] = useState(false);

  useEffect(() => {
    const monetizationActive = process.env.NEXT_PUBLIC_MONETIZATION_ACTIVE === 'true';
    setIsMonetized(monetizationActive);
  }, []);

  const slotConfigs = {
    1: {
      minHeight: '280px',
      label: 'Above Fold Ad',
      alignment: 'center',
    },
    2: {
      minHeight: '250px',
      label: 'In-Article Ad',
      alignment: 'center',
    },
    3: {
      minHeight: '250px',
      label: 'Right-Aligned Ad',
      alignment: 'right',
    },
    4: {
      minHeight: '280px',
      label: 'Pre-Conclusion Ad',
      alignment: 'center',
    },
    5: {
      minHeight: '90px',
      label: 'Sticky Bottom Ad',
      alignment: 'center',
    },
  };

  const config = slotConfigs[slot];

  if (!isMonetized) {
    return null;
  }

  const baseClasses = 'ad-slot transition-all duration-300';
  const alignmentClasses = {
    center: 'mx-auto my-8',
    right: 'ml-auto mr-0 my-6 float-right',
  }[config.alignment];

  const stickyClasses = slot === 5 ? 'fixed bottom-0 left-0 right-0 z-40 lg:hidden shadow-lg' : '';

  return (
    <div
      className={`${baseClasses} ${alignmentClasses} ${stickyClasses} ${className}`}
      style={{
        minHeight: config.minHeight,
        backgroundColor: 'transparent',
      }}
      data-ad-slot={slot}
      aria-label={config.label}
    >
      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
      </div>
    </div>
  );
}
