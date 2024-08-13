import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Trailed } from "../animated-components/Trailed";

export const Contact = () => {
  const data = {
    number: "+48 690 148 044",
    message: "Merhaba, üniversiteler hakkında bilgi almak istiyorum.",
  };

  const contact_data = [
    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
      Hemen bizimle iletişime geçin!
    </h3>,
    <p className="mt-3">
      Herhangi bir sorunuz varsa yardımcı olmaktan ve cevaplamaktan memnuniyet
      duyarız. Sizden haber almayı bekliyoruz.
    </p>,
  ];
  const encodedMessage = encodeURIComponent(data.message);
  const contactMethods = [
    {
      icon: <FaInstagram className="w-6 h-6" />,
      title: "İnstagram'daki Topluluğumuza katılın",
      desc: "İnstagram'da Polonyada'ki üniversiteler hakkında olan paylaşımlarımızı takip edin.",
      link: {
        name: "Instagram'da bizi takip edin.",
        href: "https://www.instagram.com/olymposedu/",
      },
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "Whatsapptan bize mesaj gönderin size hemen ulaşalım!",
      desc: "Polonya'daki üniversiteler hakkında istediğinizi sorun.",
      link: {
        name: "Bize mesaj gönderin",
        href: `https://api.whatsapp.com/send?text=${encodedMessage}&phone=${data.number}`,
      },
    },
  ];

  return (
    <section className="py-14">
      <div className="lg:max-w-screen-xl max-w-md mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex">
        <div className="max-w-md">
          <Trailed isOpen>
            {contact_data.map((val, idx) => (
              <React.Fragment key={idx}>{val}</React.Fragment>
            ))}
          </Trailed>
        </div>
        <div>
          <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
            <Trailed isOpen>
              {contactMethods.map((item, idx) => (
                <li
                  key={idx}
                  className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
                >
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center text-sky-500 ">
                    {item.icon}
                  </div>
                  <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="norefferer"
                    className="flex items-center gap-1 text-sm text-sky-500 duration-150 hover:text-sky-400 font-medium"
                  >
                    {item.link.name}
                    <FaArrowRight />
                  </a>
                </li>
              ))}
            </Trailed>
          </ul>
        </div>
      </div>
    </section>
  );
};
