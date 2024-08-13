import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Slider } from "../UI/Slider";
import Image from "next/image";
import { HeroDivider } from "../UI/Divider";
import { Trailed } from "../animated-components/Trailed";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import React from "react";

export const Hero = ({
  header,
  subHeader,
  desc,
  imgSrc,
  sliderOn,
  dividerOn,
}) => {
  const [isOpen] = useState(true);
  const [isRes, setIsRes] = useState(null);

  const isResponsive = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsRes(isResponsive);
  }, [isResponsive]);

  const data = [
    <span className="text-rose-600 font-bold tracking-tight text-2xl hidden lg:flex">
      {subHeader}
    </span>,
    <h1 className="text-white font-bold text-4xl xl:text-5xl">{header}</h1>,
    <p className="text-white/90 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 lg:pt-4 pt-4">
      {desc}
    </p>,
    <span className="mt-6 lg:hidden flex self-center">
      <MdKeyboardDoubleArrowDown className="w-10 h-10 text-white flex self-center animate-bounce" />
    </span>,
  ];

  return (
    <>
      <div className="w-full h-screen overflow-hidden relative">
        <video
          className="w-full h-full object-cover -z-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/poland_live_video.mp4" type="video/mp4" />
        </video>
        <section className="absolute top-0 left-0 w-full h-full flex  lg:flex-row flex-col-reverse  items-center justify-center bg-black/50  lg:flex md:px-8 z-40">
          <div className="space-y-4 lg:flex-1 sm:text-center lg:text-left text-center lg:px-16 px-8">
            <Trailed
              isOpen={isOpen}
              wrapperStyle={
                isRes && "flex flex-col gap-4 justify-center items-center"
              }
            >
              {data.map((val, idx) => (
                <React.Fragment key={idx}>{val}</React.Fragment>
              ))}
            </Trailed>
          </div>

          {sliderOn ? (
            <Slider />
          ) : (
            <div className="lg:flex-1 text-center pt-12 lg:mt-0 scale-90 lg:ml-3 lg:px-16 px-4 lg:flex hidden">
              <Image
                width={500}
                height={300}
                src={imgSrc}
                alt={`Polonya'da Üniversite Okumak`}
                className="w-full mx-auto sm:w-10/12 lg:w-full rounded-2xl"
              />
            </div>
          )}
        </section>
      </div>
      {dividerOn && !isRes && <HeroDivider />}
    </>
  );
};
