"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.from((heroRef.current as any).children, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      
      {/* VİDEO BURADAN ÇEKİLECEK */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4" /* Dış link yerine kendi lokal linkimiz */
      />

      <div className="absolute inset-0 bg-black/60 md:bg-black/0 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />

      <div 
        className="container-custom relative z-10 flex flex-col gap-6 md:gap-8 drop-shadow-2xl" 
        ref={heroRef}
      >
        <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-medium text-white max-w-4xl leading-[1.15] tracking-tight">
          Sürdürülebilir Yarınlara Doğru
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl font-light leading-relaxed">
          Eser Yatırım Holding olarak sorumluluğumuz çerçevesinde, müşteri odaklı bir yaklaşımla, bugünden çok daha iyi bir yarın oluşturmak için faaliyet gösterdiğimiz her alanda çevresel, sosyal ve ekonomik olarak sürekli iyileştirme sağlamaya zemin hazırlamaktır.
        </p>
        
        <div className="pt-2 md:pt-4">
          <button className="px-6 py-3 md:px-8 md:py-4 border border-white/30 bg-black/20 md:bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-black transition-all duration-500 font-medium w-fit flex items-center gap-3 group">
            Daha Fazla
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}