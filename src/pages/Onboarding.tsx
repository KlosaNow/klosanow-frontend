import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import OnboardingSlides from "./OnbordingSlides/OnboardingSlides";
import chatting from "../assets/OnboardingImgs/chatting.png";
import location from "../assets/OnboardingImgs/location.png";
import teacher from "../assets/OnboardingImgs/teacher.png";

const Onboarding = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const slides = [
    {
      image: teacher,
      title: "Create your lesson within minutes",
      description:
        "Use our easy-to-use workspace tools to make engaging learning contents for your learners",
      id:'1',  
    },
    {
      image: chatting,
      title: "Form an Interactive Academic Community",
      description:
        "Maintain 24/7 interaction with your tutors/learners via messaging, Voice notes and Group chats",
        id:'2',
    },
    {
      image: location,
      title: " Save Video lessons offline ",
      description:
        "Learners can save data by downloading video lessons to watch offline",
      id:'3', 
    },
  ];
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
