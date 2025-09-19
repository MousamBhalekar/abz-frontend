"use client";
import React from 'react';

interface BackgroundGridProps {
  className?: string;
  opacity?: number;
  showPulses?: boolean;
  pulseIntensity?: 'subtle' | 'normal' | 'strong';
  gridSize?: 'small' | 'medium' | 'large';
  variant?: 'minimal' | 'detailed' | 'corner-only';
}

export const BackgroundGrid: React.FC<BackgroundGridProps> = ({
  className = "",
  opacity = 0.3,
  showPulses = true,
  pulseIntensity = 'normal',
  gridSize = 'medium',
  variant = 'corner-only'
}) => {
  const getGridDimensions = () => {
    switch (gridSize) {
      case 'small': return { rows: 4, cols: 6 };
      case 'large': return { rows: 2, cols: 3 };
      default: return { rows: 3, cols: 4 };
    }
  };

  const getPulseProps = () => {
    const baseProps = {
      subtle: { size: 12, glow: '4px', opacity: 0.6 },
      normal: { size: 16, glow: '6px', opacity: 0.8 },
      strong: { size: 20, glow: '8px', opacity: 1 }
    };
    return baseProps[pulseIntensity];
  };

  const { rows, cols } = getGridDimensions();
  const pulseProps = getPulseProps();

  const renderMinimalGrid = () => (
    <div className="absolute inset-0" style={{ opacity }}>
      {/* Simple border lines */}
      <div className="absolute inset-0 border border-[#2C465D]" />
      
      {/* Center cross lines */}
      <div 
        className="absolute top-0 bottom-0 w-px bg-[#2C465D]"
        style={{ left: '50%' }}
      />
      <div 
        className="absolute left-0 right-0 h-px bg-[#2C465D]"
        style={{ top: '50%' }}
      />
    </div>
  );

  const renderDetailedGrid = () => (
    <div 
      className="grid w-full h-full gap-0 absolute inset-0"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        opacity
      }}
    >
      {Array.from({ length: rows * cols }, (_, index) => (
        <div
          key={index}
          className="border border-[#2C465D] bg-transparent"
        />
      ))}
    </div>
  );

  const renderCornerOnlyGrid = () => (
    <div className="absolute inset-0" style={{ opacity }}>
      {/* Outer border */}
      <div className="absolute inset-0 border border-[#2C465D]" />
      
      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-8 h-px bg-[#2C465D]" />
      <div className="absolute top-0 left-0 w-px h-8 bg-[#2C465D]" />
      
      <div className="absolute top-0 right-0 w-8 h-px bg-[#2C465D]" />
      <div className="absolute top-0 right-0 w-px h-8 bg-[#2C465D]" />
      
      <div className="absolute bottom-0 left-0 w-8 h-px bg-[#2C465D]" />
      <div className="absolute bottom-0 left-0 w-px h-8 bg-[#2C465D]" />
      
      <div className="absolute bottom-0 right-0 w-8 h-px bg-[#2C465D]" />
      <div className="absolute bottom-0 right-0 w-px h-8 bg-[#2C465D]" />
    </div>
  );

  const renderPulses = () => {
    if (!showPulses) return null;

    const positions = [
      { top: '0%', left: '0%', delay: '0s' },
      { top: '0%', left: '100%', delay: '0.5s' },
      { top: '100%', left: '0%', delay: '1s' },
      { top: '100%', left: '100%', delay: '1.5s' }
    ];

    return positions.map((pos, index) => (
      <div
        key={`pulse-${index}`}
        className="absolute z-10 pointer-events-none"
        style={{
          top: pos.top,
          left: pos.left,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div 
          className="animate-pulse"
          style={{ 
            animationDelay: pos.delay,
            animationDuration: '2s',
            opacity: pulseProps.opacity
          }}
        >
          {/* Horizontal line */}
          <div 
            style={{
              width: `${pulseProps.size}px`,
              height: '1px',
              backgroundColor: 'white',
              position: 'absolute',
              left: `-${pulseProps.size/2}px`,
              top: '-0.5px',
              boxShadow: `0 0 ${pulseProps.glow} white`
            }}
          />
          {/* Vertical line */}
          <div 
            style={{
              width: '1px',
              height: `${pulseProps.size}px`,
              backgroundColor: 'white',
              position: 'absolute',
              left: '-0.5px',
              top: `-${pulseProps.size/2}px`,
              boxShadow: `0 0 ${pulseProps.glow} white`
            }}
          />
        </div>
      </div>
    ));
  };

  const renderGrid = () => {
    switch (variant) {
      case 'minimal': return renderMinimalGrid();
      case 'detailed': return renderDetailedGrid();
      default: return renderCornerOnlyGrid();
    }
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {renderGrid()}
      {renderPulses()}
    </div>
  );
};

// Export a pre-configured version for common use cases
export const HeroBackgroundGrid = () => (
  <BackgroundGrid
    className="absolute inset-0 z-0"
    opacity={0.4}
    showPulses={true}
    pulseIntensity="normal"
    gridSize="medium"
    variant="corner-only"
  />
);

export const SectionBackgroundGrid = () => (
  <BackgroundGrid
    className="absolute inset-0 z-0"
    opacity={0.2}
    showPulses={true}
    pulseIntensity="subtle"
    gridSize="large"
    variant="minimal"
  />
);
