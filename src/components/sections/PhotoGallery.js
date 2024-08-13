import Image from "next/image";

export const PhotoGallery = ({ media }) => {
  return (
    <section
      className="mx-auto  w-full lg:w-11/12 items-center gap-4 justify-center  flex lg:flex-row flex-col lg:scale-100 overflow-x-scroll hide-scrollbar mt-12"
      style={{ overflowX: "scroll" }}
    >
      {media?.map((item, idx) => (
        <div className="object-center rounded-2xl" key={idx}>
          <Image
            className="object-fit rounded-2xl "
            src={item.src}
            key={idx}
            height={400}
            width={400}
            loading="lazy"
            alt={item.alt}
          />
        </div>
      ))}
    </section>
  );
};
