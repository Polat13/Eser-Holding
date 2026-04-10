"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapRefresher() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Tarayıcının yerleşik boyut takipçisini oluşturuyoruz
    const resizeObserver = new ResizeObserver(() => {
      // Sayfadaki en ufak bir uzama/kısalma durumunda GSAP'e "yeniden hesapla" diyoruz
      ScrollTrigger.refresh();
    });

    // Tüm siteyi (body) milimetrik olarak takibe alıyoruz
    resizeObserver.observe(document.body);

    // Bileşen ekrandan kalkarsa takibi bırak
    return () => resizeObserver.disconnect();
  }, []);

  return null; // Ekranda görünmez, sadece arkada çalışır
}