import TypewriterTitle from "../../_components/TypewriterTitle";
import "../globals.css";
import useMediaQuery from "../_hooks/useMediaQuery";
import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/avatar";
import Animate from "@/_components/Animate";

export default function About() {
  const isDesktop = useMediaQuery("(min-width: 786px)");

  return (
    <Animate>
      <div
        className={`flex flex-col p-10 justify-center sticky 
      ${isDesktop ? "w-[50vw] items-end" : "w-[100vw] items-center"}`}
        id="about"
      >
        <TypewriterTitle
          title={"about me"}
          size={`${isDesktop ? "4em" : "2.5em"}`}
        />
        <p
          className={`mb-5 mt-5 text-xl ${
            isDesktop ? "text-justify" : "text-center"
          }`}
        >
          My name is Salwa Jeries, I&apos;m a senior at The University of
          Alabama in Huntsville majoring in computer science with a math minor.
          I&apos;m interested in software engineering and particularly web and
          app development for a career so that I can make fun projects - like
          this site - for others to enjoy as well! In my free time, you&apos;ll
          find me playing piano, cuddling with my two dachshunds, and checking
          out all the new local coffee shops!
        </p>
        <Avatar className="w-1/2 h-1/2">
          <AvatarImage src={"/myself.jpeg"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </Animate>
  );
}
