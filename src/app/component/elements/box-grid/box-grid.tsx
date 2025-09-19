"use client";
import React from 'react';

interface BoxGridProps {
  rows?: number;
  cols?: number;
  className?: string;
  showPulses?: boolean;
  pulseColor?: string;
  borderColor?: string;
}

export const BoxGrid: React.FC<BoxGridProps> = ({
  rows = 3,
  cols = 3,
  className = "",
  showPulses = true,
  pulseColor = "white",
  borderColor = "#2C465D"
}) => {
  const generateGridItems = () => {
    const items = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        items.push(
          <div
            key={`${row}-${col}`}
            className="relative border border-[var(--border-color)] bg-transparent"
            style={{ '--border-color': borderColor } as React.CSSProperties}
          />
        );
      }
    }
    return items;
  };

  const generatePulsePoints = () => {
    if (!showPulses) return null;
    
    const pulses = [];
    // Generate pulses at intersections (including outer edges)
    for (let row = 0; row <= rows; row++) {
      for (let col = 0; col <= cols; col++) {
        // Skip center points and add only corner intersections for cleaner look
        if ((row === 0 || row === rows) && (col === 0 || col === cols)) {
          pulses.push(
            <div
              key={`pulse-${row}-${col}`}
              className="absolute z-10 pointer-events-none"
              style={{
                left: `${(col / cols) * 100}%`,
                top: `${(row / rows) * 100}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Horizontal line */}
              <div 
                className="absolute animate-pulse"
                style={{
                  width: '20px',
                  height: '2px',
                  backgroundColor: pulseColor,
                  left: '-10px',
                  top: '-1px'
                }}
              />
              {/* Vertical line */}
              <div 
                className="absolute animate-pulse"
                style={{
                  width: '2px',
                  height: '20px',
                  backgroundColor: pulseColor,
                  left: '-1px',
                  top: '-10px',
                  animationDelay: '0.5s'
                }}
              />
            </div>
          );
        }
      }
    }
    return pulses;
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Grid Container */}
      <div 
        className="grid w-full h-full gap-0"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {generateGridItems()}
      </div>
      
      {/* Pulse Points */}
      {generatePulsePoints()}
    </div>
  );
};

// Enhanced version with more customization
export const EnhancedBoxGrid: React.FC<BoxGridProps & {
  pulseSize?: number;
  animationDuration?: number;
  glowEffect?: boolean;
}> = ({
  rows = 3,
  cols = 3,
  className = "",
  showPulses = true,
  pulseColor = "white",
  borderColor = "#2C465D",
  pulseSize = 20,
  animationDuration = 2,
  glowEffect = false
}) => {
  const generateAdvancedPulses = () => {
    if (!showPulses) return null;
    
    const pulses = [];
    // Generate pulses at all intersections
    for (let row = 0; row <= rows; row++) {
      for (let col = 0; col <= cols; col++) {
        // Only show pulses at corner intersections for the original design
        if ((row === 0 || row === rows) && (col === 0 || col === cols)) {
          pulses.push(
            <div
              key={`enhanced-pulse-${row}-${col}`}
              className="absolute z-10 pointer-events-none"
              style={{
                left: `${(col / cols) * 100}%`,
                top: `${(row / rows) * 100}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Animated pulse with glow effect */}
              <div 
                className={`relative ${glowEffect ? 'animate-ping' : 'animate-pulse'}`}
                style={{
                  animationDuration: `${animationDuration}s`
                }}
              >
                {/* Horizontal line */}
                <div 
                  className={glowEffect ? 'shadow-lg' : ''}
                  style={{
                    width: `${pulseSize}px`,
                    height: '2px',
                    backgroundColor: pulseColor,
                    position: 'absolute',
                    left: `-${pulseSize/2}px`,
                    top: '-1px',
                    boxShadow: glowEffect ? `0 0 10px ${pulseColor}` : 'none'
                  }}
                />
                {/* Vertical line */}
                <div 
                  className={glowEffect ? 'shadow-lg' : ''}
                  style={{
                    width: '2px',
                    height: `${pulseSize}px`,
                    backgroundColor: pulseColor,
                    position: 'absolute',
                    left: '-1px',
                    top: `-${pulseSize/2}px`,
                    animationDelay: '0.5s',
                    boxShadow: glowEffect ? `0 0 10px ${pulseColor}` : 'none'
                  }}
                />
              </div>
            </div>
          );
        }
      }
    }
    return pulses;
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Grid Container */}
      <div 
        className="grid w-full h-full gap-0"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {Array.from({ length: rows * cols }, (_, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          return (
            <div
              key={`${row}-${col}`}
              className="relative bg-transparent transition-all duration-300 hover:bg-white/5"
              style={{ 
                borderColor: borderColor,
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            />
          );
        })}
      </div>
      
      {/* Enhanced Pulse Points */}
      {generateAdvancedPulses()}
    </div>
  );
};
