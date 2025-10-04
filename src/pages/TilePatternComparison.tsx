import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Download, Share2, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import OptimizedImage from "@/components/OptimizedImage";

// Import pattern images
import patternBrick from "@/assets/pattern-brick.jpg";
import patternHerringbone from "@/assets/pattern-herringbone.jpg";
import patternGrid from "@/assets/pattern-grid.jpg";
import patternDiagonal from "@/assets/pattern-diagonal.jpg";
import patternChevron from "@/assets/pattern-chevron.jpg";
import patternHexagon from "@/assets/pattern-hexagon.jpg";

// Import tile color options
import subwayWhite from "@/assets/tile-subway-white.jpg";
import largeGray from "@/assets/tile-large-gray.jpg";
import travertineBeige from "@/assets/tile-travertine-beige.jpg";
import blackMatte from "@/assets/tile-black-matte.jpg";

const tileColors = [
  { id: "white", name: "Bright White", image: subwayWhite },
  { id: "gray", name: "Modern Gray", image: largeGray },
  { id: "beige", name: "Warm Beige", image: travertineBeige },
  { id: "black", name: "Matte Black", image: blackMatte },
];

const patterns = [
  {
    id: "brick",
    name: "Brick/Subway",
    description: "Classic offset pattern, timeless and versatile",
    image: patternBrick,
    bestFor: ["Backsplashes", "Shower walls", "Traditional kitchens"],
    difficulty: "Easy"
  },
  {
    id: "herringbone",
    name: "Herringbone",
    description: "Elegant V-pattern creates visual interest",
    image: patternHerringbone,
    bestFor: ["Feature walls", "Floors", "Upscale bathrooms"],
    difficulty: "Advanced"
  },
  {
    id: "grid",
    name: "Grid/Stack",
    description: "Straight, modern alignment for clean look",
    image: patternGrid,
    bestFor: ["Modern spaces", "Large format tiles", "Minimalist design"],
    difficulty: "Easy"
  },
  {
    id: "diagonal",
    name: "Diagonal",
    description: "45° angle makes spaces appear larger",
    image: patternDiagonal,
    bestFor: ["Small bathrooms", "Floors", "Creating flow"],
    difficulty: "Moderate"
  },
  {
    id: "chevron",
    name: "Chevron",
    description: "Sharp V-pattern with end-to-end alignment",
    image: patternChevron,
    bestFor: ["Statement floors", "Modern kitchens", "Luxury spaces"],
    difficulty: "Advanced"
  },
  {
    id: "hexagon",
    name: "Hexagon",
    description: "Honeycomb pattern for unique visual appeal",
    image: patternHexagon,
    bestFor: ["Floors", "Accent walls", "Contemporary design"],
    difficulty: "Moderate"
  },
];

