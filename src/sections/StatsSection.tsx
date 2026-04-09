"use client"

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Bunu ekledik

export default function StatsSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".stat", {
      opacity: 0,
      y: 40,
      stagger: 0.2, // Rakamların sırayla gelmesi efekti
      duration: 1,
      scrollTrigger: {
        trigger: ".stats-container", // Bu container'a gelince başla
        start: "top 85%",
      }
    });
  }, []);

  return (
    <section className="w-full py-32 bg-[#0f1f3f] stats-container"> {/* stats-container eklendi */}
      <div className="container-custom grid md:grid-cols-3 gap-20 text-center">
        <div className="stat flex flex-col gap-4">
          <h3 className="text-6xl text-white font-semibold">40+</h3>
          <p className="text-white">Proje</p>
        </div>
        <div className="stat flex flex-col gap-4">
          <h3 className="text-6xl text-white font-semibold">20</h3>
          <p className="text-white">Ülke</p>
        </div>
        <div className="stat flex flex-col gap-4">
          <h3 className="text-6xl text-white font-semibold">500+</h3>
          <p className="text-white">Çalışan</p>
        </div>
      </div>
    </section>
  );
}