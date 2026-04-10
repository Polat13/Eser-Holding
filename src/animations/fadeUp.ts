import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Fonksiyon artık bir "Context" döndürüyor, böylece sayfalarda kolayca temizleyebileceğiz
export const fadeUp = (selector: string) => {
  let ctx = gsap.context(() => {
    
    gsap.utils.toArray(selector).forEach((el: any) => {
      // İŞTE SİHİR BURADA: from yerine fromTo!
      gsap.fromTo(el.children, 
        { 
          y: 40,
          opacity: 0 // Başlangıç: Görünmez
        },
        { 
          y: 0,
          opacity: 1, // Bitiş: Kesinlikle %100 görünür olacak!
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

  });

  return ctx; // Bu context'i döndürüyoruz ki React sayfalarında silebilelim
};