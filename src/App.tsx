
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogBudgetingTileProject from "./pages/BlogBudgetingTileProject";
import BlogGroutRepair from "./pages/BlogGroutRepair";
import BlogWaterproofing from "./pages/BlogWaterproofing";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
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
              <Route path="/quote" element={<LandingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
