import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FC } from "react";
import { CarouselCard } from "./CarouselCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const CarouselComponent: FC = () => {
  const data = [
    {
      img: "https://picsum.photos/200/300",
      title: "Lesson Title",
      timestamp: "2:45",
      description:
        "lorem is the e argube aeirub9er gaeurg9oa eug9wurfbia erugb",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "Lesson Title",
      timestamp: "2:45",
      description:
        "lorem is the e argube aeirub9er gaeurg9oa eug9wurfbia erugb",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "Lesson Title",
      timestamp: "2:45",
      description:
        "lorem is the e argube aeirub9er gaeurg9oa eug9wurfbia erugb",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "Lesson Title",
      timestamp: "2:45",
      description:
        "lorem is the e argube aeirub9er gaeurg9oa eug9wurfbia erugb",
    },
  ];
  return (
    <Carousel
      arrows={false}
      swipeable={true}
      draggable={true}
      centerMode={true}
      showDots={true}
      responsive={responsive}
    >
      {data.map((cardDetails, index) => {
        return (
          <CarouselCard
            key={index}
            img={cardDetails.img}
            timestamp={cardDetails.timestamp}
            title={cardDetails.title}
            description={cardDetails.description}
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
