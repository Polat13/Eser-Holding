"use client";

import Image from "next/image"; 
// 1. Çeviri kütüphanesini içeri aktarıyoruz
import { useTranslations } from "next-intl";

export default function AboutSection() {
  // 2. JSON'daki "About" objesini çekiyoruz
  const t = useTranslations("About");

  return (
    <section id="about" className="w-full py-32 bg-[#0f1f3f]"> 
      <div className="container-custom grid md:grid-cols-2 gap-20 items-center">
        
        {/* Metin Alanı */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-white"> 
            {/* 3. Sabit metin yerine t("title") kullanıyoruz */}
            {t("title")}
          </h2>
          <p className="text-white leading-relaxed"> 
            {/* 4. Sabit paragraf yerine t("description") kullanıyoruz */}
            {t("description")}
          </p>
        </div>

        {/* Fotoğraf Alanı */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/about.jpg" 
            alt={t("imageAlt")} // 5. Resim açıklamasını da dinamik yaptık (SEO için önemli)
            fill 
            sizes="(max-width: 768px) 100vw, 50vw" 
            className="object-cover rounded" 
            priority={false} 
          />
        </div>

      </div>
    </section>
  );
}