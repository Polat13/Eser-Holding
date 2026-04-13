"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
// 1. Lucide React'tan gerekli ikonları çekiyoruz
import { Phone, Mail, MapPin } from "lucide-react";

// --- ÖZEL SOSYAL MEDYA İKONLARI ---
const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
); 

export default function FooterSection() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className="w-full bg-[#081021]">
      
      {/* ÜST BÖLÜM - İLETİŞİM BİLGİLERİ */}
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10">

        {/* 1. Kolon: Telefon */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left group">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
            {/* Vizyon sayfasındaki mavi vurgu rengi eklendi (text-blue-500) */}
            <Phone className="text-blue-500" size={24} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">{t("phoneTitle")}</h4>
            <div className="flex flex-col gap-2">
              <a href="tel:+902126731166" className="text-gray-400 font-light hover:text-white transition-colors">
                +90 212 673 11 66
              </a>
              <a href="tel:+902126731167" className="text-gray-400 font-light hover:text-white transition-colors">
                +90 212 673 11 67
              </a>
            </div>
          </div>
        </div>

        {/* 2. Kolon: Email */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left group">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <Mail className="text-blue-500" size={24} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">{t("emailTitle")}</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@eseryatirimholding.com" className="text-gray-400 font-light hover:text-white transition-colors">
                info@eseryatirimholding.com
              </a>
              <a href="mailto:destek@eseryatirimholding.com" className="text-gray-400 font-light hover:text-white transition-colors">
                destek@eseryatirimholding.com
              </a>
            </div>
          </div>
        </div>

        {/* 3. Kolon: Adres */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left group">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <MapPin className="text-blue-500" size={24} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">{t("addressTitle")}</h4>
            <div className="flex flex-col gap-4">
              <p className="text-gray-400 font-light max-w-[280px] leading-relaxed">
                Oto Center Galericiler Sitesi P Blok No:28 Yüzyıl Bağcılar / İstanbul
              </p>
              <div>
                <h5 className="text-white font-medium text-sm mb-2">2. Adres</h5>
                <p className="text-gray-400 font-light max-w-[280px] leading-relaxed">
                  Torba Mahallesi Rıza Anter Caddesi No:37 Bodrum/Muğla
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ALT BÖLÜM - YASAL LİNKLER VE SOSYAL MEDYA */}
      <div className="w-full py-8">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Sol Taraf - Telif Hakkı */}
          <p className="text-sm text-gray-400 font-light text-center md:text-left">
            {t.rich("copyright", {
              company: (chunks) => <span className="text-white font-medium">{chunks}</span>
            })}
          </p>

          {/* Orta - Sosyal Medya Butonları */}
          <div className="flex items-center gap-4">
            <a href="https://x.com/EserHolding" target="_blank" rel="noopener noreferrer" 
               className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <TwitterIcon className="text-gray-400 hover:text-white" />
            </a>
            <a href="https://instagram.com/eserrholding" target="_blank" rel="noopener noreferrer" 
               className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <InstagramIcon className="text-gray-400 hover:text-white" />
            </a>
            <a href="https://facebook.com/eser.holding" target="_blank" rel="noopener noreferrer" 
               className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <FacebookIcon className="text-gray-400 hover:text-white" />
            </a>
          </div>

          {/* Sağ Taraf - Yasal Linkler */}
          <div className="flex items-center gap-6 text-sm text-gray-400 font-light">
            <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors duration-300">
              {t("privacy")}
            </Link>
            
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            
            <Link href={`/${locale}/kvkk`} className="hover:text-white transition-colors duration-300">
              {t("kvkk")}
            </Link>
          </div>

        </div>
      </div>
      
    </footer>
  );
}