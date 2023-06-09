import { Box } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { Input } from "@chakra-ui/react";

export const Search = () => {
  return (
    <Box mb={5}>
      <form
        className="search"
        style={{
          position: "relative",
          width: " 100%",
        }}
      >
        <button
          type="submit"
          style={{
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translate(100%, -50%)",
            border: "none",
            cursor:"pointer"
          }}
        >
          <BsSearch style={{
              position:"absolute",
              fontSize:"1.3rem",
              top: '50%',
              left: '0%',
              transform: "translate(50%, -50%)",
              color: "#333",
          }} />
        </button>
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
      </form>
    </Box>
  );
};
