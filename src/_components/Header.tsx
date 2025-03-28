"use client";

import Link from "next/link";
import TypewriterTitle from "./TypewriterTitle";
import TieFighter from "./TieFighter";

export default function Header() {
  return (
    <div className="flex flex-direction-row justify-center items-center">
      <Link href={"/"} passHref>
        <TypewriterTitle title="hi, i'm salwa" size="1vw" />
      </Link>
    </div>
  );
}
