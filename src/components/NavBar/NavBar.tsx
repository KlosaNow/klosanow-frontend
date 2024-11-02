import { Box, Text, Flex } from "@chakra-ui/react";
import { Search } from "../Search/Search";

import { BiBell } from "react-icons/bi";

import { navBarProps } from "../../types/components/componetInterface";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HiUserCircle } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { contactsPagePath, studyChatPageSlug } from "../../data/pageUrl";
import { ContactIcon } from "../../assets/svgs";

const NavBar = ({ notificationCtrl }: navBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isStudyChatpage = location.pathname.includes(studyChatPageSlug);

  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <Box
        height="60px"
        display={["none", "flex"]}
        alignItems="center"
        justifyContent={"space-between"}
        borderBottom="0.3px solid #C8C8C8"
        backgroundColor="#fff"
        padding={{ base: "0px 20px", lg: "0px 50px" }}
        zIndex="50"
        w={"100%"}
      >
        <Flex mt={"1rem"}>
          <Search />

          {isStudyChatpage && (
            <Box
              as="button"
              onClick={() => navigate(contactsPagePath)}
              ml="50px"
              h="max-content"
            >
              <ContactIcon />
            </Box>
          )}
        </Flex>

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
            {/* <Image
              borderRadius="full"
              boxSize="45px"
              src="https://bit.ly/dan-abramov"
              alt="Klosanaw images"
              mr={"0.8rem"}
            /> */}
            <HiUserCircle
              fontSize="40px"
              style={{
                marginRight: "0.8rem",
              }}
            />
            <Box>
              <Text fontWeight={600} fontSize={"0.9rem"}>
                {user.data?.name ? user.data?.name : "user"}
              </Text>
              <Text fontSize={"0.8rem"}>
                {" "}
                {user.data?.email ? user.data?.email : ""}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
