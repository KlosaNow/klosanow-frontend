import { useState,useEffect } from "react";
import { SlideTemplate } from "./SlideTemplate";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Stack } from "@chakra-ui/react";
import {BTN} from '../../components/Button'

interface OnboardingSlidesProps {
  slides: { image: string; title: string; description: string; id: string }[];
}


const OnboardingSlides = ({ slides }: OnboardingSlidesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const handleNextSlide = () => {
    if (currentIndex === slides.length - 1) {
      navigate("/login");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={currentIndex}
        initial={{ translateX: 200 , opacity: 0, scale: 0.9}}
        animate={{ translateX: 0 ,opacity: 1 ,scale: 1}}
        exit={{ translateX: -400 ,scale: 0.9, opacity: 0 }}
        transition={{ delay: 0, duration: 0.5, damping: 80, stiffness: 10 }}
      >
        <SlideTemplate {...slides[currentIndex]} />
      </motion.div>
      <Stack direction='column' align='center'>
      <BTN variant='solid' color='neutral.50' backgroundColor='primary.50' width='85%' height='50px' action={handleNextSlide}>
        {currentIndex === slides.length - 1 ? "Login" : "Next"}
      </BTN>
      <BTN
      variant='ghost'
      color='#7B58F4'
      action={() => navigate("/login")}
      backgroundColor='transparent.100' width='85%' height='50px'
      >
        {currentIndex === slides.length - 1 ? "Sign into your account" : "skip"}
      </BTN>
    </Stack>
    </AnimatePresence>
  );
};

export default OnboardingSlides;
