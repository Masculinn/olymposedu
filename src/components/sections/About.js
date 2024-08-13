import { Inter } from "next/font/google";
import { Trailed } from "../animated-components/Trailed";

const inter = Inter({ subsets: ["latin"] });

export const About = ({ meta }) => {
  return (
    <div className="h-auto mx-auto bg-white/50 lg:max-w-4xl max-w-md text-start justify-start block rounded-lg lg:p-24 pt-12 p-4 ">
      <Trailed isOpen noBounce>
        {Array.from([
          <h2
            className={` ${inter.className} text-4xl font-bold tracking-tighter`}
          >
            Hakkında
          </h2>,
          <p className="pt-8 tracking-tight lg:text-lg font-semibold text-medium">
            {meta.about}
          </p>,
        ])}
      </Trailed>
      {meta.place && (
        <>
          <Trailed isOpen noBounce>
            {Array.from([
              <h3 className="text-2xl font-bold tracking-tighter pt-12">
                Konaklama
              </h3>,
              <p className="lg:text-lg pt-4 tracking-tight text-medium ">
                {meta.place}
              </p>,
            ])}
          </Trailed>
        </>
      )}
      {meta.grant && (
        <>
          <Trailed isOpen noBounce>
            {Array.from([
              <h3 className="text-2xl font-bold pt-8">Burs</h3>,
              <p className="lg:text-lg pt-4 tracking-tight text-medium ">
                {meta.grant}
              </p>,
            ])}
          </Trailed>
        </>
      )}
      {meta.sum && (
        <Trailed isOpen noBounce>
          {Array.from([
            <p className="lg:text-lg pt-12 font-semibold tracking-tight text-medium">
              {meta.sum}
            </p>,
          ])}
        </Trailed>
      )}
    </div>
  );
};
