"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeUp } from "@/animations/fadeUp";

export default function EnergyPage() {
  const t = useTranslations("Energy");

  useEffect(() => {
    const ctx = fadeUp(".animate-energy");
    return () => ctx.revert();
  }, [t]);

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. SAYFA ÜST (HERO) ALANI */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-[#0f1f3f]">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/enerji.jpg" 
            alt="Eser Yatırım Holding Enerji Sektörü" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030625] to-transparent"></div>
        
        <div className="animate-energy relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white pb-4 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. İÇERİK ALANI */}
      <section className="w-full py-20 md:py-32">
        <div className="animate-energy container-custom">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Sol Taraf: Sabit Başlık Alanı */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="sticky top-32">
                <span className="text-6xl md:text-7xl font-bold text-gray-500 block pb-2 tracking-tighter uppercase">
                  {t("bigText")}
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] leading-snug">
                  {t("subtitle")}
                </h2>
                <p className="pt-4 text-gray-500 font-medium border-l-2 border-blue-500 pl-4">
                  {t("motto")}
                </p>
              </div>
            </div>

            {/* Sağ Taraf: Metinler */}
            <div className="lg:w-2/3 flex flex-col gap-10 text-lg text-gray-700 font-light leading-relaxed">
              
              <p className="text-xl md:text-2xl font-medium text-gray-900 leading-normal">
                {t("p1")}
              </p>

              <p>
                {t("p2")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                              <div className="relative overflow-hidden rounded-2xl h-56 group cursor-pointer">
                                <Image
                                  src="/images/enerji1.jpg"
                                  alt="Enerji 1"
                                  fill
                                  className="object-cover group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                                  quality={90}
                                />
                              </div>
                              <div className="relative overflow-hidden rounded-2xl h-56 group cursor-pointer">
                                <Image
                                  src="/images/enerji3.jpg"
                                  alt="Enerji 2"
                                  fill
                                  className="object-cover group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                                  quality={90}
                                />
                              </div>
                              <div className="relative overflow-hidden rounded-2xl h-56 group cursor-pointer">
                                <Image
                                  src="/images/enerji2.jpg"
                                  alt="Enerji 3"
                                  fill
                                  className="object-cover object-bottom group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                                  quality={90}
                                />
                              </div>
                            </div>
              {/* Vurucu Kapanış Kutusu (Boşluklar parent'ın gap-10 sınıfından geliyor) */}
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