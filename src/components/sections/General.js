import React, { useEffect, useState } from "react";
import generalData from "@/lib/generalData";
import { useMediaQuery } from "react-responsive";
import { VideoCard } from "../UI/VideoCard";

export const General = () => {
  const [navID, setNavID] = useState(0);
  const [selectedData, setSelectedData] = useState(null);
  const [isRes, setIsRes] = useState(null);

  const isResponsive = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsRes(isResponsive);
  }, [isResponsive]);

  const DataLabel = () => {
    useEffect(() => {
      navID >= 7
        ? setSelectedData(
            generalData.polonyada_yasam.find((data) => data.id === navID)
          )
        : setSelectedData(
            generalData.polonyada_okumak.find((data) => data.id === navID)
          );
    }, [navID]);

    const Mobile = () => {
      return (
        <div className="h-auto text-start items-start max-w-md mx-auto bg-white/50 text-black lg:pl-8 lg:px-0 px-2">
          {generalData.polonyada_okumak.map((val, idx) => (
            <div key={idx}>
              <h2
                className={`text-3xl tracking-tight font-semibold pt-8 pb-4`}
                key={idx}
              >
                {val?.header}
              </h2>
              {val.desc?.map((list, index) =>
                val.isListing ? (
                  <ul
                    className="text-gray-600 tracking-tighter text-xl"
                    key={index}
                  >
                    <li className={`text-lg ${idx == 0 && "pt-1"}`}>{list}</li>
                  </ul>
                ) : (
                  <p
                    className="text-start text-gray-600 tracking-tighter text-lg"
                    key={index}
                  >
                    {list}
                  </p>
                )
              )}
              {val.src && <VideoCard src={val.src} />}
            </div>
          ))}
          {generalData.polonyada_yasam.map((val, idx) => (
            <>
              <h2
                className={`text-3xl tracking-tight font-semibold pt-8`}
                key={idx}
              >
                {val?.header}
              </h2>
              {val.desc?.map((list, index) =>
                val.isListing ? (
                  <ul
                    className="list-disc text-gray-600 tracking-tighter text-base font-bold pt-2"
                    key={index}
                  >
                    <li className={`text-lg ${idx == 0 && "pt-1"}`}>
                      {index + 1}. {list}
                    </li>
                  </ul>
                ) : (
                  <p
                    className="text-start pt-4 text-gray-600 tracking-tighter text-lg"
                    key={index}
                  >
                    {list}
                  </p>
                )
              )}
            </>
          ))}
        </div>
      );
    };

    const Desktop = () => {
      return (
        <div className="h-auto lg:max-w-full text-start items-center bg-white/50 text-black lg:pl-8 lg:px-0 px-2 pt-8">
          <h2 className={`lg:text-3xl text-xl font-semibold`}>
            {selectedData?.header}
          </h2>
          {selectedData?.desc?.map((val, index) =>
            selectedData.isListing ? (
              <ul
                className="list-disc pl-4 text-gray-600 tracking-tighter text-lg"
                key={index}
              >
                <li className={`text-lg ${index == 0 && "pt-2"}`}>{val}</li>
              </ul>
            ) : (
              <p
                className="text-start pt-8 max-w-5xl text-gray-600 tracking-tighter text-lg"
                key={index}
              >
                {val}
              </p>
            )
          )}
        </div>
      );
    };
    return isRes ? <Mobile /> : <Desktop />;
  };

  const NavLink = ({ ...props }) => {
    const { children, className = "", id } = props;

    return (
      <button
        {...props}
        className={` ${className} ${
          id == navID && "border-indigo-600 font-semibold"
        } text-start cursor-pointer`}
        onClick={() => {
          setNavID(id);
        }}
      >
        {children}
      </button>
    );
  };

  const Title = ({ children }) => (
    <h3 className="pb-3 px-4 font-medium text-gray-800 md:px-8">{children}</h3>
  );

  const SectionsList = ({ items }) => (
    <div className="text-gray-600 px-4 md:px-8">
      <ul>
        {items?.map((item, idx) => (
          <li key={idx}>
            <NavLink
              href={item?.header}
              id={item?.id}
              active="text-gray-900 border-indigo-600"
              className="block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150"
            >
              {item?.header}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );

  const SideBar = () => {
    return (
      <nav className="z-40 w-3/4 h-full border-r bg-white space-y-8 overflow-auto sm:w-80">
        <div className="text-[0.9rem] space-y-12">
          <>
            <div>
              <Title>Polonya'da Üniversite Eğitimi</Title>
              <SectionsList items={generalData.polonyada_okumak} />
            </div>
            <div className="">
              <Title>Polonya’da yaşam</Title>
              <SectionsList items={generalData.polonyada_yasam} />
            </div>
          </>
        </div>
      </nav>
    );
  };

  return (
    <section className="lg:w-full lg:h-screen lg:justify-normal lg:flex-wrap mt-8 lg:flex h-auto w-full">
      {!isRes && <SideBar />}
      <DataLabel />
    </section>
  );
};
