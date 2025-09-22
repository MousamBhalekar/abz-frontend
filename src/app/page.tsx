import Image from "next/image";
import { Header } from "./component/common/header";
import { Container } from "./component/elements/container/container";
import { LogoListSection } from "./component/elements/logo-section/logolist";
import { OurCapabilities } from "./component/elements/our-capabilities/our-capabilities";
import { OurCaseStudy } from "./component/elements/our-case-studies/our-case-studies";
import { IndustriesWeServe } from "./component/elements/industries-we-serve/industries-we-serve";
import Footer from "./component/common/footer";
import { HeroBanner } from "./component/elements/hero-banner/hero-banner";

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
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
              {title: "Data", href: "/data"},
              {title: "Artificial Intelligence", href: "/artificial-intelligence"},
              {title: "Fintech", href: "/industries"},
              {title: "Marketing Technology", href: "/marketing-technology"},
              {title: "Product Development", href: "/product-development"}
            ]}
            desc="Harness our Data, AI, and Technology solutions to optimize operations, improve efficiency, and drive business transformation"
            rightContent={
              <img src="/assets/capabilities.png" alt="Capabilities" />
            }
          />
          <OurCaseStudy title="Our Case Studies" />
          <IndustriesWeServe title="Industries We Serve" />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
