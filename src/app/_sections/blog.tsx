import TypewriterTitle from "../../_components/TypewriterTitle";
import "../globals.css";
import useMediaQuery from "../_hooks/useMediaQuery";
import { Alert, AlertDescription, AlertTitle } from "@/_components/ui/alert";
import Animate from "@/_components/Animate";

export default function Blog() {
  const isDesktop = useMediaQuery("(min-width: 786px)");

  return (
    <Animate>
      <div
        className={`flex flex-col p-10 justify-center sticky 
      ${isDesktop ? "w-[50vw] items-end" : "w-[100vw] items-center"}`}
        id="blog"
      >
        <TypewriterTitle
          title={"blog"}
          size={`${isDesktop ? "4em" : "2.5em"}`}
        />
        <p
          className={`mb-5 mt-5 text-xl ${
            isDesktop ? "text-justify" : "text-center"
          }`}
        >
          I love movies, but I love movie soundtracks even more! Checkout my
          recent film score analyses of some of my favorite films by my favorite
          composers.
        </p>
        <Alert className="mb-5 mt-5 w-3/4">
          <AlertTitle>COMING SOON</AlertTitle>
          <AlertDescription>
            Stay tuned for upcoming blog posts!
          </AlertDescription>
        </Alert>
        {/*
      <Link
        href={""}
        className="p-2 underline underline-offset-4 hover:opacity-80 hover:scale-110 active:scale-90 transition ease-in-out duration-200"
      >
        See more
      </Link> */}
      </div>
    </Animate>
  );
}
