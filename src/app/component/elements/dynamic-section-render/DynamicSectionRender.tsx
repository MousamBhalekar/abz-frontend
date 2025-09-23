import React from 'react';
import { PageSection } from '@/types/strapi';
import { HeroBanner } from '../hero-banner/hero-banner';
import { LogoListSection } from '../logo-section/logolist';
import { OurCapabilities } from '../our-capabilities/our-capabilities';
import { OurCaseStudy } from '../our-case-studies/our-case-studies';
import { IndustriesWeServe } from '../industries-we-serve/industries-we-serve';

interface DynamicSectionRenderProps {
  sections: PageSection[];
}

const DynamicSectionRender: React.FC<DynamicSectionRenderProps> = ({ sections }) => {
  const renderSection = (section: PageSection) => {
    const { __component } = section;

    switch (__component) {
      case 'hero.default':
        return (
          <HeroBanner
            key={section.id}
            title={section.title || 'Default Title'}
            description={section.description || 'Default Description'}
            imageSrc={section.backgroundImage?.data?.attributes?.url || '/assets/bannerImage.png'}
            btnText={section.buttonText || 'Contact Us'}
          />
        );

      case 'content.logo-section':
        return (
          <LogoListSection
            key={section.id}
            subtitle={section.subtitle || ''}
            logos={section.logos || []}
          />
        );

      case 'content.capabilities-section':
        return (
          <OurCapabilities
            key={section.id}
            title={section.title || 'Our Capabilities'}
            items={section.items || []}
            desc={section.description || ''}
            rightContent={
              section.image?.data?.attributes?.url ? (
                <img 
                  src={section.image.data.attributes.url} 
                  alt={section.image.data.attributes.alternativeText || 'Capabilities'} 
                />
              ) : (
                <img src="/assets/capabilities.png" alt="Capabilities" />
              )
            }
          />
        );

      case 'content.case-studies-section':
        return (
          <OurCaseStudy
            key={section.id}
            title={section.title || 'Our Case Studies'}
          />
        );

      case 'content.industries-section':
        return (
          <IndustriesWeServe
            key={section.id}
            title={section.title || 'Industries We Serve'}
          />
        );

      // Add more section types as needed
      case 'content.text-section':
        return (
          <div key={section.id} className="py-8">
            {section.title && <h2 className="text-3xl font-bold mb-4">{section.title}</h2>}
            {section.content && <div dangerouslySetInnerHTML={{ __html: section.content }} />}
          </div>
        );

      case 'content.image-text-section':
        return (
          <div key={section.id} className="py-8 flex items-center gap-8">
            {section.image?.data?.attributes?.url && (
              <div className="flex-1">
                <img 
                  src={section.image.data.attributes.url}
                  alt={section.image.data.attributes.alternativeText || ''}
                  className="w-full h-auto"
                />
              </div>
            )}
            <div className="flex-1">
              {section.title && <h2 className="text-3xl font-bold mb-4">{section.title}</h2>}
              {section.content && <div dangerouslySetInnerHTML={{ __html: section.content }} />}
            </div>
          </div>
        );

      // Fallback for unknown section types
      default:
        console.warn(`Unknown section type: ${__component}`);
        return (
          <div key={section.id} className="py-4 px-4 bg-gray-100 border border-gray-300 rounded">
            <p className="text-sm text-gray-600">
              Unknown section type: <code>{__component}</code>
            </p>
            <pre className="text-xs mt-2 overflow-auto">
              {JSON.stringify(section, null, 2)}
            </pre>
          </div>
        );
    }
  };

  if (!sections || sections.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-600">No content sections available.</p>
      </div>
    );
  }

  return (
    <div className="dynamic-sections">
      {sections.map((section) => renderSection(section))}
    </div>
  );
};

export default DynamicSectionRender;
