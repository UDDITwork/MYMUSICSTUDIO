
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NewBlog from "./pages/NewBlog";
import NotFound from "./pages/NotFound";
import BollywoodSinging from "./pages/BollywoodSinging";
import WesternSinging from "./pages/WesternSinging";
import TrinityCertification from "./pages/TrinityCertification";
import PianoPage from "./pages/Piano";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/bollywood-singing" element={<BollywoodSinging />} />
            <Route path="/courses/western-singing" element={<WesternSinging />} />
            <Route path="/courses/piano" element={<PianoPage />} />
            <Route path="/courses/trinity-certification" element={<TrinityCertification />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/new" element={<NewBlog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
