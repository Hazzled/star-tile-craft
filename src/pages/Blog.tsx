import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette } from "lucide-react";
import SEO from "@/components/SEO";
import { generateBreadcrumbJsonLd, homeBreadcrumb } from "@/lib/breadcrumbs";
import blogHeroImage from "@/assets/blog-hero-image.jpg";
import blogBudgetingTile from "@/assets/blog-budgeting-tile.jpg";
import blogWaterproofing from "@/assets/blog-waterproofing.jpg";
import blogTileTrends from "@/assets/blog-tile-trends.jpg";
import blogTileStores from "@/assets/blog-tile-stores.jpg";
import blogChoosingContractor from "@/assets/blog-choosing-contractor.jpg";
import blogGroutRepair from "@/assets/blog-grout-repair.jpg";
import tileInstallationMistakes from "@/assets/tile-installation-mistakes.jpg";
import kitchenBacksplashIdeas from "@/assets/kitchen-backsplash-ideas.jpg";
import tileProjectBudgeting from "@/assets/tile-project-budgeting.jpg";
import blogTileMaterials from "@/assets/blog-tile-materials.jpg";

const Blog = () => {
const blogPosts = [
    {
      title: "Best Tile Materials for Portland's Climate: A Complete Guide",
      excerpt: "Discover the best tile materials for Portland homes. Expert guide to choosing porcelain, ceramic, and natural stone tiles for our Pacific Northwest climate.",
      date: "January 20, 2025",
      slug: "best-tile-materials-portland-climate",
      category: "Materials Guide",
      readTime: "11 min read",
      featured: true,
      image: blogTileMaterials
    },
    {
      title: "Common Tile Installation Mistakes and How to Avoid Them in Portland Homes",
      excerpt: "Learn about the most common tile installation mistakes Portland homeowners make and how professional installers prevent costly failures in Oregon's unique climate.",
      slug: "tile-installation-mistakes-portland",
      date: "January 20, 2025",
      category: "Expert Tips",
      readTime: "10 min read",
      featured: true,
      image: tileInstallationMistakes
    },
    {
      title: "Kitchen Backsplash Ideas for 2025: Transform Your Space with Style and Functionality",
      excerpt: "Explore top kitchen backsplash ideas, from modern designs to affordable options. Discover white kitchen backsplash ideas, cheap backsplash ideas, and 2025 trends like green kitchen backsplash tiles.",
      slug: "kitchen-backsplash-ideas-2025",
      date: "January 19, 2025",
      category: "Design & Trends",
      readTime: "12 min read",
      featured: false,
      image: kitchenBacksplashIdeas
    },
    {
      title: "Your 2025 Guide to Budgeting a Tile Project in Portland, OR",
      excerpt: "Understanding tile installation costs in Portland: materials, labor, complexity, and pro tips to plan your 2025 tile project successfully.",
      slug: "budgeting-tile-project-portland",
      date: "January 19, 2025",
      category: "Planning & Budgeting",
      readTime: "8 min read",
      featured: true,
      image: tileProjectBudgeting
    },
    {
      title: "Waterproofing Before Tile: The Critical Step Portland Homeowners Can't Skip",
      excerpt: "Learn why waterproofing before tile installation is essential in Portland's damp climate. Expert guide to shower waterproofing methods and contractor selection.",
      slug: "waterproofing-before-tile",
      date: "January 19, 2025",
      category: "Technical Guide",
      readTime: "10 min read",
      featured: true,
      image: blogWaterproofing
    },
    {
      title: "Top Tile Trends in Portland Homes (2025 Update)",
      excerpt: "Discover the hottest tile trends transforming Portland homes in 2025. From sustainable materials to bold patterns, see what's trending in Pacific Northwest design.",
      slug: "tile-trends-portland",
      date: "January 6, 2025",
      category: "Design & Trends",
      readTime: "6 min read",
      featured: true,
      image: blogTileTrends
    },
    {
      title: "Best Tile Stores in Portland for Homeowners & Contractors",
      excerpt: "Complete guide to Portland's top tile suppliers including Bedrosians, Oregon Tile & Marble, and Pratt & Larson. Find the best selection and prices for your project.",
      slug: "best-tile-stores-portland",
      date: "January 6, 2025",
      category: "Resources",
      readTime: "7 min read",
      featured: false,
      image: blogTileStores
    },
    {
      title: "How to Choose the Right Tile Contractor in Portland",
      excerpt: "Essential guide to selecting a licensed, insured tile contractor in Portland. Learn about CCB licensing, insurance requirements, and red flags to avoid.",
      slug: "choosing-tile-contractor-portland",
      date: "January 6, 2025",
      category: "Planning & Budgeting",
      readTime: "8 min read",
      featured: false,
      image: blogChoosingContractor
    },
    {
      title: "How to Fix Cracked Grout: Portland Homeowner's Complete Guide 2025",
      excerpt: "Learn how to fix cracked grout in Portland's damp climate. Step-by-step DIY guide plus when to call professionals for grout repair in the Pacific Northwest.",
      slug: "fix-cracked-grout",
      date: "January 19, 2025",
      category: "DIY & Maintenance",
      readTime: "7 min read",
      featured: false,
      image: blogGroutRepair
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Star Tile LLC Blog",
    "description": "Expert tile installation guides, tips, and insights for Portland area homeowners",
    "publisher": {
      "@type": "Organization",
      "name": "Star Tile LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.startilellc.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.startilellc.com/blog"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://www.startilellc.com/blog/${post.slug}`,
      "datePublished": "2025-01-19",
      "author": {
        "@type": "Organization",
        "name": "Star Tile LLC"
      }
    }))
  };

  const breadcrumbs = generateBreadcrumbJsonLd([
    homeBreadcrumb,
    { name: "Blog", url: "https://www.startilellc.com/blog" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Tile Installation Blog Portland OR | DIY Tips & Professional Contractor Guides"
        description="Portland tile blog: PNW climate tips, cost guides, choosing contractors, DIY repairs. 10+ years of local expertise."
        canonical="https://www.startilellc.com/blog"
        type="website"
        structuredData={[structuredData, breadcrumbs]}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${blogHeroImage})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
              Tile Installation Expertise
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Professional insights, expert tips, and comprehensive guides for Portland area homeowners
            </p>
            <p className="text-lg text-primary-foreground/80">
              From Beaverton to Gresham, learn from over 10 years of tile installation experience in the Pacific Northwest
            </p>
            
            {/* Tools CTA */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white text-primary p-3 rounded-lg">
                    <Palette className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg font-montserrat">Try Our Free Grout Color Visualizer</h3>
                    <p className="text-sm text-primary-foreground/80">See how different grout colors transform your tile choice</p>
                  </div>
                </div>
                <Link to="/grout-color-visualizer">
                  <button className="w-full bg-white text-primary hover:bg-white/90 rounded-md py-3 font-medium transition-colors">
                    Launch Visualizer →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link> / Blog
        </nav>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300 bg-card border-border">
                <CardContent className="p-0">
                  <div 
                    className="h-48 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-primary hover:text-primary/80 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">All Articles</h2>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div 
                      className="md:w-48 h-32 bg-cover bg-center rounded-lg flex-shrink-0"
                      style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                      >
                        Read Full Article
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mt-16 pt-16 border-t border-border">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">Planning & Budgeting</h3>
                <p className="text-sm text-muted-foreground">
                  Cost guides, project planning, and budgeting tips for Portland homeowners
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">Technical Guides</h3>
                <p className="text-sm text-muted-foreground">
                  Professional techniques, waterproofing, and installation best practices
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">DIY & Maintenance</h3>
                <p className="text-sm text-muted-foreground">
                  DIY repairs, maintenance tips, and when to call professionals
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">Design & Trends</h3>
                <p className="text-sm text-muted-foreground">
                  Latest tile trends, design inspiration, and style guides
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-montserrat font-bold mb-4">Stay Updated with Tile Tips</h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Get expert tile installation tips and Portland home improvement insights delivered to your inbox
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
              >
                Contact Us for Expert Advice
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Blog;
