import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  type?: string; // Open Graph type
  robots?: string; // e.g., "index,follow" or "noindex,nofollow"
  structuredData?: Record<string, any> | string; // JSON-LD object or string
}

const DEFAULT_OG_IMAGE = "https://lovable.dev/opengraph-image-p98pqg.png";
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
  const jsonLd = typeof structuredData === "string" ? structuredData : structuredData ? JSON.stringify(structuredData) : null;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {robots && <meta name="robots" content={robots} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* IndexNow for faster search engine indexing */}
<meta name="msvalidate.01" content="1146586dfbb546c5840d75ae3040e784" />
      
      {/* Local SEO Geographic Tags */}
      <meta name="geo.region" content="US-OR" />
      <meta name="geo.placename" content="Portland" />
      <meta name="geo.position" content="45.5152;-122.6784" />
      <meta name="ICBM" content="45.5152, -122.6784" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />} 
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={DEFAULT_TWITTER_CARD} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{jsonLd}</script>
      )}
    </Helmet>
  );
}
