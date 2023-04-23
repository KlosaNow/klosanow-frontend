import { useState,useEffect } from "react";
import { SlideTemplate } from "./SlideTemplate";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Stack } from "@chakra-ui/react";

interface OnboardingSlidesProps {
  slides: { image: string; title: string; description: string; id: string }[];
}


const OnboardingSlides = ({ slides }: OnboardingSlidesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (currentIndex === slides.length - 1) {
         clearInterval(autoSlide);
         console.log('cleared')
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000)
    return () => {
      clearInterval(autoSlide)
    }
  }, [currentIndex, slides.length])

  const navigate = useNavigate();
  const handleNextSlide = () => {
    if (currentIndex === slides.length - 1) {
      navigate("/login");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <AnimatePresence mode='popLayout'>
      <motion.div
        key={currentIndex}
        initial={{ translateX: 200 }}
        animate={{ translateX: 0 }}
        exit={{ translateX: -400 ,scale: 0.9, opacity: 0 }}
        transition={{ delay: 0, duration: 0.5, damping: 80, stiffness: 10 }}
      >
        <SlideTemplate {...slides[currentIndex]} />
      </motion.div>
      <Stack direction='column' align='center'>
      <Button variant='solid' color='neutral.50' background='primary.50' w='85%' h='50px' onClick={handleNextSlide}>
        {currentIndex === slides.length - 1 ? "Login" : "Next"}
      </Button>
      <Button
      variant='ghost'
      color='#7B58F4'
        onClick={() => navigate("/login")}
        disabled={currentIndex === slides.length - 1}
      >
        {currentIndex === slides.length - 1 ? "Sign into your account" : "skip"}
      </Button>
    </Stack>
    </AnimatePresence>
  );
};

export default OnboardingSlides;
