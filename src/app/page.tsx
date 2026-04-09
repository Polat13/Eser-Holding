"use client";

import { useEffect } from "react";
import { fadeUp } from "@/animations/fadeUp";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import CompaniesSection from "@/sections/CompaniesSection";
import ParallaxSection from "@/sections/ParallaxSection";
import StatsSection from "@/sections/StatsSection";
import FooterSection from "@/sections/FooterSection"; // Footer'ı Import et

export default function Home() {
  
  useEffect(() => {
    fadeUp(".reveal-section");
  }, []);

  return (
    <main>
      <Navbar />
      <HeroSection /> 
      
      <div className="reveal-section">
        <AboutSection />
      </div>
      
      <div className="reveal-section">
        <CompaniesSection />
      </div>
      
      <div className="reveal-section">
        <ParallaxSection />
      </div>
      
      <div className="reveal-section">
        <StatsSection />
      </div>

      {/* Sayfanın en altına Footer'ı ekliyoruz */}
      <FooterSection />
    </main>
  );
}