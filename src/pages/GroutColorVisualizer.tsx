import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Download, Share2, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import OptimizedImage from "@/components/OptimizedImage";

// Import tile images
import subwayWhite from "@/assets/tile-subway-white.jpg";
import largeGray from "@/assets/tile-large-gray.jpg";
import hexagonMarble from "@/assets/tile-hexagon-marble.jpg";
import travertineBeige from "@/assets/tile-travertine-beige.jpg";
import blackMatte from "@/assets/tile-black-matte.jpg";
import blueSubway from "@/assets/tile-blue-subway.jpg";

const tileOptions = [
  { id: "subway-white", name: "White Subway Tile", image: subwayWhite, pattern: "brick" },
  { id: "large-gray", name: "Large Format Gray", image: largeGray, pattern: "grid" },
  { id: "hexagon-marble", name: "Hexagon Marble", image: hexagonMarble, pattern: "hexagon" },
  { id: "travertine-beige", name: "Travertine Beige", image: travertineBeige, pattern: "brick" },
  { id: "black-matte", name: "Black Matte", image: blackMatte, pattern: "grid" },
  { id: "blue-subway", name: "Blue Subway", image: blueSubway, pattern: "brick" },
];

const groutColors = [
  { id: "white", name: "Bright White", hex: "#FFFFFF" },
  { id: "light-gray", name: "Light Gray", hex: "#D1D5DB" },
  { id: "medium-gray", name: "Medium Gray", hex: "#9CA3AF" },
  { id: "dark-gray", name: "Dark Gray", hex: "#4B5563" },
  { id: "charcoal", name: "Charcoal", hex: "#1F2937" },
  { id: "black", name: "Black", hex: "#111827" },
  { id: "beige", name: "Beige", hex: "#D4C5B9" },
  { id: "tan", name: "Tan", hex: "#C2B09A" },
];

const groutWidths = [
  { id: "narrow", name: 'Narrow (1/16")', pixels: 2 },
  { id: "standard", name: 'Standard (1/8")', pixels: 4 },
  { id: "wide", name: 'Wide (1/4")', pixels: 8 },
];

