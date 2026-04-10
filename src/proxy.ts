import createMiddleware from 'next-intl/middleware';

// next-intl'in createMiddleware fonksiyonu bir middleware/proxy handler döndürür
// Next.js 16'da hem default export hem de named "proxy" export desteklenir
const handler = createMiddleware({
  // Desteklenen diller
  locales: ['tr', 'en'],
  // Kullanıcı "eserholding.com" adresine girerse varsayılan olarak nereye gitsin?
  defaultLocale: 'tr'
});

// Next.js 16 uyumlu named export
export const proxy = handler;

// Geriye uyumlu default export
export default handler;

export const config = {
  // Yönlendirmenin çalışacağı sayfalar (Resimler ve API'ler hariç her yer)
  matcher: ['/', '/(tr|en)/:path*']
};