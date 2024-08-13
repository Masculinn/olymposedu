import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaUniversity,
  FaBookOpen,
  FaQuestionCircle,
  FaArrowRight,
} from "react-icons/fa";
import { IoPricetagsSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";

export default function Header({ dark }) {
  const isResponsive =
    typeof window !== "undefined" &&
    useMediaQuery({
      query: "(max-width: 768px)",
    });

  const dropdownNavs = [
    {
      label: "Üniversiteler",
      navs: [
        {
          title: "Üniversiteler",
          desc: "Polonya'daki Üniversiteler ve programları",
          path: "/universitelerimiz",
          icon: <FaUniversity className="w-6 h-6 text-sky-400" />,
        },
        {
          title: "Sıkça Sorulan Sorular",
          desc: "Polonya'da eğitim hakkında en çok sorulan sorular",
          path: "/sss",
          icon: <FaQuestionCircle className="w-6 h-6 text-sky-400" />,
        },
      ],
    },
    {
      label: "Polonya'da Yaşam",
      navs: [
        {
          desc: "Polonya'da yaşam hakkında her şey",
          title: "Polonya'da Yaşam",
          path: "/polonyada-yasam",
          icon: <IoPricetagsSharp className="h-6 w-6 text-sky-400" />,
        },
        {
          title: "Polonya'da Hazırlık Eğitimi",
          desc: "Size özel Hazırlık Üniversiteleri seçeneklerimiz ",
          path: "/polonyada-hazirlik-egitimi",
          icon: <FaBookOpen className="w-6 h-6 text-sky-400" />,
        },
      ],
    },
  ];

  const navigation = [
    {
      title: "Polonya'da Üniversite",
      path: "/",
      isDrapdown: true,
      navs: dropdownNavs,
    },
    { title: "Polonya'da Yaşam", path: "/polonyada-yasam", isDrapdown: false },
    {
      title: "Polonya'da İngilizce Hazırlık",
      path: "/polonyada-hazirlik-egitimi",
      isDrapdown: false,
    },
    { title: "İletişim", path: "/iletisim", isDrapdown: false },
  ];

  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollPos, setScrollPos] = useState(false);

  const handleScroll = () => {
    const currScrollY = window.scrollY;
    setScrollY(currScrollY);
    setPrevScrollY(currScrollY);

    if (currScrollY === 0) {
      setScrollPos(null);
    } else {
      if (currScrollY > prevScrollY) {
        setScrollPos(true);
      } else if (prevScrollY > currScrollY) {
        setScrollPos(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const headerAnimation = useSpring(
    scrollPos !== null && scrollPos && !state
      ? {
          transform: "translateY(-100%)",
          config: { tension: 300, friction: 30 },
        }
      : {
          transform: "translateY(0) ",
          config: { tension: 300, friction: 30 },
        }
  );

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const Desktop = () => (
    <animated.header
      className={` 
        w-full 
        ${scrollY && "bg-white/75 "} 
        bg-transparent 
        h-24 
        items-center 
        justify-center 
        fixed 
        ${dark === true && !scrollY ? "text-white" : "text-black"} 
        backdrop-blur-lg 
        flex 
        flex-row 
        top-0 
        left-0
        `}
      style={{ zIndex: 8888, ...headerAnimation }}
    >
      <nav
        className={`relative z-20 w-full md:static md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        } `}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8 ">
          <div className="flex items-center justify-between py-8 md:py-5 md:block -ml-2 mt-4">
            <Link href="/">
              <Image
                src={"/edu-logo.png"}
                height={250}
                width={250}
                priority
                alt="Olympos Edu Logo"
                className={` ${
                  dark && scrollY
                    ? "w-36 brightness-100 invert-0"
                    : "w-36 brightness-0 invert"
                } `}
              />
            </Link>
            <div className="md:hidden">
              <button
                className={` ${
                  dark === true
                    ? "text-white hover:text-gray-800"
                    : "text-black"
                } `}
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
                      <button
                        className={`w-full flex items-center justify-between gap-1 hover:text-sky-400`}
                        onClick={() =>
                          setDrapdownState({
                            idx,
                            isActive: !drapdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        className="block  hover:text-sky-400"
                      >
                        {item.title}
                      </Link>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div
                        className={`mt-6 lg:inset-x-auto inset-x-0 top-20 bg-white  w-full md:absolute md:border-y md:shadow-md md:mt-0  lg:w-2/3 lg:rounded-lg `}
                        key={idx}
                      >
                        <ul className="max-w-screen-xl lg:max-w-screen-2xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-2">
                          {item?.navs.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <p className="text-sky-400 text-sm">
                                {dropdownItem.label}
                              </p>
                              <ul className="mt-5 space-y-6">
                                {dropdownItem.navs.map((navItem, idx) => (
                                  <li key={idx} className="group">
                                    <a
                                      href={navItem.path}
                                      className="flex gap-3 items-center"
                                    >
                                      <div className="w-12 h-12 rounded-full bg-sky-text-sky-400 text-sky-400 flex items-center justify-center duration-150 group-hover:bg-sky-text-sky-400 group-hover:text-white md:w-14 md:h-14">
                                        {navItem.icon}
                                      </div>
                                      <div>
                                        <span className="text-gray-800 duration-200 group-hover:text-sky-400 text-sm font-medium md:text-base">
                                          {navItem.title}
                                        </span>
                                        <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                                          {navItem.desc}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`justify-end items-end text-black flex mr-3`}>
            <a
              href="/iletisim"
              className={`w-auto  cursor-pointer   hover:bg-transparent transition-all duration-300 items-center justify-center border gap-2 px-6 py-3 rounded-full font-semibold lg:flex hidden text-white ${
                !scrollY
                  ? "hover:text-white  border-white bg-transparent"
                  : "hover:text-blue-400 border-sky-600 bg-sky-600"
              } `}
            >
              <span>Öğrenci Portal Giriş</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </nav>
      {state && (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      )}
    </animated.header>
  );
  const Mobile = () => (
    <>
      <animated.header
        className={`
          w-full 
          fixed  
          md:static 
          md:text-sm 
          -mb-8 
          md:border-none 
          ${state && "shadow-lg rounded-b-xl md:shadow-none"} 
          ${dark === true && !scrollY ? "text-white" : "text-black"} 
          ${scrollY ? "bg-white " : "bg-transparent"}
        `}
        style={{ zIndex: 9998, ...headerAnimation }}
      >
        <nav className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between  md:py-5 md:block">
            <a href="/">
              <Image
                src="/edu-logo.png"
                width={120}
                height={75}
                alt="Olympos Edu logo"
                priority
                className={` ${
                  dark && scrollY
                    ? "w-28 brightness-100 invert-0"
                    : "w-28 brightness-0 invert"
                } transition-all duration-300 `}
              />
            </a>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => {
                  setState(!state);
                  setScrollY(1);
                }}
              >
                {state ? (
                  <MdCancel
                    className={` ${
                      dark === true && !scrollY ? "text-white" : "text-black"
                    } w-7 h-7`}
                  />
                ) : (
                  <IoMenu
                    className={` ${
                      dark === true && !scrollY ? "text-white" : "text-black"
                    } w-7 h-7`}
                  />
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3  md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
                      <button
                        className="w-full flex items-center justify-between gap-1 text-gray-700"
                        onClick={() =>
                          setDrapdownState({
                            idx,
                            isActive: !drapdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <a href={item.path} className="block text-gray-700">
                        {item.title}
                      </a>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                        <ul className="max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                          {item?.navs.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <p className="text-blue-600 text-sm">
                                {dropdownItem.label}
                              </p>
                              <ul className="mt-5 space-y-6">
                                {dropdownItem.navs.map((navItem, idx) => (
                                  <li key={idx} className="group">
                                    <a
                                      href={navItem.path}
                                      className="flex gap-3 items-center"
                                    >
                                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center duration-150  group-hover:text-white md:w-14 md:h-14">
                                        {navItem.icon}
                                      </div>
                                      <div>
                                        <span className="text-gray-800 duration-200 group text-sm font-medium md:text-base">
                                          {navItem.title}
                                        </span>
                                        <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                                          {navItem.desc}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <li>
                  <a
                    href="/iletisim"
                    className="block py-3 px-4 font-medium text-center text-white bg-blue-500 active:shadow-none rounded-lg shadow md:inline"
                  >
                    Ücretsiz Bilgi Alın
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </animated.header>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
  if (!isMounted) {
    return null;
  }

  return isResponsive ? <Mobile /> : <Desktop />;
}
