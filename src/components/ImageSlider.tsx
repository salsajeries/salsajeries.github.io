"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import QR1 from "@/app/assets/images/QuietRoom/QR1.png";
import QR2 from "@/app/assets/images/QuietRoom/QR2.png";
import QR3 from "@/app/assets/images/QuietRoom/QR3.png";

import U1 from "@/app/assets/images/Unscene/U1.png";
import U2 from "@/app/assets/images/Unscene/U2.png";
import U3 from "@/app/assets/images/Unscene/U3.png";
import U4 from "@/app/assets/images/Unscene/U4.png";

import ATTS1 from "@/app/assets/images/AdventureToTheSun/ATTS1.png";
import ATTS2 from "@/app/assets/images/AdventureToTheSun/ATTS2.png";
import ATTS3 from "@/app/assets/images/AdventureToTheSun/ATTS3.png";

import PW1 from "@/app/assets/images/PomodoroWidget/PW1.png";
import PW2 from "@/app/assets/images/PomodoroWidget/PW2.png";
import PW3 from "@/app/assets/images/PomodoroWidget/PW3.png";
import PW4 from "@/app/assets/images/PomodoroWidget/PW4.png";

import NCW1 from "@/app/assets/images/NotionClockWidget/NCW1.png";
import NCW2 from "@/app/assets/images/NotionClockWidget/NCW2.png";
import { useState } from "react";
import Link from "next/link";

export default function ImageSlider(props: { project: number; url?: string }) {
  const imageSets = [
    [QR1, QR2, QR3],
    [U1, U2, U3, U4],
    [ATTS1, ATTS2, ATTS3],
    [PW1, PW2, PW3, PW4],
    [],
    [NCW1, NCW2],
  ];
  const { project, url } = props;
  const [imageIndex, setImageIndex] = useState(project);

  return (
    <div>
      {imageSets[imageIndex].length !== 0 ? (
        <div className="pl-10 pr-10">
          <Carousel
            className="flex items-center"
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 7000,
              }),
            ]}
          >
            <CarouselContent>
              {imageSets[imageIndex].map((image: any, i: number) => (
                <CarouselItem
                  key={i}
                  className="flex justify-center items-center"
                >
                  {url ? (
                    <Link passHref href={url}>
                      <Image
                        src={image}
                        alt={""}
                        className="h-full rounded-3xl hover:scale-105 active:scale-95 transition ease-in-out duration-180"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={image}
                      alt={""}
                      className="h-full rounded-3xl hover:scale-105 active:scale-95 transition ease-in-out duration-180"
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
