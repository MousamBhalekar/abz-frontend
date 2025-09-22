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

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  // Refs for animations
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact section animation
      if (contactSectionRef.current) {
        gsap.fromTo(
          contactSectionRef.current.querySelectorAll(".animate-contact"),
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
              trigger: contactSectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Form animation
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          {
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Contact info animation
      if (contactInfoRef.current) {
        gsap.fromTo(
          contactInfoRef.current.querySelectorAll(".animate-info"),
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: contactInfoRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Container>
          {/* Hero Section */}
          <CapabilitiesBanner
            title="Product Development Company"
            description="Reliably Training & Governing AI By Feeding High Quality Language & Vision Inputs"
            imageSrc="/assets/bannerImage.png"
            btnText="Contact Us"
          />

          {/* Contact Section */}
          <div ref={contactSectionRef} className="py-8 sm:py-12 md:py-16 lg:py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="animate-contact text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Got A Project In Mind?
                  </h2>
                  <p className="animate-contact text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
                    If You Would Like To Contact Us To Request A Demo, Ask A Question. Need Support. Or Anything Else. Send Us An Email And We Will Respond As Soon As Possible.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Contact Form */}
                  <div className="lg:col-span-12">
                    <form ref={formRef} onSubmit={handleSubmit} className="">
                      <div className="grid grid-cols-1">
                        <div className="border border-[#6E6E6E] px-5 py-3">
                          <label htmlFor="name" className="">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter Your Name"
                            required
                            className="w-full py-3 bg-black rounded-lg text-white placeholder-white/50 focus:border-[#6495ED] focus:outline-none transition-colors duration-300"
                          />
                        </div>
                        <div className="border border-[#6E6E6E] px-5 py-3">
                          <label htmlFor="email" className="">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter Your Email"
                            required
                            className="w-full py-3 bg-black rounded-lg text-white placeholder-white/50 focus:border-[#6495ED] focus:outline-none transition-colors duration-300"
                          />
                        </div>
                      </div>
                      <div className="border border-[#6E6E6E] px-5 py-3">
                        <label htmlFor="message" className="">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Enter Message"
                          rows={6}
                          required
                          className="w-full py-3 bg-black rounded-lg text-white placeholder-white/50 focus:border-[#6495ED] focus:outline-none transition-colors duration-300 resize-none"
                        />
                      </div>
                      <div className="flex justify-center mt-5">
                        <Button
                          type="submit"
                          variant="outline"
                          className="group justify-between hover:bg-[#6495ED]/10 hover:border-[#6495ED] transition-all duration-300"
                          icon={<Icons.ArrowRightTop className="text-white group-hover:text-[#6495ED] group-hover:rotate-12 transition-all duration-300" />}
                        >
                          Submit
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
