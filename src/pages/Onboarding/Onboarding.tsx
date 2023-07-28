import { useState, useEffect } from "react";
import SplashScreen from "../SplashScreen/SplashScreen";
import OnboardingSlides from "../OnboardingSlides/OnboardingSlides";
import { slides } from "../SlideData";

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
