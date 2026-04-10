import "./globals.css";
import ClientScripts from "./ClientScripts";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import GsapRefresher from "@/components/GsapRefresher";
import Navbar from "@/components/Navbar"; 
import FooterSection from "@/sections/FooterSection"; 

export const metadata = {
  title: "Eser Yatırım Holding",
  description: "Corporate Holding Website"
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning> 
      <body>
        <NextIntlClientProvider messages={messages}>
          
          <GsapRefresher />
          <ClientScripts />
          
          {/* 1. Navbar tüm sayfalarda en üstte yerini alıyor */}
          <Navbar />
          
          {/* 2. Gidilen sayfaların içeriği (Tarihçe, Anasayfa vb.) bu main etiketi içinde çalışır */}
          <main className="min-h-screen" key={locale}>
            {children} 
          </main>
          
          {/* 3. Footer tüm sayfalarda en altta yerini alıyor */}
          <FooterSection />
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}