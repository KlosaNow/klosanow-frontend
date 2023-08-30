import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FC } from "react";
import LessonCard from "../LessonCard/LessonCard";
import { Box } from "@chakra-ui/react";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1.8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CreatedLessonsCarosals: FC = () => {
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
      itemClass="carousel-item-padding-40-px"
      renderDotsOutside={true}
    >
      {data.map((cardDetails, index) => {
        return (
          <LessonCard
            key={index}
            thumbnail={cardDetails.img}
            duration={cardDetails.timestamp}
            title={cardDetails.title}
            description={cardDetails.description}
          />
        );
      })}
    </Carousel>
  );
};

export default CreatedLessonsCarosals;
