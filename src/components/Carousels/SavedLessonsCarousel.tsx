import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Carousel.scss";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import LessonCard from "../LessonCard/LessonCard";

const SavedLessonsCarosal: FC = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "50px",
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <BiSolidRightArrow />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          <BiSolidLeftArrow />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.2,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          dots: true,
          centerPadding: "50px",
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerPadding: "50px",
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        centerPadding: "50px",
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
    <Slider {...settings}>
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
    </Slider>
  );
};

export default SavedLessonsCarosal;
