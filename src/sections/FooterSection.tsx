import Link from "next/link";

export default function FooterSection() {
  return (
    // Önceki bölümlerden (mavi veya beyaz) ayrılması için çok koyu lacivert/siyah bir ton
    <footer className="w-full py-8 bg-[#081021] border-t border-white/10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Sol Taraf - Telif Hakkı */}
        <p className="text-sm text-gray-400 font-light text-center md:text-left">
          Copyright © 2026 <span className="text-white font-medium">Eser Yatırım Holding</span> Tüm Hakları Saklıdır.
        </p>

        {/* Sağ Taraf - Linkler */}
        <div className="flex items-center gap-6 text-sm text-gray-400 font-light">
          <Link href="#" className="hover:text-white transition-colors duration-300">
            Gizlilik Politikası
          </Link>
          
          {/* Araya küçük bir nokta/ayırıcı koyarak daha şık gösteriyoruz */}
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          
          <Link href="#" className="hover:text-white transition-colors duration-300">
            KVKK
          </Link>
        </div>

      </div>
    </footer>
  );
}