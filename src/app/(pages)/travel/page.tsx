"use client";

import CardStack from "@/_components/carddeck/CardStack";
import TypewriterTitle from "@/_components/TypewriterTitle";

export default function Travel() {
  return (
    <div>
      <TypewriterTitle title={"travel"} size={"6vw"} />
      <CardStack />
    </div>
  );
}