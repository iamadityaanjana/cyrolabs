'use client'

import { useEffect, useState } from "react";

import Loading from "@/components/Loading";
import HeroSection from "@/components/HeroSection";
import AnimationProvider from "@/components/AnimationProvider";
import SmoothScroll from "@/components/SmoothScroll";
import WhatWeDo from "@/components/WhatWeDo";
import WhatWeBuilt from "@/components/WhatWeBuilt";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import WhyCyroLabs from "@/components/WhyCyroLabs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimationProvider>
      <>
        <Loading loading={loading} />
        <SmoothScroll />
        <HeroSection loading={loading} />
        <WhatWeDo />
        <WhatWeBuilt />
        <TechStack />
        <Services />
        <WhyCyroLabs />
        <CTASection />
        <Footer />
      </>
    </AnimationProvider>
  );
}
