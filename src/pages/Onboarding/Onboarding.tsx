import { useState, useEffect } from "react";
import SplashScreen from "../SplashScreen/SplashScreen";
<<<<<<< HEAD
import OnboardingSlides from "../OnbordingSlides/OnboardingSlides";
import { slides } from "../SlideData";
import { Box } from "@chakra-ui/react";
=======
import OnboardingSlides from "../OnboardingSlides/OnboardingSlides";
import { slides } from "../SlideData";
>>>>>>> 8a0d196cfd5ea9c002efa153b8ef21da8520fec8

const Onboarding = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowOnboarding(true);
      setIsMounted(false);
    }, 4000);
  }, []);

  return (
    <>
      {isMounted && <SplashScreen />}
      {showOnboarding && <OnboardingSlides slides={slides} />}
    </>
  );
};

export default Onboarding;
