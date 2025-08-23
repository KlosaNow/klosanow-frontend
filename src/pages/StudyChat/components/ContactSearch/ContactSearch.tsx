import React from "react";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "../../assets/svgs";

interface ContactSearchProps {
  value: string;
  setValue: (value: string) => void;
}

const ContactSearch: React.FC<ContactSearchProps> = ({ value, setValue }) => {
  return (
    <form>
      <FormControl>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input
            name="value"
            value={value}
            w="300px"
            placeholder="Search by name"
            onChange={(e) => setValue(e.currentTarget.value)}
            focusBorderColor="#7B58F4"
            background="#ffffff"
            borderRadius="50px"
            border="none"
            autoComplete="off"
          />
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default ContactSearch;
