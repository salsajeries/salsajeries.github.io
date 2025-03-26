"use client";

import Card from "./Card";

import React from "react";
// @ts-ignore
import move from "lodash-move";

const CARD_IMG = [
  "/postcards/madrid.jpg",
  "/postcards/london.jpg",
  "/postcards/paris.jpg",
];
const CARD_OFFSET = 20;
const SCALE_FACTOR = 0.08;
const ROTATION_FACTOR = 8; // Controls how much each card rotates outward
const X_OFFSET = 40; // Controls left/right shift for curved stacking

export default function CardStack() {
  const [cards, setCards] = React.useState(CARD_IMG);
  const moveToEnd = (from: number) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div style={CardDeckStyles.wrapperStyle}>
      <ul style={CardDeckStyles.cardWrapStyle}>
        {cards.map((src, index) => {
          const canDrag = index === 0;
          const isLeftStack = index % 2 === 0; // Alternate left/right stacking
          return (
            <Card
              key={src.toString()}
              imageSrc={src}
              scale={1 - index * SCALE_FACTOR}
              top={index * -CARD_OFFSET}
              zIndex={CARD_IMG.length - index}
              canDrag={canDrag}
              onDragEnd={() => moveToEnd(index)}
              rotate={isLeftStack ? -ROTATION_FACTOR * index : ROTATION_FACTOR * index}
              x={isLeftStack ? -X_OFFSET * index : X_OFFSET * index}
              onClick={() => moveToEnd(index)} // Bring clicked card to front
            />
          );
        })}
      </ul>
    </div>
  );
}

const CardDeckStyles: { [key: string]: React.CSSProperties } = {
  wrapperStyle: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  cardWrapStyle: {
    position: "relative",
    width: "400px",
    height: "600px",
  },
  cardStyle: {
    position: "absolute",
    width: "400px",
    height: "600px",
    borderRadius: "8px",
    transformOrigin: "top center",
    listStyle: "none",
  },
};