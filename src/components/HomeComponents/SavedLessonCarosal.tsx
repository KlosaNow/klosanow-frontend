import { FC } from "react";
import Carousel from "react-multi-carousel";
import LessonCard from "../LessonCard/LessonCard";

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
    items: 0.8,
  },
};

const SavedLessonsCarosal: FC = () => {
  const data = [
    {
      img: "https://picsum.photos/200",
      title: "Saved Titles",
      timestamp: "2:45",
      description:
        "lorem is the e argube aeirub9er gaeurg9oa eug9wurfbia erugb",
    },
    {
      img: "https://picsum.photos/200",
      title: "Saved Titles",
      timestamp: "2:45",
      description:
        "lorem is the e argube aeirub9er gaeurg9oa eug9wurfbia erugb",
    },
    {
      img: "https://picsum.photos/200",
      title: "Saved Titles",
      timestamp: "2:45",
      description:
        "lorem is the e argube aeirub9er gaeurg9oa eug9wurfbia erugb",
    },
    {
      img: "https://picsum.photos/200",
      title: "Saved Titles",
      timestamp: "2:45",
      description:
        "lorem is the e argube aeirub9er gaeurg9oa eug9wurfbia erugb",
    },
    {
      img: "https://picsum.photos/200",
      title: "Saved Titles",
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
      renderDotsOutside={true}

      // partialVisible={true}
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

export default SavedLessonsCarosal;
