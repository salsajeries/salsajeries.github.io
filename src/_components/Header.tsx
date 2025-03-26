"use client";

import Link from "next/link";
import TypewriterTitle from "./TypewriterTitle";
import TieFighter from "./TieFighter";

export default function Header() {
  return (
    <div className="flex flex-direction-row justify-items-start items-center">
      <div className="w-20 h-20">
        <TieFighter />
      </div>
      <Link href={"/"} passHref>
        <TypewriterTitle title="hi, i'm salwa" size="2.5vw" />
      </Link>
    </div>
  );
}
