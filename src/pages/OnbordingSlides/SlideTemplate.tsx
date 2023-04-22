import {  Container, Image, Radio, RadioGroup, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";



interface SlideProps {
image: string;
title: string;
description: string;
id:string
}
export const SlideTemplate :React.FC<SlideProps> = (props:SlideProps) => {
  return (
    <motion.div
      key={props.id}
    >
    <Container padding="5" marginY='5' maxW="2xl"  centerContent>
      <VStack spacing='2rem' width='361px'>
          <Image
            htmlWidth= '342px'
            htmlHeight= '265px'
            objectFit="cover"
            src={props.image}
            alt=" "
          />
          <RadioGroup value={props.id}>
            <Radio size='sm'  bg="#E5DEFD" marginX='2px' value='1'></Radio>
            <Radio size='sm'  bg="#E5DEFD" marginX='2px' value='2'></Radio>
            <Radio size='sm' bg="#E5DEFD" marginX='2px' value='3'></Radio>
          </RadioGroup>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            {props.title}
          </Text>
          <Text textAlign="center">{props.description}</Text>
      </VStack>
    </Container>
    </motion.div>
  );
};
