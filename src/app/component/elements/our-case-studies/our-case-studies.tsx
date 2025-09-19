"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../../atoms/button";
import { Icons } from "@/utils/icons";

type OurCaseStudyProps = {
  title: string;
};

export const OurCaseStudy: React.FC<OurCaseStudyProps> = ({
  title,
}) => {
  return (
    <div className="flex items-center justify-center relative bg-gradient-to-t from-transparent via-transparent to-[#000]">
      <div className="py-8 sm:py-12 md:py-16 lg:py-[75px] container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-left">{title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mt-6 sm:mt-8 lg:mt-10">
          <div className="group border border-[#2C465D] hover:border-[#6495ED] transition-all duration-500 hover:shadow-2xl hover:shadow-[#6495ED]/20  cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-[#111111] to-[#000000]">
            <div className="relative overflow-hidden">
              <Image src={'/assets/case-study-1.png'} width={500} height={500} alt="case-study-1" className="w-full h-[250px] sm:h-[300px] lg:h-[381px] object-cover  transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 bg-[#6495ED]/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <svg className="w-4 h-4 text-[#6495ED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
            <div className="p-4 sm:p-5 relative">
              <div className="flex items-center justify-between w-full">
                <Image src={'/assets/quantum.png'} width={120} height={68} alt="case-study-1" className="object-cover w-20 sm:w-24 lg:w-[120px] group-hover:brightness-110 transition-all duration-300"/>
                <span className="text-[#6495ED] text-sm sm:text-base lg:text-xl font-medium px-3 py-1 rounded-full">Canada, UK</span>
              </div>
              <p className="text-sm sm:text-base lg:text-xl text-white mt-4 sm:mt-6 lg:mt-8 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">In Spain, electricity supply is provided by oligopolistic companies, so the app analyzes the electricity market to recommend each client the most cost-effective tariff as a personal advisor.</p>
              <div className="flex items-center justify-between mt-4 sm:mt-5 lg:mt-6">
                <Button variant="none" className="justify-between group-hover:bg-[#6495ED]/10 group-hover:border-[#6495ED]/30 transition-all duration-300" icon={<Icons.ArrowRightTop className="text-white group-hover:text-[#6495ED] transition-colors duration-300" />}>Case Study</Button>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <div className="w-2 h-2 bg-[#6495ED] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[#6495ED]/60 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-[#6495ED]/30 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="group border border-[#2C465D] hover:border-[#6495ED] transition-all duration-500 hover:shadow-2xl hover:shadow-[#6495ED]/20  cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-[#111111] to-[#000000]">
            <div className="relative overflow-hidden">
              <Image src={'/assets/case-study-2.png'} width={500} height={500} alt="case-study-2" className="w-full h-[250px] sm:h-[300px] lg:h-[381px] object-cover transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 bg-[#6495ED]/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <svg className="w-4 h-4 text-[#6495ED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
            <div className="p-4 sm:p-5 relative">
              <div className="flex items-center justify-between w-full">
                <Image src={'/assets/quantum.png'} width={120} height={68} alt="case-study-2" className="object-cover w-20 sm:w-24 lg:w-[120px] group-hover:brightness-110 transition-all duration-300"/>
                <span className="text-[#6495ED] text-sm sm:text-base lg:text-xl font-medium px-3 py-1 rounded-full ">Canada, UK</span>
              </div>
              <p className="text-sm sm:text-base lg:text-xl text-white mt-4 sm:mt-6 lg:mt-8 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">In Spain, electricity supply is provided by oligopolistic companies, so the app analyzes the electricity market to recommend each client the most cost-effective tariff as a personal advisor.</p>
              <div className="flex items-center justify-between mt-4 sm:mt-5 lg:mt-6">
                <Button variant="none" className="justify-between group-hover:bg-[#6495ED]/10 group-hover:border-[#6495ED]/30 transition-all duration-300" icon={<Icons.ArrowRightTop className="text-white group-hover:text-[#6495ED] transition-colors duration-300" />}>Case Study</Button>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <div className="w-2 h-2 bg-[#6495ED] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[#6495ED]/60 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-[#6495ED]/30 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="object-cover absolute left-0 -bottom-40">
        <div className="relative">
          <Image src={'/assets/filler-1.png'} width={180} height={180} alt="case-study-1" className=""/>
          <div className="absolute inset-0 mix-blend-luminosity"></div>
        </div>
      </div> */}
    </div>
  );
};
