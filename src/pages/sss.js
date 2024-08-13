import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { PageHero } from "@/components/sections/PageHero";
import Layout from "@/components/UI/Layout";
import { json_default, seo_default } from "@/lib/identification";
import jsonld from "@/lib/jsonld";
import seo from "@/lib/seo";
import { FAQPageJsonLd, NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

export default function SSS() {
  const heroConfig = {
    header: "Sıkça Sorular Sorular",
    content:
      "Size nasıl yardımcı olabiliriz? Bir sorunuz varsa, yorum bırakmak istiyorsanız veya Polonya Yaşam hakkında daha fazla bilgi edinmek istiyorsanız lütfen bize bildirin. Sizler için en Polonya'da eğitim ve yaşam hakkında sorulan genel soruları derledik.",
    img: "/assets/sss-media/faq.webp",
    exdesc: "Hemen bilgi alın",
    contentHeader: "Güncel",
    contentDescription: "Polonya'da yaşam hakkında",
    href: "/polonyada-yasam",
  };

  const faqsList = [
    {
      q: "Polonya'daki üniversitelerde Türk öğrenciler İngilizce olarak eğitim alabilir mi?",
      a: " Evet, Polonya'daki birçok üniversite, lisans ve yüksek lisans düzeylerinde İngilizce olarak öğretilen programlar sunmaktadır. Bu özellikle işletme, mühendislik ve fen bilimleri gibi alanlarda yaygındır. Başvuran öğrenciler birçok İngilizce program arasından seçim yapabilirler",
    },
    {
      q: "Polonya'da uluslararası öğrenciler için yaşam maliyeti nasıldır?",
      a: "T Polonya'da yaşam maliyeti genellikle birçok Batı Avrupa ülkesine göre daha düşüktür. Konaklama, yemek ve ulaşım gibi masraflar uygun fiyatlıdır. Ayrıca, öğrenciler çeşitli indirimlerden faydalanabilirler. Polonya, öğrenci dostu fiyatlarıyla bilinir.",
    },
    {
      q: "Polonya'daki üniversitelerde uluslararası öğrenciler için giriş koşulları nelerdir?",
      a: "Giriş koşulları, öğrenim düzeyine ve belirli üniversiteye veya programa bağlı olarak değişiklik gösterir. Genellikle lisans programlarından mezun olmuş olmak gerekebilir, yüksek lisans programları için bir lisans diplomasına sahip olmak gerekebilir. İngilizce veya Lehçe dil bilgisi, ve bazı programlarda giriş sınavları gerekebilir.",
    },
    {
      q: "Polonya'daki uluslararası öğrencilerin burs alma imkanı var mı?",
      a: "Evet, Polonya'daki uluslararası öğrenciler için çeşitli burs imkanları bulunmaktadır. Bu burslar Polonya hükümeti, üniversiteler veya diğer kuruluşlar tarafından sunulabilir. Öğrenciler, akademik başarılarına, araştırma ilgi alanlarına veya burs sağlayıcıların belirlediği özel kriterlere dayalı olarak burs fırsatlarını keşfetmeleri önerilir.",
    },
    {
      q: "Polonya'da öğrenci yaşamı ve kültürel deneyim nasıldır?",
      a: "Polonya, canlı ve çeşitli bir öğrenci yaşamı sunmaktadır. Birçok şehirde canlı bir kültür sahnesi vardır ve öğrenciler için birçok etkinlik, festival ve aktivite bulunmaktadır. Ülkenin zengin tarihi ve kültür mirası, eşsiz bir kültürel deneyim sunmaktadır. Ayrıca, Polonyalılar misafirperverlikleriyle bilinir, bu da uluslararası öğrencilerin yerel kültüre daha kolay adapte olmalarını sağlar.",
    },
    {
      q: "Polonya'daki üniversitelerin akademik itibarı nedir?",
      a: "Polonya üniversiteleri, uluslararası sıralamalarda iyi bir yer edinmiştir. Örneğin, 2023 QS Dünya Üniversite Sıralaması'nda, Polonya'dan 10 üniversite ilk 1000'de yer almıştır.",
    },
    {
      q: "Polonya'daki üniversiteler hangi dillerde eğitim vermektedir?",
      a: "Polonya'daki üniversiteler, İngilizce, Lehçe ve diğer bazı dillerde eğitim vermektedir. İngilizce olarak eğitim veren programlar, özellikle işletme, mühendislik ve fen bilimleri gibi alanlarda yaygındır.",
    },
    {
      q: "Polonya'daki üniversitelerin kabul süreci nasıldır?",
      a: "Polonya'daki üniversitelerin kabul süreci, öğrenim düzeyine ve belirli üniversiteye veya programa bağlı olarak değişiklik gösterir. Genellikle, lisans programlarından mezun olmak, yüksek lisans programları için bir lisans diplomasına sahip olmak, İngilizce veya Lehçe dil bilgisi ve bazı programlarda giriş sınavları gerekmektedir.",
    },
    {
      q: "Polonya'daki üniversitelerin ücretleri ne kadardır?",
      a: (
        <span>
          Polonya'daki üniversitelerin ücretleri, öğrenim düzeyine, üniversiteye
          ve programa bağlı olarak değişiklik gösterir. Devlet üniversiteleri,
          Polonya vatandaşları için ücretsizdir. Uluslararası öğrenciler için
          yıllık eğitim ücretleri, yaklaşık 2.000 Euro'dan başlar. Olympos Edu
          farkı ile size 150 farklı lisans ve yüksek lisans programı derledik{" "}
          <a
            href="/universitelerimiz"
            className="underline underline-offset-2 text-blue-700"
          >
            buraya tıklayarak
          </a>{" "}
          ulaşabilirsiniz
        </span>
      ),
    },
  ];

  return (
    <>
      <NextSeo {...seo_default} {...seo.sss} />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName:
              "Polonya'daki üniversitelerde Türk öğrenciler İngilizce olarak eğitim alabilir mi?",
            acceptedAnswerText:
              " Evet, Polonya'daki birçok üniversite, lisans ve yüksek lisans düzeylerinde İngilizce olarak öğretilen programlar sunmaktadır. Bu özellikle işletme, mühendislik ve fen bilimleri gibi alanlarda yaygındır. Başvuran öğrenciler birçok İngilizce program arasından seçim yapabilirler",
          },
          {
            questionName:
              "Polonya'da uluslararası öğrenciler için yaşam maliyeti nasıldır?",
            acceptedAnswerText:
              "T Polonya'da yaşam maliyeti genellikle birçok Batı Avrupa ülkesine göre daha düşüktür. Konaklama, yemek ve ulaşım gibi masraflar uygun fiyatlıdır. Ayrıca, öğrenciler çeşitli indirimlerden faydalanabilirler. Polonya, öğrenci dostu fiyatlarıyla bilinir.",
          },
          {
            questionName:
              "Polonya'daki üniversitelerde uluslararası öğrenciler için giriş koşulları nelerdir?",
            acceptedAnswerText:
              "Giriş koşulları, öğrenim düzeyine ve belirli üniversiteye veya programa bağlı olarak değişiklik gösterir. Genellikle lisans programlarından mezun olmuş olmak gerekebilir, yüksek lisans programları için bir lisans diplomasına sahip olmak gerekebilir. İngilizce veya Lehçe dil bilgisi, ve bazı programlarda giriş sınavları gerekebilir.",
          },
          {
            questionName:
              "Polonya'daki uluslararası öğrencilerin burs alma imkanı var mı?",
            acceptedAnswerText:
              "Evet, Polonya'daki uluslararası öğrenciler için çeşitli burs imkanları bulunmaktadır. Bu burslar Polonya hükümeti, üniversiteler veya diğer kuruluşlar tarafından sunulabilir. Öğrenciler, akademik başarılarına, araştırma ilgi alanlarına veya burs sağlayıcıların belirlediği özel kriterlere dayalı olarak burs fırsatlarını keşfetmeleri önerilir.",
          },
          {
            questionName:
              "Polonya'da öğrenci yaşamı ve kültürel deneyim nasıldır?",
            acceptedAnswerText:
              "Polonya, canlı ve çeşitli bir öğrenci yaşamı sunmaktadır. Birçok şehirde canlı bir kültür sahnesi vardır ve öğrenciler için birçok etkinlik, festival ve aktivite bulunmaktadır. Ülkenin zengin tarihi ve kültür mirası, eşsiz bir kültürel deneyim sunmaktadır. Ayrıca, Polonyalılar misafirperverlikleriyle bilinir, bu da uluslararası öğrencilerin yerel kültüre daha kolay adapte olmalarını sağlar.",
          },
          {
            questionName:
              "Polonya'daki üniversitelerin akademik itibarı nedir?",
            acceptedAnswerText:
              "Polonya üniversiteleri, uluslararası sıralamalarda iyi bir yer edinmiştir. Örneğin, 2023 QS Dünya Üniversite Sıralaması'nda, Polonya'dan 10 üniversite ilk 1000'de yer almıştır.",
          },
          {
            questionName:
              "Polonya'daki üniversiteler hangi dillerde eğitim vermektedir?",
            acceptedAnswerText:
              "Polonya'daki üniversiteler, İngilizce, Lehçe ve diğer bazı dillerde eğitim vermektedir. İngilizce olarak eğitim veren programlar, özellikle işletme, mühendislik ve fen bilimleri gibi alanlarda yaygındır.",
          },
          {
            questionName: "Polonya'daki üniversitelerin kabul süreci nasıldır?",
            acceptedAnswerText:
              "Polonya'daki üniversitelerin kabul süreci, öğrenim düzeyine ve belirli üniversiteye veya programa bağlı olarak değişiklik gösterir. Genellikle, lisans programlarından mezun olmak, yüksek lisans programları için bir lisans diplomasına sahip olmak, İngilizce veya Lehçe dil bilgisi ve bazı programlarda giriş sınavları gerekmektedir.",
          },
        ]}
      />
      <Head>
        <Script
          type="
        application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json_default) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonld.sss),
          }}
        />
      </Head>
      <Layout>
        <PageHero {...heroConfig} />
        <Faq faqsList={faqsList} />
        <Contact />
      </Layout>
    </>
  );
}
