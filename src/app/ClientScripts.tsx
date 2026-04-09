// ClientScripts.tsx (BİRLEŞTİRİLMİŞ TEMİZ KOD)
"use client"

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientScripts() {
  useEffect(() => {
    // 1. TEK BİR LENIS KURULUMU
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.05, // Premium atalet hissi
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    // 2. GSAP SCROLLTRIGGER SENKRONİZASYONU (Çok Önemli)
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 3. SCROLL PROGRESS BAR
    const progress = document.getElementById("scroll-progress");
lenis.on('scroll', (e: any) => { // <-- Buraya : any ekledik
  if (progress) {
    const scrolled = (e.animatedScroll / e.dimensions.maxScroll) * 100;
    progress.style.width = scrolled + "%";
  }
});

    // 4. CUSTOM CURSOR
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);
    
    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", moveCursor);

    // TEMİZLİK (Cleanup)
    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
      gsap.ticker.remove((time) => { lenis.raf(time * 1000); });
    };
  }, []);

  return <div id="scroll-progress"></div>;
}