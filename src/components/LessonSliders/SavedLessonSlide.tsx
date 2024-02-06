import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Carousel.scss";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import LessonCard from "../LessonCard/LessonCard";
import styles from "./lessonStyle.module.scss"
import { slideData } from "./slideData";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react";




const SavedLessonSlide = (): JSX.Element => {
  return (
    <>
      <Box as="span" float="right" mb=".5rem">
        <ChakraLink as={ReactRouterLink} to="#" fontWeight="bold" color="primary.70">See all</ChakraLink>
      </Box>
      <Box as="div" className={styles.mySlide}>
        {slideData.map((cardDetails, index) => (
          <div className={styles.slideCard}>
            <LessonCard
              key={index + cardDetails.timestamp}
              title={cardDetails.title}
              duration={cardDetails.timestamp}
              thumbnail={cardDetails.img}
              description={cardDetails.description}
            />
          </div>

        ))}
      </Box>
    </>
  );
};

export default SavedLessonSlide;
