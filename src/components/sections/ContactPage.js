import React from "react";

import Header from "../UI/Header";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Trailed } from "../animated-components/Trailed";

const subFont = Montserrat({
  subsets: ["latin"],
});

const font = Inter({
  subsets: ["latin"],
});

export const ContactPage = () => {
  return (
    <div className="w-full h-screen transition-all duration-300">
      <div
        className="w-full h-3/5  bg-black bg-cover z-10"
        style={{ backgroundImage: "url(/assets/iletisim-media/contact.webp)" }}
      >
        <Header dark={true} />
        <div
          className={`z-20 bg-black/50 w-full h-full text-white items-start lg:items-center pl-8 lg:pl-0 justify-center text-start flex-col gap-3  flex ${font.className} `}
        >
          <Trailed isOpen>
            {Array.from([
              <h1 className="font-semibold tracking-tight text-5xl">
                Olympos Edu Eğitim Danışmanlığı
              </h1>,
            ])}
          </Trailed>
          <p
            className={`text-gray-200 ${subFont.className} text-start  lg:text-center tracking-tight`}
          >
            <Typewriter
              words={[
                "Geleceğinize,",
                "Ve Size Önem Veriyoruz.",
                "Bizimle 7/24 İletişime Geçebilirsiniz.",
                "Olymposedu.",
              ]}
              cursor
            />
          </p>
        </div>
      </div>
      <div className="w-full lg:h-2/5 h-full lg:flex-row flex-col bg-black/50 items-center flex justify-center">
        <div className=" bg-white/90 lg:w-1/2 z-10 w-full h-full items-center justify-center flex flex-col">
          <div
            className="z-30 bg-black/50 w-full items-center justify-center flex h-full bg-cover bg-center "
            style={{
              backgroundImage:
                "url(/assets/iletisim-media/contact_bg_small.webp)",
            }}
          >
            <li
              className={`flex flex-col items-start px-8 gap-1 justify-center  bg-black/50 text-white rounded-lg lg:backdrop-blur-md backdrop-blur-sm  lg:h-1/2 h-full lg:w-1/2 w-full   ${font.className}`}
            >
              <a
                href="/"
                target="_blank"
                rel={"norefferer"}
                className="items-center justify-center flex gap-4"
              >
                <span>
                  <MdEmail className="w-8 h-8 text-blue-400" />{" "}
                </span>
                <span>info@olymposedu.com</span>
              </a>
              <a
                href="https://www.instagram.com/olymposedu/"
                target="_blank"
                rel={"norefferer"}
                className="items-center justify-center flex gap-4"
              >
                <span>
                  <FaInstagram className="w-8 h-8 text-rose-500" />
                </span>
                <span>@olymposedu</span>
              </a>
              <a
                href="https://www.linkedin.com/company/olympos-edu/about/"
                target="_blank"
                rel={"norefferer"}
                className="items-center justify-center flex gap-4"
              >
                <span>
                  <FaLinkedin className="w-8 h-8 text-sky-500" />{" "}
                </span>
                <span>Olympos Edu CO.</span>
              </a>
            </li>
          </div>
        </div>
        <div className="bg-transparent lg:w-1/2 w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.9713635344174!2d21.011056376465458!3d52.22573807198557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccee01562a97%3A0xfdfd3ecc0a8f0435!2sMarsza%C5%82kowska%2083%2C%2000-683%20Warszawa!5e0!3m2!1sen!2spl!4v1705326180297!5m2!1sen!2spl"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
