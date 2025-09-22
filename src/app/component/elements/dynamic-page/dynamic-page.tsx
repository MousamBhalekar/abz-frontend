"use client";
import Image from "next/image";
import { Header } from "../../common/header";
import { Container } from "../container/container";
import Footer from "../../common/footer";
import CapabilitiesBanner from "../hero-banner/capabilities-banner";

// Types for page data
export interface SectionData {
  count: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bg: 'light' | 'dark';
  reverse?: boolean;
}

export interface ComplexSectionData {
  count: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  subsections: {
    count: string;
    title: string;
    description: string;
  }[];
  secondImageSrc: string;
  secondImageAlt: string;
}

export interface PageData {
  hero: {
    title: string;
    description: string;
    imageSrc: string;
    btnText: string;
  };
  sections: SectionData[];
  complexSection?: ComplexSectionData;
  afterComplexSections?: SectionData[];
}

// Dynamic Section Component
const DynamicSection = ({
  bg,
  title,
  count,
  description,
  imageContent,
  reverse = false,
}: {
  bg: string;
  title: string;
  description: string;
  count: string;
  imageContent: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <div className={`py-8 sm:py-12 md:py-16 lg:py-24 ${bg === 'light' ? "bg-white" : "bg-black"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`${
              reverse ? "lg:order-2 lg:col-span-4" : "lg:col-span-4"
            } transform transition-all duration-700`}
          >
            <p className={`text-lg sm:text-xl mb-3 sm:mb-5 ${bg === 'light' ? "text-[#1A1A1A]" : "text-white"} opacity-80 animate-fade-in-up`}>
              {count}
            </p>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${bg === 'light' ? "text-[#1A1A1A]" : "text-white"} mb-4 sm:mb-6 transition-colors duration-300 animate-fade-in-up delay-100`}>
              {title}
            </h2>
            <p className={`text-base sm:text-lg lg:text-xl ${bg === 'light' ? "text-[#1A1A1A]" : "text-white"} leading-relaxed animate-fade-in-up delay-200`}>
              {description}
            </p>
          </div>

          <div
            className={`${bg === 'light' ? "text-[#1A1A1A]" : "text-white"} ${
              reverse ? "lg:order-1 lg:col-span-8" : "lg:col-span-8"
            } transform transition-all duration-700 animate-fade-in-up delay-300`}
          >
            {imageContent}
          </div>
        </div>
      </div>
    </div>
  );
};

// Complex Section Component (like the DATA section in capabilities)
const ComplexSection = ({ data }: { data: ComplexSectionData }) => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            {/* Main Section */}
            <div className="animate-slide-in-left">
              <p className="text-lg sm:text-xl mb-3 sm:mb-5 text-white opacity-80">{data.count}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 transition-colors duration-300">
                {data.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                {data.description}
              </p>
            </div>
            
            {/* First Subsection */}
            {data.subsections[0] && (
              <div className="animate-slide-in-left delay-200">
                <p className="text-lg sm:text-xl mb-3 sm:mb-5 text-white opacity-80">{data.subsections[0].count}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4 transition-colors duration-300">
                  {data.subsections[0].title}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                  {data.subsections[0].description}
                </p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-8 p-4 sm:p-6 md:p-8 lg:p-10 animate-slide-in-right delay-300 hidden md:block">
            <Image 
              src={data.imageSrc} 
              alt={data.imageAlt} 
              width={5000} 
              height={5000} 
              className="w-full h-auto object-cover object-left rounded-lg transition-all duration-300" 
            />
          </div>
        </div>
        
        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            {/* Remaining Subsections */}
            {data.subsections.slice(1).map((subsection, index) => (
              <div key={index} className={`animate-slide-in-left delay-${400 + index * 100}`}>
                <p className="text-lg sm:text-xl mb-3 sm:mb-5 text-white opacity-80">{subsection.count}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4 transition-colors duration-300">
                  {subsection.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                  {subsection.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-8 p-4 sm:p-6 md:p-8 lg:p-10 flex justify-start animate-slide-in-right delay-400">
            <div className="w-full max-w-[533px] transform transition-transform duration-300">
              <Image 
                src={data.secondImageSrc} 
                alt={data.secondImageAlt} 
                width={5000} 
                height={5000} 
                className="w-full h-auto object-cover xl:ml-0 lg:ml-8 rounded-lg transition-shadow duration-300" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dynamic Page Component
export default function DynamicPage({ pageData }: { pageData: PageData }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Container>
          {/* Hero Section */}
          <CapabilitiesBanner
            title={pageData.hero.title}
            description={pageData.hero.description}
            imageSrc={pageData.hero.imageSrc}
            btnText={pageData.hero.btnText}
          />

          {/* Regular Sections (before complex section) */}
          {pageData.sections.map((section, index) => (
            <DynamicSection
              key={index}
              bg={section.bg === 'light' ? 'light' : 'dark'}
              title={section.title}
              count={section.count}
              description={section.description}
              reverse={section.reverse}
              imageContent={
                <Image 
                  src={section.imageSrc} 
                  alt={section.imageAlt} 
                  width={5000} 
                  height={5000} 
                  className="w-full h-auto object-cover rounded-lg transition-shadow duration-300" 
                />
              }
            />
          ))}

          {/* Complex Section (if exists) */}
          {pageData.complexSection && (
            <ComplexSection data={pageData.complexSection} />
          )}

          {/* Sections after complex section */}
          {pageData.afterComplexSections?.map((section, index) => (
            <DynamicSection
              key={`after-${index}`}
              bg={section.bg === 'light' ? 'light' : 'dark'}
              title={section.title}
              count={section.count}
              description={section.description}
              reverse={section.reverse}
              imageContent={
                <Image 
                  src={section.imageSrc} 
                  alt={section.imageAlt} 
                  width={5000} 
                  height={5000} 
                  className="w-full h-auto object-cover rounded-lg transition-shadow duration-300" 
                />
              }
            />
          ))}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
