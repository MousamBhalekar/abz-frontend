import qs from 'qs';
import { PageData, StrapiResponse } from '@/types/strapi';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

interface RequestOptions {
  headers?: HeadersInit;
  cache?: RequestCache;
}

async function fetchAPI(path: string, urlParamsObject = {}, options: RequestOptions = {}) {
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true, // prettify URL
    });
    const requestUrl = `${API_URL}/api${path}${
      queryString ? `?${queryString}` : ''
    }`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

// API methods
export async function getAboutPage(locale = 'en') {
  const data = await fetchAPI('/about-page', {
    populate: '*',
    locale,
  });
  return data.data;
}

export async function getFeatures(locale = 'en') {
  const data = await fetchAPI('/features', {
    populate: '*',
    locale,
  });
  return data.data;
}

export async function getStatistics(locale = 'en') {
  const data = await fetchAPI('/statistics', {
    populate: '*',
    locale,
  });
  return data.data;
}

export async function getCapabilities(locale = 'en') {
  const data = await fetchAPI('/capabilities', {
    populate: '*',
    locale,
  });
  return data.data;
}

export async function getCaseStudies(locale = 'en') {
  const data = await fetchAPI('/case-studies', {
    populate: '*',
    locale,
  });
  return data.data;
}

export async function getIndustries(locale = 'en') {
  const data = await fetchAPI('/industries', {
    populate: '*',
    locale,
  });
  return data.data;
}

export async function getGlobalSettings(locale = 'en') {
  const data = await fetchAPI('/global-setting', {
    populate: '*',
    locale,
  });
  return data.data;
}

// Helper function to get image URL
export function getStrapiMediaURL(url: string | null): string {
  if (!url) return '';
  
  // Return API URL if url is relative
  if (url.startsWith('/')) {
    return `${API_URL}${url}`;
  }
  
  return url;
}

export async function getPageBySlug(slug: string): Promise<PageData | null> {
  try {
    const params = {
      filters: { slug: { $eq: slug } },
      populate: {
        metaData: true,
        sections: {
          on: {
            // Hero sections
            'hero.default': { populate: '*' },
            // 'hero.reusable-page': { populate: '*' },
            // 'hero.button-block': { populate: '*' },
            // 'hero.hero-with-form-sections': { populate: '*' },

            // // Content sections
            // 'content.split-image-text': { populate: '*' },

            // // Web-three sections
            // 'web-three.content-section': { populate: ['image'] },
            // 'web-three.blockchain-blocks': {
            //   populate: { data: { populate: '*' } }
            // },
            // 'web-three.nft-section': { populate: ['image'] },
            // 'web-three.clutch-badge-section': {
            //   populate: {
            //     backgroundImageUrl: true,
            //     badges: { populate: '*' }
            //   }
            // },
            // 'web-three.feature-group': { populate: '*' },
            // 'web-three.blockchain-platform': { populate: '*' },
            // 'web-three.chart-data': { populate: '*' },
            // 'web-three.blockchain-industry-adoption': { populate: '*' },
            // 'web-three.cta-section': { populate: '*' },
            // 'web-three.service-section': {
            //   populate: { services: { populate: '*' } }
            // },
            // 'web-three.contact-section': { populate: '*' },
            // 'web-three.block-chain-benefit-section': {
            //   populate: { items: { populate: '*' } }
            // },
            // 'web-three.nft-marketplace-sections': {
            //   populate: {
            //     features: { populate: '*' },
            //     demos: { populate: '*' }
            //   }
            // },
            // 'web-three.two-column-with-image': { populate: '*' },
            // 'web-three.nft-best-features': {
            //   populate: { features: { populate: '*' } }
            // },
            // 'web-three.other-service-sections': {
            //   populate: { data: { populate: '*' } }
            // },
            // 'web-three.nft-development-service-section': {
            //   populate: { data: { populate: '*' } }
            // },
            // 'web-three.nft-banner-section': { populate: '*' },
            // 'web-three.nft-marketing-section': {
            //   populate: { data: { populate: '*' } }
            // },

            // // Web-two sections
            // 'web-two.outsourcing-section': { populate: '*' },
            // 'web-two.staff-augmentation-section': {
            //   populate: { services: { populate: '*' } }
            // },
            // 'web-two.developers-section': {
            //   populate: { developers: { populate: '*' } }
            // },
            // 'web-two.it-benefits-section': { populate: '*' },
            // 'web-two.why-section': { populate: '*' },
            // 'web-two.countries-section': {
            //   populate: { countries: { populate: '*' } }
            // },
            // 'web-two.form-outsource-section': { populate: '*' },
            // 'web-two.hero-two': {
            //   populate: ['sideImage', 'backgroundImage']
            // },
            // 'web-two.app-services': {
            //   populate: { services: { populate: '*' } }
            // },
            // 'web-two.recent-project': {
            //   populate: { data: { populate: '*' } }
            // },
            // 'web-two.mobile-app-services-section': {
            //   populate: { services: { populate: '*' } }
            // },
            // 'web-two.ecommerce-strategy': {
            //   populate: { strategies: { populate: '*' } }
            // },
            // 'web-two.ecommerce-technology': {
            //   populate: { technologies: { populate: '*' } }
            // },
            // 'web-two.framework-comparison-section': {
            //   populate: { cards: { populate: '*' } }
            // },
            // 'web-two.why-hire-section': {
            //   populate: { cards: { populate: '*' } }
            // },
            // 'web-two.cta-section': { populate: '*' },
            // 'web-two.engagement-models-section': {
            //   populate: { models: { populate: '*' } }
            // },
            // 'web-two.advantages-section': {
            //   populate: { benefits: { populate: '*' } }
            // },
            // 'web-two.chatbot-sections': {
            //   populate: { cards: { populate: '*' } }
            // },
            // 'web-two.dev-section': { populate: '*' },
            // 'web-two.section-with-title-content-image': {
            //   populate: { image: true }
            // },
            // 'web-two.service-offerings-grid': {
            //   populate: { data: { populate: '*' } }
            // },
            // 'web-two.feature-cards-section': {
            //   populate: { cards: { populate: '*' } }
            // },

            // // FAQ sections
            // 'faq.faq-section': { populate: '*' },

            // // AI-ML sections
            // 'ai-ml-page.section-with-image': {
            //   populate: { logos: true, sideImage: true }
            // },
            // 'ai-ml-page.how-it-works-section': {
            //   populate: { steps: { populate: '*' } }
            // }
          }
        }
      }
    };

    const response: StrapiResponse<PageData[]> = await fetchAPI('/pages', params);

    console.log('Page data:', response);
    return response.data[0] || null;
  } catch (error) {
    console.error(`Error fetching page with slug "${slug}":`, error);
    return null;
  }
}
export { fetchAPI, API_URL };
