import {
  Box,
  Text,
  Input,
  Textarea,
  Stack,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import dummyImg from "../../../assets/images/dummy image.png";

import { Link } from "react-router-dom";

import { FormikStepComponentProps } from "../../../types/components/componetInterface";

const LessonDescription = ({ nextFunc }: FormikStepComponentProps) => {
  const [file, setFile] = useState<any>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(URL.createObjectURL(selectedFile));
      console.log(file);
    } else {
      console.log("Please select an image file.");
    }
  };

  return (
    <Box>
      <Text fontSize="32px" fontWeight="500" textColor="black.100" mb={2}>
        Create your lessons
      </Text>
      <Stack direction={"row"} spacing={6} display={["none", "flex"]}>
        <Box>
          <Image
            src={file}
            alt="Klosanaw"
            w={"250px"}
            h={"170px"}
            fallbackSrc={dummyImg}
            borderRadius={"0.2rem"}
          />
        </Box>
        <Box>
          <Flex gap={1}>
            <Text>Important guidelines: </Text>
            <Text fontWeight={600} color={"#523BA3"}>
              700x430 pixels
            </Text>
          </Flex>
          <Flex gap={1}>
            <Text>File support: </Text>
            <Text fontWeight={600} color={"#523BA3"}>
              Jpg, jpeg or png
            </Text>
          </Flex>
          <Box w={"190px"} mt={"2rem"}>
            <Button
              colorScheme="#7B58F4;"
              variant="outline"
              w={"full"}
              h={"50px"}
              _hover={{ color: "none" }}
            >
              Upload image
              <Input
                pr="4.5rem"
                type="file"
                placeholder="Enter password"
                zIndex={"revert"}
                h={"full"}
                w={"full"}
                position={"absolute"}
                opacity={0}
                accept="image/*"
                cursor={"pointer"}
                onChange={handleFileChange}
              />
            </Button>
          </Box>
        </Box>
      </Stack>
      <Stack spacing={5} mt={"1rem"} as={"form"}>
        <Box>
          <Box>
            <Text mb="8px">Course title: </Text>
            <Input
              placeholder="Lesson Title"
              size="lg"
              // required
            />
          </Box>
        </Box>
        <Box>
          <Text mb="8px">Description</Text>
          <Textarea
            placeholder="Tell us about your lesson"
            size="sm"
            // required
          />
        </Box>
        <Box>
          <Box>
            <Text mb="8px">Tutors name: </Text>
            <Input
              placeholder="Lesson Title"
              size="lg"
              // required
            />
          </Box>
        </Box>
        <Box>
          <Text mb="8px" cursor={"pointer"}>
            Description
          </Text>
          <Textarea
            placeholder="Tell us about your lesson"
            size="sm"
            // required
          />
        </Box>
        <Flex justify={"space-between"} color={"#BA1A1A"} fontSize={"0.7rem"}>
          <Text>You exceeded limit</Text>
          <Text>-126 words</Text>
        </Flex>
        <Stack
          direction={"row"}
          borderStyle={"dashed"}
          borderRadius={"0.7rem"}
          borderWidth="2px"
          position={"relative"}
          p={2}
          display={["flex", "none"]}
        >
          <Input
            type="file"
            h={"full"}
            opacity={0}
            position={"absolute"}
            cursor={"pointer"}
            onChange={handleFileChange}
            accept="image/*"
          />
          <Image
            boxSize="100px"
            objectFit="cover"
            alt="Dan Abramov"
            src={file}
            h={"70px"}
            w={"70px"}
            fallbackSrc={dummyImg}
          />
          <Box>
            <Text>Add a thumbnail for your lesson</Text>
            <Text fontWeight={"bold"} mt={"0.5rem"}>
              Browse your files
            </Text>
          </Box>
        </Stack>
        <Stack display={["flex", "none"]}>
          <Button
            colorScheme="#7B58F4;"
            variant="solid"
            width={"100px"}
            h={"50px"}
            type="submit"
          >
            Next
          </Button>
        </Stack>
        <Text color={"#7B58F4"} cursor={"pointer"}>
          Add tag
        </Text>
        <Stack
          direction="row"
          spacing={4}
          align="center"
          justify={"right"}
          display={["none", "flex"]}
        >
          <Button
            colorScheme="#7B58F4;"
            variant="outline"
            width={"200px"}
            h={"50px"}
            _hover={{ color: "none" }}
          >
            Save to drafts
          </Button>
          <Button
            colorScheme="#7B58F4;"
            variant="solid"
            width={"200px"}
            h={"50px"}
            type="submit"
            as={Link}
            to={"/created-lessons"}
          >
            Next
          </Button>
        </Stack>
      </Stack>

      <Button onClick={nextFunc}>Next</Button>
    </Box>
  );
};

export default LessonDescription;
