import TypewriterTitle from "../../components/TypewriterTitle";
import "../globals.css";
import useMediaQuery from "../hooks/use-media-query";

export default function About() {
  const isDesktop = useMediaQuery("(min-width: 786px)");

  return (
    <div
      className={`flex flex-col ${
        isDesktop ? "w-[50vw] items-end" : "w-[100vw] items-center"
      } p-10 justify-center`}
    >
      <TypewriterTitle title={"about me"} size={"5vw"} />
      <p className="sm:text-justify sm:text-xl">
        My name is Salwa Jeries, I'm a senior at The University of Alabama in
        Huntsville majoring in computer science with a math minor. I'm
        interested in software engineering and particularly web and app
        development for a career so that I can make fun projects - like this
        site - for others to enjoy as well! In my free time, you'll find me
        playing piano, cuddling with my two dachshunds, and checking out all the
        new local coffee shops!
      </p>
    </div>
  );
}
