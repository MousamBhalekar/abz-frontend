# DynamicSectionRender Component

This component handles dynamic rendering of Strapi CMS sections on your Next.js 15 pages.

## Features

- **Server-Side Rendering (SSR)**: Fetches data on the server for better SEO and performance
- **Dynamic Metadata**: Generates SEO metadata automatically from Strapi
- **Flexible Section Rendering**: Supports multiple section types from Strapi
- **Fallback Support**: Graceful handling of missing or unknown section types
- **TypeScript Support**: Full type safety with TypeScript interfaces

## How It Works

### 1. Dynamic Page Routes (`/[slug]/page.tsx`)

- Fetches page data from Strapi using the slug
- Generates metadata for SEO (title, description, Open Graph, Twitter cards)
- Renders sections dynamically using `DynamicSectionRender`
- Shows 404 page if content doesn't exist

### 2. Home Page (`/page.tsx`)

- Tries to fetch content from Strapi for "home" slug
- Falls back to hardcoded content if no Strapi content exists
- Generates metadata from Strapi or uses defaults

### 3. Section Renderer (`DynamicSectionRender.tsx`)

Maps Strapi section types to React components:

- `hero.default` → `HeroBanner`
- `content.logo-section` → `LogoListSection`
- `content.capabilities-section` → `OurCapabilities`
- `content.case-studies-section` → `OurCaseStudy`
- `content.industries-section` → `IndustriesWeServe`
- `content.text-section` → Simple text content
- `content.image-text-section` → Image with text layout

## Usage Examples

### Adding New Section Types

To add support for a new section type, add a case to the switch statement in `DynamicSectionRender.tsx`:

```tsx
case 'content.your-new-section':
  return (
    <YourNewComponent
      key={section.id}
      title={section.title}
      // ... other props from section
    />
  );
```

### Creating Pages in Strapi

1. Create a page in Strapi with a slug (e.g., "about", "services")
2. Add sections to the page using the dynamic zone
3. The page will be automatically available at `/[slug]`

### SEO Configuration

Add SEO component to your Strapi page:
- Meta Title
- Meta Description
- Keywords
- Meta Image (for social sharing)

## File Structure

```
src/app/
├── [slug]/
│   ├── page.tsx          # Dynamic page route with SSR
│   └── not-found.tsx     # 404 page for missing content
├── page.tsx              # Home page with fallback support
└── component/elements/dynamic-section-render/
    ├── DynamicSectionRender.tsx  # Main renderer component
    ├── index.ts                  # Export file
    └── README.md                 # This file
```

## API Usage

The system uses the `getPageBySlug()` function from `/lib/strapi.ts`:

```tsx
const pageData = await getPageBySlug('your-slug');
```

This returns a `PageData` object with:
- `attributes.title` - Page title
- `attributes.slug` - URL slug
- `attributes.seo` - SEO metadata
- `attributes.sections` - Array of page sections
