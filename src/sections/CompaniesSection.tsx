import Image from "next/image"; // Next.js resim optimizasyon kütüphanesi

export default function CompaniesSection() {
  const sectors = [
    { 
      name: "İnşaat", 
      // public/images klasöründeki lokal resmin yolu
      img: "/images/insaat.jpg" 
    },
    { 
      name: "Otomotiv", 
      img: "/images/otomotiv.jpg" 
    },
    { 
      name: "Tekstil", 
      img: "/images/tekstil.jpg" 
    }
  ];
    
  return (
    <section className="w-full py-32 bg-white">
      <div className="container-custom flex flex-col gap-16">
        
        <h2 className="text-4xl font-semibold text-[#1E3A8A]">
          Sektörlerimiz
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {sectors.map((item, index) => (
            <div key={index} className="relative group h-[340px] overflow-hidden rounded-lg cursor-pointer bg-slate-100">
              
              {/* Eski <img> yerine Yeni Next.js <Image> bileşeni */}
              <Image 
                src={item.img} 
                alt={item.name}
                fill /* Div'in içini tamamen kaplaması için */
                sizes="(max-width: 768px) 100vw, 33vw" /* Performans için ekran boyutuna göre resim çeker */
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 z-10">
                <h3 className="text-2xl font-medium text-white group-hover:-translate-y-2 transition-transform duration-300">
                  {item.name}
                </h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}