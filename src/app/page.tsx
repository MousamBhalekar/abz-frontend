import { Metadata } from 'next';
import { Header } from "./component/common/header";
import { Container } from "./component/elements/container/container";
import { LogoListSection } from "./component/elements/logo-section/logolist";
import { OurCapabilities } from "./component/elements/our-capabilities/our-capabilities";
import { OurCaseStudy } from "./component/elements/our-case-studies/our-case-studies";
import { IndustriesWeServe } from "./component/elements/industries-we-serve/industries-we-serve";
import Footer from "./component/common/footer";
import { HeroBanner } from "./component/elements/hero-banner/hero-banner";
import DynamicSectionRender from "./component/elements/dynamic-section-render/DynamicSectionRender";
import { getPageBySlug, getStrapiMediaURL } from '@/lib/strapi';
import { PageData } from '@/types/strapi';

// Generate metadata for the home page
export async function generateMetadata(): Promise<Metadata> {
  try {
    // Try to get home page data from Strapi
    const pageData: any | null = await getPageBySlug('home');
    
    if (pageData?.seo) {
      const seo = pageData.seo;
      return {
        title: seo.metaTitle || 'Artificial Beingz | AI & ML Solutions',
        description: seo.metaDescription || 'Providing AI & ML Solutions by feeding high quality language & vision inputs',
        keywords: seo.keywords || 'AI, ML, Machine Learning, Artificial Intelligence, Data Science',
        openGraph: {
          title: seo.metaTitle || 'Artificial Beingz | AI & ML Solutions',
          description: seo.metaDescription || 'Providing AI & ML Solutions by feeding high quality language & vision inputs',
          images: seo.metaImage?.data ? [
            {
              url: getStrapiMediaURL(seo.metaImage.data.url),
              width: seo.metaImage.data.width,
              height: seo.metaImage.data.height,
              alt: seo.metaImage.data.alternativeText || 'Artificial Beingz',
            }
          ] : [],
        },
        twitter: {
          card: 'summary_large_image',
          title: seo.metaTitle || 'Artificial Beingz | AI & ML Solutions',
          description: seo.metaDescription || 'Providing AI & ML Solutions by feeding high quality language & vision inputs',
          images: seo.metaImage?.data ? [getStrapiMediaURL(seo.metaImage.data.url)] : [],
        },
      };
    }
  } catch (error) {
    console.error('Error generating home page metadata:', error);
  }

  // Fallback metadata
  return {
    title: 'Artificial Beingz | AI & ML Solutions',
    description: 'Providing AI & ML Solutions by feeding high quality language & vision inputs',
    keywords: 'AI, ML, Machine Learning, Artificial Intelligence, Data Science',
    openGraph: {
      title: 'Artificial Beingz | AI & ML Solutions',
      description: 'Providing AI & ML Solutions by feeding high quality language & vision inputs',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Artificial Beingz | AI & ML Solutions',
      description: 'Providing AI & ML Solutions by feeding high quality language & vision inputs',
    },
  };
}

export default async function Home() {
  let pageData: any | null = null;

  try {
    // Try to get home page data from Strapi
    pageData = await getPageBySlug('home');
    console.log("pageDatapageData", pageData);
  } catch (error) {
    console.error('Error fetching home page data from Strapi:', error);
  }

  // If we have Strapi content, use dynamic rendering
  if (pageData?.sections && pageData.sections.length > 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Container>
            <DynamicSectionRender sections={pageData.sections} />
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  // Fallback to hardcoded content
  const logoslist = [
    { src: "/assets/provlink.png", alt: "ProvLink" },
    { src: "/assets/ylog.png", alt: "YLog" },
    { src: "/assets/TrueTenant.png", alt: "TrueTenant" },
    { src: "/assets/provlink.png", alt: "ProvLink" },
    { src: "/assets/ylog.png", alt: "YLog" },
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
