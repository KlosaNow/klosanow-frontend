import  { FC } from 'react'
import {  Box, Text, Image } from '@chakra-ui/react';

const RecordLesson:FC = () => {
  return (
    <Box>
      <Box px="3" bg="#F8F7FE">
        <Box py={["0", "3"]}>
          <Text fontSize="32px" textColor="#DFA491">
            Chemical Compound
          </Text>
          <Text fontSize="16px" textColor="#AAAAAA">
            Lesson 1
          </Text>
        </Box>
        <Box>
          <Image
            src="https://picsum.photos/200/300"
            alt="Lesson thumbnail"
            width="full"
            height={["181px", "250px"]}
          />

          <Text py="3">
            A compound is a thing composed of two or more separate elements; a
            mixture. The air smelled like a compound of diesel and petrol
            fumes.The word "compound" also refers to any substance formed from
            two or more elements chemically united in fixed proportions. A
            compound is a mixture of two or more separate elements. A chemical
            compound is a substance formed from two or more elements chemically
            united in fixed proportions. The word "compound" also refers to any
            substance formed from two or more elements chemically united in
            fixed proportions. A compound is a mixture of two or more separate
            elements.<br /> A chemical compound is a substance formed from two or more
            elements chemically united in fixed proportions. A compound is a
            mixture of two or more separate elements. A chemical compound is a
            substance formed from two or more elements chemically united in
            fixed proportions. A compound is a mixture of two or more separate
            elements. <br />A chemical compound is a substance formed from two or more
            elements chemically united in fixed proportions.A compound is a
            mixture of two or more separate elements. A chemical compound is a
            substance formed from two or more elements chemically united in
            fixed proportions.A compound is a mixture of two or more separate
            elements. A chemical compound is a substance formed from two or more
            elements chemically united in fixed proportions.
          </Text>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default RecordLesson;