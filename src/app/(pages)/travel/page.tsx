"use client";

import Animate from "@/_components/Animate";
import CardDeck from "@/_components/CardDeck";
import TypewriterTitle from "@/_components/TypewriterTitle";
import useGetPostcardInfo from "@/app/_hooks/useGetPostcardInfo";

export default function Travel() {

  const { postcards, loading, error } = useGetPostcardInfo();
  if (loading) return <Animate>Loading...</Animate>;
  if (error) return <Animate>Error: {error}</Animate>;


  return (
    <Animate key={loading ? 1 : 0}>
      <TypewriterTitle title={"travel"} size={"6vw"} />
      <div className="w-full flex flex-row justify-between">
        <p>Test1</p>
        <CardDeck images={postcards.map(postcard => postcard.postcard)} width="300px" />
      </div>
    </Animate>
  );
}