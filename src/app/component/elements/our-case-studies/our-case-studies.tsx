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
    <div className="flex items-center justify-center relative">
      <div className="py-[75px] container">
        <h2 className="text-5xl">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
          <div className="border border-[#2C465D] ">
            <Image src={'/assets/case-study-1.png'} width={500} height={500} alt="case-study-1" className="w-full h-[381px] object-cover"/>
            <div className="p-5">
              <div className="flex items-center justify-between w-full ">
                <Image src={'/assets/quantum.png'} width={120} height={68} alt="case-study-1" className="object-cover"/>
                <p className="text-white text-xl">Canada, UK</p>
              </div>
              <p className="text-xl text-white mt-8">In Spain, electricity supply is provided by oligopolistic companies, so the app analyzes the electricity market to recommend each client the most cost-effective tariff as a personal advisor.</p>
              <Button variant="none" className="justify-between mt-6" icon={<Icons.ArrowRightTop className="text-white" />}>Case Study</Button>
            </div>
          </div>
          <div className="border border-[#2C465D] ">
            <Image src={'/assets/case-study-2.png'} width={500} height={500} alt="case-study-1" className="w-full h-[381px] object-cover"/>
            <div className="p-5">
              <div className="flex items-center justify-between w-full ">
                <Image src={'/assets/quantum.png'} width={120} height={68} alt="case-study-1" className="object-cover"/>
                <p className="text-white text-xl">Canada, UK</p>
              </div>
              <p className="text-xl text-white mt-8">In Spain, electricity supply is provided by oligopolistic companies, so the app analyzes the electricity market to recommend each client the most cost-effective tariff as a personal advisor.</p>
              <Button variant="none" className="justify-between mt-6" icon={<Icons.ArrowRightTop className="text-white" />}>Case Study</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="object-cover absolute left-0 -bottom-40">
        <div className="relative">
          <Image src={'/assets/filler-1.png'} width={180} height={180} alt="case-study-1" className=""/>
          <div className="absolute inset-0 mix-blend-luminosity"></div>
        </div>
      </div>
    </div>
  );
};
