import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Heading,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BiChat, BiLike, BiSearch, BiShare } from "react-icons/bi";
import { BsChevronDown, BsThreeDotsVertical } from "react-icons/bs";
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineArrowRight, AiOutlineCloseCircle } from "react-icons/ai";
import { TbShare2 } from "react-icons/tb";
import SideModal from "../../components/SideModal/SideModal";

const Lessons = [
  {
    id: 1,
    title: "Biology 101",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio, ut error magni quae inventore eaque dolores harum esse repellat. Ad accusamus enim a ut adipisci. Assumenda alias eaque totam",
    tutor: "Prof Peter",
  },
  {
    id: 2,
    title: "Biology 101",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio, ut error magni quae inventore eaque dolores harum esse repellat. Ad accusamus enim a ut adipisci. Assumenda alias eaque totam",
    tutor: "Prof Peter",
  },
  {
    id: 3,
    title: "Biology 101",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio, ut error magni quae inventore eaque dolores harum esse repellat. Ad accusamus enim a ut adipisci. Assumenda alias eaque totam",
    tutor: "Prof Peter",
  },
];

const LessonDescription = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  return (
    <Box fontFamily="inherit">
      <Flex align={"center"} rowGap={3}>
        <Heading mr={2} fontFamily="inherit">
          Created Lesson
        </Heading>
        <Box mt={2}>
          <BsChevronDown />
        </Box>
      </Flex>
      <Box>
        <Heading size={"md"}>Your Videos</Heading>
      </Box>
      <Grid
        // width={"100%"}
        gap={6}
        pt={3}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {Lessons.map((lesson) => {
          const { id, title, description, tutor } = lesson;
          return (
            <GridItem w="100%">
              <Card maxW={"100%"} pb={"1rem"} fontFamily="inherit">
                <CardHeader p={0}>
                  <Flex>
                    <Flex
                      flex="1"
                      alignItems="center"
                      flexWrap="wrap"
                      position={"relative"}
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        width={"100%"}
                        alt="Green double couch with wooden legs"
                      />
                      <Box position={"absolute"} bottom={"8px"} right={"16px"}>
                        <Text
                          backgroundColor={"#7B58F4;"}
                          color={"white"}
                          py={"1px"}
                          px={2}
                          borderRadius={"5px"}
                        >
                          5:04
                        </Text>
                      </Box>
                    </Flex>
                    <Box position={"absolute"} top={"8px"} right={"16px"}>
                      <Menu>
                        <MenuButton
                          // as={Button}
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
                            color={"#7B58F4;"}
                            ref={btnRef}
                            cursor={"pointer"}
                            icon={<BsThreeDotsVertical />}
                          />
                        </MenuButton>
                        <Box>
                          <MenuList>
                            <Box>
                              <MenuItem
                                onClick={onOpen}
                                _hover={{ background: "none" }}
                              >
                                <Flex align={"center"} gap={2}>
                                  <Box color="#7B58F4;">
                                    <TbShare2 color="#7B58F4;" />
                                  </Box>

                                  <Text> Share Course</Text>
                                </Flex>
                              </MenuItem>
                            </Box>

                            <MenuItem>
                              <Flex align={"center"} gap={2}>
                                <Box color="#7B58F4;">
                                  <RiDeleteBin5Line color="red" />
                                </Box>

                                <Text>Delete course</Text>
                              </Flex>
                            </MenuItem>
                          </MenuList>
                        </Box>
                      </Menu>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Heading size="md">{title}</Heading>

                  <Text>
                    {description}
                    <span style={{ fontWeight: "bold" }}></span>
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
                    colorScheme="#7B58F4;"
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
            </GridItem>
          );
        })}
      </Grid>
      <SideModal isOpen={isOpen} onClose={onClose} title="Share to" />
    </Box>
  );
};

export default LessonDescription;
