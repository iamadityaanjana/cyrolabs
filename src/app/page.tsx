'use client'

import { useEffect, useState } from "react";

// Import components
import Loading from "@/components/Loading";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Application from "@/components/Application";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimationProvider from "@/components/AnimationProvider";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  // Loading state
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time and then hide the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimationProvider>
      <>
        {/* Loading Component */}
        <Loading loading={loading} />
        
        {/* Preload important images */}
        <link rel="preload" as="image" href="/image (5).png" />
        <link rel="preload" as="image" href="/fe730c77dfbd4a12e3d181e39ed2c095cf853d27.png" />
        <link rel="preload" as="image" href="/image (6).png" />
        
        {/* Smooth Scrolling Handler */}
        <SmoothScroll />
        
        {/* Hero Section Component */}
        <HeroSection loading={loading} />
        
        {/* Timeline Section Component */}
        <Timeline />
        
        {/* About Section Component */}
        <About />
        
        {/* Application Section Component */}
        <Application />
        
        {/* Footer Component */}
        <Footer />
        
        {/* Back to Top Component */}
        <BackToTop />
      </>
    </AnimationProvider>
  );
}
