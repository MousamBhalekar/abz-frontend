import Image from "next/image";

export const BGVideo = () => {
  return (
    <div className="fixed inset-0 w-full h-full  m-auto">
      <div className="grid grid-cols-16 border-r border-[#ffffff0f] absolute px-[75px] left-0 right-0 h-full w-full z-[10]">
        <div className="border-l border-[#ffffff0f] col-span-4"></div>
        <div className="border-l border-[#ffffff0f] col-span-4"></div>
        <div className="border-l border-[#ffffff0f] col-span-4"></div>
        <div className="border-l border-r border-[#ffffff0f] col-span-4"></div>
      </div>
      <div
        className="
                    fixed inset-0 w-full h-full 
                    before:content-[''] before:absolute before:inset-0 
                    before:bg-[url('/assets/crt.gif')] before:bg-size-[256px]
                    before:pointer-events-none before:z-10 before:mix-blend-multiply  
                    before:backdrop-blur-[10px]     
                "
      >
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="w-full h-full object-cover"
          playsInline={true}
          src="https://l4wlsi8vxy8hre4v.public.blob.vercel-storage.com/video/glass-animation-5-f0gPcjmKFIV3ot5MGOdNy2r4QHBoXt.mp4"
        ></video>
      </div>
    </div>
  );
};
