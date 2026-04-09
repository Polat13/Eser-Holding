"use client";

// Next.js Image bileşenini içe aktarıyoruz
import Image from "next/image"; 

export default function AboutSection() {
  return (
    // Önceki gibi: Koyu mavi arka plan
    <section className="w-full py-32 bg-[#0f1f3f]"> 
      <div className="container-custom grid md:grid-cols-2 gap-20 items-center">
        
        {/* Metin Alanı */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-white"> 
            Holdingimiz Hakkında
          </h2>
          <p className="text-white leading-relaxed"> 
            Eser Yatırım Holding A.Ş. olarak temel politikamız dürüstlük ve kalite esasına dayanmaktadır. Ayrıca projelerimizi tasarlarken hayatınıza; konfor, ayrıcalık ve kazanç katacak bir çok özelliğin olmasına özen gösteriyoruz. Bizim için önemli olan aileniz ve çocuklarınızla yaşayacağınız alanların güven vermesidir.
          </p>
        </div>

        {/* Fotoğraf Alanı: Next.js Image bileşeni ile optimize edildi */}
        {/* NOT: Fotoğrafı 'public/images/about.jpg' yoluna koyduğunu varsayıyoruz. */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/about.jpg" // Dış link yerine yerel yol
            alt="Eser Yatırım Holding Hakkında Görsel" // Erişilebilirlik için alt metin
            fill // Parent container'ı (div) doldurması için
            sizes="(max-width: 768px) 100vw, 50vw" // Performans için responsive resim çeker
            className="object-cover rounded" // Önceki styling: object-cover ve rounded köşeler
            priority={false} // Bu section Hero altında olduğu için lazy load edilebilir, priority gerekmez.
          />
        </div>

      </div>
    </section>
  );
}