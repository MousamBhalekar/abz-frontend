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
      <div className="py-[75px] container">
        <h2 className="text-5xl">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mt-10 bg-[url('/assets/industry-bg.png')] bg-cover p-10">
          <div className="flex flex-col items-center">
            <Image src={'/assets/ind-2.png'} width={1080} height={2380} className="w-auto h-28 object-cover" alt="icon"/>
            <p className="text-2xl text-white mt-5">Banking & Finance</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={'/assets/ind-1.png'} width={1080} height={2380} className="w-auto h-28 object-cover" alt="icon"/>
            <p className="text-2xl text-white mt-5">Sports Analytics</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={'/assets/ind-3.png'} width={1080} height={2380} className="w-auto h-28 object-cover" alt="icon"/>
            <p className="text-2xl text-white mt-5">Automotive</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={'/assets/ind-4.png'} width={1080} height={2380} className="w-auto h-28 object-cover" alt="icon"/>
            <p className="text-2xl text-white mt-5">Real State</p>
          </div>
        </div>
      </div>
    </div>
  );
};
