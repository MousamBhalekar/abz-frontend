"use client";
import DynamicPage, { PageData } from "../component/elements/dynamic-page/dynamic-page";

// Marketing Technology page data
const marketingTechnologyData: PageData = {
  hero: {
    title: "Next-Gen Marketing Technology",
    description: "Transform Your Marketing Strategy with AI-Driven Solutions and Intelligent Automation",
    imageSrc: "/assets/bannerImage.png",
    btnText: "Explore Solutions"
  },
  sections: [
    {
      count: "01",
      title: "Personalized Customer Experiences",
      description: "Create hyper-personalized customer journeys using AI-powered recommendation engines and behavioral analysis. Deliver the right message to the right customer at the perfect moment to maximize engagement and conversion rates.",
      imageSrc: "/assets/cap-01.png",
      imageAlt: "Personalization",
      bg: "dark"
    },
    {
      count: "02",
      title: "Predictive Marketing Analytics",
      description: "Leverage machine learning to predict customer behavior, lifetime value, and churn probability. Make data-driven marketing decisions with advanced analytics that forecast campaign performance and ROI before launch.",
      imageSrc: "/assets/cap-02.png",
      imageAlt: "Analytics",
      bg: "light"
    },
    {
      count: "03",
      title: "Automated Content Generation",
      description: "Scale your content marketing efforts with AI-powered content creation tools. Generate personalized email campaigns, social media posts, and product descriptions that resonate with your target audience.",
      imageSrc: "/assets/cap-03.png",
      imageAlt: "Content Generation",
      bg: "dark"
    },
    {
      count: "04",
      title: "Intelligent Ad Optimization",
      description: "Optimize your advertising spend with AI-driven bid management and audience targeting. Our algorithms continuously learn and adjust campaigns in real-time to maximize performance across all channels.",
      imageSrc: "/assets/cap-04.png",
      imageAlt: "Ad Optimization",
      bg: "light"
    }
  ]
};

export default function MarketingTechnology() {
  return <DynamicPage pageData={marketingTechnologyData} />;
}
