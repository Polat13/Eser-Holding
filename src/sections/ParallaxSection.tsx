"use client"

import { useEffect, useRef } from "react";
import Image from "next/image"; 
// 1. Çeviri kütüphanesini içeri aktarıyoruz
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxSection() {
  // 2. JSON'dan "Parallax" objesini çekiyoruz
  const t = useTranslations("Parallax");
  
  // React'te GSAP için her zaman useRef kullanmak en güvenlisidir
  const sectionRef = useRef(null); 

  useEffect(() => {
    // 3. Animasyonu Context içine alıyoruz ki dil değiştiğinde silebilelim
    let ctx = gsap.context(() => {
      
      gsap.to(".parallax-image", { 
        y: -120, 
        ease: "none", 
        scrollTrigger: { 
          trigger: ".parallax-section", 
          start: "top bottom", 
          end: "bottom top", 
          scrub: true 
        } 
      });

    }, sectionRef); // Bu context sadece bu sectionRef içindeki classları etkiler

    // 4. Dil değiştiğinde eski ScrollTrigger hesaplamasını çöpe at
    return () => ctx.revert();
    
  }, [t]); // "t" değiştiğinde (dil değiştiğinde) useEffect baştan çalışır

  return (
    // sectionRef'i ana kapsayıcıya verdik
    <section ref={sectionRef} className="parallax-section w-full h-[600px] relative overflow-hidden">
      
      <div className="parallax-image absolute top-[-10%] left-0 w-full h-[120%]">
        <Image 
          src="/images/insaat.jpg" 
          // 5. SEO (alt) metnini dinamik yaptık
          alt={t("imageAlt")} 
          fill 
          sizes="100vw" 
          className="object-cover" 
        />
      </div>

      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="container-custom">
          {/* 6. Başlığı dinamik yaptık */}
          <h2 className="text-5xl font-semibold text-white max-w-2xl">
            {t("title")}
          </h2>
        </div>
      </div>

    </section>
  );
}