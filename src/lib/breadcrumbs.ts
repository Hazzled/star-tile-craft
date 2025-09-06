export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbJsonLd(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

// Common breadcrumb patterns
export const homeBreadcrumb: BreadcrumbItem = {
  name: "Home",
  url: "https://startilellc.com"
};

export const servicesBreadcrumb: BreadcrumbItem = {
  name: "Services",
  url: "https://startilellc.com/services"
};

export const portfolioBreadcrumb: BreadcrumbItem = {
  name: "Portfolio", 
  url: "https://startilellc.com/portfolio"
};

export const blogBreadcrumb: BreadcrumbItem = {
  name: "Blog",
  url: "https://startilellc.com/blog"
};