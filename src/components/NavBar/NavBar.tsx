import { Box, Text, Image } from "@chakra-ui/react";
import { Search } from "../HomeComponents/Search";
import { Link } from "react-router-dom";
import { BiBell } from "react-icons/bi";

const NavBar = () => {
  return (
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
<<<<<<< HEAD
    >
      <Box mt={"1rem"}>
        <Search />
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Link
          to="/notifications"
          style={{ position: "relative", marginLeft: "5px" }}
        >
          <BiBell fontSize={25} />
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
        </Link>
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
=======
    ></Box>
>>>>>>> b2fde632dc9c0b97f37a3731a21fba1c11e09c43
  );
};

export default NavBar;
