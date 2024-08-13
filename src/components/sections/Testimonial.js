import { useState } from "react";

export const Testimonial = ({ data }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-sky-400 font-semibold pb-6">
            Olympos Edu farkıyla danışmanlık verdiğimiz öğrenciler
          </h3>
          <ul>
            {data.map(
              (item, idx) =>
                currentTestimonial == idx && (
                  <li key={idx}>
                    <figure>
                      <blockquote>
                        <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                          “{item.quote}“
                        </p>
                      </blockquote>
                      <div className="mt-6">
                        <img
                          src={item.avatar}
                          className="w-16 h-16 mx-auto rounded-full"
                          alt="Olympos Edu Öğrencileri"
                        />
                        <div className="mt-3">
                          <span className="block text-gray-800 font-semibold">
                            {item.name}
                          </span>
                          <span className="block text-gray-600 text-sm mt-0.5">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </figure>
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {data.map((_, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-sky-500 focus:ring ${
                    currentTestimonial == idx ? "bg-sky-500" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
