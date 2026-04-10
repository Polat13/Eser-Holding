"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeUp } from "@/animations/fadeUp"; // Kendi GSAP animasyon dosyanın yolu

export default function MissionPage() {
  const t = useTranslations("Mission");

  useEffect(() => {
    // Sayfa yüklendiğinde ve dil değiştiğinde GSAP animasyonunu tetikler
    const ctx = fadeUp(".animate-mission");
    return () => ctx.revert();
  }, [t]);

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. SAYFA ÜST (HERO) ALANI */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-[#0f1f3f]">
        <div className="absolute inset-0 opacity-30">
          <Image 
            // Yüksek kaliteli, modern bir kurumsal mimari fotoğrafı (Unsplash)
            src="/images/misyon.jpg" 
            alt="Eser Holding Mission" 
            fill 
            className="object-cover"
            priority
            unoptimized // Dışarıdan URL verdiğimiz için Next.js optimizasyonunu atlıyoruz
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030625] to-transparent"></div>
        
        <div className="animate-mission relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. İÇERİK ALANI */}
      <section className="w-full py-20 md:py-32">
        <div className="animate-mission container-custom">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Sol Taraf: Sabit Başlık Alanı */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="sticky top-32">
                {/* 1988 yerine "ODAK" yazdık */}
                <span className="text-6xl md:text-7xl font-bold text-gray-500 block mb-2 tracking-tighter uppercase">
                  {t("bigText")}
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] leading-snug">
                  {t("subtitle")}
                </h2>
                <p className="mt-4 text-gray-500 font-medium border-l-2 border-blue-500 pl-4">
                  {t("motto")}
                </p>
              </div>
            </div>

            {/* Sağ Taraf: Misyon Metinleri */}
            <div className="lg:w-2/3 flex flex-col gap-10 text-lg text-gray-700 font-light leading-relaxed">
              
              {/* İlk paragrafı büyük ve vurgulu yapıyoruz */}
              <p className="text-xl md:text-2xl font-medium text-gray-900 leading-normal">
                {t("p1")}
              </p>

              {/* İkinci paragraf */}
              <p>
                {t("p2")}
              </p>

              {/* Sayfa boş kalmasın diye şık bir kapanış sözü (tasarımsal dokunuş) */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm">
                <p className="italic text-gray-800 font-medium text-center">
                  {t("quote")}
                </p>
              </div>

            </div>

          </div>
          
        </div>
      </section>
      
    </main>
  );
}