"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../../atoms/button";
import { Icons } from "@/utils/icons";

type IndustriesWeServeProps = {
  title: string;
};

export const IndustriesWeServe: React.FC<IndustriesWeServeProps> = ({
  title,
}) => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="py-8 sm:py-12 md:py-16 lg:py-[75px] container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-left">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center mt-6 sm:mt-8 lg:mt-10 bg-[url('/assets/industry-bg.png')] bg-cover p-4 sm:p-6 lg:p-10 rounded-2xl relative overflow-hidden">
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6495ED]/5 via-transparent to-[#6495ED]/5 animate-pulse"></div>
          
          <div className="group relative z-10 flex flex-col items-center p-4 sm:p-6 rounded-xl hover:bg-[#6495ED]/10 transition-all duration-500 cursor-pointer backdrop-blur-sm border border-transparent hover:border-[#6495ED]/30">
            <div className="relative">
              <div className="absolute inset-0 bg-[#6495ED]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image src={'/assets/ind-2.png'} width={1080} height={2380} className="w-auto h-20 sm:h-24 lg:h-28 object-cover  group-hover:brightness-110 transition-all duration-500 relative z-10" alt="Banking & Finance icon"/>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mt-3 sm:mt-4 lg:mt-5 text-center group-hover:text-[#6495ED] transition-colors duration-300 font-medium">Banking & Finance</p>
            <div className="w-0 h-0.5 bg-[#6495ED] group-hover:w-full transition-all duration-500 mt-2"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#6495ED] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
          </div>
          
          <div className="group relative z-10 flex flex-col items-center p-4 sm:p-6 rounded-xl hover:bg-[#6495ED]/10 transition-all duration-500 cursor-pointer backdrop-blur-sm border border-transparent hover:border-[#6495ED]/30">
            <div className="relative">
              <div className="absolute inset-0 bg-[#6495ED]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image src={'/assets/ind-1.png'} width={1080} height={2380} className="w-auto h-20 sm:h-24 lg:h-28 object-cover  group-hover:brightness-110 transition-all duration-500 relative z-10" alt="Sports Analytics icon"/>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mt-3 sm:mt-4 lg:mt-5 text-center group-hover:text-[#6495ED] transition-colors duration-300 font-medium">Sports Analytics</p>
            <div className="w-0 h-0.5 bg-[#6495ED] group-hover:w-full transition-all duration-500 mt-2"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#6495ED] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
          </div>
          
          <div className="group relative z-10 flex flex-col items-center p-4 sm:p-6 rounded-xl hover:bg-[#6495ED]/10 transition-all duration-500 cursor-pointer backdrop-blur-sm border border-transparent hover:border-[#6495ED]/30">
            <div className="relative">
              <div className="absolute inset-0 bg-[#6495ED]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image src={'/assets/ind-3.png'} width={1080} height={2380} className="w-auto h-20 sm:h-24 lg:h-28 object-cover  group-hover:brightness-110 transition-all duration-500 relative z-10" alt="Automotive icon"/>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mt-3 sm:mt-4 lg:mt-5 text-center group-hover:text-[#6495ED] transition-colors duration-300 font-medium">Automotive</p>
            <div className="w-0 h-0.5 bg-[#6495ED] group-hover:w-full transition-all duration-500 mt-2"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#6495ED] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
          </div>
          
          <div className="group relative z-10 flex flex-col items-center p-4 sm:p-6 rounded-xl hover:bg-[#6495ED]/10 transition-all duration-500 cursor-pointer backdrop-blur-sm border border-transparent hover:border-[#6495ED]/30">
            <div className="relative">
              <div className="absolute inset-0 bg-[#6495ED]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image src={'/assets/ind-4.png'} width={1080} height={2380} className="w-auto h-20 sm:h-24 lg:h-28 object-cover  group-hover:brightness-110 transition-all duration-500 relative z-10" alt="Real Estate icon"/>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mt-3 sm:mt-4 lg:mt-5 text-center group-hover:text-[#6495ED] transition-colors duration-300 font-medium">Real Estate</p>
            <div className="w-0 h-0.5 bg-[#6495ED] group-hover:w-full transition-all duration-500 mt-2"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#6495ED] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
