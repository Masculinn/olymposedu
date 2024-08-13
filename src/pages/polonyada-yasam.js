import polandlife_data from "@/lib/polandlife_data";
import { PageHero } from "@/components/sections/PageHero";
import { CardHolder } from "@/components/UI/CardHolder";
import Layout from "@/components/UI/Layout";
import Head from "next/head";
import { json_default, seo_default } from "@/lib/identification";
import jsonld from "@/lib/jsonld";
import { NextSeo } from "next-seo";
import seo from "@/lib/seo";
import Script from "next/script";

export default function PolandLife() {
  const heroConfig = {
    header: "Olympos Edu ile Polonya'da Yaşam",
    content:
      "Polonya'da Üniversiteler, yüksek eğitim kalitesi ve geniş uluslararası öğrenci topluluğu ile tanınır. Öğrenciler, modern kampüslerde eğitim alırken, aynı zamanda çeşitli kültürel etkinliklere ve sosyal aktivitelere katılma fırsatı bulurlar.",
    exdesc: "Hemen bilgi alın",
    contentHeader: "Güncel",
    contentDescription: "Polonya'da hazırlık eğitimi",
    img: "/assets/polonyada-hazirlik-egitimi/polonyada-hazirlik-egitimi-olymposedu.webp",
    href: "/polonyada-hazirlik-egitimi",
    isAnimated: true,
    animatedProps: [
      "Zengin Kültürel Miras",
      "Yaşam Kalitesi",
      "Eğitim Fırsatları",
      "Ekonomik Büyüme Avantajları",
      "Olympos Edu",
    ],
  };

  return (
    <>
      <NextSeo {...seo_default} {...seo.polandLife} />
      <Head>
        <Script
          type="
        application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json_default) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonld.polandLife),
          }}
        />
      </Head>
      <Layout>
        <PageHero {...heroConfig} />
        <CardHolder data={polandlife_data} />
      </Layout>
    </>
  );
}
