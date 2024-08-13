import React, { useEffect, useState } from "react";
import priceData from "@/lib/priceData";
import { PricingDivider } from "../UI/Divider";
import { useMediaQuery } from "react-responsive";
import { useInView, useTrail, a } from "@react-spring/web";
import { FaArrowRight } from "react-icons/fa";

export const Pricing = () => {
  const isResponsive =
    typeof window !== "undefined" &&
    useMediaQuery({
      query: "(max-width: 768px)",
    });

  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
    once: true,
  });

  const trail = useTrail(priceData.length, {
    from: { opacity: 0, transform: "translateX(-25px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-25px)",
    },
    delay: 250,
    config: { duration: 1000 },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div ref={ref}></div>
      <section
        className="py-14 bg-cover w-full items-center justify-center flex relative"
        style={{ backgroundImage: "url(/assets/price-media/price-bg.svg)" }}
      >
        {!isResponsive && <PricingDivider />}
        <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8 z-50">
          <div className="relative max-w-xl mx-auto text-center">
            <h3 className="text-white  text-3xl font-semibold sm:text-4xl">
              Cebinize En Uygun Paketler
            </h3>
            <div className="mt-3 max-w-xl">
              <p>
                Stratejik Planlama ile Polonya'da Üniversiteye Uygun Fiyatlarla
                Başlayın!
              </p>
            </div>
          </div>
          <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 w-full">
            {trail.map(({ ...style }, idx) => (
              <a.div
                key={idx}
                className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 border-white mt-6 sm:mt-0 ${
                  priceData[idx].isMostPop && "mt-10"
                } hover:-translate-y-4`}
                style={style}
              >
                {priceData[idx].isMostPop && (
                  <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full  shadow-md bg-white text-center text-slate-900 text-sm font-semibold">
                    {idx !== 0 ? "En Popüler" : "ÜCRETSİZ!"}
                  </span>
                )}
                <div className="p-8 space-y-4 border-b border-black/30">
                  <span className="text-sky-400 font-medium text-xl tracking-tight">
                    {priceData[idx].name}
                  </span>
                  <p>{priceData[idx].desc}</p>
                  <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-sky-500 hover:bg-sky-600">
                    <a
                      className="w-full h-full items-center justify-center flex flex-row gap-2"
                      target="_blank"
                      rel="norefferer noopener"
                    >
                      <span>İletişime Geçin</span>
                      <FaArrowRight className="w-4 h-4" />
                    </a>
                  </button>
                </div>
                <ul className="p-8 space-y-3">
                  <li className="pb-2 text-white   font-medium">
                    <p>Paketin İçeriği:</p>
                  </li>
                  {priceData[idx].features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-sky-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </a.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
