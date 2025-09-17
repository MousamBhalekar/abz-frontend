"use client";
import Image from "next/image";

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
  console.log(Icons, "Icons.ArrowRightTop");
  return (
    <div className="h-full px-[75px]">
      <div className="grid grid-cols-5 gap-4 h-[93vh] items-center py-10">
        <div className="col-span-2 ">
          <div className="w-[460px] ">
            <h1 className="text-[60px] leading-[70px]  text-[#fff] ">
              {title}
            </h1>
            <p className="mt-2 text-lg  text-[#fff]">{description}</p>
            <Button
              variant="outline"
              className="justify-between mt-6"
              icon={<Icons.ArrowRightTop className="text-white" />}
            >
              {btnText}
            </Button>
          </div>
        </div>
        <div className="col-span-3 relative w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
