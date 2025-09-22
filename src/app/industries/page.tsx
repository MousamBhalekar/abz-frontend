"use client";
import DynamicPage, { PageData } from "../component/elements/dynamic-page/dynamic-page";

// Industries page data
const industriesData: PageData = {
  hero: {
    title: "Industries We Serve",
    description: "Delivering AI & ML Solutions Across Diverse Industries with Specialized Expertise",
    imageSrc: "/assets/industry-bg.png",
    btnText: "Get Started"
  },
  sections: [
    {
      count: "01",
      title: "Financial Services",
      description: "Transform your financial operations with our AI-powered solutions. From risk assessment to fraud detection, we help financial institutions leverage machine learning for better decision making and enhanced customer experiences.",
      imageSrc: "/assets/ind-1.png",
      imageAlt: "Financial Services",
      bg: "dark"
    },
    {
      count: "02",
      title: "Healthcare & Life Sciences",
      description: "Revolutionize healthcare delivery with intelligent systems. Our AI solutions help healthcare providers improve patient outcomes, streamline operations, and accelerate medical research through advanced data analytics.",
      imageSrc: "/assets/ind-2.png",
      imageAlt: "Healthcare",
      bg: "light"
    },
    {
      count: "03",
      title: "Manufacturing & Supply Chain",
      description: "Optimize your manufacturing processes and supply chain operations with predictive analytics and intelligent automation. Reduce costs, improve quality, and enhance operational efficiency through AI-driven insights.",
      imageSrc: "/assets/ind-3.png",
      imageAlt: "Manufacturing",
      bg: "dark"
    },
    {
      count: "04",
      title: "Retail & E-commerce",
      description: "Enhance customer experiences and drive sales with personalized recommendations, inventory optimization, and demand forecasting. Our AI solutions help retailers stay competitive in the digital marketplace.",
      imageSrc: "/assets/ind-4.png",
      imageAlt: "Retail",
      bg: "light"
    }
  ]
};

export default function Industries() {
  return <DynamicPage pageData={industriesData} />;
}