export default function GroutColorVisualizer() {
  const [selectedTile, setSelectedTile] = useState(tileOptions[0]);
  const [selectedGroutColor, setSelectedGroutColor] = useState(groutColors[0]);
  const [selectedGroutWidth, setSelectedGroutWidth] = useState(groutWidths[1]);
  const [compareMode, setCompareMode] = useState(false);
  const [compareGroutColor, setCompareGroutColor] = useState(groutColors[3]);

  const handleShare = async () => {
    const shareText = `Check out this grout color combination: ${selectedTile.name} with ${selectedGroutColor.name} grout!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Star Tile Grout Color Visualizer",
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
      tile: selectedTile.name,
      groutColor: selectedGroutColor.name,
      groutWidth: selectedGroutWidth.name,
    };
    localStorage.setItem("groutVisualizerSelection", JSON.stringify(selection));
    toast.success("Selection saved! View it anytime.");
  };

  const handleReset = () => {
    setSelectedTile(tileOptions[0]);
    setSelectedGroutColor(groutColors[0]);
    setSelectedGroutWidth(groutWidths[1]);
    setCompareMode(false);
    toast.info("Reset to default settings");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Star Tile Grout Color Visualizer",
    "applicationCategory": "DesignApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free interactive tool to visualize grout colors with different tile styles. Perfect for Portland homeowners planning tile installations.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Star Tile",
      "areaServed": "Portland, OR"
    }
  };

  return (
    <>
      <SEO
        title="Grout Color Visualizer - Star Tile Portland | Free Tool"
        description="Try our free grout color visualizer tool! Preview different grout colors and widths with various tile styles. Perfect for Portland homeowners planning tile installations."
        canonical="https://startilepdx.com/grout-color-visualizer"
        structuredData={structuredData}
      />
      
      <Helmet>
        <meta name="keywords" content="grout color visualizer, grout color picker Portland, tile grout colors Oregon, grout color selector, tile design tool Portland" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Free Interactive Tool</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                Grout Color Visualizer
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                See how different grout colors and widths transform your tile installation. 
                Perfect for Portland homeowners planning their next project.
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

        {/* Main Visualizer */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Controls Panel */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    {/* Tile Selection */}
                    <div>
                      <h3 className="font-semibold mb-4 font-montserrat">Select Tile Style</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {tileOptions.map((tile) => (
                          <button
                            key={tile.id}
                            onClick={() => setSelectedTile(tile)}
                            className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                              selectedTile.id === tile.id
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

                    {/* Grout Color Selection */}
                    <div>
                      <h3 className="font-semibold mb-4 font-montserrat">Grout Color</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {groutColors.map((color) => (
                          <button
                            key={color.id}
                            onClick={() => setSelectedGroutColor(color)}
                            className={`h-12 rounded-md border-2 transition-all ${
                              selectedGroutColor.id === color.id
                                ? "border-primary ring-2 ring-primary/20 scale-105"
                                : "border-border hover:border-primary/50"
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Selected: <strong>{selectedGroutColor.name}</strong>
                      </p>
                    </div>

                    {/* Grout Width Selection */}
                    <div>
                      <h3 className="font-semibold mb-4 font-montserrat">Grout Width</h3>
                      <div className="space-y-2">
                        {groutWidths.map((width) => (
                          <button
                            key={width.id}
                            onClick={() => setSelectedGroutWidth(width)}
                            className={`w-full p-3 rounded-md border-2 text-left transition-all ${
                              selectedGroutWidth.id === width.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="font-medium text-sm">{width.name}</div>
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
                        {compareMode ? "Single View" : "Compare Colors"}
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
                      {compareMode ? "Side-by-Side Comparison" : "Preview"}
                    </h3>
                    
                    <div className={`grid ${compareMode ? "md:grid-cols-2" : "grid-cols-1"} gap-6`}>
                      {/* Main Preview */}
                      <div>
                        <div className="relative rounded-lg overflow-hidden border-4" style={{ borderColor: selectedGroutColor.hex }}>
                          <OptimizedImage
                            src={selectedTile.image}
                            alt={`${selectedTile.name} with ${selectedGroutColor.name} grout`}
                            className="w-full aspect-[4/3] object-cover"
                          />
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              backgroundImage: selectedGroutWidth.id === "narrow"
                                ? `linear-gradient(${selectedGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px),
                                   linear-gradient(90deg, ${selectedGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px)`
                                : selectedGroutWidth.id === "standard"
                                ? `linear-gradient(${selectedGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px),
                                   linear-gradient(90deg, ${selectedGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px)`
                                : `linear-gradient(${selectedGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px),
                                   linear-gradient(90deg, ${selectedGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px)`,
                              backgroundSize: selectedTile.pattern === "brick" ? "200px 100px" : "150px 150px",
                              opacity: 0.3,
                            }}
                          />
                        </div>
                        <div className="mt-3 p-3 bg-muted rounded-md">
                          <p className="text-sm">
                            <strong>Tile:</strong> {selectedTile.name}
                          </p>
                          <p className="text-sm">
                            <strong>Grout:</strong> {selectedGroutColor.name} • {selectedGroutWidth.name}
                          </p>
                        </div>
                      </div>

                      {/* Comparison Preview */}
                      {compareMode && (
                        <div>
                          <div className="mb-3">
                            <label className="text-sm font-medium mb-2 block">Compare with:</label>
                            <div className="grid grid-cols-4 gap-2">
                              {groutColors.map((color) => (
                                <button
                                  key={color.id}
                                  onClick={() => setCompareGroutColor(color)}
                                  className={`h-10 rounded-md border-2 transition-all ${
                                    compareGroutColor.id === color.id
                                      ? "border-primary ring-2 ring-primary/20 scale-105"
                                      : "border-border hover:border-primary/50"
                                  }`}
                                  style={{ backgroundColor: color.hex }}
                                  title={color.name}
                                />
                              ))}
                            </div>
                          </div>
                          
                          <div className="relative rounded-lg overflow-hidden border-4" style={{ borderColor: compareGroutColor.hex }}>
                            <OptimizedImage
                              src={selectedTile.image}
                              alt={`${selectedTile.name} with ${compareGroutColor.name} grout`}
                              className="w-full aspect-[4/3] object-cover"
                            />
                            <div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                backgroundImage: selectedGroutWidth.id === "narrow"
                                  ? `linear-gradient(${compareGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px),
                                     linear-gradient(90deg, ${compareGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px)`
                                  : selectedGroutWidth.id === "standard"
                                  ? `linear-gradient(${compareGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px),
                                     linear-gradient(90deg, ${compareGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px)`
                                  : `linear-gradient(${compareGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px),
                                     linear-gradient(90deg, ${compareGroutColor.hex} ${selectedGroutWidth.pixels}px, transparent ${selectedGroutWidth.pixels}px)`,
                                backgroundSize: selectedTile.pattern === "brick" ? "200px 100px" : "150px 150px",
                                opacity: 0.3,
                              }}
                            />
                          </div>
                          <div className="mt-3 p-3 bg-muted rounded-md">
                            <p className="text-sm">
                              <strong>Grout:</strong> {compareGroutColor.name} • {selectedGroutWidth.name}
                            </p>
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
                      Love What You See?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Get a professional tile installation with expert grout color selection for your Portland home.
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
                Grout Color Guide for Portland Homes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 font-montserrat">Best for Portland's Climate</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Portland's humidity requires careful grout selection. Medium to dark grays hide moisture spots better 
                      than bright white in high-humidity areas like bathrooms.
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>✓ Medium Gray - Most forgiving for bathrooms</li>
                      <li>✓ Charcoal - Hides dirt in high-traffic areas</li>
                      <li>✓ Beige/Tan - Warm, natural look for kitchens</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 font-montserrat">Grout Width Matters</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      The width of your grout lines affects both aesthetics and maintenance:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Narrow (1/16") - Modern, seamless look</li>
                      <li>• Standard (1/8") - Most common, balanced look</li>
                      <li>• Wide (1/4") - Traditional, easier to clean</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 font-montserrat">2025 Trends in Portland</h3>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>🔥 <strong>Contrast is back:</strong> Dark grout with white tiles</li>
                      <li>🔥 <strong>Matching minimalism:</strong> Same-color grout for seamless look</li>
                      <li>🔥 <strong>Warm neutrals:</strong> Beige and tan for cozy spaces</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 font-montserrat">Pro Tips</h3>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>💡 Light grout makes rooms feel larger</li>
                      <li>💡 Dark grout creates dramatic definition</li>
                      <li>💡 Matching grout hides imperfect tile alignment</li>
                      <li>💡 Seal grout within 48-72 hours of installation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3 font-montserrat">
                    Need Expert Advice?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Our Portland tile experts can help you choose the perfect grout color for your project. 
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
