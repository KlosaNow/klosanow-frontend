import { Box, Flex, Text } from "@chakra-ui/react";
import { Header, SettingsItem } from "../../components";
import group from "../../assets/SettingsPageImg/Terms.png";
import cloud from "../../assets/SettingsPageImg/Upload.png";
import userImg from "../../assets/SettingsPageImg/user.png";
import bell from "../../assets/SettingsPageImg/Vector.png";
import wallet from "../../assets/SettingsPageImg/Wallet.png";
import help from "../../assets/SettingsPageImg/Help.png";
import logout from "../../assets/SettingsPageImg/Log-out.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HiUserCircle } from "react-icons/hi";

const MobileSettings = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <Box
      backgroundColor="#f6f6f6"
      width="full"
      minHeight="100vh"
      margin="auto"
      padding="15px 15px 100px"
      position="absolute"
      top="0"
      left="0"
    >
      <Header />

      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
        >
          <HiUserCircle
            fontSize="70px"
            style={{
              marginLeft: "20px",
              marginRight: "10px",
            }}
          />
          {/* <Image src={avatar} alt="lady" ml="9" boxSize="20%" /> */}

          <Box>
            <Text fontSize="xl">{user?.data?.name}</Text>
            <Text color="#667085" fontSize="12px">
              {user?.data?.email}
            </Text>
          </Box>
        </Box>

        <Box w="100%">
          <Box
            background="neutral.10"
            marginTop="30"
            borderRadius="10"
            padding="10px"
          >
            <SettingsItem imageSrc={userImg} text="Info" link="/info" />
            <SettingsItem
              imageSrc={bell}
              text="Notification"
              link="/settings/notifications"
            />
          </Box>

          <Box mt="5" background="neutral.10" borderRadius="10" padding="10px">
            <SettingsItem imageSrc={wallet} text="Subscription" link="#" />
            <SettingsItem imageSrc={cloud} text="Storage" link="/free" />
          </Box>

          <Box mt="5" background="neutral.10" borderRadius="10" padding="10px">
            <SettingsItem imageSrc={help} text="Help" link="/help" />
            <SettingsItem
              imageSrc={group}
              text="Terms and Condition"
              link="#"
            />
          </Box>

          <Box mt="5" background="neutral.10" borderRadius="10" padding="10px">
            <SettingsItem imageSrc={logout} text="Logout" link="/" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default MobileSettings;
