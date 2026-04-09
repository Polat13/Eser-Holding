"use client";

import Link from "next/link";
import Image from "next/image"; // Next.js Image bileşenini ekledik
import { Search, ArrowUpRight, ChevronDown } from "lucide-react"; 

// Logomuzu projeden içe aktarıyoruz. 
// (Eğer uzantısı .svg ise logo.svg olarak değiştir)
import Logo from "@/assets/logo.png"; 

export default function Navbar() {
  return (
    <nav className="absolute w-full z-50 bg-transparent py-4 px-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        
        {/* Logo Alanı */}
        <Link href="/" className="shrink-0">
          {/* Yazı yerine Image bileşenini koyduk */}
          <Image 
            src={Logo} 
            alt="Eser Yatırım Holding Logo" 
            width={120} // Logonun genişliğini burdan ayarlayabilirsin
            height={40} // Logonun yüksekliğini burdan ayarlayabilirsin
            className="object-contain" // Logonun bozulmadan sığmasını sağlar
            priority // Sayfa yüklenir yüklenmez logonun hazır olmasını sağlar (LCP optimizasyonu)
          />
        </Link>

        {/* Orta Kapsayıcı Menü (Görseldeki koyu transparan alan) */}
        <div className="hidden lg:flex items-center bg-slate-900/10 backdrop-blur-lg rounded-full px-8 py-3">
          <ul className="flex items-center gap-8 text-white text-sm font-semibold whitespace-nowrap">
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
              KURUMSAL <ChevronDown size={16} />
            </li>
            <div className="w-[1px] h-4 bg-white/20"></div> {/* Ayırıcı çizgi */}
            
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
              SEKTÖRLER <ChevronDown size={16} />
            </li>
            <div className="w-[1px] h-4 bg-white/20"></div>
            
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
              PROJELER <ChevronDown size={16} />
            </li>
            <div className="w-[1px] h-4 bg-white/20"></div>
            
            <li className="cursor-pointer hover:text-gray-300 transition-colors">VİZYON</li>
            <div className="w-[1px] h-4 bg-white/20"></div>
            
            <li className="cursor-pointer hover:text-gray-300 transition-colors">HAKKIMIZDA</li>
          </ul>
        </div>

        {/* Sağ Taraf - Dil ve İletişim */}
        <div className="flex items-center gap-6">
          <button className="text-white hidden sm:block">
            <Search size={20} />
          </button>
          
          <div className="text-white font-bold text-sm cursor-pointer hidden sm:flex items-center gap-1">
            TR <ChevronDown size={14} />
          </div>

          <Link 
            href="#contact" 
            className="flex items-center gap-2 bg-slate-900/10 backdrop-blur-lg text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all group"
          >
            Bize Ulaşın
            <div className="border border-white/50 rounded-full p-1 group-hover:border-black">
              <ArrowUpRight size={14} />
            </div>
          </Link>
        </div>

      </div>
    </nav>
  );
}