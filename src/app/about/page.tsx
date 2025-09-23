"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "../component/common/header";
import { Container } from "../component/elements/container/container";
import Footer from "../component/common/footer";
import CapabilitiesBanner from "../component/elements/hero-banner/capabilities-banner";
import { Icons } from "../../utils/icons";
import { Button } from "../component/atoms/button";
import { getAboutPage, getFeatures, getStatistics, getStrapiMediaURL } from "../../lib/strapi";
import { AboutPageData, FeatureData, StatisticData } from "../../types/strapi";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function About() {
  const [aboutData, setAboutData] = useState<AboutPageData | null>(null);
  const [features, setFeatures] = useState<FeatureData[]>([]);
  const [statistics, setStatistics] = useState<StatisticData[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback data
  const fallbackFeatures = [
    {
      title: "Expertise",
      description:
        "Our team comprises industry leaders and experts who bring years of experience in AI and machine learning to every project.",
      dotColor: "bg-white",
    },
    {
      title: "Innovation",
      description:
        "We are committed to cutting-edge technology and delivering innovative solutions that push the boundaries of what's possible.",
      dotColor: "bg-[#6495ED]",
    },
    {
      title: "Quality",
      description:
        "We focus on delivering reliable, efficient, and effective solutions that meet the highest standards of quality and performance.",
      dotColor: "bg-[#6495ED]",
    },
    {
      title: "Ethics",
      description:
        "We prioritize ethical considerations to ensure responsible and secure AI implementations that benefit society as a whole.",
      dotColor: "bg-[#6495ED]",
    },
  ];

  const fallbackStats = [
    { value: "5Y", label: "In Artificial Intelligence" },
    { value: "50+", label: "Successful Projects" },
    { value: "40+", label: "In House Specialists" },
    { value: "4.0", label: "Google Rating" },
  ];

  // Refs for animations
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const eyeImageRef = useRef<HTMLDivElement>(null);
  const approachSectionRef = useRef<HTMLDivElement>(null);
  const approachImageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [aboutPageData, featuresData, statisticsData] = await Promise.all([
          getAboutPage().catch(() => null),
          getFeatures().catch(() => []),
          getStatistics().catch(() => []),
        ]);

        setAboutData(aboutPageData);
        setFeatures(featuresData.length > 0 ? featuresData : []);
        setStatistics(statisticsData.length > 0 ? statisticsData : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      // About section animation
      if (aboutSectionRef.current) {
        gsap.fromTo(
          aboutSectionRef.current.querySelectorAll(".animate-about"),
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: aboutSectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll(".stat-item"),
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Eye image animation
      if (eyeImageRef.current) {
        gsap.fromTo(
          eyeImageRef.current,
          {
            scale: 0.5,
            opacity: 0,
            rotation: -10,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)",
            scrollTrigger: {
              trigger: eyeImageRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Approach section animation
      if (approachSectionRef.current) {
        gsap.fromTo(
          approachSectionRef.current.querySelectorAll(".animate-approach"),
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
              trigger: approachSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Approach image animation
      if (approachImageRef.current) {
        gsap.fromTo(
          approachImageRef.current,
          {
            opacity: 0,
            scale: 0.8,
            x: 50,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: approachImageRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Features animation
      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current.querySelector(".animate-features-title"),
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Feature items animation
      featureItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: -30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, [loading]);

  // Use Strapi data or fallback to hardcoded data
  const displayFeatures = features.length > 0 ? features.map(f => ({
    title: f.attributes.title,
    description: f.attributes.description,
    dotColor: f.attributes.dotColor || "bg-white",
  })) : fallbackFeatures;

  const displayStats = statistics.length > 0 ? statistics : fallbackStats.map((stat, idx) => ({
    id: idx,
    attributes: stat,
  })) as StatisticData[];

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center bg-black">
          <div className="text-white text-xl">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Container>
          <CapabilitiesBanner
            title={aboutData?.attributes.bannerTitle || "Read The Story Behind Our Success"}
            description={
              aboutData?.attributes.bannerDescription || "Reliably Training & Governing AI By Feeding High Quality Language & Vision Inputs"
            }
            imageSrc={
              aboutData?.attributes.heroImage?.data
                ? getStrapiMediaURL(aboutData.attributes.heroImage.data.attributes.url)
                : "/assets/bannerImage.png"
            }
            btnText={"Contact Us"}
          />

          {/* About Us Section */}
          <div
            ref={aboutSectionRef}
            className="py-8 sm:py-12 md:py-16 lg:py-24 bg-black"
          >
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="lg:col-span-6 space-y-6 sm:space-y-8">
                  <div className="animate-about">
                    <p className="text-xs sm:text-sm text-white mb-2 sm:mb-3">
                      {aboutData?.attributes.companyLocation || "Canada Based Company"}
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                      {aboutData?.attributes.title || "About Us"}
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-[#6E6E6E] leading-relaxed">
                      {aboutData?.attributes.description || `ArtificialBeingzis committed to constant value creation
                      through technology advancements in New Age tech! Ideas
                      find wings when the right steps are followed to transform
                      them into pragmatic solutions. Meticulous planning, a
                      hawk-eye on details, and precision in execution is key to
                      creating scalable products and solutions – and thereby
                      lasting value.`}
                    </p>
                  </div>

                  {/* Statistics Grid */}
                  <div
                    ref={statsRef}
                    className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8"
                  >
                    {displayStats.map((stat, idx) => (
                      <div key={stat.id || idx} className="stat-item text-center lg:text-left">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                          {stat.attributes.value}
                        </div>
                        <div className="text-xs sm:text-sm text-white/60">
                          {stat.attributes.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Content - Eye Graphic */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end mt-6 lg:mt-0">
                  <div
                    ref={eyeImageRef}
                    className="relative flex flex-col items-center  gap-4 sm:gap-5"
                  >
                    <Image
                      src={
                        aboutData?.attributes.aboutImage?.data
                          ? getStrapiMediaURL(aboutData.attributes.aboutImage.data.attributes.url)
                          : "/assets/about-eye.png"
                      }
                      alt="AI Eye Vision"
                      width={400}
                      height={400}
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
                    />
                    <p className="text-sm sm:text-base lg:text-lg text-[#6E6E6E] leading-relaxed hidden lg:block">
                      {aboutData?.attributes.description || `ArtificialBeingzis committed to constant value creation
                      through technology advancements in New Age tech! Ideas
                      find wings when the right steps are followed to transform
                      them into pragmatic solutions. Meticulous planning, a
                      hawk-eye on details, and precision in execution is key to
                      creating scalable products and solutions – and thereby
                      lasting value.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach Section */}
          <div
            ref={approachSectionRef}
            className="py-8 sm:py-12 md:py-16 lg:py-24 bg-black"
          >
            <div className="container">
              <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-12">
                <div className="w-full animate-approach">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    {aboutData?.attributes.approachTitle || "Our Approach"}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                    {aboutData?.attributes.approachDescription || `At Artificialbeingz, our mission is to develop safe and
                    high-quality machine learning models and AI implementations
                    that drive business success. We believe in harnessing the
                    power of AI to create solutions that are not only innovative
                    but also ethical and secure.`}
                  </p>
                </div>

                <div
                  ref={approachImageRef}
                  className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl"
                >
                  <Image
                    src={
                      aboutData?.attributes.approachImage?.data
                        ? getStrapiMediaURL(aboutData.attributes.approachImage.data.attributes.url)
                        : "/assets/about-01.png"
                    }
                    alt="Our Approach"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Our Differentiators Section */}
          <div
            ref={featuresRef}
            className="py-8 sm:py-12 md:py-16 lg:py-24 bg-black"
          >
            <div className="container">
              <div className="">
                <h2 className="animate-features-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">
                  {aboutData?.attributes.differentiatorsTitle || "Our Differentiators"}
                </h2>

                <ul className="space-y-6 sm:space-y-5">
                  {displayFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      ref={(el) => {
                        if (el) featureItemsRef.current[idx] = el;
                      }}
                      className="group transition-all duration-300 rounded-lg "
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0  transition-transform duration-300`}
                        ></div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3  transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed  transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default About;