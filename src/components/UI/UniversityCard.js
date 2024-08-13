import { Raleway } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";

const font = Raleway({
  subsets: ["latin"],
});

export const UniversityCard = ({ href, name, img, data }) => {
  const banner = data.meta.about.slice(0, 70);
  return (
    <div
      className="w-full h-screen items-center lg:-mt-32 justify-center flex bg-center bg-cover lg:rounded-3xl"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="text-start mx-auto max-w-4xl gap-12 h-auto mt-36 items-center flex justify-between rounded-tl-xl rounded-tr-xl lg:rounded-3xl">
        <div className="flex flex-col gap-3 bg-black/50 px-4 lg:pt-12 pt-6 pb-8 bottom-0 absolute right-0 backdrop-blur-md rounded-tl-xl rounded-tr-xl lg:rounded-3xl">
          <p
            className={` px-2 font-light lg:text-xl text-lg text-white items-center justify-start flex flex-row gap-2 tracking-tight`}
          >
            <FaUniversity className="w-7 h-7" />
            <span>{name}</span>
          </p>
          <p
            className={` lg:text-xl text-xl text-wrap pl-2 text-white font-extrabold tracking-tight bg-clip-text bg-transparent `}
          >
            {banner}...
          </p>
          <a
            href={href}
            rel="norefferer"
            className={`mt-2 pl-2 lg:w-1/2 lg:hover:bg-white lg:hover:text-black h-12 bg-transparent duration-300 transition-all border-2 border-white rounded-full items-center flex justify-center text-lg ${font.className} text-white flex items-center justify-center gap-3`}
          >
            <span>Devamını Gör</span>
            <FaArrowRightLong className="w-6 h-6 font-thin " />
          </a>
        </div>
      </div>
    </div>
  );
};
