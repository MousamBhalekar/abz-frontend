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
    <div className="flex flex-col items-center overflow-hidden justify-center bg-gradient-to-b from-transparent via-transparent to-[#000]">
      <div className="h-full container mt-20">
        <div className="flex gap-4 h-[93vh] pt-10">
          <div className="w-2/5 self-center">
            <h1 className="text-[60px] leading-[70px]  text-[#fff]">
              Responsible <br/>
              Machine <br/>
              Learning <br/>
            </h1>
            <p className="mt-2 text-lg w-2/3 text-[#fff]">{description}</p>
            <Button variant="outline" className="justify-between mt-6" icon={<Icons.ArrowRightTop className="text-white" />}>{btnText}</Button>
          </div>
          <div className="border border-[#ffffff0d] rounded-4xl -mr-56 w-5/6 h-fit self-end p-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={50000}
            height={50000}
            className="object-contain w-fit h-full rounded-3xl border border-[#ffffff0d]"
          />
          </div>
        </div>
      </div>
    </div>
  );
};
