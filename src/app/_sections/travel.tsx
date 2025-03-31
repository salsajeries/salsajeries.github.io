import Link from "next/link";
import TypewriterTitle from "../../_components/TypewriterTitle";
import "../globals.css";
import useMediaQuery from "../_hooks/useMediaQuery";
import useGetPostcards from "../_hooks/useGetPostcardImages";
import CardDeck from "@/_components/CardDeck";
import Animate from "@/_components/Animate";

export default function Travel() {
  const isDesktop = useMediaQuery("(min-width: 786px)");

  const { images, loading, error } = useGetPostcards();
  if (loading) return <Animate>Loading...</Animate>;
  if (error) return <Animate>Error: {error}</Animate>;

  return (
    <Animate key={loading ? 1 : 0}>
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
          Traveling is one of my passions! I love exploring new places, trying
          new foods, and learning about new cultures. Checkout some of the
          places I&apos;ve been and read about my experiences!
        </p>

        <div className="flex flex-col items-center w-auto h-full gap-4 pl-10 pr-10">
          <CardDeck images={images} width="300px" />
          <Link
            href={"/travel"}
            className="p-2 underline underline-offset-4 hover:opacity-80 hover:scale-110 active:scale-90 transition ease-in-out duration-200"
          >
            View all cities!
          </Link>{" "}
        </div>
      </div>
    </Animate>
  );
}
