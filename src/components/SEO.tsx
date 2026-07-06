import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  type?: string; // Open Graph type
  robots?: string; // e.g., "index,follow" or "noindex,nofollow"
  structuredData?: Record<string, unknown> | string; // JSON-LD object or string
}

export const SITE_URL = "https://startilellc.com";
export const SITE_NAME = "Star Tile LLC";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;
const DEFAULT_TWITTER_CARD = "summary_large_image";

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  robots = "index, follow",
  structuredData,
}: SEOProps) {
  const { pathname } = useLocation();
  // Every route should declare a canonical; fall back to the current path so
  // new pages never ship without one.
  const canonicalUrl = canonical ?? `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  // Social crawlers require absolute image URLs; bundled assets resolve to
  // root-relative paths, so qualify them here.
  const ogImageUrl = ogImage.startsWith("/") ? `${SITE_URL}${ogImage}` : ogImage;
  const jsonLd =
    typeof structuredData === "string"
      ? structuredData
      : structuredData
        ? JSON.stringify(structuredData)
        : null;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {robots && <meta name="robots" content={robots} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImageUrl} />
      {ogImageUrl === DEFAULT_OG_IMAGE && <meta property="og:image:width" content="1200" />}
      {ogImageUrl === DEFAULT_OG_IMAGE && <meta property="og:image:height" content="630" />}
      <meta property="og:image:alt" content="Tile installation by Star Tile LLC" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={DEFAULT_TWITTER_CARD} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Structured Data */}
      {jsonLd && <script type="application/ld+json">{jsonLd}</script>}
    </Helmet>
  );
}
