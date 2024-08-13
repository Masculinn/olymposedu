export default {
  indexPage: {
    name: "Olymposedu Eğitim Danışmanlık",
    url: "https://olymposedu.com",
    description:
      "Olymposedu Eğitim farkı ile Polonya'da Üniversite Okumak, Polonya'da hazırlık eğitimi ve daha fazlası Olymposedu Eğitim Danışmanlık'ta!",
  },

  EducationalOccupationalProgram: {
    name: "Polonya'da Dil Hazırlık Eğitimi",
    description:
      "Polonya’daki üniversite eğitimini İngilizce dilinde almak isteyen ve İngilizce dil seviyesi yeterli düzeyde olmayan adaylar için dil hazırlık programları.",
    hasCourse: [
      {
        "@type": "Course",
        name: "Dil Hazırlık Eğitimi",
        description:
          "Polonya'da lisans programlarına başlamadan önce İngilizcelerini geliştirmeleri gereken öğrenciler için tasarlandı",
      },
    ],
    educationalProgramMode: "full-time",
    startDate: "2024-06-01",
  },
  polandLife: {
    name: "Polonya'da Yaşam",
    description:
      "Polonya'da yaşam hakkında bilgi, kültürel etkinlikler, eğitim fırsatları ve daha fazlası Olympos Eğitim farkı ile.",
    url: "https://olymposedu.com/polonyada-yasam",
    image: {
      "@type": "ImageObject",
      url: "/assets/polonyada-hazirlik-egitimi/polonyada-hazirlik-egitimi-olymposedu.webp",
      width: 800,
      height: 600,
    },
  },
  sss: {
    name: "Olymposedu | SSS",
    url: "https://olymposedu.com/sss",
    description:
      "Polonya'da üniversite eğitiminde sıkça sorulan sorular ve daha fazlası.",
    image: {
      "@type": "ImageObject",
      url: "https://olymposedu.com/assets/sss-media/faq.webp",
      width: 1200,
      height: 630,
    },
  },
  iletisim: {
    name: "Olymposedu | Iletisim",
    url: "https://olymposedu.com/iletisim",
    description: "Olympos Edu Eğitim Danışmanlığı İletişim.",
    image: {
      "@type": "ImageObject",
      url: "https://olymposedu.com/assets/iletisim-media/contact.webp",
      width: 1200,
      height: 630,
    },
  },
};
