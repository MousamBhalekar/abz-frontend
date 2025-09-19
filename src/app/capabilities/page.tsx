"use client";
import Image from "next/image";
import { Header } from "../component/common/header";
import { Container } from "../component/elements/container/container";
import { HeroBanner } from "../component/elements/hero-banner/hero-banner";
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
    <div className={`py-16 lg:py-24 ${bg === '#ffffff' ? "bg-white" : "bg-black"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content Section */}
          <div
            className={`${
              reverse ? "lg:order-2 lg:col-span-4" : "lg:col-span-4"
            } animate-fade-in-up`}
          >
            <p className={`text-xl mb-5 ${bg === '#ffffff' ? "text-[#1A1A1A]" : "text-white"}`}>{count}</p>
            <h2 className={`text-4xl lg:text-5xl font-bold ${bg === '#ffffff' ? "text-[#1A1A1A]" : "text-white"} mb-6 hover:text-[#6495ED] transition-colors duration-300`}>
              {title}
            </h2>
            <p className={`text-lg lg:text-xl ${bg === '#ffffff' ? "text-[#1A1A1A]" : "text-white"} leading-relaxed`}>
              {description}
            </p>
          </div>

          {/* Visual Section */}
          <div
            className={`${bg === '#ffffff' ? "text-[#1A1A1A]" : "text-white"} ${
              reverse ? "lg:order-1 lg:col-span-8" : "lg:col-span-8"
            } animate-fade-in-up delay-200`}
          >
            {imageContent}
          </div>
        </div>
      </div>
    </div>
  );
};


export default function FintechCapabilities() {

  const securitizationCode = `Time: 16:24:53  Import: import
User: Compute_rag_import
User: Compute_rag_import

filenames = ['a.csv', 'b.csv', 'c.csv']
images = []
for filename in filenames:
    images.append(load_image(filename))

For filename in filenames:
    images.append(load_image(filename))
    print(f"Loaded {filename}")
JSON to Text by Defining The Chunking Strategy:
ArtificialBeingz Just Makes It Easy`;

  const tmoCode = `Time: 16:24:53  Import: import
User: Compute_rag_import  
User: Compute_rag_import

filenames = ['a.csv', 'b.csv', 'c.csv']
images = []
for filename in filenames:
    images.append(load_image(filename))`;

  const dataCode = `Time: 16:24:53  Import: import
User: Compute_rag_import
User: Compute_rag_import

For filename in filenames:
    images.append(load_image(filename))
    print(f"Loaded {filename}")
JSON to Text by Defining The Chunking Strategy:
ArtificialBeingz Just Makes It Easy`;


  return (
    <div className="flex flex-col min-h-screen bgre">
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
            imageContent={<Image src={'/assets/cap-01.png'} alt={"cap-01"} width={5000} height={5000} className="w-full h-full object-cover" />}
          />

          {/* TMO Section */}
          <FintechCapabilitySection
            bg={'#ffffff'}
            title="TMO"
            count="02"
            description="ArtificialBeingz Enables RAG (Retrieval-Augmented Generation) By Adding Vector Indexes Directly Into Your Existing Database. You Control Every Step Of The Process, From Connecting Your Document From JSON To Text By Defining The Chunking Strategy. ArtificialBeingz Just Makes It Easy"
            imageContent={<Image src={'/assets/cap-02.png'} alt={"cap-02"} width={5000} height={5000} className="w-full h-full object-cover" />}
          />

          {/* DATA Section */}
          <div className="py-16 lg:py-24 bg-black">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                <div className="">
                  <p className={`text-xl mb-5 text-white`}>03</p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    DATA
                  </h2>
                  <p className="text-lg lg:text-xl text-white leading-relaxed">
                  ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database.
                  </p>
                </div>
                <div className="mt-5">
                  <p className={`text-xl mb-5 text-white`}>{"a)"}</p>
                  <h2 className="text-3xl text-white mb-2">
                  Data Engineering
                  </h2>
                  <p className="text-lg lg:text-xl text-white leading-relaxed mb-12">
                    ArtificialBeingz Enables RAG (Retrieval-Augmented
                    Generation) By Adding Vector Indexes Directly Into Your
                    Existing Database.
                  </p>
                </div>
                </div>
                <div className="p-10 lg:col-span-8">
                  <Image src={'/assets/cap-03.png'} alt={"cap-03"} width={5000} height={5000} className="w-full h-full object-cover object-left" />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                <div className="">
                  <p className={`text-xl mb-5 text-white`}>{"b)"}</p>
                  <h2 className="text-3xl text-white mb-2">
                  Data & Pipelines
                  </h2>
                  <p className="text-lg lg:text-xl text-white leading-relaxed mb-12">
                  ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database.
                  </p>
                </div>
                <div className="mt-5">
                  <p className={`text-xl mb-5 text-white`}>{"c)"}</p>
                  <h2 className="text-3xl text-white mb-2">
                  Data Warehousing
                  </h2>
                  <p className="text-lg lg:text-xl text-white leading-relaxed mb-12">
                  ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database.
                  </p>
                </div>
                <div className="mt-5">
                  <p className={`text-xl mb-5 text-white`}>{"d)"}</p>
                  <h2 className="text-3xl text-white mb-2">
                  Data Security
                  </h2>
                  <p className="text-lg lg:text-xl text-white leading-relaxed mb-12">
                  ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database.
                  </p>
                </div>
                </div>
                <div className="p-10 lg:col-span-8 flex justify-start">
                  <Image src={'/assets/cap-04.png'} alt={"cap-04"} width={5000} height={5000} className="w-[533px] h-auto object-cover xl:ml-20" />
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
            codeContent={dataCode}
            imageContent={<Image src={'/assets/cap-02.png'} alt={"cap-05"} width={5000} height={5000} className="w-full h-full object-cover" />}
          />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
