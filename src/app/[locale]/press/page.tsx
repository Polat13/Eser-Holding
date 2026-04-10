"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeUp } from "@/animations/fadeUp";
import { ExternalLink } from "lucide-react";

export default function PressPage() {
  const t = useTranslations("Press");

  useEffect(() => {
    const ctx = fadeUp(".animate-press");
    return () => ctx.revert();
  }, [t]);

  return (
    <main className="min-h-screen bg-white">

      {/* 1. SAYFA ÜST (HERO) ALANI */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-[#0f1f3f]">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/basin.jpg"
            alt="Eser Yatırım Holding Basında Biz"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030625] to-transparent"></div>

        <div className="animate-press relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white pb-4 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. İÇERİK ALANI */}
      <section className="w-full py-20 md:py-32">
        <div className="animate-press container-custom">

          <div className="flex flex-col gap-12">

            {/* Başlık ve Motto */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] leading-snug mb-4">
                {t("subtitle")}
              </h2>
              <p className="text-gray-500 font-medium text-lg">
                {t("motto")}
              </p>
            </div>

            {/* Haberler Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

              {/* Haber 1 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/haber1.jpg"
                    alt="Eser Holding Yönetim Kurulu Başkanı Yalçın Bayrak"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                    {t("news1.title")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t("news1.summary")}
                  </p>
                  <a
                    href={t("news1.url")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg hover:bg-[#152c5f] transition-colors duration-200 font-medium"
                  >
                    {t("news1.button")}
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Haber 2 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/haber2.jpg"
                    alt="Behçet Bayrak Yatırımlarına Devam Ediyor"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 25%' }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                    {t("news2.title")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t("news2.summary")}
                  </p>
                  <a
                    href={t("news2.url")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg hover:bg-[#152c5f] transition-colors duration-200 font-medium"
                  >
                    {t("news2.button")}
                    <ExternalLink size={18} />
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