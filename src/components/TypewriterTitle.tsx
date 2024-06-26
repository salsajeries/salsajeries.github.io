"use client";

import Typewriter from "typewriter-effect";

// Generate typing effect for titles
export default function TypewriterTitle(props: {
  title: string;
  size: string;
}) {
  return (
    <div style={{ fontSize: props.size }}>
      <Typewriter
        options={{
          delay: 150,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(props.title).start();
        }}
      />
    </div>
  );
}
