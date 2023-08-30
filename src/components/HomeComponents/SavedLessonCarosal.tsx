import { FC } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Carosal.scss"
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import LessonCard from "../LessonCard/LessonCard";



const SavedLessonsCarosal:FC = () => {

   var settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     initialSlide: 0,
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
         breakpoint: 1024,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
          prevArrow: false,
          nextArrow: false,
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
}

export default SavedLessonsCarosal