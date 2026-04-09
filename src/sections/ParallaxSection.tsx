"use client"

import { useEffect } from "react";
import Image from "next/image"; // Next.js Image eklendi
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxSection() {
  useEffect(() => {
    // ease: "none" eklemek parallax efektinin fare tekerleğiyle birebir 
    // eşzamanlı (gecikmesiz) çalışmasını sağlar, daha pürüzsüz durur.
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
  }, []);

  return (
    <section className="parallax-section w-full h-[600px] relative overflow-hidden">
      
      {/* Parallax Wrapper: Resim %120 boyunda yapılır ve -%10 yukarı çekilir.
        GSAP bu div'i aşağı yukarı hareket ettirerek efekti yaratır.
      */}
      <div className="parallax-image absolute top-[-10%] left-0 w-full h-[120%]">
        <Image 
          src="/images/insaat.jpg" // Lokal inşaat fotoğrafımız
          alt="Eser Yatırım Holding - Geleceğe Daha Yakın" 
          fill 
          sizes="100vw" // Tam ekran genişliği için optimize eder
          className="object-cover" 
        />
      </div>

      {/* Siyah Karartma (Overlay) ve İçerik */}
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="container-custom">
          <h2 className="text-5xl font-semibold text-white max-w-2xl">
            Geleceğe Daha Yakın
          </h2>
        </div>
      </div>

    </section>
  );
}