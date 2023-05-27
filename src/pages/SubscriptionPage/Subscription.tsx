import { useState } from "react";
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import {AiFillCheckCircle, AiOutlineArrowLeft} from 'react-icons/ai'
import {
  Box,
  Button,
  Flex
} from "@chakra-ui/react";

import "./subscription.css"

interface planInterface = {
  name: string;
  features: string[];
};

const plans: planInterface[] = [
  {
    name: "Free",
    features: ["1.2GB storage", "Create Open Study Group", "Create & Receive Video Lessons", "Free"],
  },
  {
    name: "Basic",
    features: ["5GB storage", "Create Open Study Group", "Create & Receive Video Lessons", "#1,500 Monthly"],
  },
  {
    name: "Premium",
    features: ["Unlimited Storage", "Create Open Study Group", "Create & Receive Video Lessons", "Create Channels", "#5,000 Monthly"],

  },
];

const Subscription = () => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [subscribedPlans, setSubscribedPlans] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const [isPlanOpen, setIsPlanOpen] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const handleSubscribeClick = () => {
    const newSubscribedPlans = [...subscribedPlans];
    newSubscribedPlans[selectedPlanIndex] = true;
    setSubscribedPlans(newSubscribedPlans);
  };

  const handlePlanClick = (planIndex: number) => {
    const newIsPlanOpen = [...isPlanOpen];
    newIsPlanOpen[planIndex] = !newIsPlanOpen[planIndex];
    setIsPlanOpen(newIsPlanOpen);
  };


  return (
    <Flex  maxWidth="600px" margin="0 90" flexDirection={"column"} p={[5, 0]}>
      <Flex alignItems={"center"} justifyContent={"flex-start"} gap={"2"}>
        <AiOutlineArrowLeft color="#000000" />
        <Box fontWeight="medium" fontSize="md" lineHeight="shorter" color="#2A2A2A">Subscribe</Box>
      </Flex>
      {plans.map((plan, index) => (
        <Flex key={plan.name} marginTop="1rem" flexDirection={"column"}>
          <Flex className="plan_Name" display="flex" alignItems="center" justifyContent={"center"} onClick={() => handlePlanClick(index)} cursor="pointer" border={"1px solid #7B58F4"} borderRadius={"4px"} gap={3} p={[3, 4]} bg={isPlanOpen[index] ? '#7B58F4' : '#ffffff'}>

          <Box fontSize={"2xl"} color={isPlanOpen[index] ? '#ffffff' : '#7B58F4'} >{plan.name}</Box>
            {isPlanOpen[index] ? <FiChevronUp size={25} color="#ffffff"/> : <FiChevronDown size={25} color="#7B58F4" />}
          </Flex>
          {isPlanOpen[index] && (
            <Box marginTop="1rem">
              {plan.features.map((feature) => (
                <Box fontStyle="normal"fontWeight="normal" fontSize="16px" color="#2A2A2A"m={[3, 5]} lineHeight="20px" key={feature} display="flex" alignItems="center">
                  <AiFillCheckCircle style={{marginRight: '10px'}} color="#7B58F4" size="30" />
                  {feature}
                </Box>
              ))}
              <Flex marginTop="1rem" alignItems="center" justifyContent="flex-end">
            <Button
              bg="#7B58F4"
              color="#ffffff"
              borderRadius="4px"
              fontWeight='300px'
              padding='15px 40px'
              border='none'
              outline='none'
              onClick={handleSubscribeClick}
              disabled={subscribedPlans[index]}
            >
              {subscribedPlans[index] ? "Subscribed" : "Subscribe"}
            </Button>
          </Flex>
            </Box>
          )}
          
        </Flex>
      ))}
    </Flex>
  );
};

export default Subscription;
