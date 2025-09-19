"use client";
import Image from "next/image";
import { Header } from "../component/common/header";
import { Container } from "../component/elements/container/container";
import Footer from "../component/common/footer";
import CapabilitiesBanner from "../component/elements/hero-banner/capabilities-banner";

// Custom Fintech Capability Section Component
const FintechCapabilitySection = ({
  bg,
  title,
  count,
  description,
  codeContent,
  imageContent,
  reverse = false,
  darkBg = false,
}: {
  bg: string;
  title: string;
  description: string;
  count: string;
  codeContent?: string;
  imageContent?: React.ReactNode;
  reverse?: boolean;
  darkBg?: boolean;
}) => {
  return (
    <div className={`py-8 sm:py-12 md:py-16 lg:py-24 ${bg === '#ffffff' ? "bg-white" : "bg-black"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`${
              reverse ? "lg:order-2 lg:col-span-4" : "lg:col-span-4"
            } transform transition-all duration-700 `}
          >
            <p className={`text-lg sm:text-xl mb-3 sm:mb-5 ${bg === '#ffffff' ? "text-[#1A1A1A]" : "text-white"} opacity-80 animate-fade-in-up`}>
              {count}
            </p>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${bg === '#ffffff' ? "text-[#1A1A1A]" : "text-white"} mb-4 sm:mb-6  transition-colors duration-300 animate-fade-in-up delay-100`}>
              {title}
            </h2>
            <p className={`text-base sm:text-lg lg:text-xl ${bg === '#ffffff' ? "text-[#1A1A1A]" : "text-white"} leading-relaxed animate-fade-in-up delay-200`}>
              {description}
            </p>
          </div>

          <div
            className={`${bg === '#ffffff' ? "text-[#1A1A1A]" : "text-white"} ${
              reverse ? "lg:order-1 lg:col-span-8" : "lg:col-span-8"
            } transform transition-all duration-700  animate-fade-in-up delay-300`}
          >
            {imageContent}
          </div>
        </div>
      </div>
    </div>
  );
};


export default function FintechCapabilities() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <style jsx>{customStyles}</style> */}
      <Header />
      <main className="flex-grow">
        <Container>
          {/* Hero Section */}
          <CapabilitiesBanner
            title="Transforming Fintech Through AI"
            description="Rapidly Training & Governing AI by Feeding High Quality Language & Vision Inputs"
            imageSrc="/assets/bannerImage.png"
            btnText="Contact Us"
          />

          {/* Securitization RMBS Section */}
          <FintechCapabilitySection
            bg={'#000'}
            title="Securitization RMBS"
            count="01"
            description="ArtificialBeingz Enables RAG (Retrieval-Augmented Generation) By Adding Vector Indexes Directly Into Your Existing Database. You Control Every Step Of The Process, From Connecting Your Document From JSON To Text By Defining The Chunking Strategy. ArtificialBeingz Just Makes It Easy"
            darkBg={true}
            imageContent={<Image src={'/assets/cap-01.png'} alt={"cap-01"} width={5000} height={5000} className="w-full h-auto object-cover rounded-lg  transition-shadow duration-300" />}
          />

          {/* TMO Section */}
          <FintechCapabilitySection
            bg={'#ffffff'}
            title="TMO"
            count="02"
            description="ArtificialBeingz Enables RAG (Retrieval-Augmented Generation) By Adding Vector Indexes Directly Into Your Existing Database. You Control Every Step Of The Process, From Connecting Your Document From JSON To Text By Defining The Chunking Strategy. ArtificialBeingz Just Makes It Easy"
            imageContent={<Image src={'/assets/cap-02.png'} alt={"cap-02"} width={5000} height={5000} className="w-full h-auto object-cover rounded-lg  transition-shadow duration-300" />}
          />

          {/* DATA Section */}
          <div className="py-8 sm:py-12 md:py-16 lg:py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* First Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
                <div className="lg:col-span-4 space-y-6 sm:space-y-8">
                  {/* Main DATA Section */}
                  <div className="animate-slide-in-left">
                    <p className="text-lg sm:text-xl mb-3 sm:mb-5 text-white opacity-80">03</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4  transition-colors duration-300">
                      DATA
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                      ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database.
                    </p>
                  </div>
                  
                  {/* Data Engineering Subsection */}
                  <div className="animate-slide-in-left delay-200">
                    <p className="text-lg sm:text-xl mb-3 sm:mb-5 text-white opacity-80">a)</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4  transition-colors duration-300">
                      Data Engineering
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                      ArtificialBeingz Enables RAG (Retrieval-Augmented Generation) By Adding Vector Indexes Directly Into Your Existing Database.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-8 p-4 sm:p-6 md:p-8 lg:p-10 animate-slide-in-right delay-300 hidden md:block">
                  <Image 
                    src={'/assets/cap-03.png'} 
                    alt={"cap-03"} 
                    width={5000} 
                    height={5000} 
                    className="w-full h-auto object-cover object-left rounded-lg transition-all duration-300 " 
                  />
                </div>
              </div>
              
              {/* Second Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                <div className="lg:col-span-4 space-y-6 sm:space-y-8">
                  {/* Data & Pipelines */}
                  <div className="animate-slide-in-left delay-400">
                    <p className="text-lg sm:text-xl mb-3 sm:mb-5 text-white opacity-80">b)</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4  transition-colors duration-300">
                      Data & Pipelines
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                      ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database.
                    </p>
                  </div>
                  
                  {/* Data Warehousing */}
                  <div className="animate-slide-in-left delay-500">
                    <p className="text-lg sm:text-xl mb-3 sm:mb-5 text-white opacity-80">c)</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4  transition-colors duration-300">
                      Data Warehousing
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                      ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database.
                    </p>
                  </div>
                  
                  {/* Data Security */}
                  <div className="animate-slide-in-left delay-500">
                    <p className="text-lg sm:text-xl mb-3 sm:mb-5 text-white opacity-80">d)</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4  transition-colors duration-300">
                      Data Security
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                      ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-8 p-4 sm:p-6 md:p-8 lg:p-10 flex justify-start animate-slide-in-right delay-400">
                  <div className="w-full max-w-[533px] transform  transition-transform duration-300">
                    <Image 
                      src={'/assets/cap-04.png'} 
                      alt={"cap-04"} 
                      width={5000} 
                      height={5000} 
                      className="w-full h-auto object-cover xl:ml-0 lg:ml-8 rounded-lg  transition-shadow duration-300" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BI Section */}
          <FintechCapabilitySection
            bg={'#ffffff'}
            title="BI"
            count="04"
            description="ArtificialBeingz Enables RAG (Retrieval-Augmented Generation) By Adding Vector Indexes Directly Into Your Existing Database. Power BI, Tableau, Dashboard"
            imageContent={<Image src={'/assets/cap-02.png'} alt={"cap-05"} width={5000} height={5000} className="w-full h-auto object-cover rounded-lg transition-shadow duration-300" />}
          />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
