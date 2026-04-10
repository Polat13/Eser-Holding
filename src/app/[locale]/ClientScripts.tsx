// ClientScripts.tsx (BİRLEŞTİRİLMİŞ TEMİZ KOD)
"use client"

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientScripts() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // 1. TEK BİR LENIS KURULUMU
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.05, // Premium atalet hissi
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    // Lenis'i global olarak kaydet (Navbar'ın erişebilmesi için)
    (window as any).lenis = lenis;

    // 2. GSAP SCROLLTRIGGER SENKRONİZASYONU (Çok Önemli)
    lenis.on('scroll', ScrollTrigger.update);

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    // 3. SCROLL PROGRESS BAR
    const progress = document.getElementById("scroll-progress");
    lenis.on('scroll', (e: any) => {
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

    // 5. GERİ/İLERİ TUŞU: Popstate basıldığında Next.js route'u güncelle
    const handlePopState = () => {
      // Browser URL'ni oku ve Next.js'in bunu handle etmesini sağla
      const currentPath = window.location.pathname;
      // replace() refresh ile beraber navigasyon yapar
      router.replace(currentPath);
    };
    window.addEventListener("popstate", handlePopState);

    // TEMİZLİK (Cleanup)
    return () => {
      lenis.destroy();
      (window as any).lenis = null;
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("popstate", handlePopState);
      cursor.remove();
      gsap.ticker.remove(rafCallback);
    };
  }, [router]);

  // Sayfa her değiştiğinde scroll'u sıfırla ve GSAP'i yenile
  useEffect(() => {
    // Scroll'u top'a al
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
    ScrollTrigger.refresh();
  }, [pathname]);

  return <div id="scroll-progress"></div>;
}