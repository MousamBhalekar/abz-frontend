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
      <div className="py-[75px] container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl">{title}</h2>
            <p className="md:w-2/3 my-4 text-2xl">{desc}</p>
            <ul className="space-y-4 mt-5">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center cursor-pointer w-fit gap-2 text-4xl duration-200 transition-all
                    ${activeIdx === idx ? "text-white font-bold" : "text-gray-700"}
                  `}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content (optional) */}
          <div className="flex justify-center">{rightContent}</div>
        </div>
      </div>
    </div>
  );
};
