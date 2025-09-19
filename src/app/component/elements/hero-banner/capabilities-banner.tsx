import React from "react";
import { Button } from "../../atoms/button";
import { SVGReplicaGrid } from "../box-grid/svg-replica-grid";
import { HeroGrid, InteractiveGrid } from "../box-grid/interactive-grid";
import Image from "next/image";
import { Icons } from "@/utils/icons";

function CapabilitiesBanner({
  title,
  description,
  imageSrc,
  btnText,
}: {
  title: string;
  description: string;
  imageSrc: string;
  btnText: string;
}) {
  return (
    <div className="flex bg-black">
      <div className="container relative h-[93vh]">
        <SVGReplicaGrid
          className="absolute inset-0"
          showPulses={true}
          pulseColor="white"
          borderColor="#2C465D"
          animationSpeed="normal"
        >
          <div className="flex items-center justify-between h-full">
            <div className="text-left text-white w-1/2 pl-36">
              <div className="relative">
                <h1 className={`text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[70px] text-[#fff] relative z-10 transition-all duration-1000`}>
                Transforming <br/> Fintech Through AI
                </h1>
                <p className={`text-lg text-gray-300 mt-5 w-2/3`}>{description}</p>
                <Button 
                  variant="outline" 
                  className="group justify-between mt-10 mx-auto lg:mx-0 hover:bg-[#6495ED]/10 hover:border-[#6495ED] hover:shadow-lg hover:shadow-[#6495ED]/20 transition-all duration-300 hover:scale-105" 
                  icon={<Icons.ArrowRightTop className="text-white group-hover:text-[#6495ED] group-hover:rotate-12 transition-all duration-300" />}
                >
                  {btnText}
                </Button>
              </div>
            </div>
            <div className="w-1/2 ">
              <Image src={'/assets/banner-2.png'} alt="banner" width={5000} height={5000} className="w-5/6 h-auto object-cover"/>
            </div>
          </div>
          {/* <div className="pl-36 h-10 text-2xl pt-5">{`Capabilities > Fintech`}</div> */}
        </SVGReplicaGrid>
      </div>
    </div>
  );
}

export default CapabilitiesBanner;
