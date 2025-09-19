"use client";
import React, { useState } from "react";

type OurCapabilitiesProps = {
  title: string;
  desc: string;
  items: string[];
  rightContent?: React.ReactNode; // e.g., image, illustration, etc.
};

export const OurCapabilities: React.FC<OurCapabilitiesProps> = ({
  title,
  items,
  rightContent,
  desc,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className="flex items-center justify-center bg-[#000]">
      <div className="py-8 sm:py-12 md:py-16 lg:py-[75px] container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{title}</h2>
            <p className="w-full lg:w-2/3 my-4 text-lg sm:text-xl md:text-2xl">{desc}</p>
            <ul className="space-y-3 sm:space-y-4 mt-5">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative flex items-center cursor-pointer w-fit gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl duration-500 transition-all hover:scale-105 hover:translate-x-2
                    ${activeIdx === idx ? "text-white font-bold" : "text-gray-700 hover:text-gray-400"}
                  `}
                >
                  {/* Animated bullet point */}
                  {/* <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    activeIdx === idx 
                      ? 'bg-[#6495ED] shadow-lg shadow-[#6495ED]/50 animate-pulse scale-125' 
                      : 'bg-gray-700 group-hover:bg-[#6495ED]/50 group-hover:scale-110'
                  }`}></div> */}
                  
                  {/* Text with hover effects */}
                  <span className="relative">
                    {item}
                    {/* Underline animation */}
                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-[#6495ED] transition-all duration-500 ${
                      activeIdx === idx ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></div>
                  </span>
                  
                  {/* Active indicator */}
                  {/* {activeIdx === idx && (
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-[#6495ED] rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-[#6495ED] rounded-full animate-bounce delay-100"></div>
                        <div className="w-1 h-1 bg-[#6495ED] rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  )} */}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content (optional) */}
          <div className="flex justify-center order-1 lg:order-2">{rightContent}</div>
        </div>
      </div>
    </div>
  );
};
