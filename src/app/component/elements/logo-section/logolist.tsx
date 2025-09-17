"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type LogoListSectionProps = {
  subtitle: string;
  logos: { src: string; alt?: string }[];
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
      setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % 3)); // pick slot
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    // Step 1: blur
    const blurTimeout = setTimeout(() => {
      setVisibleLogos((prev) => {
        const updated = [...prev];
        updated[activeIndex] = getRandomLogo(); // Step 2: replace logo after blur
        return updated;
      });
    }, 1000); // delay swap until 500ms after blur

    return () => clearTimeout(blurTimeout);
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center justify-center  border-t border-[#ffffff3d]">
      <div className="text-center py-[75px] container">
        <p className="text-white text-[20px] mb-[45px]">{subtitle}</p>
        <ul className="flex justify-center  ">
          {visibleLogos.map((logo, index) => (
            <li
              key={`${logo.src}-${index}`}
              className=" w-full max-w-[300px] h-[200px] flex items-center p-[10px_25px] justify-center border border-white"
            >
              <div
                className={`transition-all duration-700 flex items-center justify-center ease-in-out ${
                  index === activeIndex
                    ? "blur-sm opacity-70"
                    : "blur-0 opacity-100"
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt || `Logo ${index + 1}`}
                  width={100}
                  height={50}
                  className="w-[150px] h-[50px] object-contain"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZGRkIi8+"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
