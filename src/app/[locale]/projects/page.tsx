"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeUp } from "@/animations/fadeUp"; // Kendi GSAP dosya yolunu kontrol et!

export default function ProjectsPage() {
  const t = useTranslations("Projects");

  // Projelerin listesi (Görsel ve JSON anahtarları ile eşleştirildi)
  const projects = [
    { key: "project1", img: "/images/proje1.jpg" },
     { key: "project1", img: "/images/eserparkevleri1.jpeg" },
     { key: "project3", img: "/images/eserrezidans1.jpeg" },
     { key: "project3", img: "/images/eserrezidans2.jpeg" },
     { key: "project5", img: "/images/bahceliyasamevleri1.jpeg" },
     { key: "project5", img: "/images/bahceliyasamevleri2.jpeg" },
    { key: "project4", img: "/images/proje4.jpg" },
    { key: "project6", img: "/images/nisantasibayrakkonaklari1.jpeg" },
    { key: "project7", img: "/images/eyupsultan1.jpeg" },
    { key: "project2", img: "/images/proje2.jpg" },
    { key: "project8", img: "/images/türkbüküzirve1.jpeg" },
    { key: "project8", img: "/images/türkbüküzirve2.jpeg" },
    { key: "project8", img: "/images/türkbüküzirve3.jpeg" },
    { key: "project8", img: "/images/türkbüküzirve4.jpeg" },
    { key: "project8", img: "/images/türkbüküzirve5.jpeg" },
    { key: "project8", img: "/images/türkbüküzirve6.jpeg" },
    { key: "project8", img: "/images/türkbüküzirve7.jpeg" },
  ];

  useEffect(() => {
    // Sayfa yüklendiğinde projeleri yumuşakça yukarı kaydırır
    const ctx = fadeUp(".animate-projects");
    return () => ctx.revert();
  }, [t]);

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. SAYFA ÜST (HERO) ALANI */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-[#0f1f3f]">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/projeler.jpg" // Senden gelen Hero görseli
            alt="Eser Yatırım Holding Projeler" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030625] to-transparent"></div>
        
        <div className="animate-projects relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white pb-4 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. PROJELER GRID ALANI */}
      <section className="w-full py-20 md:py-32">
        <div className="animate-projects container-custom flex flex-col gap-12">
          
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A]">
              {t("subtitle")}
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-full mt-2"></div>
          </div>

          {/* Sektörlerdeki kartların aynısı: 3'lü Grid yapısı */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((item, index) => (
              <div 
                key={index} 
                className="relative group h-[380px] md:h-[420px] overflow-hidden rounded-xl cursor-pointer bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Proje Resmi */}
                <Image 
                  src={item.img} 
                  alt={t(`items.${item.key}`)} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Karartma ve Yazı Katmanı */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030625]/90 via-[#030625]/20 to-transparent flex items-end p-8 z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                      Eser Yatırım Holding
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-white">
                      {t(`items.${item.key}`)}
                    </h3>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
          
        </div>
      </section>
      
    </main>
  );
}