"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StatsSection() {
  const t = useTranslations("Stats");
  const sectionRef = useRef(null);

  // Verilerimizi bir diziye aldık, böylece kod tekrarından kurtulduk
  const statsData = [
    { targetNum: 500, suffix: "+", key: "projects" },
    { targetNum: 20, suffix: "", key: "countries" },
    { targetNum: 2000, suffix: "+", key: "employees" }
  ];

  useEffect(() => {
    // 1. Kurşun Geçirmez Context: Dil değiştiğinde animasyonu sıfırlayabilmek için
    let ctx = gsap.context(() => {
      
      // Kutu Animasyonu: Hayalet (gri) kalmaması için fromTo kullanıyoruz
      gsap.fromTo(".stat", 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );

      // Sayı Sayma Animasyonu (Counter)
      const counters = gsap.utils.toArray(".counter-number");
      counters.forEach((counter: any) => {
        // HTML'den hedef sayıyı alıyoruz
        const target = parseFloat(counter.getAttribute("data-target"));
        // GSAP'in sayabilmesi için sahte bir obje oluşturuyoruz
        let obj = { val: 0 }; 

        gsap.fromTo(obj, 
          { val: 0 }, // 0'dan başla
          {
            val: target, // Hedef sayıya git (örn: 500)
            duration: 2, // Sayma işlemi 2 saniye sürsün
            ease: "power2.out", // Yavaşlayarak dursun
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
            // Sayı her arttığında HTML içindeki metni güncelliyoruz (küsuratları atarak)
            onUpdate: () => {
              counter.innerHTML = Math.ceil(obj.val);
            }
          }
        );
      });

    }, sectionRef);

    // 2. Dil değiştiğinde eski kilitli animasyonları çöpe at!
    return () => ctx.revert();
    
  }, [t]); // Dil değiştiğinde useEffect baştan tertemiz çalışır

  return (
    <section ref={sectionRef} className="w-full py-32 bg-[#0f1f3f] stats-container">
      <div className="container-custom grid md:grid-cols-3 gap-20 text-center">
        
        {/* Dizideki verileri dönüyoruz */}
        {statsData.map((item, index) => (
          <div key={index} className="stat flex flex-col gap-4">
            <h3 className="text-6xl text-white font-semibold flex items-center justify-center">
              {/* Sadece bu span içindeki sayı GSAP tarafından artırılacak */}
              <span className="counter-number" data-target={item.targetNum}>
                0
              </span>
              {/* Artı (+) işareti sabit kalacak */}
              {item.suffix}
            </h3>
            {/* JSON dosyasından Project, Country, Employee yazılarını çekiyoruz */}
            <p className="text-white text-xl font-light">
              {t(item.key)}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}