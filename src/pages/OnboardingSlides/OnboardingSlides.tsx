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
      navigate("/sign-up");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrevSlide = () => {
   
      setCurrentIndex(currentIndex - 1);
    
  }
  const [btnstyle, setBtnstyle] = useState("");
  const [btnsize, setBtnsize] = useState("");
  const [btnState, setBtnState] = useState(true);
  const [btnWidth, setBtnWidth] = useState("50%");
  const screenWidth = window.innerWidth;
  useEffect(() => {
    const handleBtn = () =>{
      if (screenWidth < 960) {
        setBtnstyle("btn--solid");
        setBtnsize("btn--medium");
        setBtnWidth("100%");
        setBtnState(false);
      } else {
        setBtnstyle("btn--desktop");
        setBtnsize("btn--small");
        setBtnWidth("30%");
        setBtnState(true);
      }

      console.log(btnstyle,btnsize,btnState)
    }
    handleBtn();
    window.addEventListener("resize",handleBtn);
    window.removeEventListener("resize",handleBtn);
  }, [screenWidth]);
  return (
    <AnimatePresence mode="wait">
      <Container maxWidth={{ lg: "60%", sm: "95%" }}  height="100svh">
        <Flex
          height="100%"
          paddingY={{sm:"10%",lg:"20%"}}
          direction="column"
          justify={{lg:"flex-start",sm:"space-between"}}
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

          <Stack direction={{ lg: "row", sm: "column" }} my={10} justify="space-between" align="center">
            <Button
              buttonStyle={btnstyle}
              buttonSize={btnsize}
              action={btnState?handlePrevSlide:  handleNextSlide}
              width={btnWidth}
            >
              { (btnState ? (
               "Prev") : (
                currentIndex === slides.length - 1
                  ? "Next": "Next")
                  )
              }
            </Button>
            <Button
              buttonStyle={btnstyle==="btn--desktop"?"btn--desktop": "btn--ghost"}
              buttonSize={btnsize}
              width={btnWidth}
              action={btnState?handleNextSlide:() => navigate("/sign-in")}
            >
              {(btnState ? (
               "Next") : (
                 currentIndex === slides.length - 1
                   ? "Sign into your account"
                   : "Skip"))}                
                  
            </Button>
          </Stack>
        </Flex>
      </Container>
    </AnimatePresence>
  );
};

export default OnboardingSlides;
