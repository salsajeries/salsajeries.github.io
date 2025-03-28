"use client";

import Link from "next/link";
import TypewriterTitle from "./TypewriterTitle";
import TieFighter from "./TieFighter";

export default function Header() {
  return (
    <div className="flex flex-direction-row justify-items-start items-center">
      <div className="w-14 h-14">
        <TieFighter isSpinning={false} />
      </div>
      <Link href={"/"} passHref>
        <TypewriterTitle title="hi, i'm salwa" size="1.5vw" />
      </Link>
    </div>
  );
}
