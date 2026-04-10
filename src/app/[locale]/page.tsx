"use client";

import { useEffect } from "react";
import { fadeUp } from "@/animations/fadeUp";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import CompaniesSection from "@/sections/CompaniesSection";
import ParallaxSection from "@/sections/ParallaxSection";
import StatsSection from "@/sections/StatsSection";

export default function Home() {

  useEffect(() => {
    fadeUp(".reveal-section");
  }, []);

  return (
    <>
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
    </>
  );
}