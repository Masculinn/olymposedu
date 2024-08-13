import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerNavs = [
    {
      href: "/polonyada-yasam",
      name: "Polonya'da Yaşam",
    },
    {
      href: "/universitelerimiz",
      name: "Üniversitelerimiz",
    },
    {
      href: "/polonyada-hazirlik-egitimi",
      name: "Polonya'da İngilizce Hazırlık",
    },
    {
      href: "/iletisim",
      name: "İletişim",
    },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 bottom-0 left-0">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <center>
          <Image
            src={"/edu-logo.png"}
            priority
            height={160}
            width={200}
            className="w-44 self-center mb-8 "
            alt="Olympos Eğitim Logo"
          />
        </center>
        <p className="leading-relaxed mt-2 text-[15px]">
          Olympos Eğitim Danışmanlığı olarak, her adımda öğrencilerimizin
          yanında olmayı ve onların geleceğe güvenle adım atmalarını sağlamayı
          amaçlıyoruz.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className=" hover:text-gray-800" key={idx}>
            <a key={idx} href={item.href} rel={"norefferer"}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2024 Olympos Edu Danışmanlık Tüm Hakları Saklıdır
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://www.instagram.com/olymposedu/"
                target="_blank"
                rel="norefferer"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="https://www.linkedin.com/company/olympos-edu/about/">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
