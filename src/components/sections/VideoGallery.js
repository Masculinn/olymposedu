import videos from "@/lib/videos";
import { VideoCard } from "../UI/VideoCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/navigation";

export const VideoGallery = () => {
  const isResponsive =
    typeof window !== "undefined" &&
    useMediaQuery({
      query: "(max-width: 768px)",
    });

  return (
    <section className="h-screen w-full items-center justify-center bg-slate-950">
      <div className="h-screen lg:w-full lg:px-24  flex items-center self-center relative w-full ">
        <Swiper
          spaceBetween={20}
          slidesPerView={!isResponsive ? 3 : 1}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          effect="slide"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mx-auto w-full "
        >
          {videos.map((val, idx) => (
            <SwiperSlide key={idx}>
              <VideoCard src={val} key={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
