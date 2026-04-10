"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // 1. Bunu ekledik
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  const pathname = usePathname(); // Sayfanın URL'ini takip eder

  useEffect(() => {
    // Tarayıcı hafızasını manuel yapıyoruz
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.05,
      touchMultiplier: 2,
      infinite: false,
    });

    (window as any).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  // 2. SİHİRLİ DOKUNUŞ: Sayfa (URL) her değiştiğinde çalışır
  useEffect(() => {
    if ((window as any).lenis) {
      // Geri tuşuna basıldığında veya yeni sayfaya geçildiğinde kaydırmayı en üste anında sıfırla
      (window as any).lenis.scrollTo(0, { immediate: true });
      // GSAP'e sayfanın değiştiğini haber ver
      ScrollTrigger.refresh();
    }
  }, [pathname]); 

  return null;
}