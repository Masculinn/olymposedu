import { Montserrat } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import { Trailed } from "../animated-components/Trailed";

const font = Montserrat({
  subsets: ["latin"],
});

export const Card = ({ img, header, subHeader, link, idx }) => {
  const bgStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <figure
      className={`lg:w-full max-w-md lg:max-w-full lg:px-16 h-1/2 lg:gap-24 lg:mt-24 lg:mx-0 mx-auto items-center justify-center flex flex-col-reverse ${
        idx % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
      } mt-12 lg:mt-0 `}
      key={idx}
    >
      <div
        className="lg:w-1/2 rounded-2xl lg:h-96 h-48 w-full px-4  block bg-cover"
        style={bgStyle}
      ></div>
      <div className="lg:w-1/2 w-full lg:h-96 h-auto lg:my-0 my-4 lg:px-0 px-2">
        <Trailed isOpen noBounce>
          {Array.from([
            <h1
              className={`text-4xl text-start font-extrabold tracking-tighter lg:pl-16 lg:pt-24 pt-8 pb-2 ${font.className}`}
            >
              {header}
            </h1>,
            <p className="lg:pl-16 font-semibold tracking-tight max-w-lg text-black/80">
              {subHeader}{" "}
            </p>,
          ])}
        </Trailed>

        {link && link.length === 2 && (
          <div className="lg:pl-16 lg:items-start lg:justify-start items-center justify-center flex max-w-lg pt-2">
            <a
              href={link[1]}
              rel="noopener noreferrer"
              target="_blank"
              className="items-center gap-2 flex pt-4 bg-rose-600 border-none text-white rounded-full px-4 lg:w-2/3 w-full justify-center py-4 mt-4 hover:bg-opacity-90"
            >
              <span>{link[0]}</span>
              <span>
                <FaArrowRight />
              </span>
            </a>
          </div>
        )}
      </div>
    </figure>
  );
};
