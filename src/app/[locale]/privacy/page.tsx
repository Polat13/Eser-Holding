"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { fadeUp } from "@/animations/fadeUp";

export default function PrivacyPage() {
  const t = useTranslations("Privacy");

  useEffect(() => {
    const ctx = fadeUp(".animate-privacy");
    return () => ctx.revert();
  }, [t]);

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative w-full h-[30vh] min-h-[280px] flex items-center justify-center overflow-hidden bg-[#0f1f3f]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#030625] to-transparent"></div>
        <div className="animate-privacy relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="w-full py-20 md:py-32">
        <div className="animate-privacy container-custom max-w-4xl mx-auto">

          <div className="flex flex-col gap-12 text-lg text-gray-700 font-light leading-relaxed">

            {/* Giriş */}
            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-normal">
              {t("intro")}
            </p>

            {/* Bölüm 1 */}
            <div>
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">{t("section1Title")}</h2>
              <p>{t("section1Text")}</p>
            </div>

            {/* Bölüm 2 */}
            <div>
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">{t("section2Title")}</h2>
              <p>{t("section2Text")}</p>
            </div>

            {/* Bölüm 3 */}
            <div>
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">{t("section3Title")}</h2>
              <p>{t("section3Text")}</p>
            </div>

            {/* Bölüm 4 */}
            <div>
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">{t("section4Title")}</h2>
              <p>{t("section4Text")}</p>
            </div>

            {/* Bölüm 5 */}
            <div>
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">{t("section5Title")}</h2>
              <p>{t("section5Text")}</p>
            </div>

            {/* Bölüm 6 */}
            <div>
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">{t("section6Title")}</h2>
              <p>{t("section6Text")}</p>
            </div>

            {/* İletişim kutusu */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm">
              <p className="italic text-gray-800 font-medium text-center">
                {t("contactNote")}
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
