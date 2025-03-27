"use client";

import Card from "./Card";

import React, { useEffect, useState } from "react";
// @ts-ignore
import move from "lodash-move";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const CARD_DATA = [
  { src: "/postcards/madrid.jpg", href: "/travel/madrid" },
  { src: "/postcards/london.jpg", href: "travel/london" },
  { src: "/postcards/paris.jpg", href: "travel/paris" },
];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.08;
const ROTATION_FACTOR = 8; // Controls how much each card rotates outward
const X_OFFSET = 40; // Controls left/right shift for curved stacking
const AUTO_ITERATE_INTERVAL = 3000; // Change card every 3 seconds

export default function CardStack() {
  const [cards, setCards] = useState(CARD_DATA);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Move card to end of stack when dragging
  const moveToEnd = (from: number) => {
    setCards(move(cards, from, cards.length - 1));
  };

  // Auto-iteration
  useEffect(() => {
    if (isUserInteracting) return; // Pause auto-iteration when user interacts

    const interval = setInterval(() => {
      moveToEnd(0); // Move the first card to the back
    }, AUTO_ITERATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isUserInteracting, cards]); // Restart interval if interaction stops

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            style={CardDeckStyles.wrapperStyle}
            onMouseEnter={() => setIsUserInteracting(true)}
            onMouseLeave={() => setIsUserInteracting(false)}
          >
            <ul style={CardDeckStyles.cardWrapStyle}>
              {cards.map((card, index) => {
                const canDrag = index === 0;
                const isLeftStack = index % 2 === 0; // Alternate left/right stacking
                return (
                  <Card
                    key={card.src.toString()}
                    imageSrc={card.src}
                    href={card.href}
                    scale={1 - index * SCALE_FACTOR}
                    top={index * -CARD_OFFSET}
                    zIndex={CARD_DATA.length - index}
                    canDrag={canDrag}
                    onDragStart={() => setIsUserInteracting(true)}
                    onDragEnd={() => {
                      moveToEnd(index);
                      setIsUserInteracting(false);
                    }}
                    rotate={
                      isLeftStack
                        ? -ROTATION_FACTOR * index
                        : ROTATION_FACTOR * index
                    }
                    x={isLeftStack ? -X_OFFSET * index : X_OFFSET * index}
                  />
                );
              })}
            </ul>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Drag to explore</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const CardDeckStyles: { [key: string]: React.CSSProperties } = {
  wrapperStyle: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    height: "100%",
    width: "100%",
    padding: "30px",
  },
  cardWrapStyle: {
    position: "relative",
    width: "200px",
    height: "300px",
  },
  cardStyle: {
    position: "absolute",
    width: "200px",
    height: "300px",
    borderRadius: "8px",
    transformOrigin: "top center",
    listStyle: "none",
  },
};
