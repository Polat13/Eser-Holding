"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeUp } from "@/animations/fadeUp";
import Lenis from "@studio-freight/lenis";

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  const [galleryOpen, setGalleryOpen] = useState<string | null>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);

  // Tek görselli projeler
  const singleProjects = [
    { key: "project1", img: "/images/eserparkevleri1.jpeg" },
    { key: "project3", img: "/images/eserrezidans2.jpeg" },
    { key: "project5", img: "/images/bahceliyasamevleri1.jpeg" },
    { key: "project5", img: "/images/bahceliyasamevleri2.jpeg" },
    { key: "project4", img: "/images/proje4.jpg" },
    { key: "project6", img: "/images/nisantasibayrakkonaklari1.jpeg" },
    { key: "project7", img: "/images/eyupsultan1.jpeg" },
  ];

  // Çoklu görselli projeler (galeri açılacak)
  const galleryProjects: Record<string, string[]> = {
    project2: [
      "/images/proje2.jpg",
      "/images/türkbüküzirve5.jpeg",
      "/images/türkbüküzirve6.jpeg",
      "/images/türkbüküzirve7.jpeg",
    ],
    project8: [
      "/images/türkbüküzirve1.jpeg",
      "/images/türkbüküzirve2.jpeg",
      "/images/türkbüküzirve3.jpeg",
      "/images/türkbüküzirve4.jpeg",
    ],
  };

  // Tüm kartları sıralı şekilde birleştir (orijinal sırayı koru)
  type ProjectItem =
    | { type: "single"; key: string; img: string }
    | { type: "gallery"; key: string };

  const allProjects: ProjectItem[] = [
    ...singleProjects.map((p) => ({ type: "single" as const, ...p })),
    { type: "gallery", key: "project2" },
    { type: "gallery", key: "project8" },
  ];

  // ESC ile modal kapat
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setGalleryOpen(null);
    },
    []
  );

  useEffect(() => {
    const globalLenis = (window as any).lenis;
    let localLenis: Lenis | null = null;
    let rafId: number;

    if (galleryOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      if (globalLenis) globalLenis.stop();
      window.addEventListener("keydown", handleKeyDown);

      // DOM'un render olmasını bekleyip local Lenis başlatıyoruz
      requestAnimationFrame(() => {
        if (modalScrollRef.current) {
          localLenis = new Lenis({
            wrapper: modalScrollRef.current,
            content: modalScrollRef.current.firstElementChild as HTMLElement,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: 0.05,
            wheelMultiplier: 1,
            smoothWheel: true,
          });

          const raf = (time: number) => {
            localLenis?.raf(time);
            rafId = requestAnimationFrame(raf);
          };
          rafId = requestAnimationFrame(raf);
        }
      });
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (globalLenis) globalLenis.start();
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (globalLenis) globalLenis.start();
      if (localLenis) {
        localLenis.destroy();
      }
      cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryOpen, handleKeyDown]);

  useEffect(() => {
    const ctx = fadeUp(".animate-projects");
    return () => ctx.revert();
  }, [t]);

  // Kart render fonksiyonu (hem grid hem modal içinde kullanılır)
  const renderCard = (
    img: string,
    projectKey: string,
    index: number,
    onClick?: () => void
  ) => (
    <div
      key={`${projectKey}-${index}`}
      className="relative group h-[380px] md:h-[420px] overflow-hidden rounded-xl cursor-pointer bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
      onClick={onClick}
    >
      <Image
        src={img}
        alt={t(`items.${projectKey}`)}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030625]/90 via-[#030625]/20 to-transparent flex items-end p-8 z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Eser Yatırım Holding
          </span>
          <h3 className="text-2xl md:text-3xl font-medium text-white">
            {t(`items.${projectKey}`)}
          </h3>
        </div>
      </div>

      {/* Galeri projelerinde fotoğraf sayısı rozeti */}
      {onClick && (
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {galleryProjects[projectKey].length}
        </div>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      {/* 1. SAYFA ÜST (HERO) ALANI */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-[#0f1f3f]">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/projeler.jpg"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allProjects.map((item, index) => {
              if (item.type === "single") {
                return renderCard(item.img, item.key, index);
              }
              // Galeri projesi: sadece ilk görseli göster, tıklayınca galeri aç
              const images = galleryProjects[item.key];
              return renderCard(images[0], item.key, index, () =>
                setGalleryOpen(item.key)
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GALERİ MODAL (Portal ile body'ye render edilir) */}
      {galleryOpen && createPortal(
        <>
          {/* Arka plan overlay */}
          <div
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-md"
            onClick={() => setGalleryOpen(null)}
          />

          {/* Kapat Butonu - Daha büyük z-index ve padding ile */}
          <button
            className="fixed top-4 right-4 md:top-8 md:right-8 z-[10000] bg-white/20 hover:bg-white/30 backdrop-blur-xl text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer pointer-events-auto"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setGalleryOpen(null);
            }}
            aria-label="Kapat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Kaydırılabilir içerik katmanı */}
          <div
            ref={modalScrollRef}
            className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain pointer-events-auto"
            onClick={() => setGalleryOpen(null)}
            data-lenis-prevent="true"
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div
              className="w-full max-w-7xl mx-auto px-4 pt-24 pb-20 md:py-20"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center tracking-tight drop-shadow-lg">
                {t(`items.${galleryOpen}`)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {galleryProjects[galleryOpen].map((img, i) =>
                  renderCard(img, galleryOpen, i)
                )}
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </main>
  );
}