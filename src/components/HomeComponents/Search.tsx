import { Box, Button } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { Input } from "@chakra-ui/react";

export const Search = () => {
  return (
    <Box mb={5}>
      <Box as="form" className="search" width="full" position="relative">
        <Button
          type="submit"
          position="absolute"
          top="0px"
          left="-5px"
          border="none"
          cursor="pointer"
          background="transparent"
        >
          <CiSearch color="#333" fontSize="1.5rem" />
        </Button>

        <Input
          paddingX={10}
          width="100%"
          background="transparent"
          type="text"
          variant="outline"
          color="black.50"
          placeholder="Search for a lesson"
          _placeholder={{ fontSize: "14px" }}
        />
      </Box>
    </Box>
  );
};
