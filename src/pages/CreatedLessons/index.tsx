import { useRef } from "react";
import {
  Box,
  Text,
  Input,
  Stack,
  Button,
  Image,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Heading,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineArrowRight, AiOutlineCloseCircle } from "react-icons/ai";
import { TbShare2 } from "react-icons/tb";
import testImg from "../../assets/images/testImg.svg";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Lessons = [
  {
    id: 1,
    title: "Biology 101",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio, ut error magni quae inventore eaque dolores harum esse repellat. Ad accusamus enim a ut adipisci. Assumenda alias eaque totam",
    tutor: "Prof Peter",
    thumbnail: testImg,
    timeStamp: "2.23",
  },
  {
    id: 2,
    title: "Biology 101",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio, ut error magni quae inventore eaque dolores harum esse repellat. Ad accusamus enim a ut adipisci. Assumenda alias eaque totam",
    tutor: "Prof Peter",
    thumbnail: testImg,
    timeStamp: "2.23",
  },
  {
    id: 3,
    title: "Biology 101",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio, ut error magni quae inventore eaque dolores harum esse repellat. Ad accusamus enim a ut adipisci. Assumenda alias eaque totam",
    tutor: "Prof Peter",
    thumbnail: testImg,
    timeStamp: "2.23",
  },
];

const LessonDraft = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <Box padding={["10px 10px 100px", "100px 30px 0"]}>
      <Box display="flex" justifyContent="space-between">
        <Text mr={2} fontSize="2xl" fontWeight="bold" fontFamily="inherit">
          Created Lessons
        </Text>

        <ChakraLink
          as={ReactRouterLink}
          to="/drafts"
          px="2rem"
          py=".5rem"
          bg="primary.50"
          borderRadius="md"
          color="neutral.40"
          fontWeight={600}
          style={{ textDecoration: "none" }}
        >
          Create New Lesson
        </ChakraLink>
      </Box>

      <Box mt="4">
        <Text fontSize="xl">Your Videos</Text>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        pt={3}
        overflow="hidden"
      >
        {Lessons.map((lesson) => (
          <Card key={lesson.id} maxW={"100%"} pb={"1rem"} fontFamily="inherit">
            <CardHeader p={0}>
              <Flex>
                <Flex
                  flex="1"
                  alignItems="center"
                  flexWrap="wrap"
                  position={"relative"}
                >
                  <Image
                    src={lesson.thumbnail}
                    width={"100%"}
                    alt="Green double couch with wooden legs"
                  />
                  <Box position={"absolute"} bottom={"8px"} right={"16px"}>
                    <Text
                      bgColor="primary.50"
                      color="neutral.50"
                      py={"1px"}
                      px={2}
                      borderRadius={"5px"}
                    >
                      {lesson.timeStamp}
                    </Text>
                  </Box>
                </Flex>
                <Box position={"absolute"} top={"8px"} right={"16px"}>
                  <Menu>
                    <MenuButton
                      cursor={"pointer"}
                      as={"h1"}
                      background={"none"}
                      _hover={{ background: "none" }}
                    >
                      <IconButton
                        variant="ghost"
                        colorScheme="gray"
                        aria-label="See menu"
                        backgroundColor={"white"}
                        color="primary.50"
                        ref={btnRef}
                        cursor={"pointer"}
                        icon={<BsThreeDotsVertical />}
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem _hover={{ background: "none" }}>
                        <Flex align={"center"} gap={2}>
                          <Box color="primary.50">
                            <TbShare2 color="primary.50" />
                          </Box>

                          <Text onClick={onOpen}> Share Course</Text>
                        </Flex>
                      </MenuItem>
                      <MenuItem>
                        <Flex align={"center"} gap={2}>
                          <Box color="primary.50">
                            <RiDeleteBin5Line color="red" />
                          </Box>

                          <Text>Delete course</Text>
                        </Flex>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text fontSize="xl" fontWeight={600}>
                {lesson.title}
              </Text>

              <Text>
                {lesson.description}...{" "}
                <span style={{ fontWeight: "bold" }}>{lesson.tutor}</span>
              </Text>
            </CardBody>

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
              p={0}
            >
              <Button
                bgColor="primary.50"
                color="neutral.50"
                variant="solid"
                width={"200px"}
                h={"50px"}
                type="submit"
                ml={"1.2rem"}
              >
                Watch now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent pt={"3rem"}>
          <Flex align={"center"} ml={"0.5rem"}>
            <AiOutlineCloseCircle
              fontSize={"1.6rem"}
              cursor={"pointer"}
              onClick={onClose}
            />
            <Text
              textAlign={"center"}
              mx={"auto"}
              cursor={"pointer"}
              fontWeight={"bold"}
            >
              Share to
            </Text>
          </Flex>

          <DrawerBody mt={"2rem"}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BiSearch fontSize={"20px"} color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search group" />
            </InputGroup>

            <Box
              lineHeight={"40px"}
              mt={"1rem"}
              color={"primary.50"}
              fontWeight={"semibold"}
            >
              <Text>Outside Klosanaw</Text>
              <Divider />
              <Text>Create New Group</Text>
              <Divider />
            </Box>

            <Stack direction={"row"} spacing={4} mt={"1.2rem"}>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box>
                <Heading size={"md"}>Social Study 101</Heading>
                <Text fontSize={"12px"}>
                  Hello,drop a tutorial on how to create
                </Text>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter w={"100%"} display={"flex"} justifyContent={"center"}>
            <Box
              background={"primary.50"}
              p={4}
              borderRadius={"100%"}
              cursor={"pointer"}
            >
              <AiOutlineArrowRight fontSize={"25px"} color="neutral.50" />
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default LessonDraft;
