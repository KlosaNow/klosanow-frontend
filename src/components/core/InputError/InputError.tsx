import { Flex, Text } from "@chakra-ui/react";
import { InputErrorInterface } from "../../../types/components/componetInterface";
import { FiAlertCircle } from "react-icons/fi";

const InputError = ({ error }: InputErrorInterface) => {
  return (
    <Flex alignItems="center" fontSize="14px" color="#BA1A1A" margin="3px 0px">
      <FiAlertCircle style={{ marginRight: "8px" }} />
      <Text as="span">{error}</Text>
    </Flex>
  );
};

export default InputError;
