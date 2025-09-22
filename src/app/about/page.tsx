"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "../component/common/header";
import { Container } from "../component/elements/container/container";
import Footer from "../component/common/footer";
import CapabilitiesBanner from "../component/elements/hero-banner/capabilities-banner";
import { Icons } from "../../utils/icons";
import { Button } from "../component/atoms/button";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function About() {
  const features = [
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

  // Refs for animations
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const eyeImageRef = useRef<HTMLDivElement>(null);
  const approachSectionRef = useRef<HTMLDivElement>(null);
  const approachImageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Container>
          <CapabilitiesBanner
            title={"Read The Story Behind Our Success"}
            description={
              "Reliably Training & Governing AI By Feeding High Quality Language & Vision Inputs"
            }
            imageSrc={"/assets/bannerImage.png"}
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
                      Canada Based Company
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                      About Us
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-[#6E6E6E] leading-relaxed">
                      ArtificialBeingzis committed to constant value creation
                      through technology advancements in New Age tech! Ideas
                      find wings when the right steps are followed to transform
                      them into pragmatic solutions. Meticulous planning, a
                      hawk-eye on details, and precision in execution is key to
                      creating scalable products and solutions – and thereby
                      lasting value.
                    </p>
                  </div>

                  {/* Statistics Grid */}
                  <div
                    ref={statsRef}
                    className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8"
                  >
                    <div className="stat-item text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                        5Y
                      </div>
                      <div className="text-xs sm:text-sm text-white/60">
                        In Artificial Intelligence
                      </div>
                    </div>
                    <div className="stat-item text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                        50+
                      </div>
                      <div className="text-xs sm:text-sm text-white/60">
                        Successful Projects
                      </div>
                    </div>
                    <div className="stat-item text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                        40+
                      </div>
                      <div className="text-xs sm:text-sm text-white/60">
                        In House Specialists
                      </div>
                    </div>
                    <div className="stat-item text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                        4.0
                      </div>
                      <div className="text-xs sm:text-sm text-white/60">
                        Google Rating
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content - Eye Graphic */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end mt-6 lg:mt-0">
                  <div
                    ref={eyeImageRef}
                    className="relative flex flex-col items-center  gap-4 sm:gap-5"
                  >
                    <Image
                      src="/assets/about-eye.png"
                      alt="AI Eye Vision"
                      width={400}
                      height={400}
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
                    />
                    <p className="text-sm sm:text-base lg:text-lg text-[#6E6E6E] leading-relaxed hidden lg:block">
                      ArtificialBeingzis committed to constant value creation
                      through technology advancements in New Age tech! Ideas
                      find wings when the right steps are followed to transform
                      them into pragmatic solutions. Meticulous planning, a
                      hawk-eye on details, and precision in execution is key to
                      creating scalable products and solutions – and thereby
                      lasting value.
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
                    Our Approach
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                    At Artificialbeingz, our mission is to develop safe and
                    high-quality machine learning models and AI implementations
                    that drive business success. We believe in harnessing the
                    power of AI to create solutions that are not only innovative
                    but also ethical and secure.
                  </p>
                </div>

                <div
                  ref={approachImageRef}
                  className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl"
                >
                  <Image
                    src="/assets/about-01.png"
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
                  Our Differentiators
                </h2>

                <ul className="space-y-6 sm:space-y-5">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      ref={(el) => {
                        if (el) featureItemsRef.current[idx] = el;
                      }}
                      className="group hover:bg-white/5 transition-all duration-300 rounded-lg "
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
