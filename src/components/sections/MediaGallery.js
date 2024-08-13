import { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Swiper, SwiperSlide } from "swiper/react";
import universities from "@/lib/universities";
import { Raleway } from "next/font/google";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { UniversityCard } from "../UI/UniversityCard";
import "swiper/css";
import { useMediaQuery } from "react-responsive";

const font = Raleway({
  subsets: ["latin"],
});

export const MediaGallery = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const isResponsive =
    typeof window !== "undefined" &&
    useMediaQuery({
      query: "(max-width: 768px)",
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  });

  const swipeSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(-20px)",
    },
    config: { duration: 250 },
    onRest: () => {
      setTimeout(() => {
        setIsVisible2(true);
      }, 1000);
    },
  });

  const swipeDestroySpring = useSpring({
    from: { opacity: 1, transform: "translateY(0)" },
    to: {
      opacity: isVisible2 ? 0 : 1,
      transform: isVisible2 ? "translateY(20px)" : "translateY(0)",
    },
    config: { duration: 500 },
    onRest: () => {
      setTimeout(() => {
        setIsVisible3(true);
      }, 250);
    },
  });

  return (
    <section
      className="h-screen w-full items-center justify-center bg-slate-950 "
      ref={ref}
    >
      <animated.div
        style={{ ...swipeSpring, ...swipeDestroySpring }}
        className={` 
                    text-white 
                    ${isVisible3 ? "hidden" : "flex"} 
                    ${font.className} 
                    transition-all 
                    duration-300 
                    text-4xl 
                    lg:text-5xl 
                    w-full 
                    lg:gap-12 
                    h-screen 
                    items-center 
                    backdrop-blur-lg 
                    bg-slate-950/40 
                    justify-center 
                    absolute 
                    z-50 
                    flex 
                    self-center 
                  `}
      >
        <p className="animate-pulse transition-all -translate-x-5 items-center duration-1000 justify-center flex flex-row gap-6">
          <span className="font-extralight">SOLA KAYDIR</span>
          <MdKeyboardDoubleArrowLeft className="w-8 h-8 lg:h-16 lg:w-16 " />
        </p>
      </animated.div>
      <div className="h-screen lg:w-full lg:px-24  flex items-center self-center relative w-full lg:scale-90">
        <Swiper
          spaceBetween={20}
          slidesPerView={!isResponsive ? 3 : 1}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          effect="slide"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mx-auto w-full "
        >
          {universities.map((val, idx) => (
            <SwiperSlide key={idx}>
              <UniversityCard {...val} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
