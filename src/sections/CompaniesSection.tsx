"use client";

import { useEffect } from "react";
import Image from "next/image"; 
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { fadeUp } from "@/animations/fadeUp"; // Kendi dosya yoluna göre ayarla!

export default function CompaniesSection() {
  const t = useTranslations("Sectors");
  const locale = useLocale();

  // 1. Enerji sektörünü diziye ekledik
  const sectors = [
    { 
      key: "construction", 
      img: "/images/insaat.jpg",
      route: `/${locale}/sectors/construction`
    },
    { 
      key: "automotive", 
      img: "/images/otomotiv.jpg",
      route: `/${locale}/sectors/automotive`
    },
    { 
      key: "textile", 
      img: "/images/tekstil.jpg",
      route: `/${locale}/sectors/textile`
    },
    { 
      key: "energy", 
      img: "/images/enerji.jpg", // Yeni görsel
      route: `/${locale}/sectors/energy`
    }
  ];

  useEffect(() => {
    const ctx = fadeUp(".animate-container"); 
    return () => ctx.revert();
  }, [t]); 
    
  return (
    <section className="w-full py-32 bg-white">
      <div className="animate-container container-custom flex flex-col gap-16">
        
        <h2 className="text-4xl font-semibold text-[#1E3A8A]">
          {t("title")}
        </h2>
        
        {/* 2. Grid yapısını 4 kolonlu olacak şekilde değiştirdik */}
        {/* Mobilde 1 (varsayılan), Tablette 2 (md), Masaüstünde 4 (lg) kolon */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {sectors.map((item, index) => (
            <div key={index} className="relative group h-[340px] overflow-hidden rounded-lg cursor-pointer bg-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              
              <Image 
                src={item.img} 
                alt={t(`items.${item.key}`)} 
                fill 
                // 3. 4 kolonlu yapıya göre (yaklaşık %25 genişlik) optimize edildi
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 w-full">
                  <h3 className="text-2xl font-medium text-white group-hover:-translate-y-2 transition-transform duration-300">
                    {t(`items.${item.key}`)}
                  </h3>
                  <Link href={item.route}>
                    <button className="px-3 py-2 border border-white/30 bg-black/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium w-fit flex items-center gap-2 text-sm cursor-pointer">
                      {t("button")}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}