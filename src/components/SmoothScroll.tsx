"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Biraz daha uzun sürede tamamlansın (yavaşlama hissi)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.05, // En kritik ayar! Düşük değer = daha yumuşak/yavaş duruş
      touchMultiplier: 2,
      infinite: false,
    });

    // Lenis her kaydığında ScrollTrigger'ı güncellemesini söyleyelim
    lenis.on('scroll', ScrollTrigger.update);

    // GSAP'in kendi içinde Lenis'i tanımasını sağlayan köprü
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Lag smoothing - FPS düşüşlerinde zıplamayı önler
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return null;
}