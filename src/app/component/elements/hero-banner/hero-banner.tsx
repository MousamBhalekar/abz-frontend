"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Icons } from "../../../../utils/icons";
import { Button } from "../../atoms/button";

type HeroBannerProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  btnText?: string;
};

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
  imageSrc,
  btnText,
  imageAlt = "Hero banner image",
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleVisibility = () => {
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger visibility after component mounts
    setTimeout(handleVisibility, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden justify-center bg-gradient-to-b from-transparent via-transparent to-[#000] relative">
      <div className="h-full container mt-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 h-auto lg:h-[93vh] pt-10">
          <div className="w-full lg:w-2/5 self-center text-center lg:text-left">
            <div className="relative">
              {/* Animated background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6495ED]/10 via-transparent to-[#6495ED]/10 blur-2xl opacity-0 animate-pulse" style={{
                opacity: isVisible ? 0.3 : 0,
                transition: 'opacity 2s ease-in-out'
              }}></div>
              
              <h1 className={`text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[70px] text-[#fff] relative z-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                <span className="inline-block hover:text-[#6495ED] transition-colors duration-300 cursor-default">Responsible</span> <br className="hidden lg:block"/>
                <span className="inline-block hover:text-[#6495ED] transition-colors duration-300 cursor-default">Machine</span> <br className="hidden lg:block"/>
                <span className="inline-block hover:text-[#6495ED] transition-colors duration-300 cursor-default">Learning</span> <br className="hidden lg:block"/>
              </h1>
            </div>
            
            <p className={`mt-2 text-sm sm:text-base md:text-lg w-full lg:w-2/3 text-[#fff] transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
              {description}
            </p>
            
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Button 
                variant="outline" 
                className="group justify-between mt-6 mx-auto lg:mx-0 hover:bg-[#6495ED]/10 hover:border-[#6495ED] hover:shadow-lg hover:shadow-[#6495ED]/20 transition-all duration-300 hover:scale-105" 
                icon={<Icons.ArrowRightTop className="text-white group-hover:text-[#6495ED] group-hover:rotate-12 transition-all duration-300" />}
              >
                {btnText}
              </Button>
            </div>
          </div>
          
          <div className={`border border-[#ffffff0d] hover:border-[#6495ED]/30 rounded-4xl lg:-mr-56 w-full lg:w-5/6 h-fit self-end p-2 mt-8 lg:mt-0 transition-all duration-1000 delay-700 group cursor-pointer ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={50000}
                height={50000}
                className="object-contain w-fit h-full rounded-3xl border border-[#ffffff0d] transition-transform duration-700"
              />
              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6495ED]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Floating indicators */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#6495ED] rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-[#6495ED]/60 rounded-full animate-bounce delay-100"></div>
                  <div className="w-3 h-3 bg-[#6495ED]/30 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
