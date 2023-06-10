import {
  Container,
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
        <MotionVStack key={props.id}  width="327px" marginX="auto" marginTop={10} >
          <Image
            htmlWidth={props.imgWidth}
            htmlHeight="285px"
            objectFit="cover"
            src={props.image}
            alt=" "
          />
          <RadioGroup style={{marginTop:"2rem"}} value={props.id}>
            <Radio size="sm" bg="#E5DEFD" marginX="5px" value="1"></Radio>
            <Radio size="sm" bg="#E5DEFD" marginX="5px" value="2"></Radio>
            <Radio size="sm" bg="#E5DEFD" marginX="5px" value="3"></Radio>
          </RadioGroup>
          <Text fontSize="24px" fontWeight="bold" textAlign="center">
            {props.title}
          </Text>
          <Text fontSize="16px" textAlign="center">{props.description}</Text>
        </MotionVStack>
  );
};
