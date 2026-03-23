import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Sustainability from "./components/Sustainability";
import WhatsAppWidget from "./components/WhatsAppWidget";
import WhoWeServe from "./components/WhoWeServe";
import WhyPhoolStop from "./components/WhyPhoolStop";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen font-sans">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <WhoWeServe />
          <WhyPhoolStop />
          <Pricing />
          <Sustainability />
          <Contact />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
