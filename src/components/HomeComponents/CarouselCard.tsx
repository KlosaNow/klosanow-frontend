import { FC } from "react";
import LessonCard from "../LessonCard/LessonCard";

interface CarouselCardProps {
  thumbnail: string;
  title: string;
  timestamp: string;
  description: string;
}
const CarouselCard: FC<CarouselCardProps> = ({
  thumbnail,
  title,
  timestamp,
  description,
}: CarouselCardProps) => {

  return (
    <LessonCard 
        thumbnail={thumbnail}
        title={title}
        duration={timestamp}
        description={description}
      />
  );
};

export  default CarouselCard