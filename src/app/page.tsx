import Image from "next/image";
import { Header } from "./component/common/header";
import { Container } from "./component/elements/container/container";
import { HeroBanner } from "./component/elements/hero-banner/hero-banner";
import { LogoListSection } from "./component/elements/logo-section/logolist";
import { OurCapabilities } from "./component/elements/our-capabilities/our-capabilities";
import { OurCaseStudy } from "./component/elements/our-case-studies/our-case-studies";
import { IndustriesWeServe } from "./component/elements/industries-we-serve/industries-we-serve";

export default function Home() {
  const logoslist = [
    { src: "/assets/provlink.png", alt: "TrueTenant" },
    { src: "/assets/ylog.png", alt: "TrueTenant" },
    { src: "/assets/TrueTenant.png", alt: "TrueTenant" },
    { src: "/assets/provlink.png", alt: "TrueTenant" },
    { src: "/assets/ylog.png", alt: "TrueTenant" },
    { src: "/assets/TrueTenant.png", alt: "TrueTenant" },
  ];
  return (
    <div className="">
      <Header />
      <Container>
        <HeroBanner
          title="Responsible Machine Learning"
          description="Providing AI & ML Solutions by feeding high quality language & vision inputs"
          imageSrc="/assets/bannerImage.png"
          btnText="Contact Us"
        />
        <LogoListSection
          subtitle="Reliably training & governing AI by feeding high quality language & vision inputs"
          logos={logoslist}
        />
        <OurCapabilities
          title="Our Capabilities"
          items={[
            "Data",
            "AI & Machine Learning",
            "Data Engineering",
            "Cloud Solutions",
            "Computer Vision",
          ]}
          desc="Harness our Data, AI, and Technology solutions to optimize operations, improve efficiency, and drive business transformation"
          rightContent={
            <img src="/assets/capabilities.png" alt="Capabilities" />
          }
        />
        <OurCaseStudy title="Our Case Studies" />
        <IndustriesWeServe title="Industries We Serve" />
      </Container>
    </div>
  );
}
