import { NextSeo } from "next-seo";
import { Contact } from "@/components/sections/Contact";
import { PageHero } from "@/components/sections/PageHero";
import { Table } from "@/components/sections/Table";
import { Blog } from "@/components/UI/Blog";
import Layout from "@/components/UI/Layout";
import blogs from "@/lib/blogs";
import { columns, programs } from "@/lib/language_universities";
import universities from "@/lib/universities";
import Head from "next/head";
import seo from "@/lib/seo";
import jsonld from "@/lib/jsonld";
import { json_default, seo_default } from "@/lib/identification";
import Script from "next/script";

export default function PolonyadaHazirlikEgitimi() {
  const heroConfig = {
    header: " Polonya'da Dil Hazırlık eğitimi",
    content:
      "Polonya’daki üniversite eğitimini İngilizce dilinde almak isteyen ve İngilizce dil seviyesi yeterli düzeyde olmayan adaylar, bölümlerine başlamadan önce hazırlık eğitimi alabilmektedirler. Sizler için Polonya’da İngilizce hazırlık eğitimi hakkında en çok merak edilenleri cevapladık.",
    img: "/assets/polonyada-hazirlik-egitimi/polonyada-hazirlik-egitimi-olymposedu.webp",
    exdesc: "Hemen bilgi alın",
    contentHeader: "Güncel",
    contentDescription: "Polonya'da yaşam hakkında",
    href: "/polonyada-yasam",
  };

  const tableHeaderProps = [
    <h3 className="text-3xl lg:text-4xl tracking-tighter font-extrabold text-start items-center flex flex-wrap gap-2">
      <span className="bg-gradient-to-r from-sky-600 to-rose-600 bg-clip-text text-transparent">
        Olymposedu
      </span>{" "}
      <span className="text-rose-600">Üniversite</span>{" "}
      <span className=" bg-gradient-to-r from-rose-600 to-sky-600 bg-clip-text text-transparent">
        Sihirbazı!
      </span>
    </h3>,
    <span className="font-base text-stone-800  tracking-tighter text-lg">
      Dilediğiniz İngilizce hazırlık programı hakkında 7/24 bilgi almak için
      üniversitenin <span className="underline underline-offset-2">üstüne</span>{" "}
      tıklayın. Sizi danışmanlarımıza yönlendireceğiz.
    </span>,
  ];

  return (
    <>
      <NextSeo {...seo_default} {...seo.EducationalOccupationalProgram} />
      <Head>
        <Script
          type="
        application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json_default) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonld.EducationalOccupationalProgram),
          }}
        />
      </Head>
      <Layout>
        <PageHero {...heroConfig} />
        <Table
          data={universities}
          columns={columns}
          programs={programs}
          headerProps={tableHeaderProps}
        />
        <Blog data={blogs["polonyada-hazirlik-egitimi"]} />

        <Contact />
      </Layout>
    </>
  );
}
