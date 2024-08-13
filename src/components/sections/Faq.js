import { Trailed } from "../animated-components/Trailed";
import { FaqCard } from "../UI/FaqCard";

export const Faq = ({ faqsList }) => {
  return (
    <section className="leading-relaxed max-w-screen-xl  mx-auto py-16 px-4 md:px-8 lg:h-auto lg:w-full items-center justify-center flex flex-col">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Sık Sık Sorulan Sorular
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Sizler için Polonya'daki üniversiteler hakkında en çok sorular
          soruları derledik
        </p>
      </div>
      <div className="mt-4 max-w-2xl mx-auto">
        <Trailed
          isOpen
          noBounce
          wrapperStyle="lg:w-full text-start lg:px-0  lg:max-w-7xl max-w-md lg:mx-0 mx-auto h-auto flex justify-start items-start flex-col gap-2 mt-12 mb-2"
        >
          {faqsList?.map((item, idx) => (
            <FaqCard idx={idx} key={idx} faqList={item} />
          ))}
        </Trailed>
      </div>
    </section>
  );
};
