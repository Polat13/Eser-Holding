"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// 1. Çeviri kütüphanesini içe aktarıyoruz
import { useTranslations } from "next-intl"; 

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function HeroSection() {
  const heroRef = useRef(null);
  
  // 2. JSON dosyasındaki "Hero" objesini (title, description, button) çekiyoruz
  const t = useTranslations("Hero"); 

  useEffect(() => {
    if (heroRef.current) {
      // gsap.from YERİNE gsap.fromTo KULLANIYORUZ
      gsap.fromTo(
        (heroRef.current as any).children,
        { 
          y: 40, 
          opacity: 0 // Başlangıç noktası: Aşağıda ve görünmez
        }, 
        {
          y: 0,
          opacity: 1, // Bitiş noktası: Kendi yerinde ve %100 görünür (Bunu zorluyoruz)
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3
        }
      );
    }
  }, []);

  const handleScrollToAbout = () => {
    gsap.to(window, {
      duration: 1.8,
      scrollTo: "#about",
      ease: "power3.inOut"
    });
  };

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        controls={false}
        preload="auto"
        poster="/images/insaat.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4" 
      />

      <div className="absolute inset-0 bg-black/60 md:bg-black/0 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />

      <div 
        className="container-custom relative z-10 flex flex-col gap-6 md:gap-8 drop-shadow-2xl" 
        ref={heroRef}
      >
        {/* 3. Sabit metinler yerine dinamik çevirileri yerleştiriyoruz */}
        <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-medium text-white max-w-4xl leading-[1.15] tracking-tight">
          {t("title")}
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl font-light leading-relaxed">
          {t("description")}
        </p>
        
        <div className="pt-2 md:pt-4">
          <button 
            onClick={handleScrollToAbout}
            className="px-6 py-3 md:px-8 md:py-4 border border-white/30 bg-black/20 md:bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-black transition-all duration-500 font-medium w-fit flex items-center gap-3 group"
          >
            {t("button")}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}