"use client";
import React from 'react';

interface SVGReplicaGridProps {
  className?: string;
  pulseColor?: string;
  borderColor?: string;
  showPulses?: boolean;
  animationSpeed?: 'slow' | 'normal' | 'fast';
  children?: React.ReactNode;
}

export const SVGReplicaGrid: React.FC<SVGReplicaGridProps> = ({
  className = "",
  pulseColor = "white",
  borderColor = "#2C465D",
  showPulses = true,
  animationSpeed = 'normal',
  children
}) => {
  const getAnimationDuration = () => {
    switch (animationSpeed) {
      case 'slow': return '3s';
      case 'fast': return '1s';
      default: return '2s';
    }
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Background grid layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Lines */}
        <div 
          className="absolute top-0 bottom-0 w-px"
          style={{ 
            left: '0.042%', // 0.75/1800
            backgroundColor: borderColor 
          }}
        />
        <div 
          className="absolute top-0 bottom-0 w-px"
          style={{ 
            left: '5.57%', // 100.25/1800
            backgroundColor: borderColor 
          }}
        />
        <div 
          className="absolute top-0 bottom-0 w-px"
          style={{ 
            left: '94.42%', // 1699.5/1800
            backgroundColor: borderColor 
          }}
        />
        <div 
          className="absolute top-0 bottom-0 w-px"
          style={{ 
            left: '99.97%', // 1799.5/1800
            backgroundColor: borderColor 
          }}
        />

        {/* Horizontal Lines */}
        <div 
          className="absolute left-0 right-0 h-px"
          style={{ 
            top: '0.07%', // 0.5/690
            backgroundColor: borderColor 
          }}
        />
        <div 
          className="absolute left-0 right-0 h-px"
          style={{ 
            top: '13.12%', // 90.5/690
            backgroundColor: borderColor 
          }}
        />
        <div 
          className="absolute left-0 right-0 h-px"
          style={{ 
            top: '86.81%', // 599.5/690
            backgroundColor: borderColor 
          }}
        />
        <div 
          className="absolute left-0 right-0 h-px"
          style={{ 
            top: '99.93%', // 689.5/690
            backgroundColor: borderColor 
          }}
        />

        {/* Pulse Points at Intersections */}
        {showPulses && (
          <>
            {/* Top-left intersection (100, 90) */}
            <div 
              className="absolute z-20 pointer-events-none"
              style={{
                left: '5.57%',
                top: '13.12%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div 
                className="animate-pulse"
                style={{ animationDuration: getAnimationDuration() }}
              >
                {/* Horizontal line */}
                <div 
                  style={{
                    width: '20px',
                    height: '2px',
                    backgroundColor: pulseColor,
                    position: 'absolute',
                    left: '-10px',
                    top: '-1px',
                    boxShadow: `0 0 8px ${pulseColor}`
                  }}
                />
                {/* Vertical line */}
                <div 
                  style={{
                    width: '2px',
                    height: '20px',
                    backgroundColor: pulseColor,
                    position: 'absolute',
                    left: '-1px',
                    top: '-10px',
                    boxShadow: `0 0 8px ${pulseColor}`,
                    animationDelay: '0.5s'
                  }}
                  className="animate-pulse"
                />
              </div>
            </div>

            {/* Top-right intersection (1699, 90) */}
            <div 
              className="absolute z-20 pointer-events-none"
              style={{
                left: '94.42%',
                top: '13.12%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div 
                className="animate-pulse"
                style={{ animationDuration: getAnimationDuration(), animationDelay: '0.3s' }}
              >
                {/* Horizontal line */}
                <div 
                  style={{
                    width: '20px',
                    height: '2px',
                    backgroundColor: pulseColor,
                    position: 'absolute',
                    left: '-10px',
                    top: '-1px',
                    boxShadow: `0 0 8px ${pulseColor}`
                  }}
                />
                {/* Vertical line */}
                <div 
                  style={{
                    width: '2px',
                    height: '20px',
                    backgroundColor: pulseColor,
                    position: 'absolute',
                    left: '-1px',
                    top: '-10px',
                    boxShadow: `0 0 8px ${pulseColor}`,
                    animationDelay: '0.8s'
                  }}
                  className="animate-pulse"
                />
              </div>
            </div>

            {/* Bottom-left intersection (100, 599) */}
            <div 
              className="absolute z-20 pointer-events-none"
              style={{
                left: '5.57%',
                top: '86.81%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div 
                className="animate-pulse"
                style={{ animationDuration: getAnimationDuration(), animationDelay: '0.6s' }}
              >
                {/* Horizontal line */}
                <div 
                  style={{
                    width: '20px',
                    height: '2px',
                    backgroundColor: pulseColor,
                    position: 'absolute',
                    left: '-10px',
                    top: '-1px',
                    boxShadow: `0 0 8px ${pulseColor}`
                  }}
                />
                {/* Vertical line */}
                <div 
                  style={{
                    width: '2px',
                    height: '20px',
                    backgroundColor: pulseColor,
                    position: 'absolute',
                    left: '-1px',
                    top: '-10px',
                    boxShadow: `0 0 8px ${pulseColor}`,
                    animationDelay: '1.1s'
                  }}
                  className="animate-pulse"
                />
              </div>
            </div>

            {/* Bottom-right intersection (1699, 599) */}
            <div 
              className="absolute z-20 pointer-events-none"
              style={{
                left: '94.42%',
                top: '86.81%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div 
                className="animate-pulse"
                style={{ animationDuration: getAnimationDuration(), animationDelay: '0.9s' }}
              >
                {/* Horizontal line */}
                <div 
                  style={{
                    width: '20px',
                    height: '2px',
                    backgroundColor: pulseColor,
                    position: 'absolute',
                    left: '-10px',
                    top: '-1px',
                    boxShadow: `0 0 8px ${pulseColor}`
                  }}
                />
                {/* Vertical line */}
                <div 
                  style={{
                    width: '2px',
                    height: '20px',
                    backgroundColor: pulseColor,
                    position: 'absolute',
                    left: '-1px',
                    top: '-10px',
                    boxShadow: `0 0 8px ${pulseColor}`,
                    animationDelay: '1.4s'
                  }}
                  className="animate-pulse"
                />
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Content layer - where children will be rendered */}
      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
};

// Simplified version for easier use
export const SimpleBoxGrid: React.FC<{
  className?: string;
  rows?: number;
  cols?: number;
  showCornerPulses?: boolean;
}> = ({
  className = "",
  rows = 2,
  cols = 2,
  showCornerPulses = true
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Create grid using CSS Grid */}
      <div 
        className="grid w-full h-full gap-0"
        style={{
          gridTemplateColumns: `repeat(${cols + 1}, 1fr)`,
          gridTemplateRows: `repeat(${rows + 1}, 1fr)`,
        }}
      >
        {/* Grid lines */}
        {Array.from({ length: (rows + 1) * (cols + 1) }, (_, index) => {
          const row = Math.floor(index / (cols + 1));
          const col = index % (cols + 1);
          
          return (
            <div
              key={`grid-${row}-${col}`}
              className="relative"
              style={{
                borderRight: col < cols ? '1px solid #2C465D' : 'none',
                borderBottom: row < rows ? '1px solid #2C465D' : 'none',
              }}
            />
          );
        })}
      </div>

      {/* Corner pulses */}
      {showCornerPulses && (
        <>
          {/* Top-left */}
          <div className="absolute top-0 left-0 z-10 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse">
              <div className="w-5 h-0.5 bg-white absolute -left-2.5 -top-0.25 shadow-sm shadow-white/50" />
              <div className="w-0.5 h-5 bg-white absolute -left-0.25 -top-2.5 shadow-sm shadow-white/50" />
            </div>
          </div>
          
          {/* Top-right */}
          <div className="absolute top-0 right-0 z-10 transform translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>
              <div className="w-5 h-0.5 bg-white absolute -left-2.5 -top-0.25 shadow-sm shadow-white/50" />
              <div className="w-0.5 h-5 bg-white absolute -left-0.25 -top-2.5 shadow-sm shadow-white/50" />
            </div>
          </div>
          
          {/* Bottom-left */}
          <div className="absolute bottom-0 left-0 z-10 transform -translate-x-1/2 translate-y-1/2">
            <div className="animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="w-5 h-0.5 bg-white absolute -left-2.5 -top-0.25 shadow-sm shadow-white/50" />
              <div className="w-0.5 h-5 bg-white absolute -left-0.25 -top-2.5 shadow-sm shadow-white/50" />
            </div>
          </div>
          
          {/* Bottom-right */}
          <div className="absolute bottom-0 right-0 z-10 transform translate-x-1/2 translate-y-1/2">
            <div className="animate-pulse" style={{ animationDelay: '1.5s' }}>
              <div className="w-5 h-0.5 bg-white absolute -left-2.5 -top-0.25 shadow-sm shadow-white/50" />
              <div className="w-0.5 h-5 bg-white absolute -left-0.25 -top-2.5 shadow-sm shadow-white/50" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
