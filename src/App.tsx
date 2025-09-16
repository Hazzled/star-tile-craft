
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load all pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogBudgetingTileProject = lazy(() => import("./pages/BlogBudgetingTileProject"));
const BlogGroutRepair = lazy(() => import("./pages/BlogGroutRepair"));
const BlogWaterproofing = lazy(() => import("./pages/BlogWaterproofing"));
const BlogChoosingTileContractorPortland = lazy(() => import("./pages/BlogChoosingTileContractorPortland"));
const BlogTileTrendsPortland = lazy(() => import("./pages/BlogTileTrendsPortland"));
const BlogBestTileStoresPortland = lazy(() => import("./pages/BlogBestTileStoresPortland"));
const TileInstallationPortland = lazy(() => import("./pages/TileInstallationPortland"));
const TileCostCalculator = lazy(() => import("./pages/TileCostCalculator"));
const TileContractorBeaverton = lazy(() => import("./pages/TileContractorBeaverton"));
const TileContractorTigard = lazy(() => import("./pages/TileContractorTigard"));
const TileContractorGresham = lazy(() => import("./pages/TileContractorGresham"));
const TileContractorLakeOswego = lazy(() => import("./pages/TileContractorLakeOswego"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/budgeting-tile-project-portland" element={<BlogBudgetingTileProject />} />
                <Route path="/blog/fix-cracked-grout" element={<BlogGroutRepair />} />
                <Route path="/blog/waterproofing-before-tile" element={<BlogWaterproofing />} />
                <Route path="/blog/choosing-tile-contractor-portland" element={<BlogChoosingTileContractorPortland />} />
                <Route path="/blog/tile-trends-portland-2025" element={<BlogTileTrendsPortland />} />
                <Route path="/blog/best-tile-stores-portland" element={<BlogBestTileStoresPortland />} />
                <Route path="/tile-installation-portland" element={<TileInstallationPortland />} />
                <Route path="/tile-cost-calculator" element={<TileCostCalculator />} />
                <Route path="/tile-contractor-beaverton" element={<TileContractorBeaverton />} />
                <Route path="/tile-contractor-tigard" element={<TileContractorTigard />} />
                <Route path="/tile-contractor-gresham" element={<TileContractorGresham />} />
                <Route path="/tile-contractor-lake-oswego" element={<TileContractorLakeOswego />} />
                <Route path="/quote" element={<LandingPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
