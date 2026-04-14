"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeUp } from "@/animations/fadeUp";

const ProjectLiveCard = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [interactionTime, setInteractionTime] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % images.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, interactionTime]);

  return (
    <div className="relative group h-[380px] md:h-[420px] overflow-hidden rounded-xl cursor-pointer bg-slate-900 shadow-sm hover:shadow-2xl transition-all duration-500">
      {images.map((img, idx) => {
        let imageClasses = "opacity-0 -z-10 scale-100";
        if (idx === currentIndex) {
          imageClasses = "opacity-100 z-10 scale-105";
        } else if (idx === prevIndex) {
          imageClasses = "opacity-100 z-0 scale-105";
        }

        return (
          <Image
            key={idx}
            src={img}
            alt={`${title} - ${idx + 1}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 ${imageClasses}`}
          />
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030625]/90 via-[#030625]/20 to-transparent flex items-end p-8 z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 w-full">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Eser Yatırım Holding
          </span>
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
            {title}
          </h3>

          {/* Noktalar */}
          {images.length > 1 && (
            <div className="flex items-center gap-1.5 -ml-2">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center justify-center p-2 cursor-pointer group/dot"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (idx === currentIndex) return;
                    setPrevIndex(currentIndex);
                    setCurrentIndex(idx);
                    setInteractionTime(Date.now());
                  }}
                >
                  <div
                    className={`rounded-full transition-all duration-300 ${idx === currentIndex
                      ? "w-2 h-2 bg-white"
                      : "w-1.5 h-1.5 bg-white/50 group-hover/dot:bg-white/80"
                      }`}
                  />
                  {idx === currentIndex && (
                    <div className="absolute w-4 h-4 rounded-full border-[1.5px] border-white/60"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const t = useTranslations("Projects");

  // Çoklu görselli projeler (Galeri)
  const galleryProjects: Record<string, string[]> = {
    project5: [
      "/images/bahceliyasamevleri1.jpeg",
      "/images/bahceliyasamevleri2.jpeg",
    ],
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

  type ProjectItem =
    | { type: "single"; key: string; img: string }
    | { type: "gallery"; key: string };

  // Tüm projeler ekrana basılma sırasına göre dizildi
  const allProjects: ProjectItem[] = [
    { type: "single", key: "project1", img: "/images/eserparkevleri1.jpeg" },
    { type: "single", key: "project3", img: "/images/eserrezidans2.jpeg" },
    { type: "gallery", key: "project5" },
    { type: "single", key: "project4", img: "/images/proje4.jpg" },
    { type: "single", key: "project6", img: "/images/nisantasibayrakkonaklari1.jpeg" },
    { type: "single", key: "project7", img: "/images/eyupsultan1.jpeg" },
    { type: "gallery", key: "project2" },
    { type: "gallery", key: "project8" },
  ];

  useEffect(() => {
    const ctx = fadeUp(".animate-projects");
    return () => ctx.revert();
  }, [t]);

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
              const title = t(`items.${item.key}`);

              if (item.type === "single") {
                return (
                  <ProjectLiveCard
                    key={`${item.key}-${index}`}
                    images={[item.img]}
                    title={title}
                  />
                );
              }

              const images = galleryProjects[item.key];
              return (
                <ProjectLiveCard
                  key={`${item.key}-${index}`}
                  images={images}
                  title={title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}