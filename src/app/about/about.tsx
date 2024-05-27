import TypewriterTitle from "../../components/TypewriterTitle";
import "../globals.css";

export default function About() {
  return (
    <div className="flex flex-col w-[50vw] p-10 items-end justify-center">
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
