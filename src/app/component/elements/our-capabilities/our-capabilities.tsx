"use client";
import React from "react";

type OurCapabilitiesProps = {
  title: string;
  items: string[];
  rightContent?: React.ReactNode; // e.g., image, illustration, etc.
};

export const OurCapabilities: React.FC<OurCapabilitiesProps> = ({
  title,
  items,
  rightContent,
}) => {
  return (
    <div className="py-[75px] px-[75px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-700"
              >
                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content (optional) */}
        <div className="flex justify-center">{rightContent}</div>
      </div>
    </div>
  );
};
