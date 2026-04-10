"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SiAudi, SiBmw, SiVolvo, SiFord } from "react-icons/si";
import { TbBrandMercedes } from "react-icons/tb";
import { fadeUp } from "@/animations/fadeUp"; // Animasyon dosyanın yolunu kontrol et

// Kod tekrarını önlemek ve şeridi uzatmak için markaları bir bileşen yaptık
const BrandIcons = () => (
  <>
    <TbBrandMercedes className="shrink-0 hover:text-gray-300 transition-colors cursor-pointer" />
    <SiAudi className="shrink-0 hover:text-gray-300 transition-colors cursor-pointer" />
    <SiBmw className="shrink-0 hover:text-gray-300 transition-colors cursor-pointer" />
    <SiVolvo className="shrink-0 hover:text-gray-300 transition-colors cursor-pointer" />
    <SiFord className="shrink-0 hover:text-gray-300 transition-colors cursor-pointer" />
  </>
);

export default function AutomotivePage() {
  const t = useTranslations("Automotive");

  useEffect(() => {
    // Sayfa yüklendiğinde içerikleri yumuşakça yukarı kaydırır
    const ctx = fadeUp(".animate-automotive");
    return () => ctx.revert();
  }, [t]);

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. SAYFA ÜST (HERO) ALANI */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-[#0f1f3f]">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/otomotiv.jpg" 
            alt="Eser Holding Automotive Sector" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030625] to-transparent"></div>
        
        <div className="animate-automotive relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* LOGO BANDI (KUSURSUZ AKAN MARQUEE) */}
        <div className="absolute bottom-6 left-1/2 z-10 w-full max-w-5xl -translate-x-1/2 px-4 overflow-hidden">
          {/* Siyah kapsayıcı kutu (overflow-hidden burada çalışır, logolar bu sınırda kaybolur) */}
          <div className="mx-auto flex h-[64px] items-center  text-white text-4xl  overflow-hidden">
            
            <div className="marquee flex items-center">
              
              {/* 1. SET: Şeridi siyahlıktan çok daha uzun yapmak için ikon setini 3 kez yan yana koyduk */}
              {/* Uyarı: gap (boşluk) ve pr (sağ boşluk) değerleri zıplama olmaması için BİREBİR AYNI olmalıdır! */}
              <div className="flex items-center gap-20 md:gap-32 pr-20 md:pr-32">
                <BrandIcons />
                <BrandIcons />
                <BrandIcons />
              </div>

              {/* 2. SET: Döngünün bitmemesi için 1. setin birebir kopyası */}
              <div className="flex items-center gap-20 md:gap-32 pr-20 md:pr-32">
                <BrandIcons />
                <BrandIcons />
                <BrandIcons />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* MARQUEE ANİMASYON CSS'İ */}
      <style jsx>{`
        .marquee {
          width: max-content;
          /* Süreyi düşürerek hızı artırdık. İkon aralıkları çok geniş olduğu için oldukça tempolu akacaktır */
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          /* Animasyon -50'den başlayıp 0'a gidiyor, böylece soldan doğup sağa akıyor */
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      {/* 2. İÇERİK ALANI */}
      <section className="w-full py-20 md:py-32">
        <div className="animate-automotive container-custom">
          
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
                <p className="mt-4 text-gray-500 font-medium border-l-2 border-blue-500 pl-4">
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
                    src="/images/araba1.jpg"
                    alt="Araba 1"
                    fill
                    className="object-cover group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                    quality={90}
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl h-56 group cursor-pointer">
                  <Image
                    src="/images/araba2.jpg"
                    alt="Araba 2"
                    fill
                    className="object-cover group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                    quality={90}
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl h-56 group cursor-pointer">
                  <Image
                    src="/images/araba3.jpg"
                    alt="Araba 3"
                    fill
                    className="object-cover object-bottom group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                    quality={90}
                  />
                </div>
              </div>

              {/* Vurucu Kapanış Kutusu */}
              <div className="p-8 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm mt-4">
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