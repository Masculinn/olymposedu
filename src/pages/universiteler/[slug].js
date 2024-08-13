import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import Layout from "@/components/UI/Layout";
import { json_default, seo_default } from "@/lib/identification";
import ssgUniversiteler from "@/lib/ssg-universiteler";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

export default function GeneratePage(props) {
  const { title, description, img, path, banner_img, gallery, meta } = props;
  const img_items = gallery.map((item) => {
    return {
      url: `https://olymposedu.com${item.src}`,
      width: 800,
      height: 600,
      alt: `Olymposedu ${title}`,
    };
  });

  const config_seo = {
    ...seo_default,
    ...title,
    ...description,
    canonical: `https://olymposedu.com/universiteler/${path}`,
    openGraph: {
      type: "article",
      locale: "tr_TR",
      title: `${title}`,
      ...description,
      url: `https://olymposedu.com/universiteler/${path}`,
      site_name: "Olymposedu",
      images: [
        ...img_items,
        {
          url: `https://olymposedu.com${banner_img}`,
          width: 800,
          height: 600,
          alt: `Olymposedu ${title} Banner`,
        },
      ],
    },
  };

  const config_json = {
    name: `${title}`,
    ...description,
    url: `https://olymposedu.com/universiteler/${path}`,
    image: {
      "@type": "ImageObject",
      url: img,
      width: 800,
      height: 600,
      alt: `Olymposedu ${title}`,
    },
  };

  const heroProps = {
    header: title,
    content: description,
    exdesc: "Hemen bilgi alın",
    contentHeader: "Güncel",
    contentDescription: "Polonya'da yaşam hakkında",
    href: "/polonyada-yasam",
    img: banner_img,
    isAnimated: true,
    animatedProps: [
      title,
      "OlymposEdu ile Avrupa Standartlarında Eğitim Alın.",
    ],
  };
  return (
    <>
      <NextSeo {...seo_default} {...config_seo} />
      <Head>
        <Script
          type="
        application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json_default) }}
        />
        <Script
          type="
        application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(config_json) }}
        />
      </Head>
      <Layout>
        <PageHero {...heroProps} />
        <PhotoGallery media={gallery} />
        <About meta={meta} />
        <Contact />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(ssgUniversiteler).map((k) => ({
    params: { slug: ssgUniversiteler[k].path },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const page = ssgUniversiteler[slug];

  return {
    props: {
      ...page,
    },
  };
}
