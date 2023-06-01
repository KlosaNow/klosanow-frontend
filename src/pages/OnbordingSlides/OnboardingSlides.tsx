import { useState } from "react";
import { SlideTemplate } from "./SlideTemplate";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Stack, Flex } from "@chakra-ui/react";
import { Button } from "../../components/Button";

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
    <AnimatePresence mode="wait">
      <Flex direction="column">
        <motion.div
          key={currentIndex}
          initial={{ translateX: 200, opacity: 0, scale: 0.9 }}
          animate={{ translateX: 0, opacity: 1, scale: 1 }}
          exit={{ translateX: -400, scale: 0.9, opacity: 0 }}
          transition={{ delay: 0, duration: 0.5, damping: 80, stiffness: 10 }}
        >
          <SlideTemplate {...slides[currentIndex]} />
        </motion.div>

        <Stack direction="column" align="center" gap="8px">
          <Button
            buttonStyle="btn--solid"
            buttonSize="btn--medium"
            action={handleNextSlide}
            width="85%"
          >
            {currentIndex === slides.length - 1 ? "Create an account" : "Next"}
          </Button>
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
            width="85%"
            action={() => navigate("/login")}
          >
            {currentIndex === slides.length - 1
              ? "Sign into your account"
              : "skip"}
          </Button>
        </Stack>
      </Flex>
    </AnimatePresence>
  );
};

export default OnboardingSlides;
