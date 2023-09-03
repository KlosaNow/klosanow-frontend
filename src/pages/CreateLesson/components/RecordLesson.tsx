import  { FC } from 'react'
import {  Box, Text, Image, Button } from '@chakra-ui/react';
import { BsRecordCircleFill, BsPenFill, BsCursorFill } from "react-icons/bs";

const RecordLesson:FC = () => {
  return (
    <Box>
      <Box px="3" bg="#F8F7FE" mb="5">
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
            elements.
            <br /> A chemical compound is a substance formed from two or more
            elements chemically united in fixed proportions. A compound is a
            mixture of two or more separate elements. A chemical compound is a
            substance formed from two or more elements chemically united in
            fixed proportions. A compound is a mixture of two or more separate
            elements. <br />A chemical compound is a substance formed from two
            or more elements chemically united in fixed proportions.A compound
            is a mixture of two or more separate elements. A chemical compound
            is a substance formed from two or more elements chemically united in
            fixed proportions.A compound is a mixture of two or more separate
            elements. A chemical compound is a substance formed from two or more
            elements chemically united in fixed proportions.
          </Text>
        </Box>
      </Box>
      <Box
        width={["full", "60%"]}
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py="2"
        bg="white"
        shadow="md"
        borderRadius="md"
        border="1px"
        borderColor="gray.200"
        gap="5"
      >
        <Button display="flex" flexDirection="column" bg="none" gap="2" py="1">
          <BsRecordCircleFill color="red"  />
          <Text fontSize="10px" textColor="#AAAAAA">
            Record
          </Text>
        </Button>
        <Button display="flex" flexDirection="column" bg="none" gap="2" py="1">
          <BsPenFill color="#7B58F4" />
          <Text fontSize="10px" textColor="#AAAAAA">
            Pen Tool
          </Text>
        </Button>
        <Button display="flex" flexDirection="column" bg="none" gap="2" py="1">
          <BsCursorFill color="#7B58F4" />
          <Text fontSize="10px" textColor="#AAAAAA">
            Move Tool
          </Text>
        </Button>
      </Box>
    </Box>
  );
}

export default RecordLesson;