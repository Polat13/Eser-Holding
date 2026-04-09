export default function AboutSection() {
  return (
    <section className="w-full py-32 bg-[#0f1f3f]"> {/* Koyu mavi arka plan */}
      <div className="container-custom grid md:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-white"> {/* Beyaz başlık */}
            Holdingimiz Hakkında
          </h2>
          <p className="text-white leading-relaxed"> {/* Beyaz paragraf */}
          Eser Yatırım Holding A.Ş. olarak temel politikamız dürüstlük ve kalite esasına dayanmaktadır. Ayrıca projelerimizi tasarlarken hayatınıza; konfor, ayrıcalık ve kazanç katacak bir çok özelliğin olmasına özen gösteriyoruz. Bizim için önemli olan aileniz ve çocuklarınızla yaşayacağınız alanların güven vermesidir.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
          className="w-full h-[400px] object-cover rounded"
        />
      </div>
    </section>
  );
}