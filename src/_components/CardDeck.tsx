import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "@/app/globals.css"
import Link from "next/link";
import Image from "next/image";

export default function CardDeck(props: { images: string[]; url?: string, width: string; }) {
  const { images, url, width } = props;

  return (
    <div className="flex items-center">
      {images?.length !== 0 ? (
        <Swiper
          effect={"cards"}
          loop={true}
          modules={[Autoplay, EffectCards]}
          grabCursor={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{ height: "auto", width: width }}
        >
          {images?.map((image: string, i: number) => (
            <div key={i}>
              <SwiperSlide key={i}>
                {url ? (
                  <Link passHref href={url}>
                    <Image
                      src={image}
                      alt={image}
                      height={"430"}
                      width={"300"}
                      className="rounded-xl" // Apply rounded corners here
                    />
                  </Link>
                ) : (
                  <Image
                    src={image}
                    alt={image}
                    height={"430"}
                    width={"300"}
                  />
                )}
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      ) : (
        <></>
      )}
    </div>
  );
}
