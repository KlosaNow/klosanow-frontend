import { Box, Image, Flex, Text } from "@chakra-ui/react";
import SettingsItem from "../../components/SettingsItem/SettingsItem";
import avatar from "../../assets/SettingsPageImg/Avatar.png";
import group from "../../assets/SettingsPageImg/Terms.png";
import cloud from "../../assets/SettingsPageImg/Upload.png";
import user from "../../assets/SettingsPageImg/user.png";
import bell from "../../assets/SettingsPageImg/Vector.png";
import wallet from "../../assets/SettingsPageImg/Wallet.png";
import help from "../../assets/SettingsPageImg/Help.png";
import logout from "../../assets/SettingsPageImg/Log-out.png";
import Header from "../../components/Header/Header";

export default function SettingsPage(): JSX.Element {
  const getSome = () => {};
  return (
    <Box backgroundColor="#f6f6f6" paddingBottom="30px">
      <Header />

      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gap="7"
        >
          <Image src={avatar} alt="lady" ml="9" boxSize="20%" />

          <Flex flexDirection="column">
            <Text fontSize="xl">Olivia Rhye</Text>
            <Text color="#667085" fontSize="xl">
              olivia@untitledui.com
            </Text>
          </Flex>
        </Box>

        <Box w="93%">
          <Flex justifyContent="flex-start" flexDirection="column">
            <Box
              background="neutral.10"
              marginTop="55"
              borderRadius="10"
              padding="10px"
            >
              <SettingsItem imageSrc={user} text="Info" link="/info" />
              <SettingsItem
                imageSrc={bell}
                text="Notification"
                link="/settings/notifications"
              />
            </Box>
          </Flex>

          <Box mt="5" background="neutral.10" borderRadius="10" padding="10px">
            <SettingsItem imageSrc={wallet} text="Subscription" link="#" />
            <SettingsItem imageSrc={cloud} text="Storage" link="/free" />
          </Box>

          <Box mt="5" background="neutral.10" borderRadius="10" padding="10px">
            <SettingsItem imageSrc={help} text="Help" link="/help"
            />
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
}
