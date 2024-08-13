import { ContactPage } from "@/components/sections/ContactPage";
import { json_default, seo_default } from "@/lib/identification";
import jsonld from "@/lib/jsonld";
import seo from "@/lib/seo";
import { CorporateContactJsonLd, NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

export default function Iletisim() {
  return (
    <>
      <NextSeo {...seo_default} {...seo.contact} />
      <CorporateContactJsonLd
        url="https://olymposedu.com/iletisim"
        logo="https://olymposedu.com/edu-logo.png"
        contactPoint={[
          {
            telephone: "+48 690 148 044",
            contactType: "Customer Service",
            areaServed: "TR",
            availableLanguage: "Turkish",
          },
        ]}
      />
      <Head>
        <title>İletişim | Olympos Edu</title>
        <Script
          type="
        application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json_default) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonld.iletisim),
          }}
        />
      </Head>
      <ContactPage />
    </>
  );
}
