import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ImageSlider(props: { images?: string[]; url?: string }) {
  const { images, url } = props;

  return (
    <div className="w-full relative">
      {images?.length !== 0 ? (
        <Swiper
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="relative"
        >
          {images?.map((image: string, i: number) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
                {url ? (
                  <Link passHref href={url}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={`Project image ${i}`}
                        fill={true}
                        objectFit="contain"
                        className="rounded-xl" // Apply rounded corners here
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`Project image ${i}`}
                      fill={true}
                      objectFit="contain"
                      className="rounded-xl" // Apply rounded corners here
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <></>
      )}
    </div>
  );
}
