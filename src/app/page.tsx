"use client";

import { useEffect, useRef, useState } from "react";
import TypewriterTitle from "../components/TypewriterTitle";
import Typewriter from "typewriter-effect";
import "./globals.css";
import About from "./sections/about";
import Projects from "./sections/projects";
import useMediaQuery from "./hooks/use-media-query";
import TieFighter from "@/components/TieFighter";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Blog from "./sections/blog";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 786px)");

  const [scrollPosition, setScrollPosition] = useState(0);
  const initialXPositionVW = 25; // Initial horizontal position in viewport width units (vw)
  const maxScroll = 1000; // Maximum scroll value at which position stops changing
  const maxOffsetVW = 150; // The horizontal offset (in vw) needed to move the element completely off the screen
  const [selectedString, setSelectedString] = useState(3); // State to store the selected string
  const audioRef = useRef<HTMLAudioElement | null>(null); // Use useRef to create a reference to the audio element

  const strings = [
    "Pew Pew!",
    "Tie Fighters are my favorite Star Wars ship!",
    "Spin me around!",
    "Right-click to shoot!",
  ];

  const updateHorizontalPosition = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // Function to pick the next string in order
  const pickNextString = () => {
    setSelectedString((prevIndex) => (prevIndex + 1) % strings.length);
  };

  // Function to play the audio
  const playAudio = () => {
    console.log("Test");

    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Set the default volume using useEffect
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set volume to 10%
    }
  }, []);

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
    const maxScroll = 950; // Maximum scroll value at which position stops changing
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
        id="home"
        style={{ transform: `translateX(calc(${horizontalPositionVW}vw))` }}
        className="fixed z-0 flex h-[100vh] items-center justify-center"
      >
        <div className="flex z-10 flex-col items-center justify-center w-[40vw] ml-10">
          <audio ref={audioRef}>
            <source src="/blast.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="w-auto h-auto">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  onMouseOver={pickNextString}
                  onContextMenu={playAudio}
                >
                  <TieFighter />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{strings[selectedString]}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Link href={"#home"} passHref>
            <TypewriterTitle title="hi, i'm salwa" size="6vw" />
          </Link>
          <div
            style={{
              fontSize: `${isDesktop ? "2vw" : "1em"}`,
            }}
            className="pb-2"
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
                  .typeString("scroll for more!")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <div
            style={{
              fontSize: `${isDesktop ? "1.5vw" : "1em"}`,
            }}
            className="flex flex-col items-center"
          >
            <Link
              href={"#about"}
              className="p-2 hover:opacity-80 hover:scale-110 active:scale-90 transition ease-in-out duration-200"
            >
              about
            </Link>
            <Link
              href={"#projects"}
              className="p-2 hover:opacity-80 hover:scale-110 active:scale-90 transition ease-in-out duration-200"
            >
              projects
            </Link>
            <Link
              href={"#blog"}
              className="p-2 hover:opacity-80 hover:scale-110 active:scale-90 transition ease-in-out duration-200"
            >
              blog
            </Link>
            <div className="flex p-2">
              <Link href={"https://github.com/salsajeries"} passHref>
                <GitHubIcon
                  fontSize="large"
                  className="m-2 hover:opacity-80 hover:scale-110 active:scale-90 transition ease-in-out duration-200"
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/salwa-jeries-17a146226/"}
                passHref
              >
                <LinkedInIcon
                  fontSize="large"
                  className="m-2 hover:opacity-80 hover:scale-110 active:scale-90 transition ease-in-out duration-200"
                />
              </Link>
            </div>
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
      <section
        className="h-[100vh] flex items-center justify-end p-10"
        id="blog"
      >
        <Blog />
      </section>
      <section className="relative z-10 bg-custom-dark-background text-card-bg">
        <div className="flex flex-col h-[100vh] p-10 z-10 justify-center items-center text-xl">
          <p>Made with Next.js, Tailwind CSS, and shadcn/ui</p>
          <Separator className="w-[10%]" />
          <p>WebGL Model:</p>
          <div className="mt-2 flex justify-center">
            <Link
              href={"https://poly.pizza/m/fGumBDR4AFk"}
              className="underline underline-offset-2"
            >
              Tie Fighter
            </Link>{" "}
            by{" "}
            <Link
              href={"https://poly.pizza/u/David%20O'Brien%20(-BlanK-)"}
              className="underline underline-offset-2"
            >
              David O&apos;Brien (-BlanK-)
            </Link>{" "}
            <Link
              href={"https://creativecommons.org/licenses/by/3.0/"}
              className="underline underline-offset-2"
            >
              [CC-BY]
            </Link>{" "}
            via Poly Pizza
          </div>
          <Separator className="w-[10%]" />
          <p>Copyright © 2024 Salwa Jeries</p>
        </div>
      </section>
    </div>
  );
}