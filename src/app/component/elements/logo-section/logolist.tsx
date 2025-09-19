"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type LogoListSectionProps = {
  subtitle: string;
  logos: { src: string; alt?: string; name?: string }[];
};

export const LogoListSection: React.FC<LogoListSectionProps> = ({
  subtitle,
  logos,
}) => {
  const getRandomLogo = () => logos[Math.floor(Math.random() * logos.length)];

  const [visibleLogos, setVisibleLogos] = useState([
    getRandomLogo(),
    getRandomLogo(),
    getRandomLogo(),
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % 3));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const blurTimeout = setTimeout(() => {
      setVisibleLogos((prev) => {
        const updated = [...prev];
        updated[activeIndex] = getRandomLogo();
        return updated;
      });
    }, 1000);

    return () => clearTimeout(blurTimeout);
  }, [activeIndex]);

  const gridItems = [
    null,
    logos[0],
    logos[1],
    null,
    logos[2],
    logos[0],
    logos[1],
    null,
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-black relative overflow-hidden">
      <div className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-[75px] container">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-[20px] px-4 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Mobile/Tablet: Grid layout with static logos */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square border border-[#333333] hover:border-[#6495ED]/50 transition-all duration-500 cursor-pointer bg-[#0a0a0a] hover:bg-[#111111] rounded-lg overflow-hidden"
              >
                {item ? (
                  <div className="flex items-center justify-center h-full p-4">
                    <Image
                      src={item.src}
                      alt={item.alt || item.name || "Company logo"}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain filter brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-300"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6495ED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[#6495ED] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="relative">
                      <div className="w-8 h-8 flex items-center justify-center text-[#333333] group-hover:text-[#6495ED] transition-colors duration-300">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>

                      {/* Animated ring on hover */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#6495ED] opacity-0 group-hover:opacity-30 scale-50 group-hover:scale-100 transition-all duration-500"></div>
                    </div>
                  </div>
                )}

                {/* Subtle glow effect */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(100, 149, 237, 0.1) 0%, transparent 70%)",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Original shuffling design with grid layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-0 max-w-4xl mx-auto">
            {visibleLogos.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="group relative w-full h-[200px] flex items-center p-[10px_25px] justify-center border border-white hover:border-[#6495ED] transition-all duration-500 cursor-pointer touch-feedback"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6495ED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-[#6495ED] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-[#6495ED] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-[#6495ED] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#6495ED] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 transform scale-0 group-hover:scale-100"></div>

                <div
                  className={`transition-all duration-700 flex items-center justify-center ease-in-out relative z-10 ${
                    index === activeIndex
                      ? "blur-sm opacity-70 scale-95"
                      : "blur-0 opacity-100 group-hover:scale-110"
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt || `Logo ${index + 1}`}
                    width={100}
                    height={50}
                    className="w-[150px] h-[50px] object-contain group-hover:brightness-110 transition-all duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZGRkIi8+"
                  />
                </div>

                {/* Loading indicator for active logo */}
                {index === activeIndex && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-[#6495ED] rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-[#6495ED] rounded-full animate-pulse delay-100"></div>
                      <div className="w-1 h-1 bg-[#6495ED] rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-[#666666] text-xs sm:text-sm">
            Trusted by innovative companies worldwide
          </p>
        </div>
      </div>
    </div>
  );
};
