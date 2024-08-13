import Head from "next/head";
import { NextSeo } from "next-seo";
import Layout from "@/components/UI/Layout";
import { Hero } from "@/components/sections/Hero";
import { MediaGallery } from "@/components/sections/MediaGallery";
import { General } from "@/components/sections/General";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { Testimonial } from "@/components/sections/Testimonial";
import { Feature } from "@/components/sections/Feature";
import { Table } from "@/components/sections/Table";
import { Modal } from "@/components/UI/Modal";
import universities from "@/lib/universities";
import { columns, programs } from "@/lib/university_data";
import seo from "@/lib/seo";
import jsonld from "@/lib/jsonld";
import { seo_default, json_default } from "@/lib/identification";
import Script from "next/script";

export default function Home() {
  const heroConfig = {
    header: "Polonya'da Üniversite Okumak",
    subHeader: "Olympos Eğitim farkı ile",
    desc: "Polonya’da üniversite eğitimi, sunduğu imkanlar ile diğer Avrupa ülkelerine göre daha çok tercih edilebilmektedir. Polonya’da sınavsız üniversite okumanın mümkün olması, dünyanın her yerinden birçok uluslararası öğrencinin Polonya’da eğitim almasının sebepleri arasındadır.",
    imgSrc: "/assets/shuffle-media/edu.webp",
    sliderOn: false,
  };
  const testimonials = [
    {
      avatar: "/assets/testimonials/ilteris.jpeg",
      name: "Ilteriş Olcayto",
      title: "Lazarski Hazırlık Öğrencisi",
      quote:
        "Polonya'ya Olympos Eğitim Danışmanlığı ile gelmek, eğitimimde yeni ufuklar açtı. Sunulan destek ile birlikte Lazarksi üniversitesinde ingilizce eğitim hayatıma başladım ve çok mutluyum!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
      name: "Abdullah Küçük",
      title: "SWPS Turizm İşletmecilik öğrencisi",
      quote:
        "Olympos Eğitim Danışmanlığı ile Polonya'da eğitim almak gerçekten harika bir deneyimdi. Onların sağladığı kişiselleştirilmiş rehberlik ve uzmanlık, öğrencilerimizin başarısına ve eğitim programlarımızın büyümesine büyük katkıda bulundu.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/73.jpg",
      name: "Merve Taşlı",
      title: "Polska-Japanska Yazılım Mühendisliği Öğrencisi",
      quote:
        "Olympos Eğitim Danışmanlığı, eğitim danışmanlığında mükemmeliyetin öncüsüdür. Kalite ve yenilik konusundaki sıkıntısız süreçler sonrasında yazılım geliştiricisi olarak eğitimime salt bir başlangıç atmış oldum.",
    },
  ];

  const sliderPhotos = [
    "/assets/feature-media/olympos-portal-login-screenshot.webp",
    "/assets/feature-media/olympos-portal-main-page-screenshot.webp",
    "/assets/feature-media/olympos-portal-profile-screenshot.webp",
    "/assets/feature-media/olympos-portal-school-screenshot.webp",
  ];
  const modalRedirectData = {
    msg: encodeURIComponent(
      "Merhaba, Olympos Portal hakkında daha fazla bilgi almak istiyorum."
    ),
    num: "+48 690 148 044",
    title: "Daha Fazla Bilgi Alın",
    modalTitle: (
      <span className="max-w-md h-auto items-start justify-center flex text-2xl">
        Olympos Portal Polonya’daki Eğitim Hayatınız Boyunca Sizlerle! 🎊
      </span>
    ),
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
      Dilediğiniz program hakkında 7/24 bilgi almak için üniversitenin{" "}
      <span className="underline underline-offset-2">üstüne</span> tıklayın.
      Sizi danışmanlarımıza yönlendireceğiz.
    </span>,
  ];
  return (
    <>
      <NextSeo {...seo_default} {...seo.indexPage} />
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(json_default),
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonld.indexPage),
          }}
        />
      </Head>
      <Layout>
        <Hero {...heroConfig} dividerOn={true} />
        <MediaGallery />
        <Pricing />
        <Table
          universities={universities}
          columns={columns}
          programs={programs}
          headerProps={tableHeaderProps}
        />
        <Feature featureSlider={sliderPhotos} />
        <General />
        <Contact />
        <Testimonial data={testimonials} />
      </Layout>
      {/* <Modal
        modalTitle={modalRedirectData.modalTitle}
        isStarter
        btnRedirect
        btnTitle={modalRedirectData.title}
        btnHref={`https://api.whatsapp.com/send?text=${modalRedirectData.msg}&phone=${modalRedirectData.num}`}
      >
        <FeatureSlider sliderPhotos={sliderPhotos} />
      </Modal> */}
    </>
  );
}
