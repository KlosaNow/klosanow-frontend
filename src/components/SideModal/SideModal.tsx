import {
  Box,
  Text,
  Flex,
  Heading,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  InputGroup,
  InputLeftElement,
  Divider,
  Stack,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowRight, AiOutlineCloseCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";


interface SideModal {
  isOpen: any;
  onClose: any;
  title: string;
}

const SideModal = ({ isOpen, onClose, title }: SideModal) => {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  return (
    <>
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
              {title}
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
    </>
  );
};

export default SideModal;
