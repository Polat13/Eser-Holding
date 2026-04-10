"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SiAudi, SiBmw, SiVolvo, SiFord } from "react-icons/si";
import { TbBrandMercedes } from "react-icons/tb";
import { fadeUp } from "@/animations/fadeUp"; // Animasyon dosyanın yolunu kontrol et

// --- KUSURSUZ YBA LOGOSU (Orijinal SVG'den Matematiksel Olarak Ayıklandı) ---
// Arka plan silindi, "AUTO BODRUM" yazısı kaldırıldı. 
// Sadece logonun ana hatları (3 ana parça) ve içindeki boşluk (1 delik) birleştirildi.
const YbaLogo = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="380 760 440 440" 
    fill="currentColor"
    className={`w-[1.5em] h-[1.5em] ${className}`}
  >
    <g transform="translate(0, 2048) scale(0.1, -0.1)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd"
        d="M 4979 11673 c11 -10 78 -117 149 -238 70 -121 200 -341 287 -490 252 -430 267 -456 261 -471 -5 -12 -23 -14 -88 -12 l-83 3 -32 55 c-56 98 -25 90 -352 90 -254 0 -290 2 -295 16 -9 23 -7 127 2 141 6 9 68 13 232 15 267 3 257 -3 182 128 l-49 85 -184 5 -184 5 0 75 0 75 100 2 c120 3 145 8 145 29 0 13 -88 167 -251 440 -31 52 -18 64 66 64 55 0 78 -4 94 -17z M 5407 11682 c7 -4 59 -89 116 -187 222 -387 280 -485 286 -485 14 0 361 608 361 632 0 27 39 38 131 38 95 0 96 -3 42 -99 -36 -66 -327 -559 -450 -763 -59 -98 -88 -137 -97 -127 -2 2 -113 191 -246 419 -133 228 -250 426 -260 440 -32 47 -61 112 -56 126 4 10 26 14 83 14 43 0 83 -4 90 -8z M 6777 11668 c9 -8 8 -16 -6 -36 -17 -24 -232 -395 -260 -449 -11 -21 -8 -24 37 -47 64 -33 143 -105 198 -181 179 -252 183 -572 11 -819 l-44 -62 34 -40 c49 -57 99 -163 118 -249 26 -115 17 -274 -20 -385 -67 -195 -223 -354 -423 -428 -54 -20 -91 -25 -197 -30 -79 -3 -133 -9 -138 -16 -4 -6 -7 -60 -6 -121 l2 -110 -77 -3 -76 -3 -2 553 -3 553 -82 3 -83 3 0 -556 0 -555 -86 0 -86 0 4 145 3 145 -140 3 c-77 1 -250 2 -385 2 l-245 0 0 80 0 80 385 3 385 2 -3 100 -3 100 -375 0 c-206 -1 -378 2 -384 5 -5 3 -10 39 -10 80 0 61 3 75 18 79 9 3 180 4 378 2 199 -2 366 -1 372 3 16 9 10 247 -6 263 -9 9 -60 14 -180 16 -95 2 -172 8 -179 14 -13 11 -18 113 -7 142 5 14 40 16 288 15 154 -1 394 -4 531 -8 248 -6 251 -6 307 -34 71 -35 130 -101 159 -176 31 -82 24 -196 -16 -270 -64 -116 -165 -171 -316 -171 l-90 0 3 -102 3 -103 84 -3 c106 -4 173 10 264 55 90 45 192 145 229 223 69 146 72 345 8 477 -21 43 -52 81 -100 126 -39 36 -70 73 -70 83 0 9 28 47 63 83 117 121 152 211 151 386 -1 125 -21 203 -73 284 -39 60 -110 128 -174 166 -41 24 -51 26 -62 14 -20 -20 -85 -131 -85 -144 0 -7 21 -25 46 -41 59 -37 111 -109 135 -185 23 -74 24 -129 3 -200 -43 -143 -151 -242 -311 -284 -76 -20 -952 -22 -971 -3 -15 15 -16 112 -2 139 10 18 26 19 470 19 441 0 460 1 507 21 68 29 110 64 135 112 43 83 20 184 -55 238 -22 16 -43 29 -48 29 -4 0 -28 -37 -54 -82 -27 -46 -58 -100 -72 -120 l-23 -38 -80 0 c-92 0 -102 8 -74 62 17 33 326 562 536 916 59 101 108 194 108 207 0 13 7 28 14 32 20 11 178 4 193 -9z M 6084 9766 c-3 -13 -4 -81 -2 -150 4 -146 3 -146 91 -146 107 0 177 58 184 154 5 61 -18 110 -67 144 -28 18 -46 22 -116 22 -80 0 -84 -1 -90 -24z" 
      />
    </g>
  </svg>
);

// Kod tekrarını önlemek ve şeridi uzatmak için markaları bir bileşen yaptık
const BrandIcons = () => (
  <>
    <TbBrandMercedes className="shrink-0 hover:text-gray-300 transition-colors cursor-pointer" />
    <SiAudi className="shrink-0 hover:text-gray-300 transition-colors cursor-pointer" />
    <SiBmw className="shrink-0 hover:text-gray-300 transition-colors cursor-pointer" />
    
    {/* Yeni ve Kusursuz YBA Logomuz burada çalışıyor! */}
    <YbaLogo className="shrink-0 hover:text-gray-300 transition-colors cursor-pointer" />
    
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
          <div className="mx-auto flex h-[72px] items-center rounded-full text-white text-4xl overflow-hidden">
            
            <div className="marquee flex items-center">
              
              {/* 1. SET */}
              <div className="flex items-center gap-20 md:gap-32 pr-20 md:pr-32">
                <BrandIcons />
                <BrandIcons />
                <BrandIcons />
              </div>

              {/* 2. SET */}
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
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
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
                    src="/images/arab1.jpg"
                    alt="Araba 1"
                    fill
                    className="object-cover group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                    quality={90}
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl h-56 group cursor-pointer">
                  <Image
                    src="/images/arab2.jpg"
                    alt="Araba 2"
                    fill
                    className="object-cover group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                    quality={90}
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl h-56 group cursor-pointer">
                  <Image
                    src="/images/arab3.jpg"
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