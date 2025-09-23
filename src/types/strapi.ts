export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  };
}

export interface AboutPageData {
  id: number;
  attributes: {
    title: string;
    description: string;
    companyLocation: string;
    approachTitle: string;
    approachDescription: string;
    differentiatorsTitle: string;
    bannerTitle: string;
    bannerDescription: string;
    heroImage: {
      data: StrapiMedia | null;
    };
    aboutImage: {
      data: StrapiMedia | null;
    };
    approachImage: {
      data: StrapiMedia | null;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface FeatureData {
  id: number;
  attributes: {
    title: string;
    description: string;
    dotColor: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface StatisticData {
  id: number;
  attributes: {
    value: string;
    label: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface CapabilityData {
  id: number;
  attributes: {
    title: string;
    href: string;
    description?: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface CaseStudyData {
  id: number;
  attributes: {
    title: string;
    description: string;
    link?: string;
    image: {
      data: StrapiMedia | null;
    };
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface IndustryData {
  id: number;
  attributes: {
    title: string;
    description: string;
    image: {
      data: StrapiMedia | null;
    };
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface GlobalSettingData {
  id: number;
  attributes: {
    siteName: string;
    siteDescription: string;
    logo: {
      data: StrapiMedia | null;
    };
    favicon: {
      data: StrapiMedia | null;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface PageSection {
  id: number;
  __component: string;
  [key: string]: any; // Dynamic properties based on section type
}

export interface PageSEO {
  id: number;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  metaImage?: {
    data: StrapiMedia | null;
  };
}

export interface PageData {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description?: string;
    seo?: PageSEO;
    sections?: PageSection[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
