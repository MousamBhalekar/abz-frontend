"use client";
import DynamicPage, { PageData } from "../component/elements/dynamic-page/dynamic-page";

// Artificial Intelligence page data
const artificialIntelligenceData: PageData = {
  hero: {
    title: "AI Development Company",
    description: "Reliably training & governing AI by feeding high quality language & vision inputs",
    imageSrc: "/assets/bannerImage.png",
    btnText: "Contact Us"
  },
  sections: [
    {
      count: "01",
      title: "Machine Learning Models",
      description: "Build sophisticated machine learning models tailored to your business needs. From supervised learning for predictive analytics to unsupervised learning for pattern discovery, we create AI systems that learn and adapt.",
      imageSrc: "/assets/cap-01.png",
      imageAlt: "Machine Learning",
      bg: "dark"
    },
    {
      count: "02",
      title: "Natural Language Processing",
      description: "Unlock the power of human language with advanced NLP solutions. Process, analyze, and understand text data at scale with sentiment analysis, entity recognition, and language translation capabilities.",
      imageSrc: "/assets/cap-02.png",
      imageAlt: "NLP",
      bg: "light"
    },
    {
      count: "04",
      title: "AI Strategy & Consulting",
      description: "Navigate your AI transformation journey with expert guidance. We help you identify AI opportunities, develop implementation roadmaps, and establish governance frameworks for responsible AI deployment.",
      imageSrc: "/assets/cap-01.png",
      imageAlt: "AI Strategy",
      bg: "light"
    }
  ],
  complexSection: {
    count: "03",
    title: "Computer Vision",
    description: "Transform visual data into actionable insights with cutting-edge computer vision technology.",
    imageSrc: "/assets/cap-03.png",
    imageAlt: "Computer Vision",
    subsections: [
      {
        count: "a)",
        title: "Image Recognition",
        description: "Automatically identify and classify objects, faces, and scenes in images with high accuracy using deep learning algorithms."
      },
      {
        count: "b)",
        title: "Video Analytics",
        description: "Extract meaningful insights from video streams in real-time for security, quality control, and behavioral analysis."
      },
      {
        count: "c)",
        title: "Medical Imaging",
        description: "Assist healthcare professionals with AI-powered diagnostic tools that analyze medical images with precision."
      },
      {
        count: "d)",
        title: "Autonomous Systems",
        description: "Enable intelligent decision-making in autonomous vehicles, drones, and robotics applications."
      }
    ],
    secondImageSrc: "/assets/cap-04.png",
    secondImageAlt: "AI Applications"
  }
};

export default function ArtificialIntelligence() {
  return <DynamicPage pageData={artificialIntelligenceData} />;
}
