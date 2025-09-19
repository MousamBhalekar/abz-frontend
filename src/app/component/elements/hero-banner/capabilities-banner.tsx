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
  // Animation styles
  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .delay-200 {
      animation-delay: 0.2s;
    }
    
    .delay-300 {
      animation-delay: 0.3s;
    }
    
    .delay-400 {
      animation-delay: 0.4s;
    }
  `;
  return (
    <div className="flex bg-black">
      <style jsx>{animationStyles}</style>
      <div className="container relative h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[93vh]">
        <SVGReplicaGrid
          className="absolute inset-0"
          showPulses={true}
          pulseColor="white"
          borderColor="#2C465D"
          animationSpeed="normal"
        >
          {/* Mobile Layout (stacked) */}
          <div className="flex flex-col lg:hidden items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center mt-16 md:mt-0">
            <div className="text-white max-w-2xl">
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-[28px] sm:text-[36px] md:text-[44px] leading-[32px] sm:leading-[40px] md:leading-[48px] text-white relative z-10 transition-all duration-1000 animate-fade-in-up">
                  Transforming <br className="sm:hidden" />
                  <span className="sm:inline">Fintech Through AI</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 mt-4 sm:mt-5 animate-fade-in-up delay-200">
                  {description}
                </p>
                <div className="mt-6 sm:mt-8 animate-fade-in-up delay-300">
                  <Button 
                    variant="outline" 
                    className="group justify-between hover:bg-[#6495ED]/10 hover:border-[#6495ED] transition-all duration-300 hidden md:block" 
                    icon={<Icons.ArrowRightTop className="text-white group-hover:text-[#6495ED] group-hover:rotate-12 transition-all duration-300" />}
                  >
                    {btnText}
                  </Button>
                </div>
              </div>
              
              {/* Mobile Image */}
              <div className="mt-6 sm:mt-8 animate-fade-in-up delay-400">
                <Image 
                  src={'/assets/banner-2.png'} 
                  alt="banner" 
                  width={5000} 
                  height={5000} 
                  className="w-full max-w-md mx-auto h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout (side by side) */}
          <div className="hidden lg:flex items-center justify-between h-full">
            <div className="text-left text-white w-1/2 pl-8 xl:pl-36">
              <div className="relative">
                <h1 className="text-[32px] xl:text-[60px] lg:text-[50px] leading-[38px] xl:leading-[70px] lg:leading-[58px] text-white relative z-10 transition-all duration-1000 animate-fade-in-up">
                  Transforming <br/> Fintech Through AI
                </h1>
                <p className="text-lg xl:text-xl text-gray-300 mt-5 w-2/3 animate-fade-in-up delay-200">
                  {description}
                </p>
                <div className="animate-fade-in-up delay-300">
                  <Button 
                    variant="outline" 
                    className="group justify-between mt-10 hover:bg-[#6495ED]/10 hover:border-[#6495ED] transition-all duration-300 " 
                    icon={<Icons.ArrowRightTop className="text-white group-hover:text-[#6495ED] group-hover:rotate-12 transition-all duration-300" />}
                  >
                    {btnText}
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-1/2 animate-fade-in-up delay-400">
              <Image 
                src={'/assets/banner-2.png'} 
                alt="banner" 
                width={5000} 
                height={5000} 
                className="w-5/6 h-auto object-cover"
              />
            </div>
          </div>

          {/* Breadcrumb (optional) */}
          {/* <div className="hidden lg:block pl-8 xl:pl-36 h-10 text-xl xl:text-2xl pt-5 text-white/60">
            {`Capabilities > Fintech`}
          </div> */}
        </SVGReplicaGrid>
      </div>
    </div>
  );
}

export default CapabilitiesBanner;
