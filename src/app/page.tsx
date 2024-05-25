"use client";

import { useEffect, useState } from "react";
import TypewriterTitle from "./TypewriterTitle";
import Typewriter from "typewriter-effect";
import "./globals.css";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const initialXPositionVW = 10; // Initial horizontal position in viewport width units (vw)

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
        className="fixed h-screen flex items-center justify-center p-10 h-[100vh]"
        style={{ transform: `translateX(calc(${horizontalPositionVW}vw))` }}
      >
        <div className="flex-col">
          <TypewriterTitle title="hi, i'm salwa" />
          <Typewriter
            options={{
              delay: 50,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("here's a little bit about me.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("say hello!")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
          <a href="#new-section">Test</a>
        </div>
      </div>
      <div className="h-[100vh]" id="empty-home"></div>
      <div
        className="h-[100vh] flex items-center justify-center"
        id="new-section"
      >
        <p className="text-2xl">Scroll down to see the effect.</p>
      </div>
    </div>
  );
}
