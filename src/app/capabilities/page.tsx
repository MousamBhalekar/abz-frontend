"use client";
import DynamicPage, { PageData } from "../component/elements/dynamic-page/dynamic-page";

// Capabilities page data
const capabilitiesData: PageData = {
  hero: {
    title: "Transforming Fintech Through AI",
    description: "Rapidly Training & Governing AI by Feeding High Quality Language & Vision Inputs",
    imageSrc: "/assets/bannerImage.png",
    btnText: "Contact Us"
  },
  sections: [
    {
      count: "01",
      title: "Securitization RMBS",
      description: "ArtificialBeingz Enables RAG (Retrieval-Augmented Generation) By Adding Vector Indexes Directly Into Your Existing Database. You Control Every Step Of The Process, From Connecting Your Document From JSON To Text By Defining The Chunking Strategy. ArtificialBeingz Just Makes It Easy",
      imageSrc: "/assets/cap-01.png",
      imageAlt: "cap-01",
      bg: "dark"
    },
    {
      count: "02",
      title: "TMO",
      description: "ArtificialBeingz Enables RAG (Retrieval-Augmented Generation) By Adding Vector Indexes Directly Into Your Existing Database. You Control Every Step Of The Process, From Connecting Your Document From JSON To Text By Defining The Chunking Strategy. ArtificialBeingz Just Makes It Easy",
      imageSrc: "/assets/cap-02.png",
      imageAlt: "cap-02",
      bg: "light"
    }
  ],
  // Section 03 (DATA) will be rendered as complexSection
  afterComplexSections: [
    {
      count: "04",
      title: "BI",
      description: "ArtificialBeingz Enables RAG (Retrieval-Augmented Generation) By Adding Vector Indexes Directly Into Your Existing Database. Power BI, Tableau, Dashboard",
      imageSrc: "/assets/cap-02.png",
      imageAlt: "cap-05",
      bg: "light"
    }
  ],
  complexSection: {
    count: "03",
    title: "DATA",
    description: "ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database.",
    imageSrc: "/assets/cap-03.png",
    imageAlt: "cap-03",
    subsections: [
      {
        count: "a)",
        title: "Data Engineering",
        description: "ArtificialBeingz Enables RAG (Retrieval-Augmented Generation) By Adding Vector Indexes Directly Into Your Existing Database."
      },
      {
        count: "b)",
        title: "Data & Pipelines",
        description: "ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database."
      },
      {
        count: "c)",
        title: "Data Warehousing",
        description: "ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database."
      },
      {
        count: "d)",
        title: "Data Security",
        description: "ArtificialBeingz enables RAG (Retrieval-Augmented Generation) by adding vector indexes directly into your existing database."
      }
    ],
    secondImageSrc: "/assets/cap-04.png",
    secondImageAlt: "cap-04"
  }
};

export default function Capabilities() {
  return <DynamicPage pageData={capabilitiesData} />;
}