"use client";

import { useEffect, useState } from "react";
import TypewriterTitle from "../components/TypewriterTitle";
import Typewriter from "typewriter-effect";
import "./globals.css";
import About from "./about/about";
import Projects from "./projects/projects";
import useMediaQuery from "./hooks/use-media-query";
import TieFighter from "@/components/TieFighter";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 786px)");

  const [scrollPosition, setScrollPosition] = useState(0);
  const initialXPositionVW = 30; // Initial horizontal position in viewport width units (vw)
  const maxScroll = 1000; // Maximum scroll value at which position stops changing
  const maxOffsetVW = 150; // The horizontal offset (in vw) needed to move the element completely off the screen

  const updateHorizontalPosition = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    // Set initial scroll position
    updateHorizontalPosition();

    window.addEventListener("scroll", updateHorizontalPosition);
    return () => {
      window.removeEventListener("scroll", updateHorizontalPosition);
    };
  }, []);

  let horizontalPositionVW;
  if (isDesktop) {
    // FOR DESKTOP
    // Calculate the horizontal position of the div in vw units
    const maxScroll = 1100; // Maximum scroll value at which position stops changing
    horizontalPositionVW = Math.max(
      0,
      initialXPositionVW - (scrollPosition / maxScroll) * initialXPositionVW
    );
  } else {
    // FOR MOBILE
    // Calculate the horizontal position of the div in vw units
    horizontalPositionVW = Math.max(
      -maxOffsetVW,
      initialXPositionVW - (scrollPosition / maxScroll) * maxOffsetVW
    );
  }

  return (
    <div>
      <div
        style={{ transform: `translateX(calc(${horizontalPositionVW}vw))` }}
        className="fixed flex h-[100vh] items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center w-[40vw]">
          <div>
            <TieFighter />
          </div>
          <TypewriterTitle title="hi, i'm salwa" size="6vw" />
          <div
            style={{
              fontSize: `${isDesktop ? "2vw" : "1em"}`,
            }}
            className=""
          >
            <Typewriter
              options={{
                delay: 50,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("here's my little space on the internet.")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("say hello!")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>
      </div>
      <section className="h-[100vh]" id="empty-home"></section>
      <section
        className="h-[100vh] flex items-center justify-end p-10"
        id="about"
      >
        <About />
      </section>
      <section
        className="h-[100vh] flex items-center justify-end p-10"
        id="projects"
      >
        <Projects />
      </section>
    </div>
  );
}