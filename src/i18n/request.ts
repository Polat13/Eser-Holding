import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Yeni sürümde requestLocale asenkron bir işlemdir, bu yüzden 'await' ile bekliyoruz
  let locale = await requestLocale;

  // 2. Güvenlik önlemi: Eğer tarayıcıdan bir dil algılanamazsa sistem çökmesin, 'tr' kabul etsin
  if (!locale) {
    locale = 'tr';
  }

  return {
    // 3. Yeni kütüphane kuralları gereği, bulduğumuz dili (locale) sisteme geri döndürmemiz gerekiyor
    locale,
    // 4. İlgili JSON dosyasını çekiyoruz
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});