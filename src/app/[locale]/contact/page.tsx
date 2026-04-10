"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeUp } from "@/animations/fadeUp"; // GSAP dosya yolunu kontrol et
// SADECE standart ikonları Lucide'dan çekiyoruz
import { Phone, Mail, MapPin } from "lucide-react";

// --- ÖZEL SOSYAL MEDYA İKONLARI ---
// Lucide marka ikonlarını kaldırdığı için, Lucide ile aynı tasarıma sahip kendi ikonlarımızı oluşturduk
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function ContactPage() {
  const t = useTranslations("Contact");

  useEffect(() => {
    // GSAP scroll animasyonu
    const ctx = fadeUp(".animate-contact");
    return () => ctx.revert();
  }, [t]);

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. SAYFA ÜST (HERO) ALANI */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-[#0f1f3f]">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/iletisim.jpg" 
            alt="Eser Yatırım Holding İletişim" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030625] to-transparent"></div>
        
        <div className="animate-contact relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white pb-4 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. İÇERİK ALANI */}
      <section className="w-full py-20 md:py-32">
        <div className="animate-contact container-custom">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Sol Taraf: Sabit Başlık Alanı */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="sticky top-32">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-500 block pb-2 tracking-tighter uppercase">
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

            {/* Sağ Taraf: İletişim Bilgileri Kartları */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              
              {/* Telefon Kartı */}
              <div className="flex items-start gap-6 p-8 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 shrink-0 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <Phone className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t("phoneTitle")}</h3>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+902126731166" className="text-lg text-gray-600 hover:text-blue-600 font-medium transition-colors">
                      +90 212 673 11 66
                    </a>
                    <a href="tel:+902126731167" className="text-lg text-gray-600 hover:text-blue-600 font-medium transition-colors">
                      +90 212 673 11 67
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Kartı */}
              <div className="flex items-start gap-6 p-8 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 shrink-0 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <Mail className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t("emailTitle")}</h3>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:info@eseryatirimholding.com" className="text-lg text-gray-600 hover:text-blue-600 font-medium transition-colors break-all">
                      info@eseryatirimholding.com
                    </a>
                    <a href="mailto:destek@eseryatirimholding.com" className="text-lg text-gray-600 hover:text-blue-600 font-medium transition-colors break-all">
                      destek@eseryatirimholding.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Adres Kartı */}
              <div className="flex items-start gap-6 p-8 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 shrink-0 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <MapPin className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t("addressTitle")}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    {t("addressText")}
                  </p>
                </div>
              </div>

              {/* Sosyal Medya Kutusu - Masaüstü için yatay bar tasarımı */}
              <div className="mt-2 p-6 lg:p-8 bg-[#081021] rounded-2xl shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
                
                {/* Başlık mb-6 silindi, flex ile hizalandı */}
                <h3 className="text-xl font-bold text-white text-center lg:text-left m-0 whitespace-nowrap">
                  {t("socialTitle")}
                </h3>
                
                <div className="flex items-center justify-center gap-4 sm:gap-6">
                  
                  {/* Facebook */}
                  <a href="https://www.facebook.com/eser.holding" target="_blank" rel="noopener noreferrer" className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                    <FacebookIcon size={24} />
                  </a>
                  
                  {/* Instagram */}
                  <a href="https://www.instagram.com/eserrholding/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-pink-600 hover:scale-110 transition-all duration-300">
                    <InstagramIcon size={24} />
                  </a>
                  
                  {/* Twitter / X */}
                  <a href="https://x.com/eserholding" target="_blank" rel="noopener noreferrer" className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all duration-300">
                    <TwitterIcon size={24} />
                  </a>
                  
                  {/* YouTube */}
                  <a href="https://www.youtube.com/watch?v=xQsqBCyWNVc" target="_blank" rel="noopener noreferrer" className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all duration-300">
                    <YoutubeIcon size={24} />
                  </a>
                  
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </section>
      
    </main>
  );
}