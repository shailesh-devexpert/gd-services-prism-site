import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/services/WebDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SEO from "./pages/services/SEO";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import CyberSecurity from "./pages/services/CyberSecurity";
import Terms from "./pages/legal/Terms";
import Refund from "./pages/legal/Refund";
import Shipping from "./pages/legal/Shipping";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/software" element={<SoftwareDevelopment />} />
            <Route path="/services/cybersecurity" element={<CyberSecurity />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/refund" element={<Refund />} />
            <Route path="/legal/shipping" element={<Shipping />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
