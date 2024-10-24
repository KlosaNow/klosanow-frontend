import { Box } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Stack, Button } from "@chakra-ui/react";
import Header from "../../components/Header/Header";

export default function AccountInfo(): JSX.Element {
  return (
    <Box>
      <Header pageName="Info" />

      <Stack spacing={1} px="2">
        <FormControl>
          <FormLabel pt="5" color="black.30">
            First Name
          </FormLabel>
          <Input
            id="nameInput"
            height="42px"
            width="full"
            focusBorderColor="primary.50"
            placeholder="Oluwatosin"
            _placeholder={{ opacity: 0.5, color: "black.30" }}
            size="md"
          />
        </FormControl>

        <FormControl>
          <FormLabel pt="3" color="black.30">
            Last Name
          </FormLabel>
          <Input
            height="42px"
            width="full"
            focusBorderColor="primary.50"
            placeholder="Olasina"
            _placeholder={{ opacity: 0.5, color: "black.30" }}
            size="md"
          />
        </FormControl>

        <FormControl>
          <FormLabel pt="3" color="black.30">
            Email{" "}
          </FormLabel>
          <Input
            id="emailInput"
            type="email"
            height="42px"
            width="full"
            focusBorderColor="primary.50"
            placeholder="oluwatosinolasina@gmail.com"
            _placeholder={{ opacity: 0.5, color: "black.30" }}
            size="md"
          />
        </FormControl>

        <FormControl pb="10">
          <FormLabel pt="3" color="black.30">
            Phone Number
          </FormLabel>
          <Input
            type="number"
            height="42px"
            width="full"
            focusBorderColor="primary.50"
            placeholder="07039301831"
            _placeholder={{ opacity: 0.5, color: "black.30" }}
            max={11}
            size="md"
          />
        </FormControl>

        <Button
          height="55px"
          width="full"
          backgroundColor="primary.50"
          color="neutral.10"
        >
          Edit Account
        </Button>
      </Stack>
    </Box>
  );
}
