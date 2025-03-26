import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  scale: number;
  top: number;
  zIndex: number;
  rotate: number;
  x: number;
  canDrag: boolean;
  onDragEnd: () => void;
  onClick: () => void;
}

export default function Card({ imageSrc, scale, top, zIndex, rotate, x, canDrag, onDragEnd, onClick }: CardProps) {
  return (
    <motion.li
      className="absolute w-[400px] h-[600px] rounded-lg shadow-lg overflow-hidden"
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
      onDragEnd={onDragEnd}
      onClick={onClick} // Click to bring to front
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