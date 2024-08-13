import Image from "next/image";
import { useEffect, useState } from "react";

export const Slider = () => {
  const images = [
    "/assets/price-media/price-media-1.webp",
    "/assets/price-media/price-media-2.webp",
    "/assets/price-media/price-media-3.webp",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:flex-1 text-center pt-12 lg:mt-0 scale-90 lg:ml-3 lg:px-16 px-4">
      <Image
        width={500}
        height={300}
        src={images[currentImageIndex]}
        alt={`Slider Image ${currentImageIndex + 1}`}
        className="w-full mx-auto sm:w-10/12 lg:w-full rounded-2xl"
      />
    </div>
  );
};
