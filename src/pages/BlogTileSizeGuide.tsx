import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { homeBreadcrumb, blogBreadcrumb, generateBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import heroImage from "@/assets/blog-tile-size-guide.jpg";
import smallFormatImage from "@/assets/small-format-tiles-bathroom.jpg";
import largeFormatImage from "@/assets/large-format-tiles-modern.jpg";
import subwayComparisonImage from "@/assets/subway-tile-comparison.jpg";
import sizeComparisonImage from "@/assets/tile-size-room-comparison.jpg";

const BlogTileSizeGuide = () => {
  const breadcrumbs = [
    homeBreadcrumb,
    blogBreadcrumb,
    { 
      name: "Tile Size Guide Portland", 
      url: "https://www.startilellc.com/blog/tile-size-guide-portland" 
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tile Size Guide Portland: Choosing the Right Tile Dimensions for Oregon Homes",
    "description": "Complete guide to choosing tile sizes for Portland homes. Learn which small, medium, or large format tiles work best for bathrooms, kitchens, and living spaces in Pacific Northwest homes.",
    "image": "https://www.startilellc.com" + heroImage,
    "datePublished": "2025-01-21",
    "dateModified": "2025-01-21",
    "author": {
      "@type": "Organization",
      "name": "Star Tile LLC"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Star Tile LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.startilellc.com/images/brand/star-tile-logo.png"
      }
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Choose the Right Tile Size for Your Portland Home",
    "description": "Step-by-step guide to selecting appropriate tile dimensions for different rooms in Pacific Northwest homes",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Assess Your Room Size",
        "text": "Measure your room dimensions and ceiling height. Smaller rooms (under 50 sq ft) typically work better with small to medium tiles, while larger spaces can accommodate large format tiles."
      },
      {
        "@type": "HowToStep",
        "name": "Consider Your Home's Age",
        "text": "Older Portland homes may have uneven subfloors. Large format tiles require flatter surfaces, so small to medium tiles may be more practical for vintage homes."
      },
      {
        "@type": "HowToStep",
        "name": "Evaluate Natural Light",
        "text": "In Portland's cloudy climate, larger tiles with fewer grout lines can help reflect more light and make rooms feel brighter."
      },
      {
        "@type": "HowToStep",
        "name": "Match Architectural Style",
        "text": "Choose tile sizes that complement your home's style - small format for Craftsman homes, large format for modern condos."
      },
      {
        "@type": "HowToStep",
        "name": "Factor in Maintenance",
        "text": "More grout lines mean more maintenance in Portland's damp climate. Large format tiles have fewer grout lines to clean and seal."
      }
    ]
  };

  const combinedSchema = [
    generateBreadcrumbJsonLd(breadcrumbs),
    articleSchema,
    howToSchema
  ];

  return (
    <>
      <SEO
        title="Tile Size Guide Portland: Small vs Large Format Tiles for Oregon Homes | Star Tile LLC"
        description="Complete guide to choosing tile sizes for Portland homes. Learn which small, medium, or large format tiles work best for bathrooms, kitchens, and living spaces in Pacific Northwest homes."
        canonical="https://www.startilellc.com/blog/tile-size-guide-portland"
        ogImage={"https://www.startilellc.com" + heroImage}
        type="article"
        structuredData={combinedSchema}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Design & Planning</span>
                <span>•</span>
                <time dateTime="2025-01-21">January 21, 2025</time>
                <span>•</span>
                <span>10 min read</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Tile Size Guide Portland: Choosing the Right Tile Dimensions for Oregon Homes
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Complete guide to selecting small, medium, or large format tiles for bathrooms, kitchens, and living spaces in Pacific Northwest homes.
              </p>
            </header>

            {/* Hero Image */}
            <img 
              src={heroImage}
              alt="Various tile sizes displayed side by side showing small, medium, and large format options"
              className="w-full h-auto rounded-lg mb-8 shadow-lg"
              loading="eager"
            />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2>Why Tile Size Matters More Than You Think</h2>
              <p>
                Choosing the right tile size is one of the most important decisions you'll make for your Portland home renovation. 
                The size of your tiles affects everything from the perceived size of your space to how much maintenance you'll need 
                in Portland's damp climate. Whether you're renovating a historic Craftsman bungalow in Eastmoreland or updating a 
                modern condo in the Pearl District, understanding tile dimensions will help you make the perfect choice.
              </p>

              <p>
                Portland's unique architecture—from vintage homes built in the early 1900s to sleek South Waterfront condos—requires 
                different approaches to tile selection. The right tile size can enhance natural light reflection (crucial during our 
                cloudy winters), accommodate uneven subfloors in older homes, and complement your home's architectural style.
              </p>

              <h2>Small Format Tiles (2x2" to 4x4")</h2>
              
              <img 
                src={smallFormatImage}
                alt="Small format mosaic and penny round tiles in a bright Portland bathroom"
                className="w-full h-auto rounded-lg my-6 shadow-md"
                loading="lazy"
              />

              <h3>Best Applications</h3>
              <ul>
                <li>Small bathrooms in vintage Portland homes</li>
                <li>Shower floors (better slip resistance)</li>
                <li>Accent walls and decorative borders</li>
                <li>Historic home restorations</li>
                <li>Kitchen backsplashes with vintage appeal</li>
              </ul>

              <h3>Advantages in Portland Homes</h3>
              <p>
                <strong>Superior Grip:</strong> More grout lines provide better traction, essential for Portland bathroom floors 
                where moisture is constant during our rainy season.
              </p>
              <p>
                <strong>Traditional Aesthetic:</strong> Perfect for maintaining the authentic character of Portland's beloved 
                Craftsman, Colonial, and Victorian homes. Small tiles complement the detailed woodwork and vintage fixtures 
                common in neighborhoods like Irvington and Laurelhurst.
              </p>
              <p>
                <strong>Flexible Installation:</strong> Small tiles can accommodate the slightly uneven subfloors often found 
                in homes built before modern construction standards.
              </p>

              <h3>Considerations</h3>
              <p>
                <strong>More Maintenance:</strong> More grout lines mean more sealing and cleaning in Portland's humid climate. 
                Plan to reseal grout annually to prevent mold and mildew.
              </p>
              <p>
                <strong>Higher Labor Costs:</strong> Small tiles require more time to install, which can increase labor costs. 
                Expect to pay $8-12 per square foot for professional installation in the Portland area.
              </p>
              <p>
                <strong>Can Make Rooms Look Smaller:</strong> In already compact spaces, busy small tile patterns can make rooms 
                feel more confined.
              </p>

              <h2>Medium Format Tiles (6x6" to 12x12")</h2>

              <h3>The "Safe Choice" for Portland Homes</h3>
              <p>
                Medium format tiles are the most versatile option for Portland homeowners. They work in virtually any space and 
                suit most architectural styles, from mid-century modern to contemporary ranch homes.
              </p>

              <h3>Best Applications</h3>
              <ul>
                <li>Standard bathroom floors (60-100 sq ft)</li>
                <li>Kitchen backsplashes</li>
                <li>Entryways and mudrooms</li>
                <li>Laundry rooms</li>
                <li>Traditional Portland bungalows</li>
              </ul>

              <h3>Why Portland Homeowners Love Medium Tiles</h3>
              <p>
                Medium tiles strike the perfect balance for most Portland homes. They're large enough to make spaces feel open 
                but small enough to work in compact Portland bathrooms (many older homes have 5x8 ft bathrooms). The 12x12" size 
                is particularly popular for its easy installation and timeless appeal.
              </p>

              <p>
                <strong>Practical Maintenance:</strong> Fewer grout lines than small tiles but easier to replace individual tiles 
                than large format options.
              </p>
              <p>
                <strong>Reasonable Cost:</strong> Medium tiles typically cost $6-10 per square foot installed in Portland, making 
                them budget-friendly while still looking high-end.
              </p>

              <h2>Large Format Tiles (12x24" to 24x48")</h2>

              <img 
                src={largeFormatImage}
                alt="Modern kitchen with large format 24x48 inch porcelain tiles creating a seamless look"
                className="w-full h-auto rounded-lg my-6 shadow-md"
                loading="lazy"
              />

              <h3>Best Applications</h3>
              <ul>
                <li>Modern Portland condos and lofts</li>
                <li>Open-plan kitchens and living areas</li>
                <li>Master bathrooms (100+ sq ft)</li>
                <li>Contemporary homes in Northwest Portland</li>
                <li>Commercial-style residential spaces</li>
              </ul>

              <h3>Advantages of Going Big</h3>
              <p>
                <strong>Minimal Grout Lines:</strong> This is huge for Portland's damp climate. Fewer grout lines mean less 
                maintenance, easier cleaning, and reduced risk of mold growth. You'll spend far less time scrubbing grout.
              </p>
              <p>
                <strong>Modern, Seamless Look:</strong> Large format tiles create a sleek, continuous surface that's perfect for 
                contemporary design. They're trending in Pearl District condos and modern Beaverton builds.
              </p>
              <p>
                <strong>Makes Rooms Feel Larger:</strong> The uninterrupted surface helps small to medium spaces feel more 
                expansive, which is valuable in Portland where lot sizes are often compact.
              </p>

              <h3>Important Considerations for Portland Installation</h3>
              <p>
                <strong>Subfloor Requirements:</strong> This is critical for older Portland homes. Large format tiles require 
                extremely flat subfloors (within 1/8" over 10 feet). Many homes built before 1970 will need subfloor leveling, 
                adding $2-4 per square foot to your project.
              </p>
              <p>
                <strong>Professional Installation Required:</strong> Large tiles are heavy and require specialized skills. Always 
                hire a CCB-licensed contractor experienced with large format installation. DIY installation often results in 
                lippage (uneven tile edges).
              </p>
              <p>
                <strong>Higher Material Waste:</strong> Cutting large tiles creates more waste, especially in bathrooms with 
                many corners and fixtures. Budget for 15-20% overage.
              </p>
              <p>
                <strong>Cost:</strong> Expect to pay $10-15 per square foot installed in Portland for quality large format tiles.
              </p>

              <h2>Specialty Tile Sizes</h2>

              <img 
                src={subwayComparisonImage}
                alt="Comparison of different subway tile layouts - running bond, stacked, and herringbone patterns"
                className="w-full h-auto rounded-lg my-6 shadow-md"
                loading="lazy"
              />

              <h3>Subway Tiles (3x6", 4x12")</h3>
              <p>
                Subway tiles remain Portland's favorite backsplash choice. The classic 3x6" size works in any style home, from 
                1920s bungalows to brand-new builds. The 4x12" version offers a more contemporary take while maintaining the 
                timeless subway aesthetic.
              </p>
              <p>
                <strong>Portland Popularity:</strong> Walk into any local tile showroom and you'll see dozens of subway tile options. 
                They're beloved for good reason—versatile, timeless, and easy to source locally.
              </p>

              <h3>Hexagons and Penny Rounds</h3>
              <p>
                Small-format specialty shapes (1" penny rounds, 2" hexagons) create visual interest on bathroom floors and shower 
                walls. They're trending in Portland's craft cocktail bars and upscale restaurants, which homeowners are now 
                bringing into their own spaces.
              </p>

              <h3>Wood-Plank Tiles (6x36", 8x48")</h3>
              <p>
                Wood-look plank tiles are exploding in popularity in Northwest Portland and West Linn. They offer the warmth of 
                hardwood with tile's durability—perfect for Portland homes where real wood floors can suffer from moisture damage.
              </p>
              <p>
                The 8x48" size creates the most realistic wood floor appearance and works beautifully in living rooms, dining areas, 
                and basements where moisture is a concern.
              </p>

              <h2>Room-by-Room Tile Size Recommendations for Portland Homes</h2>

              <img 
                src={sizeComparisonImage}
                alt="Split comparison showing same bathroom with small tiles versus large tiles"
                className="w-full h-auto rounded-lg my-6 shadow-md"
                loading="lazy"
              />

              <h3>Small Bathroom (Under 50 sq ft)</h3>
              <p><strong>Recommended:</strong> 4x4" to 8x8" floor tiles, 3x6" subway wall tiles</p>
              <p>
                Many Portland bungalows have compact 5x7 ft bathrooms. Small to medium tiles prevent excessive cutting and 
                maintain proper scale. Avoid tiles larger than 12x12" in these tight spaces.
              </p>

              <h3>Master Bathroom (75-150 sq ft)</h3>
              <p><strong>Recommended:</strong> 12x12" to 12x24" floor tiles, various sizes for walls</p>
              <p>
                Master baths can accommodate larger tiles that create a spa-like atmosphere. The 12x24" size is ideal—large 
                enough for a modern look but manageable for installation around toilets, vanities, and tubs.
              </p>

              <h3>Kitchen Floor</h3>
              <p><strong>Recommended:</strong> 12x24" or larger</p>
              <p>
                Open-plan Portland kitchens benefit from large format tiles that create visual continuity with living spaces. 
                The larger size makes the kitchen feel more expansive, which is valuable in homes where the kitchen is the 
                social hub.
              </p>

              <h3>Kitchen Backsplash</h3>
              <p><strong>Recommended:</strong> 3x6" subway or 4x4" square tiles</p>
              <p>
                Backsplashes are accent features where smaller tiles shine. The 3x6" subway tile remains Portland's overwhelming 
                favorite, but glass mosaics and 2x2" squares are also popular for adding color and personality.
              </p>

              <h3>Mudroom/Entryway</h3>
              <p><strong>Recommended:</strong> 6x6" to 12x12"</p>
              <p>
                Portland mudrooms need durable, slip-resistant tiles that can handle constant moisture from rainy boots and wet 
                coats. Medium-format tiles with textured surfaces work best. Consider darker colors and patterns that hide dirt.
              </p>

              <h3>Living Areas and Open Spaces</h3>
              <p><strong>Recommended:</strong> 12x24" to 24x24" large format</p>
              <p>
                For Portland homes with open floor plans, large format tiles create seamless flow between spaces. The 24x24" 
                size is trending for its dramatic, modern aesthetic.
              </p>

              <h2>Portland-Specific Considerations</h2>

              <h3>Older Home Subfloor Limitations</h3>
              <p>
                If you live in a Portland home built before 1960, your subfloors may not meet the flatness requirements for 
                large format tiles. Before committing to 24x48" tiles, have a contractor assess your subfloor. Leveling costs 
                can add $1,500-3,000 to a typical bathroom project.
              </p>

              <h3>Natural Light Challenges</h3>
              <p>
                Portland averages only 144 sunny days per year. Tile size affects how light bounces around your space. Larger 
                tiles with glossy finishes reflect more light, helping brighten rooms during our gray winters. Light-colored 
                large format tiles can make a dramatic difference in north-facing rooms.
              </p>

              <h3>Resale Value in Portland Neighborhoods</h3>
              <p>
                When choosing tile sizes, consider your neighborhood's character. In historic areas like Alameda or Eastmoreland, 
                small to medium tiles that respect the home's age tend to appeal to buyers. In modern neighborhoods like South 
                Waterfront or Northwest Portland, large format tiles align with buyer expectations.
              </p>

              <h3>CCB Contractor Requirements</h3>
              <p>
                Oregon requires contractors to be licensed with the Construction Contractors Board (CCB). When installing large 
                format tiles, verify your contractor has specific experience with this specialized work. Ask for references and 
                photos of previous large format installations.
              </p>

              <h2>Cost Comparison: Portland Installation Prices</h2>

              <h3>Small Format Tiles (2x2" to 4x4")</h3>
              <ul>
                <li><strong>Materials:</strong> $3-8 per square foot</li>
                <li><strong>Labor:</strong> $8-12 per square foot</li>
                <li><strong>Total:</strong> $11-20 per square foot installed</li>
                <li><strong>Why Higher Labor:</strong> More tiles to set, more cutting, more grout lines</li>
              </ul>

              <h3>Medium Format Tiles (6x6" to 12x12")</h3>
              <ul>
                <li><strong>Materials:</strong> $3-10 per square foot</li>
                <li><strong>Labor:</strong> $6-10 per square foot</li>
                <li><strong>Total:</strong> $9-20 per square foot installed</li>
                <li><strong>Sweet Spot:</strong> Best balance of cost and aesthetics</li>
              </ul>

              <h3>Large Format Tiles (12x24" to 24x48")</h3>
              <ul>
                <li><strong>Materials:</strong> $5-15 per square foot</li>
                <li><strong>Labor:</strong> $10-15 per square foot</li>
                <li><strong>Additional Costs:</strong> Subfloor leveling ($2-4/sq ft), premium thin-set mortar</li>
                <li><strong>Total:</strong> $15-30+ per square foot installed</li>
                <li><strong>Why Higher Cost:</strong> Specialized installation, more waste, heavier materials</li>
              </ul>

              <h3>Additional Portland Market Factors</h3>
              <p>
                Portland's competitive contractor market means prices can vary significantly. Always get 3 quotes for major tile 
                projects. Peak season (April-September) often sees 10-15% higher labor costs due to demand.
              </p>

              <h2>Installation Tips: When to DIY vs. Hire a Professional</h2>

              <h3>DIY-Friendly Projects</h3>
              <ul>
                <li>Small backsplashes (under 30 sq ft) with 3x6" or 4x4" tiles</li>
                <li>Accent walls with medium format tiles</li>
                <li>Small bathroom floors (under 40 sq ft) using tiles up to 12x12"</li>
              </ul>

              <h3>Always Hire a Professional For:</h3>
              <ul>
                <li><strong>Large format tiles:</strong> Any tile over 12x24" requires professional expertise</li>
                <li><strong>Shower installations:</strong> Waterproofing is critical in Portland's climate</li>
                <li><strong>Heated floor systems:</strong> Combines electrical and tile work</li>
                <li><strong>Older Portland homes:</strong> Subfloor challenges require experience</li>
                <li><strong>High-value materials:</strong> Natural stone and premium porcelain are too expensive to risk DIY mistakes</li>
              </ul>

              <h3>What to Look for in a Portland Tile Contractor</h3>
              <ul>
                <li><strong>Active CCB license:</strong> Search the contractor's name at <a href="https://www.ccb.state.or.us/" target="_blank" rel="noopener noreferrer">ccb.state.or.us</a></li>
                <li><strong>Insurance:</strong> General liability and workers compensation</li>
                <li><strong>Local references:</strong> Ask for 3 recent Portland-area projects</li>
                <li><strong>Large format experience:</strong> If installing 12x24" or larger, ask for specific references</li>
                <li><strong>Warranty:</strong> Reputable contractors offer 1-2 year installation warranties</li>
              </ul>

              <h2>Final Recommendations</h2>

              <p>
                Choosing the right tile size for your Portland home comes down to balancing aesthetics, practicality, and budget. 
                Here's our quick reference guide:
              </p>

              <div className="bg-muted p-6 rounded-lg my-6">
                <h3 className="mt-0">Star Tile LLC's Portland Tile Size Recommendations</h3>
                <ul className="mb-0">
                  <li><strong>Historic Portland homes (pre-1950):</strong> Small to medium tiles (4x4" to 12x12") that work with uneven subfloors</li>
                  <li><strong>Mid-century homes (1950-1980):</strong> Medium tiles (6x6" to 12x24") for versatility</li>
                  <li><strong>Modern homes (1980+):</strong> Large format tiles (12x24" to 24x48") for contemporary look</li>
                  <li><strong>Small bathrooms:</strong> 4x4" to 8x8" to maintain proper scale</li>
                  <li><strong>Large bathrooms:</strong> 12x12" to 12x24" for spa-like feel</li>
                  <li><strong>Kitchen floors:</strong> 12x24" or larger for seamless appearance</li>
                  <li><strong>Backsplashes:</strong> 3x6" subway tiles (timeless Portland favorite)</li>
                  <li><strong>Budget-conscious projects:</strong> 12x12" medium format (best value)</li>
                  <li><strong>Low maintenance priority:</strong> Large format with minimal grout lines</li>
                </ul>
              </div>

              <h2>Ready to Choose the Perfect Tile Size for Your Portland Home?</h2>

              <p>
                Star Tile LLC has been helping Portland homeowners select and install the perfect tiles for over a decade. We 
                understand Portland's unique homes, from vintage Craftsmans to modern condos, and we know which tile sizes work 
                best for each.
              </p>

              <p>
                <strong>We offer free consultations where we'll:</strong>
              </p>
              <ul>
                <li>Assess your space and subfloor condition</li>
                <li>Recommend tile sizes based on your home's age and style</li>
                <li>Provide detailed cost estimates</li>
                <li>Show you samples from our extensive tile library</li>
                <li>Explain how different sizes will look in your specific space</li>
              </ul>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <h3 className="mt-0 text-primary">Schedule Your Free Tile Size Consultation</h3>
                <p className="mb-4">
                  Let us help you choose the perfect tile size for your Portland home renovation. Our experienced team will 
                  guide you through every decision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      View Our Portfolio
                    </Button>
                  </Link>
                </div>
              </div>

              <h3>Related Resources</h3>
              <ul>
                <li><Link to="/blog/best-tile-materials-portland-climate" className="text-primary hover:underline">Best Tile Materials for Portland's Climate</Link></li>
                <li><Link to="/blog/budgeting-tile-project-portland" className="text-primary hover:underline">How to Budget for Your Portland Tile Project</Link></li>
                <li><Link to="/blog/choosing-tile-contractor-portland" className="text-primary hover:underline">Choosing the Right Tile Contractor in Portland</Link></li>
                <li><Link to="/tile-pattern-comparison" className="text-primary hover:underline">Tile Pattern Comparison Tool</Link></li>
                <li><Link to="/tile-cost-calculator" className="text-primary hover:underline">Tile Project Cost Calculator</Link></li>
              </ul>

              <div className="border-t pt-6 mt-8">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>About the Author:</strong> Star Tile LLC is a CCB-licensed tile installation company serving the 
                  Portland metro area. We specialize in residential tile installation for bathrooms, kitchens, and custom projects. 
                  With over a decade of experience in Portland homes, we understand the unique challenges of Pacific Northwest 
                  tile installation.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Contact us:</strong> <a href="tel:+15033941154" className="text-primary hover:underline">(503) 394-1154</a> | 
                  <a href="mailto:StarTileLLC@gmail.com" className="text-primary hover:underline ml-2">StarTileLLC@gmail.com</a> | 
                  Serving Portland, Beaverton, Gresham, Lake Oswego, Tigard, and surrounding areas
                </p>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogTileSizeGuide;