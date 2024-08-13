import React from "react";
import { Trailed } from "../animated-components/Trailed";
import { FeatureSlider } from "../animated-components/FeatureSlider";

export const Feature = ({ featureSlider }) => {
  const elements = [
    <h3 className="text-sky-600 font-semibold">
      Şimdi Olymposedu'de yayında!
    </h3>,
    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
      <span className="text-rose-500 font-bold">Olymposedu</span>{" "}
      <span className="text-sky-500 font-bold">Portal</span> Profil Yönetim
      Uygulaması
    </p>,
    <p className="pt-2">
      Olympos Portal, Polonya’daki eğitim yolculuğunuz boyunca, tüm döküman
      durumlarınızı kontrol edebileceğiniz, sınavlarınız için hatırlatıcı
      oluşturabileceğiniz ve çok daha fazlasını yapabileceğiniz bir eğitim
      yönetim portalıdır.
    </p>,
  ];

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "Analiz",
      desc: "Polonya'ya gelmeden bütün eğitim programlarınızı, danışman randevularınızı ve dökümanlarınızı kontrol edin.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "Uçtan Uca Şifreleme",
      desc: "Kullandığımız son teknoloji şifreleme sistemleri(MD5-GEN8-SHA256) ile, tüm verilerinizi şifreliyor ve sizlere çok daha güvenilir bir iletişim portalı sunuyoruz.",
    },
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-4 justify-between md:px-8 lg:flex relative">
        <div
          className="absolute inset-0 mx-auto max-w-xl h-auto w-auto -z-20 lg:blur-0 blur-[15px]"
          style={{
            backgroundImage: "url(/assets/feature-media/deneme.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="lg:w-1/3 lg:h-full w-full h-auto max-w-md mx-auto">
          <div className="lg:max-w-xl lg:px-0 px-4 space-y-4">
            <Trailed isOpen>
              {elements.map((val, idx) => (
                <React.Fragment key={idx}>{val}</React.Fragment>
              ))}
            </Trailed>
          </div>
          <div className="mt-12 max-w-lg lg:max-w-none">
            <ul className="space-y-8 lg:px-0 px-4">
              <Trailed isOpen>
                {features.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4 mt-2">
                    <div className="flex-none w-12 h-12 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-800 font-semibold">
                        {item.title}
                      </h4>
                      <p className="mt-3">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </Trailed>
            </ul>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 w-full lg:w-2/3 items-center justify-center flex rounded-xl">
          <FeatureSlider sliderPhotos={featureSlider} />
        </div>
      </div>
    </section>
  );
};
