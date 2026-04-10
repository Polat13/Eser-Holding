"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import Logo from "@/assets/logo.png";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      if ((window as any).lenis) (window as any).lenis.stop();
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      if ((window as any).lenis) (window as any).lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      if ((window as any).lenis) (window as any).lenis.start();
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (newLocale: string) => {
    setIsLangOpen(false);

    if (locale === newLocale) return;

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const navLinks = [
    {
      id: "corporate",
      name: t("corporate"),
      href: "#", // Yönlendirmeyi iptal ettik
      hasSub: true,
      subLinks: [
        { name: t("history"), href: `/${locale}/corporate/history` },
        { name: t("mission"), href: `/${locale}/corporate/mission` }
      ]
    },
    {
      id: "sectors",
      name: t("sectors"),
      href: "#", // Yönlendirmeyi iptal ettik
      hasSub: true,
      subLinks: [
        { name: t("construction"), href: `/${locale}/sectors/construction` },
        { name: t("automotive"), href: `/${locale}/sectors/automotive` },
        { name: t("textile"), href: `/${locale}/sectors/textile` },
        { name: t("energy"), href: `/${locale}/sectors/energy` }
      ]
    },
    { id: "projects", name: t("projects"), href: `/${locale}/projects`, hasSub: false },
    { id: "vision", name: t("vision"), href: `/${locale}/vision`, hasSub: false },
    { id: "about", name: t("about"), href: `/${locale}/about`, hasSub: false },
  ];

  return (
    <>
      <nav className="absolute w-full z-50 bg-transparent py-4 px-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">

          <Link href={`/${locale}`} className="shrink-0 z-[60]">
            <Image src={Logo} alt="Logo" width={80} height={40} className="object-contain" priority />
          </Link>

          {/* SADECE MASAÜSTÜ: Orta Menü */}
          <div className="hidden lg:flex items-center bg-slate-900/10 backdrop-blur-lg rounded-full px-8 py-3 border border-white/10">
            <ul className="flex items-center gap-8 text-white text-sm font-semibold whitespace-nowrap">
              {navLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="relative group flex items-center"
                  onMouseEnter={() => link.hasSub && setActiveDropdown(link.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  
                  {/* SİHİRLİ DOKUNUŞ: Alt menüsü olanları Link yerine span yapıyoruz */}
                  {link.hasSub ? (
                    <span className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2 cursor-pointer">
                      {link.name} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.id ? "rotate-180" : ""}`} />
                    </span>
                  ) : (
                    <Link href={link.href} className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
                      {link.name}
                    </Link>
                  )}

                  {/* DESKTOP AÇILIR MENÜ */}
                  {link.hasSub && (
                    <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white text-black rounded-lg shadow-xl overflow-hidden flex flex-col w-[140px] z-50 border border-gray-100 transition-all duration-300 ease-out origin-top ${activeDropdown === link.id ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible translate-y-2 scale-95"}`}>
                      {link.subLinks?.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          className="px-4 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-50 last:border-none text-center"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {idx !== navLinks.length - 1 && <div className="ml-8 w-[1px] h-4 bg-white/20"></div>}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 z-[60]">

            {/* DİL SEÇİCİ */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-white font-bold text-sm flex items-center gap-1 uppercase bg-white/10 hover:bg-white/20 transition-colors px-3 py-2 rounded-lg"
              >
                {locale} <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`absolute top-full mt-2 right-0 bg-white text-black rounded-lg shadow-xl overflow-hidden flex flex-col w-[80px] z-50 border border-gray-100 transition-all duration-300 ease-out origin-top ${isLangOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible translate-y-2 scale-95"}`}>
                {["tr", "en"].map((l) => (
                  <button
                    key={l}
                    onClick={() => changeLanguage(l)}
                    className={`px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none ${locale === l ? "text-blue-600 font-bold" : ""}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href={`/${locale}/contact`}
              className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-lg text-white px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-black transition-all group border border-white/10 hover:border-transparent"
            >
              {t("contact")}
              <div className="border border-white/50 rounded-full p-1 group-hover:border-black transition-colors">
                <ArrowUpRight size={14} />
              </div>
            </Link>

            {/* MOBİL HAMBURGER */}
            <button
              className="flex lg:hidden text-white bg-white/10 hover:bg-white/20 transition-colors p-2.5 rounded-xl backdrop-blur-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBİL MENÜ OVERLAY */}
        <div
          data-lenis-prevent="true"
          onTouchMove={(e) => e.stopPropagation()}
          className={`fixed inset-0 bg-[#030625] z-[55] lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
        >
          <div className="flex flex-col h-full justify-center px-8 sm:px-12 gap-6 overflow-y-auto pt-24 pb-10">
            {navLinks.map((link, idx) => (
              <div key={idx} className="flex flex-col w-full">
                <div
                  className="flex items-center justify-between text-2xl sm:text-3xl font-bold text-white py-2 cursor-pointer"
                  onClick={() => link.hasSub && setActiveDropdown(activeDropdown === link.id ? null : link.id)}
                >
                  {link.hasSub ? (
                    <span className="flex items-center justify-between w-full">
                      {link.name}
                      <ChevronDown className={`transition-transform duration-300 ${activeDropdown === link.id ? "rotate-180 text-blue-400" : "text-gray-400"}`} />
                    </span>
                  ) : (
                    <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="w-full">{link.name}</Link>
                  )}
                </div>

                {link.hasSub && (
                  <div className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === link.id ? "max-h-[400px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col gap-4 pl-4 sm:pl-6 border-l-2 border-white/10 py-2">
                      {link.subLinks?.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg sm:text-xl text-gray-300 font-medium hover:text-white hover:translate-x-2 transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 flex items-center justify-between bg-white text-black px-6 py-4 rounded-2xl font-bold text-xl uppercase hover:bg-gray-200 transition-colors"
            >
              {t("contact")} <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}