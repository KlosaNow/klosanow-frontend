import {
  Box,
  Text,
  Input,
  Stack,
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
  Avatar,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BiChat, BiLike, BiSearch, BiShare } from "react-icons/bi";
import { BsChevronDown, BsThreeDotsVertical } from "react-icons/bs";
import React from "react";
// import { IoShareOutline } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineArrowRight, AiOutlineCloseCircle } from "react-icons/ai";
import { TbShare2 } from "react-icons/tb";

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
    <Box>
      <Flex align={"center"} rowGap={3}>
        <Heading mr={2}>Created Lesson</Heading>
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
              <Card maxW={"100%"} pb={"1rem"}>
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
                        <MenuList>
                          <MenuItem _hover={{ background: "none" }}>
                            <Flex align={"center"} gap={2}>
                              <Box color="#7B58F4;">
                                <TbShare2 color="#7B58F4;" />
                              </Box>

                              <Text onClick={onOpen}> Share Course</Text>
                            </Flex>
                          </MenuItem>
                          <MenuItem>
                            <Flex align={"center"} gap={2}>
                              <Box color="#7B58F4;">
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
                  <Heading size="md">Biology 101</Heading>

                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    odio, ut error magni quae inventore eaque dolores harum esse
                    repellat. Ad accusamus enim a ut adipisci. Assumenda alias
                    eaque totam....
                    <span style={{ fontWeight: "bold" }}>Prof Peter</span>
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
              color={"#7B58F4;"}
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
              background={"#7B58F4;"}
              p={4}
              borderRadius={"100%"}
              cursor={"pointer"}
            >
              <AiOutlineArrowRight fontSize={"25px"} color="white" />
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default LessonDescription;