export default function TilePatternComparison() {
  const [selectedTileColor, setSelectedTileColor] = useState(tileColors[0]);
  const [selectedPattern, setSelectedPattern] = useState(patterns[0]);
  const [compareMode, setCompareMode] = useState(false);
  const [comparePattern, setComparePattern] = useState(patterns[1]);

  const handleShare = async () => {
    const shareText = `Check out this tile pattern: ${selectedPattern.name} with ${selectedTileColor.name} tiles!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Star Tile Pattern Comparison Tool",
          text: shareText,
          url: window.location.href,
        });
        toast.success("Shared successfully!");
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(`${shareText} - ${window.location.href}`);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleSave = () => {
    const selection = {
      tileColor: selectedTileColor.name,
      pattern: selectedPattern.name,
    };
    localStorage.setItem("patternComparisonSelection", JSON.stringify(selection));
    toast.success("Selection saved! View it anytime.");
  };

  const handleReset = () => {
    setSelectedTileColor(tileColors[0]);
    setSelectedPattern(patterns[0]);
    setCompareMode(false);
    setComparePattern(patterns[1]);
    toast.info("Reset to default settings");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Star Tile Pattern Comparison Tool",
    "applicationCategory": "DesignApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free interactive tool to compare tile patterns and layouts. Perfect for Portland homeowners planning tile installations.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Star Tile",
      "areaServed": "Portland, OR"
    }
  };

  return (
    <>
      <SEO
        title="Tile Pattern Comparison Tool - Star Tile Portland | Free Visualizer"
        description="Compare tile patterns with our free interactive tool! See herringbone, brick, chevron, diagonal and more patterns side-by-side. Perfect for Portland homeowners planning tile projects."
        canonical="https://startilepdx.com/tile-pattern-comparison"
        structuredData={structuredData}
      />
      
      <Helmet>
        <meta name="keywords" content="tile pattern comparison, tile layout visualizer Portland, herringbone vs brick pattern, tile pattern ideas Oregon, tile layout tool Portland" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Free Interactive Tool</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                Tile Pattern Comparison Tool
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Compare different tile patterns side-by-side to find the perfect layout for your space. 
                See how herringbone, brick, chevron, and other patterns transform your Portland home.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:503-555-0123">
                    <Phone className="mr-2 h-5 w-5" />
                    Call for Free Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Request Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Comparison Tool */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Controls Panel */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    {/* Tile Color Selection */}
                    <div>
                      <h3 className="font-semibold mb-4 font-montserrat">Select Tile Color</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {tileColors.map((tile) => (
                          <button
                            key={tile.id}
                            onClick={() => setSelectedTileColor(tile)}
                            className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                              selectedTileColor.id === tile.id
                                ? "border-primary ring-2 ring-primary/20"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <OptimizedImage
                              src={tile.image}
                              alt={tile.name}
                              className="w-full h-20 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                              <span className="text-white text-xs font-medium">{tile.name}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Pattern Selection */}
                    <div>
                      <h3 className="font-semibold mb-4 font-montserrat">Choose Pattern</h3>
                      <div className="space-y-2">
                        {patterns.map((pattern) => (
                          <button
                            key={pattern.id}
                            onClick={() => setSelectedPattern(pattern)}
                            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                              selectedPattern.id === pattern.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <OptimizedImage
                                src={pattern.image}
                                alt={pattern.name}
                                className="w-16 h-16 rounded object-cover"
                              />
                              <div className="flex-1">
                                <div className="font-medium text-sm">{pattern.name}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  {pattern.description}
                                </div>
                                <Badge variant="outline" className="mt-2 text-xs">
                                  {pattern.difficulty}
                                </Badge>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 pt-4 border-t">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setCompareMode(!compareMode)}
                      >
                        {compareMode ? "Single View" : "Compare Patterns"}
                      </Button>
                      <Button variant="outline" className="w-full" onClick={handleShare}>
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                      <Button variant="outline" className="w-full" onClick={handleSave}>
                        <Download className="mr-2 h-4 w-4" />
                        Save Selection
                      </Button>
                      <Button variant="ghost" className="w-full" onClick={handleReset}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Reset
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Preview Area */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 font-montserrat text-lg">
                      {compareMode ? "Pattern Comparison" : "Pattern Preview"}
                    </h3>
                    
                    <div className={`grid ${compareMode ? "md:grid-cols-2" : "grid-cols-1"} gap-6`}>
                      {/* Main Preview */}
                      <div>
                        <div className="relative rounded-lg overflow-hidden border-4 border-border">
                          <OptimizedImage
                            src={selectedPattern.image}
                            alt={`${selectedPattern.name} pattern`}
                            className="w-full aspect-[4/3] object-cover"
                          />
                        </div>
                        <div className="mt-3 p-4 bg-muted rounded-md">
                          <p className="font-semibold text-base mb-2">{selectedPattern.name}</p>
                          <p className="text-sm text-muted-foreground mb-3">
                            {selectedPattern.description}
                          </p>
                          <div className="space-y-1">
                            <p className="text-xs font-medium">Best for:</p>
                            {selectedPattern.bestFor.map((use, idx) => (
                              <p key={idx} className="text-xs text-muted-foreground">
                                • {use}
                              </p>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-border/50">
                            <p className="text-xs">
                              <strong>Installation:</strong> {selectedPattern.difficulty}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Comparison Preview */}
                      {compareMode && (
                        <div>
                          <div className="mb-3">
                            <label className="text-sm font-medium mb-2 block">Compare with:</label>
                            <select
                              value={comparePattern.id}
                              onChange={(e) => setComparePattern(patterns.find(p => p.id === e.target.value) || patterns[0])}
                              className="w-full p-2 border-2 border-border rounded-md bg-background text-foreground"
                            >
                              {patterns.filter(p => p.id !== selectedPattern.id).map((pattern) => (
                                <option key={pattern.id} value={pattern.id}>
                                  {pattern.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <div className="relative rounded-lg overflow-hidden border-4 border-border">
                            <OptimizedImage
                              src={comparePattern.image}
                              alt={`${comparePattern.name} pattern`}
                              className="w-full aspect-[4/3] object-cover"
                            />
                          </div>
                          <div className="mt-3 p-4 bg-muted rounded-md">
                            <p className="font-semibold text-base mb-2">{comparePattern.name}</p>
                            <p className="text-sm text-muted-foreground mb-3">
                              {comparePattern.description}
                            </p>
                            <div className="space-y-1">
                              <p className="text-xs font-medium">Best for:</p>
                              {comparePattern.bestFor.map((use, idx) => (
                                <p key={idx} className="text-xs text-muted-foreground">
                                  • {use}
                                </p>
                              ))}
                            </div>
                            <div className="mt-3 pt-3 border-t border-border/50">
                              <p className="text-xs">
                                <strong>Installation:</strong> {comparePattern.difficulty}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="mt-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 font-montserrat">
                      Ready to Install Your Perfect Pattern?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Get professional tile installation with expert pattern layout for your Portland home.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Button size="lg" asChild>
                        <a href="/contact">Get Free Quote</a>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a href="/portfolio">View Our Work</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center font-montserrat">
                Tile Pattern Guide for Portland Homes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 font-montserrat">Popular Patterns in 2025</h3>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>🔥 <strong>Herringbone:</strong> Classic elegance, trending in bathrooms</li>
                      <li>🔥 <strong>Chevron:</strong> Modern luxury for statement floors</li>
                      <li>🔥 <strong>Grid/Stack:</strong> Minimalist look with large format tiles</li>
                      <li>🔥 <strong>Hexagon:</strong> Contemporary choice for unique spaces</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 font-montserrat">Pattern & Space Size</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Choosing the right pattern affects how your room feels:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Small rooms: Diagonal or brick patterns create flow</li>
                      <li>• Large spaces: Herringbone or chevron add interest</li>
                      <li>• Narrow areas: Horizontal brick makes wider</li>
                      <li>• Low ceilings: Vertical patterns add height</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 font-montserrat">Installation Complexity</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-green-600">Easy Patterns</p>
                        <p className="text-xs text-muted-foreground">Grid, Brick - DIY friendly, less waste</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-yellow-600">Moderate Patterns</p>
                        <p className="text-xs text-muted-foreground">Diagonal, Hexagon - Some skill required</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-red-600">Advanced Patterns</p>
                        <p className="text-xs text-muted-foreground">Herringbone, Chevron - Professional recommended</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 font-montserrat">Portland Pro Tips</h3>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>💡 Plan extra tiles for complex patterns (15-20%)</li>
                      <li>💡 Herringbone uses more grout = more maintenance</li>
                      <li>💡 Large format tiles in grid pattern = modern, easy clean</li>
                      <li>💡 Diagonal patterns hide uneven walls better</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3 font-montserrat">
                    Need Expert Pattern Advice?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Our Portland tile experts can help you choose and install the perfect pattern for your project. 
                    Free consultations available!
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <a href="tel:503-555-0123">
                        <Phone className="mr-2 h-5 w-5" />
                        (503) 555-0123
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                      <a href="/contact">
                        Schedule Consultation
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
