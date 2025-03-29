"use client";

import CardStack from "@/_components/carddeck/CardStack";
import TypewriterTitle from "@/_components/TypewriterTitle";

import { getTravelImages } from "@/lib/firebaseUtils";
import { useEffect, useState } from "react";

import Image from "next/image";

export default function Travel() {

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const urls = await getTravelImages();
      setImages(urls);
    }
    fetchImages();
  }, []);

  return (
    <div>
      <TypewriterTitle title={"travel"} size={"6vw"} />
      <CardStack />
      {images.map((url, index) => (
        <Image key={index} src={url} alt={`travel image ${index}`} width={"100"} height={"100"} />
      ))}
    </div>
  );
}