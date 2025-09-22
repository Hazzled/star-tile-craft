import { useState } from 'react';
import SEO from '@/components/SEO';
import { Calculator, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { homeBreadcrumb, generateBreadcrumbJsonLd } from '@/lib/breadcrumbs';

const tileSizes = [
  { name: '4" × 4"', size: '4x4', sqft: 0.11 },
  { name: '6" × 6"', size: '6x6', sqft: 0.25 },
  { name: '8" × 8"', size: '8x8', sqft: 0.44 },
  { name: '12" × 12"', size: '12x12', sqft: 1.0 },
  { name: '16" × 16"', size: '16x16', sqft: 1.78 },
  { name: '18" × 18"', size: '18x18', sqft: 2.25 },
  { name: '24" × 24"', size: '24x24', sqft: 4.0 },
  { name: '12" × 24"', size: '12x24', sqft: 2.0 },
];

export default function TileCostCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [selectedTileSize, setSelectedTileSize] = useState<string>('');
  const [pricePerSqFt, setPricePerSqFt] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  const breadcrumbs = [
    homeBreadcrumb,
    { name: 'Tile Cost Calculator', url: 'https://www.startilellc.com/tile-cost-calculator' }
  ];

  const structuredData = [
    generateBreadcrumbJsonLd(breadcrumbs),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Tile Cost Calculator",
      "description": "Free tile cost calculator for Portland homeowners. Calculate tiles needed, costs, and waste buffer for your tile installation project.",
      "url": "https://www.startilellc.com/tile-cost-calculator",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Any",
      "provider": {
        "@type": "Organization",
        "name": "Star Tile LLC",
        "url": "https://www.startilellc.com",
        "telephone": "+1-503-765-3742",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Portland",
          "addressRegion": "OR",
          "addressCountry": "US"
        }
      },
      "featureList": [
        "Calculate total square footage",
        "Determine number of tiles needed", 
        "Estimate material costs",
        "Calculate waste buffer percentage",
        "Support multiple tile sizes"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How accurate is this tile calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our calculator provides estimates based on standard tile sizes and installation practices. Actual requirements may vary based on room layout, pattern complexity, and specific tile dimensions."
          }
        },
        {
          "@type": "Question", 
          "name": "What's not included in these estimates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Estimates don't include substrate preparation, waterproofing, grout, adhesive, trim pieces, or removal of existing flooring."
          }
        },
        {
          "@type": "Question",
          "name": "When should I hire a professional tile installer?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Consider professional installation for bathrooms, kitchens, complex patterns, large format tiles, or when waterproofing is critical."
          }
        }
      ]
    }
  ];

  const calculate = () => {
    const roomLength = parseFloat(length);
    const roomWidth = parseFloat(width);
    const price = parseFloat(pricePerSqFt);
    
    if (roomLength && roomWidth && selectedTileSize && price) {
      setShowResults(true);
    }
  };

  const getCalculationResults = () => {
    const roomLength = parseFloat(length);
    const roomWidth = parseFloat(width);
    const price = parseFloat(pricePerSqFt);
    const tileSize = tileSizes.find(t => t.size === selectedTileSize);
    
    if (!tileSize) return null;

    const totalSqFt = roomLength * roomWidth;
    const tilesNeeded = Math.ceil(totalSqFt / tileSize.sqft);
    const wastePercentage = tileSize.sqft >= 2 ? 10 : 15; // Less waste for larger tiles
    const wasteBuffer = Math.ceil(tilesNeeded * (wastePercentage / 100));
    const totalTiles = tilesNeeded + wasteBuffer;
    const materialCost = totalSqFt * price;
    const totalWithWaste = materialCost * (1 + wastePercentage / 100);

    return {
      totalSqFt: totalSqFt.toFixed(1),
      tilesNeeded,
      wasteBuffer,
      totalTiles,
      wastePercentage,
      materialCost: materialCost.toFixed(2),
      totalWithWaste: totalWithWaste.toFixed(2)
    };
  };

  const results = showResults ? getCalculationResults() : null;

  return (
    <>
      <SEO
        title="Tile Cost Calculator Portland | Free Tile Estimator - Star Tile LLC"
        description="Free tile cost calculator for Portland projects. Calculate tiles needed, material costs, and waste buffer. Get accurate estimates for your tile installation project."
        canonical="https://www.startilellc.com/tile-cost-calculator"
        structuredData={structuredData}
        robots="index, follow"
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Tile Cost Calculator</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plan your Portland tile project with our free calculator. Get accurate estimates for tiles needed, costs, and waste buffer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Calculator Form */}
            <Card className="border-primary/20 shadow-lg shadow-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Calculator className="h-5 w-5 text-primary" />
                  Project Details
                </CardTitle>
                <CardDescription>
                  Enter your room dimensions and tile specifications for an instant estimate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="length">Room Length (feet)</Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="12"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="border-2 border-primary/20 bg-card focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="width">Room Width (feet)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="10"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="border-2 border-primary/20 bg-card focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tile-size">Tile Size</Label>
                  <Select value={selectedTileSize} onValueChange={setSelectedTileSize}>
                    <SelectTrigger className="border-2 border-primary/20 bg-card focus:border-primary focus:ring-primary/20">
                      <SelectValue placeholder="Select tile size" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/20 z-50">
                      {tileSizes.map((tile) => (
                        <SelectItem key={tile.size} value={tile.size}>
                          {tile.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price per Square Foot ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="8.50"
                    value={pricePerSqFt}
                    onChange={(e) => setPricePerSqFt(e.target.value)}
                    className="border-2 border-primary/20 bg-card focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <Button onClick={calculate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  Calculate Estimate
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="border-primary/20 shadow-lg shadow-primary/10">
              <CardHeader>
                <CardTitle className="text-primary">Your Estimate</CardTitle>
                <CardDescription>
                  {showResults ? 'Based on your project specifications' : 'Enter details to see your estimate'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {results ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Total Area</p>
                        <p className="font-semibold">{results.totalSqFt} sq ft</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Tiles Needed</p>
                        <p className="font-semibold">{results.tilesNeeded} tiles</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Waste Buffer ({results.wastePercentage}%)</p>
                        <p className="font-semibold">+{results.wasteBuffer} tiles</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Total Tiles</p>
                        <p className="font-semibold text-primary">{results.totalTiles} tiles</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Material Cost:</span>
                        <span className="font-semibold">${results.materialCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">With Waste Buffer:</span>
                        <span className="font-semibold text-primary">${results.totalWithWaste}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                      <h4 className="font-semibold mb-2 text-primary">Ready for Professional Installation?</h4>
                      <p className="text-sm text-primary/80 mb-4">
                        Get a detailed quote from Portland's trusted tile experts
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                          <a href="tel:503-765-3742" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            Call Now
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="flex-1 border-primary/30 text-primary hover:bg-primary/10">
                          <a href="/contact">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              Get Quote
                            </div>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50 text-primary/30" />
                    <p>Enter your project details to see the estimate</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Educational Content */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Tile Planning Guide</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold mb-4 text-primary">Why Add Waste Buffer?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Covers cutting waste around edges</li>
                  <li>• Accounts for breakage during installation</li>
                  <li>• Provides extras for future repairs</li>
                  <li>• Larger tiles typically need less waste (10%)</li>
                  <li>• Smaller tiles need more buffer (15%)</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold mb-4 text-primary">Professional Installation Benefits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Proper substrate preparation</li>
                  <li>• Precise layout and alignment</li>
                  <li>• Waterproofing expertise</li>
                  <li>• Tool and material efficiency</li>
                  <li>• Warranty protection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">How accurate is this calculator?</h4>
                <p className="text-muted-foreground">
                  Our calculator provides estimates based on standard tile sizes and installation practices. 
                  Actual requirements may vary based on room layout, pattern complexity, and specific tile dimensions.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">What's not included in these estimates?</h4>
                <p className="text-muted-foreground">
                  Estimates don't include substrate preparation, waterproofing, grout, adhesive, trim pieces, 
                  or removal of existing flooring. Contact us for a comprehensive quote.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">When should I hire a professional?</h4>
                <p className="text-muted-foreground">
                  Consider professional installation for bathrooms, kitchens, complex patterns, large format tiles, 
                  or when waterproofing is critical. We serve all of Portland and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}