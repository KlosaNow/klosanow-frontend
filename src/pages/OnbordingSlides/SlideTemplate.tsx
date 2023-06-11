import {
  Image,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

interface SlideProps {
  image: string;
  imgWidth:string;
  title: string;
  description: string;
  id: string;
}

export const SlideTemplate: React.FC<SlideProps> = (props: SlideProps) => {
  const MotionVStack = motion(VStack)
  return (
        <MotionVStack key={props.id}  marginX="auto" >
          <Image
            // htmlWidth={props.imgWidth}
            boxSize={props.imgWidth}
            objectFit="contain"
            src={props.image}
            alt=" "
          />
          <RadioGroup style={{marginTop:"2rem"}} value={props.id}>
            <Radio size="sm" bg="#E5DEFD" marginX="5px" value="1"></Radio>
            <Radio size="sm" bg="#E5DEFD" marginX="5px" value="2"></Radio>
            <Radio size="sm" bg="#E5DEFD" marginX="5px" value="3"></Radio>
          </RadioGroup>
          <Text fontSize="6vw" fontWeight="500" textAlign="center">
            {props.title}
          </Text>
          <Text fontSize="4vw" textAlign="center">{props.description}</Text>
        </MotionVStack>
  );
};
