"use client";
import DynamicPage, { PageData } from "../component/elements/dynamic-page/dynamic-page";

// Product Development page data
const productDevelopmentData: PageData = {
  hero: {
    title: "AI-Powered Product Development",
    description: "Accelerate Your Product Innovation with Intelligent Development Solutions",
    imageSrc: "/assets/bannerImage.png",
    btnText: "Start Building"
  },
  sections: [
    {
      count: "01",
      title: "Intelligent Design Systems",
      description: "Leverage AI to create smarter design systems that adapt to user needs and market trends. Our machine learning algorithms analyze user behavior patterns to inform design decisions and optimize user experiences.",
      imageSrc: "/assets/cap-01.png",
      imageAlt: "Design Systems",
      bg: "dark"
    },
    {
      count: "02",
      title: "Automated Testing & QA",
      description: "Implement AI-driven testing frameworks that automatically identify bugs, performance issues, and security vulnerabilities. Reduce development time while ensuring higher quality products through intelligent automation.",
      imageSrc: "/assets/cap-02.png",
      imageAlt: "Testing QA",
      bg: "light"
    },
    {
      count: "03",
      title: "Predictive Analytics for Features",
      description: "Make data-driven decisions about feature development using predictive analytics. Our AI models analyze market trends, user feedback, and usage patterns to predict which features will drive the most value.",
      imageSrc: "/assets/cap-03.png",
      imageAlt: "Predictive Analytics",
      bg: "dark"
    },
    {
      count: "04",
      title: "Intelligent Code Generation",
      description: "Accelerate development with AI-powered code generation tools. Our systems can generate boilerplate code, suggest optimizations, and even create entire modules based on specifications and best practices.",
      imageSrc: "/assets/cap-04.png",
      imageAlt: "Code Generation",
      bg: "light"
    }
  ]
};

export default function ProductDevelopment() {
  return <DynamicPage pageData={productDevelopmentData} />;
}
