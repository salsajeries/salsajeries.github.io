import Link from "next/link";
import TypewriterTitle from "../../_components/TypewriterTitle";
import "../globals.css";
import useMediaQuery from "../_hooks/use-media-query";
import { Alert, AlertDescription, AlertTitle } from "@/_components/ui/alert";
import CardStack from "@/_components/carddeck/CardStack";

export default function Travel() {
  const isDesktop = useMediaQuery("(min-width: 786px)");

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
      <div className="flex flex-col items-center">
        <CardStack />
        <Link
          href={"/travel"}
          className="p-2 underline underline-offset-4 hover:opacity-80 hover:scale-110 active:scale-90 transition ease-in-out duration-200"
        >
          View all cities!
        </Link>
      </div>
      {/* <Alert className="mb-5 mt-5 w-3/4">
        <AlertTitle>COMING SOON</AlertTitle>
        <AlertDescription>Stay tuned for upcoming blog posts!</AlertDescription>
      </Alert> */}
    </div>
  );
}
