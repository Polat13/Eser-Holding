import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeUp = (selector: string) => {
  gsap.utils.toArray(selector).forEach((el: any) => {
    // el.children kullanarak section içindeki h2, p, button gibi öğeleri hedefliyoruz
    gsap.from(el.children, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2, // Her öğe arasında 0.2 saniye gecikme koyar
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
  });
};