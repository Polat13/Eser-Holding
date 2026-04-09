export default function CompaniesSection() {
    const sectors = [
      { 
        name: "İnşaat", 
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd" // Senin önceki inşaat görselin
      },
      { 
        name: "Otomotiv", 
        img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7" // Premium bir otomotiv/araç görseli
      },
      { 
        name: "Tekstil", 
        img: "https://cdn.pixabay.com/photo/2018/10/16/11/36/machine-3751278_1280.jpg" // Modern bir tekstil/kumaş görseli
      }
    ];
      
    return (
      // Arka planı beyaza çektik (bg-white)
      <section className="w-full py-32 bg-white">
        <div className="container-custom flex flex-col gap-16">
          
          {/* Ana başlık koyu mavi oldu */}
          <h2 className="text-4xl font-semibold text-[#1E3A8A]">
            Sektörlerimiz
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {sectors.map((item, index) => (
              <div key={index} className="relative group h-[340px] overflow-hidden rounded-lg cursor-pointer">
                
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="absolute w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                
                {/* Fotoğrafın alt kısmına doğru hafif koyulaşan bir degrade (yazının okunması için) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  {/* Kart içi metinler (Hover olunca hafif yukarı kayar) */}
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