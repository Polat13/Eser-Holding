"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
// 1. Lucide React'tan gerekli ikonları çekiyoruz
import { Phone, Mail, MapPin } from "lucide-react"; 

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
            <p className="text-gray-400 font-light max-w-[280px] leading-relaxed">
              {t("addressText")}
            </p>
          </div>
        </div>

      </div>

      {/* ALT BÖLÜM - YASAL LİNKLER (Eski Kodun) */}
      <div className="w-full py-8">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Sol Taraf - Telif Hakkı */}
          <p className="text-sm text-gray-400 font-light text-center md:text-left">
            {t.rich("copyright", {
              company: (chunks) => <span className="text-white font-medium">{chunks}</span>
            })}
          </p>

          {/* Sağ Taraf - Linkler */}
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