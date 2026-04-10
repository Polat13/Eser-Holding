"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeUp } from "@/animations/fadeUp"; // Animasyon fonksiyonunun yolu (kendine göre ayarla)

export default function HistoryPage() {
  const t = useTranslations("History");

  useEffect(() => {
    // Sayfa yüklendiğinde ve dil değiştiğinde animasyonları tetikle
    const ctx = fadeUp(".animate-history");
    return () => ctx.revert(); // Dil değiştiğinde hayalet kalmaması için temizle
  }, [t]);

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. SAYFA ÜST (HERO) ALANI */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-[#0f1f3f]">
        {/* Arka plan resmi (Ana sayfadaki gibi bir holding/inşaat görseli kullanabiliriz) */}
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/images/tarihce.jpg" // Varsa uygun bir görsel yolu yaz
            alt="History Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030625] to-transparent"></div>
        
        <div className="animate-history relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. İÇERİK ALANI */}
      <section className="w-full py-20 md:py-32">
        <div className="animate-history container-custom">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Sol Taraf: Sabit Başlık Alanı */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="sticky top-32">
                <span className="text-7xl font-bold text-gray-500 block mb-2">1988</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] leading-snug">
                  {/* Çeviri anahtarını buraya ekledik */}
                  {t("subtitle")} 
                </h2>
                <p className="mt-4 text-gray-500 font-medium border-l-2 border-blue-500 pl-4">
                  {/* Çeviri anahtarını buraya ekledik */}
                  {t("motto")}
                </p>
              </div>
            </div>

            {/* Sağ Taraf: Paragraf Akışı */}
            <div className="lg:w-2/3 flex flex-col gap-10 text-lg text-gray-700 font-light leading-relaxed">
              
              {/* Vurgulu Giriş Paragrafı */}
              <p className="text-xl md:text-2xl font-medium text-gray-900 leading-normal">
                {t("p1")}
              </p>

              <p>{t("p2")}</p>

              {/* İstediğin satır artık diğer paragraflarla aynı stilde */}
              <p>{t("p3")}</p>

              <p>{t("p4")}</p>
              
              <p>{t("p5")}</p>

            </div>

          </div>
          
        </div>
      </section>
      
    </main>
  );
}