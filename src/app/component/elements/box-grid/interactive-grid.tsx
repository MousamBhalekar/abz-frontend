"use client";
import React from 'react';

interface GridBoxProps {
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
}

interface InteractiveGridProps {
  className?: string;
  pulseColor?: string;
  borderColor?: string;
  showPulses?: boolean;
  animationSpeed?: 'slow' | 'normal' | 'fast';
  rows?: number;
  cols?: number;
  children?: React.ReactNode;
  onBoxClick?: (row: number, col: number) => void;
  boxes?: Array<{
    row: number;
    col: number;
    content: React.ReactNode;
    className?: string;
  }>;
}

const GridBox: React.FC<GridBoxProps & { onClick?: () => void }> = ({ 
  children, 
  className = "", 
  hover = true, 
  onClick 
}) => (
  <div 
    className={`
      relative border border-[#2C465D] bg-transparent 
      ${hover ? 'hover:bg-white/5 hover:border-[#6495ED]/50 transition-all duration-300' : ''}
      ${onClick ? 'cursor-pointer' : ''}
      ${className}
    `}
    onClick={onClick}
  >
    {children && (
      <div className="absolute inset-0 p-4 flex items-center justify-center">
        {children}
      </div>
    )}
  </div>
);

export const InteractiveGrid: React.FC<InteractiveGridProps> = ({
  className = "",
  pulseColor = "white",
  borderColor = "#2C465D",
  showPulses = true,
  animationSpeed = 'normal',
  rows = 3,
  cols = 3,
  children,
  onBoxClick,
  boxes = []
}) => {
  const getAnimationDuration = () => {
    switch (animationSpeed) {
      case 'slow': return '3s';
      case 'fast': return '1s';
      default: return '2s';
    }
  };

  const renderPulses = () => {
    if (!showPulses) return null;

    const pulses: React.ReactElement[] = [];
    // Generate pulses at corner intersections
    const positions = [
      { row: 0, col: 0, delay: '0s' },
      { row: 0, col: cols, delay: '0.5s' },
      { row: rows, col: 0, delay: '1s' },
      { row: rows, col: cols, delay: '1.5s' }
    ];

    positions.forEach(({ row, col, delay }, index) => {
      pulses.push(
        <div
          key={`pulse-${index}`}
          className="absolute z-20 pointer-events-none"
          style={{
            left: `${(col / cols) * 100}%`,
            top: `${(row / rows) * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="animate-pulse"
            style={{ 
              animationDuration: getAnimationDuration(),
              animationDelay: delay
            }}
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
                boxShadow: `0 0 8px ${pulseColor}`
              }}
              className="animate-pulse"
            />
          </div>
        </div>
      );
    });

    return pulses;
  };

  const getBoxContent = (row: number, col: number) => {
    const box = boxes.find(b => b.row === row && b.col === col);
    return box ? box.content : null;
  };

  const getBoxClassName = (row: number, col: number) => {
    const box = boxes.find(b => b.row === row && b.col === col);
    return box ? box.className || "" : "";
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Grid Container */}
      <div 
        className="grid w-full h-full gap-0 relative z-0"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {Array.from({ length: rows * cols }, (_, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          return (
            <GridBox
              key={`${row}-${col}`}
              className={getBoxClassName(row, col)}
              onClick={onBoxClick ? () => onBoxClick(row, col) : undefined}
            >
              {getBoxContent(row, col)}
            </GridBox>
          );
        })}
      </div>

      {/* Pulse Points */}
      {renderPulses()}
      
      {/* Additional content layer */}
      {children && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
};

// Grid with predefined sections
export const SectionGrid: React.FC<{
  className?: string;
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
  bottomLeft?: React.ReactNode;
  bottomRight?: React.ReactNode;
  center?: React.ReactNode;
  showPulses?: boolean;
}> = ({
  className = "",
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  center,
  showPulses = true
}) => {
  return (
    <InteractiveGrid
      className={className}
      rows={3}
      cols={3}
      showPulses={showPulses}
      boxes={[
        ...(topLeft ? [{ row: 0, col: 0, content: topLeft }] : []),
        ...(topRight ? [{ row: 0, col: 2, content: topRight }] : []),
        ...(bottomLeft ? [{ row: 2, col: 0, content: bottomLeft }] : []),
        ...(bottomRight ? [{ row: 2, col: 2, content: bottomRight }] : []),
        ...(center ? [{ row: 1, col: 1, content: center }] : []),
      ]}
    />
  );
};

// Hero grid with content areas
export const HeroGrid: React.FC<{
  className?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  showPulses?: boolean;
}> = ({
  className = "",
  leftContent,
  rightContent,
  centerContent,
  showPulses = true
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Background Grid */}
      <InteractiveGrid
        className="absolute inset-0"
        rows={2}
        cols={2}
        showPulses={showPulses}
      />
      
      {/* Content Areas */}
      <div className="relative z-10 w-full h-full grid grid-cols-2 gap-8 p-8">
        {/* Left Content */}
        {leftContent && (
          <div className="flex items-center justify-center">
            {leftContent}
          </div>
        )}
        
        {/* Right Content */}
        {rightContent && (
          <div className="flex items-center justify-center">
            {rightContent}
          </div>
        )}
      </div>
      
      {/* Center Content (overlays the grid) */}
      {centerContent && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">
            {centerContent}
          </div>
        </div>
      )}
    </div>
  );
};
