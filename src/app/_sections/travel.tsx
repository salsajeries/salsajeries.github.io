import Link from "next/link";
import TypewriterTitle from "../../_components/TypewriterTitle";
import "../globals.css";
import useMediaQuery from "../_hooks/use-media-query";
import CardStack from "@/_components/carddeck/CardStack";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Travel() {
  const isDesktop = useMediaQuery("(min-width: 786px)");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={`flex flex-col p-10 justify-center sticky 
      ${isDesktop ? "w-[50vw] items-end" : "w-[100vw] items-center"}`}
      id="blog"
    >
      <TypewriterTitle
        title={"travel"}
        size={`${isDesktop ? "4em" : "2.5em"}`}
      />
      <p
        className={`mb-5 mt-5 text-xl ${
          isDesktop ? "text-justify" : "text-center"
        }`}
      >
        Traveling is one of my passions! I love exploring new places, trying new
        foods, and learning about new cultures. Checkout some of the places
        I&apos;ve been and read about my experiences!
      </p>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-col items-center">
          <CardStack />
          <Link
            href={"/travel"}
            className="p-2 underline underline-offset-4 hover:opacity-80 hover:scale-110 active:scale-90 transition ease-in-out duration-200"
          >
            View all cities!
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
