import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CardProps {
  imageSrc: string;
  href: string;
  scale: number;
  top: number;
  zIndex: number;
  rotate: number;
  x: number;
  canDrag: boolean;
  onDragEnd: () => void;
  onDragStart: () => void;
}

export default function Card({
  imageSrc,
  href,
  scale,
  top,
  zIndex,
  rotate,
  x,
  canDrag,
  onDragEnd,
  onDragStart,
}: CardProps) {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.li
      className="absolute w-[200px] h-[300px] rounded-lg shadow-lg overflow-hidden"
      style={{
        top,
        zIndex,
        cursor: canDrag ? "grab" : "auto",
      }}
      animate={{ scale, rotate, x }}
      transition={{ duration: 0.3 }}
      drag={canDrag ? "y" : false}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragListener={true}
      onDragStart={(e) => {
        setIsDragging(true);
        e.stopPropagation();
        onDragStart();
      }}
      onDragEnd={(e, info) => {
        if (Math.abs(info.offset.x) > 0 || Math.abs(info.offset.y) > 0) {
          e.stopPropagation(); // Prevents click from firing if dragged
        } 
        setIsDragging(false);
        onDragEnd();
      }}
      onClick={() => {
        if (!isDragging) router.push(href);
      }}
    >
      <div className="w-full h-full">
        <Image
          src={imageSrc}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          draggable={false}
        />
      </div>
    </motion.li>
  );
}
