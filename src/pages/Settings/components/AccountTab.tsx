import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import uploadImageIcon from "../../../assets/SettingsPageImg/Upload-img.png";

const AccountTab: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <Box paddingBlock="2rem" width="80%">
      <form>
        <VStack align="start" spacing="2rem">
          <Flex align="flex-start" gap="4rem">
            <VStack align="start">
              <FormLabel htmlFor="firstNameInput">First name</FormLabel>
              <Input
                id="firstNameInput"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                border="1px solid #CCCCCC"
                width={300}
                height={30}
                paddingBlock={5}
                outline="none"
                _focus={{ boxShadow: "none" }}
              />
            </VStack>
            <VStack align="start">
              <FormLabel htmlFor="lastNameInput">Last name</FormLabel>
              <Input
                id="lastNameInput"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                border="1px solid #CCCCCC"
                width={300}
                height={30}
                paddingBlock={5}
                outline="none"
                _focus={{ boxShadow: "none" }}
              />
            </VStack>
          </Flex>

          <Flex gap="4rem">
            <VStack align="start">
              <FormLabel htmlFor="emailInput">Email</FormLabel>
              <Input
                id="emailInput"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                border="1px solid #CCCCCC"
                width={300}
                height={30}
                paddingBlock={5}
                outline="none"
                _focus={{ boxShadow: "none" }}
              />
            </VStack>
            <VStack align="start">
              <FormLabel htmlFor="phoneNumberInput">Phone number</FormLabel>
              <Input
                id="phoneNumberInput"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                border="1px solid #CCCCCC"
                width={300}
                height={30}
                paddingBlock={5}
                outline="none"
                _focus={{ boxShadow: "none" }}
              />
            </VStack>
          </Flex>

          <Flex justifyContent="center" alignItems="center" alignSelf="center" marginBlock="5rem">
            <label>
              <input style={{ display: "none" }} type="file" />
              <Box
                border="1px solid #CCCCCC"
                cursor="pointer"
                display="flex"
                gap={2}
                padding="0.5rem 4rem"
              >
                <img src={uploadImageIcon} alt="upload image icon" />
                <Text>upload profile image</Text>
              </Box>
            </label>
          </Flex>

          <Flex alignSelf="start" gap="3rem">
            <Button
              type="submit"
              background="#7B58F4"
              borderRadius={6}
              color="#FFFFFF"
              fontWeight={700}
              padding="0.5rem 3.5rem"
            >
              Save Changes
            </Button>
            <Button
              background="#FFFFFF"
              color="#808080"
              fontWeight={700}
              padding="0.5rem 3.5rem"
            >
              Cancel
            </Button>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};

export default AccountTab;