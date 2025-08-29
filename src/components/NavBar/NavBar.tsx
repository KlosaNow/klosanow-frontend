import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { Search } from "../Search/Search";
import { navBarProps } from "../../types/components/componetInterface";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HiUserCircle } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { contactsPagePath, studyChatPageSlug } from "../../data/pageUrl";
import {
  ContactIcon,
  NotificationFillIcon,
  NotificationIcon,
} from "../../assets/svgs";

const NavBar = ({ notificationCtrl, notificationLength }: navBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isStudyChatpage = location.pathname.includes(studyChatPageSlug);

  const user = useSelector((state: RootState) => state.user);
  const hasNotification = notificationLength > 0;

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
          {hasNotification ? (
            <NotificationFillIcon
              cursor={"pointer"}
              onClick={notificationCtrl}
            />
          ) : (
            <NotificationIcon cursor={"pointer"} />
          )}
          <Text
            width={"0.1rem"}
            height={"2.7rem"}
            bg={"#CCCCCC"}
            mx={"0.8rem"}
          ></Text>
          <Box display={"flex"} alignItems={"center"}>
            {user.data?.profilePhoto ? (
              <Image
                borderRadius="full"
                boxSize="45px"
                src={user.data?.profilePhoto}
                alt="Klosanaw images"
                mr={"0.8rem"}
              />
            ) : (
              <HiUserCircle
                fontSize="40px"
                style={{
                  marginRight: "0.8rem",
                }}
              />
            )}
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
