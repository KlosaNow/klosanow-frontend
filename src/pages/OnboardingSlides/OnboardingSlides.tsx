import { useState, useEffect } from "react";
import { SlideTemplate } from "./SlideTemplate";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Stack, Flex, Container } from "@chakra-ui/react";
import { Button } from "../../components/Button/Button";

interface OnboardingSlidesProps {
  slides: {
    image: string;
    title: string;
    description: string;
    id: string;
  }[];
}

const OnboardingSlides = ({ slides }: OnboardingSlidesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const handleNextSlide = () => {
    if (currentIndex === slides.length - 1) {
      if (mobBtn) {
        navigate("/sign-up");
      } else {
        return;
      }
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrevSlide = () => {
    if (currentIndex === 0) {
      return;
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const [mobBtn, setMobBtn] = useState<boolean>();
  const [btnWidth, setBtnWidth] = useState("50%");
  const screenWidth = window.innerWidth;
  useEffect(() => {
    const handleBtn = () => {
      if (screenWidth < 960) {
        setMobBtn(true);
        setBtnWidth("100%");
      } else {
        setMobBtn(false);
        setBtnWidth("30%");
      }
    };
    handleBtn();

    window.addEventListener("resize", handleBtn);
    window.removeEventListener("resize", handleBtn);
  }, [screenWidth]);
  return (
    <AnimatePresence mode="wait">
      <Container maxWidth={{ lg: "60%", sm: "95%" }} height="100svh">
        <Flex
          height="100%"
          paddingY={{ sm: "10%", lg: "20%" }}
          direction="column"
          justify={{ lg: "flex-start", base: "space-around" }}
        >
          <motion.div
            key={currentIndex}
            initial={{ translateX: 100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1, scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0, duration: 0.5, damping: 80, stiffness: 10 }}
          >
            <SlideTemplate {...slides[currentIndex]} />
          </motion.div>

          <Stack
            direction={{ lg: "row", base: "column" }}
            my={10}
            justify="space-between"
            align="center"
          >
            {mobBtn ? (
              <>
                <Button
                  buttonStyle="btn--solid"
                  buttonSize="btn--medium"
                  action={handleNextSlide}
                  width="100%"
                >
                  {currentIndex === slides.length - 1
                    ? "Create an account"
                    : "Next"}
                </Button>
                <Button
                  buttonStyle="btn--ghost"
                  buttonSize="btn--medium"
                  width="100%"
                  action={() => navigate("/sign-in")}
                >
                  {currentIndex === slides.length - 1
                    ? "Sign into your account"
                    : "Skip"}
                </Button>
              </>
            ) : (
              <>
                <Button
                  buttonStyle="btn--desktop"
                  buttonSize="btn--small"
                  action={handlePrevSlide}
                  width={btnWidth}
                >
                  Prev
                </Button>
                <Button
                  buttonStyle="btn--desktop"
                  buttonSize="btn--small"
                  width={btnWidth}
                  action={handleNextSlide}
                >
                  Next
                </Button>
              </>
            )}
          </Stack>
        </Flex>
      </Container>
    </AnimatePresence>
  );
};

export default OnboardingSlides;
