import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PageDivider } from "../UI/Divider";
import Image from "next/image";
import { Trailed } from "../animated-components/Trailed";
import redirectToWhatsApp from "../utils/redirectToWhatsApp";
import { Typewriter } from "react-simple-typewriter";

export const PageHero = (props) => {
  const {
    header,
    content,
    exdesc,
    contentHeader,
    contentDescription,
    img,
    href,
    isAnimated,
    animatedProps,
  } = props;

  const [isTypedCompleted, setIsTypedCompleted] = useState(false);
  const data = {
    number: "+48 690 148 044",
    message: "Merhaba, üniversiteler hakkında bilgi almak istiyorum.",
  };

  const elem = [
    <a
      href={href}
      className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white hover:text-black"
    >
      <span className="inline-block rounded-full px-3 py-1 bg-sky-500 text-white">
        {contentHeader}
      </span>
      <p className="flex items-center">
        {contentDescription}
        <IoIosArrowForward className="w-4 translate-x-2 h-4" />
      </p>
    </a>,
    <h1 className="text-4xl text-white font-extrabold sm:text-5xl">
      {isAnimated ? (
        <Typewriter
          words={animatedProps}
          loop={1}
          cursor={!isTypedCompleted}
          typeSpeed={70}
          deleteSpeed={25}
          delaySpeed={1000}
          onLoopDone={() => setIsTypedCompleted(false)}
        />
      ) : (
        header
      )}
    </h1>,
    <p>{content}</p>,
    <div className="flex items-center gap-x-3 sm:text-sm">
      <button
        onClick={() => redirectToWhatsApp(data)}
        className="
          flex 
          items-center 
          justify-center 
          gap-x-1 
          lg:py-4 
          lg:px-8
          flex-row
          py-2
          px-4 
          lg:text-white 
          font-medium 
          duration-150 
          lg:hover:bg-white 
          lg:hover:text-black 
          lg:active:bg-white 
          rounded-full 
          md:inline-flex 
          text-center 
          lg:bg-transparent
          bg-white
          text-black
          border-white 
          border"
      >
        <span>{exdesc}</span>
        <IoIosArrowForward className="w-4 h-4 " />
      </button>
    </div>,
  ];
  return (
    <>
      <div className="items-center justify-center flex h-screen w-full bg-slate-950">
        <div className="absolute  inset-0 blur-2xl h-[500px] hero-bg"></div>
        <div className="relative lg:mt-16 z-30 ">
          <main>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-white overflow-hidden md:px-8 md:flex">
              <Trailed isOpen wrapperStyle="flex-none space-y-5 max-w-xl">
                {elem.map((val, idx) => (
                  <React.Fragment key={idx}>{val}</React.Fragment>
                ))}
              </Trailed>
              <div className="flex-1 hidden md:block">
                <Image
                  src={img}
                  height={500}
                  width={500}
                  alt={header}
                  className="max-w-xl rounded-2xl"
                />
              </div>
            </div>
          </main>
        </div>
        <PageDivider />
      </div>
    </>
  );
};
