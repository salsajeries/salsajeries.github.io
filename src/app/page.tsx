"use client";

import { useEffect, useState } from "react";
import TypewriterTitle from "../components/TypewriterTitle";
import Typewriter from "typewriter-effect";
import "./globals.css";
import About from "./about/about";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const initialXPositionVW = 25; // Initial horizontal position in viewport width units (vw)

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the horizontal position of the div in vw units
  const maxScroll = 1000; // Maximum scroll value at which position stops changing
  const horizontalPositionVW = Math.max(
    0,
    initialXPositionVW - (scrollPosition / maxScroll) * initialXPositionVW
  );

  return (
    <div>
      <div
        style={{ transform: `translateX(calc(${horizontalPositionVW}vw))` }}
        className="fixed flex h-[100vh] items-center justify-center ml-10 mr-10"
      >
        <div className="flex-col w-auto justify-center">
          <TypewriterTitle title="hi, i'm salwa" size="7vw" />
          <div style={{ fontSize: "2vw" }} className="w-auto">
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
      <section className="h-[100vh] flex items-center justify-end" id="about">
        <About />
      </section>
    </div>
  );
}
