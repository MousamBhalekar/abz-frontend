import Image from "next/image";
import { Header } from "./component/common/header";
import { Container } from "./component/elements/container/container";
import { HeroBanner } from "./component/elements/hero-banner/hero-banner";
import { LogoListSection } from "./component/elements/logo-section/logolist";
import { OurCapabilities } from "./component/elements/our-capabilities/our-capabilities";

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
            "AI & Machine Learning",
            "Data Engineering",
            "Cloud Solutions",
            "Computer Vision",
          ]}
          rightContent={
            <img src="/assets/capabilities.png" alt="Capabilities" />
          }
        />
      </Container>
    </div>
  );
}
