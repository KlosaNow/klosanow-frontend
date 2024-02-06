
import LessonCard from "../LessonCard/LessonCard";
import { Box } from "@chakra-ui/react";
import styles from "./lessonStyle.module.css"
import { slideData } from "./slideData";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'


const CreatedLessonSlide = (): JSX.Element => {
    return (
      <>
        <Box as="span" float="right" mb=".5rem">
          <ChakraLink as={ReactRouterLink} to="/created-lessons" fontWeight="bold" color="primary.70">See all</ChakraLink>
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
export default CreatedLessonSlide

