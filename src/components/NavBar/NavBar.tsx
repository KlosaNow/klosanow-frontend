import { Box, Text, Image } from "@chakra-ui/react";
import { Search } from "../Search/Search";

import { BiBell } from "react-icons/bi";

import { navBarProps } from "../../types/components/componetInterface";

const NavBar = ({ notificationCtrl }: navBarProps) => {
  return (
    <>
      <Box
        position="fixed"
        top={0}
        right={0}
        left={0}
        bottom={0}
        marginLeft={"264px"}
        height="60px"
        display={["none", "flex"]}
        alignItems="center"
        justifyContent={"space-between"}
        borderBottom="0.3px solid #C8C8C8"
        backgroundColor="#fff"
        padding={{ base: "0px 20px", lg: "0px 50px" }}
        zIndex="50"
      >
        <Box mt={"1rem"}>
          <Search />
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Box
            style={{
              position: "relative",
              marginLeft: "5px",
              cursor: "pointer",
            }}
            onClick={notificationCtrl}
          >
            <BiBell fontSize={25} onClick={notificationCtrl} />
            <span
              style={{
                display: "flex",
                position: "absolute",
                width: "15px",
                height: "15px",
                backgroundColor: "red",
                top: "0px",
                right: "0px",
                fontSize: "9px",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                borderRadius: "50%",
              }}
            >
              2
            </span>
          </Box>

          <Text
            width={"0.1rem"}
            height={"2.7rem"}
            bg={"#CCCCCC"}
            mx={"0.8rem"}
          ></Text>
          <Box display={"flex"} alignItems={"center"}>
            <Image
              borderRadius="full"
              boxSize="45px"
              src="https://bit.ly/dan-abramov"
              alt="Klosanaw images"
              mr={"0.8rem"}
            />
            <Box>
              <Text fontWeight={600} fontSize={"0.9rem"}>
                Emmanuel Oluseyi
              </Text>
              <Text fontSize={"0.8rem"}>emmanuel@gmail.com</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
