import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CgClose } from "react-icons/cg";
import successIcon from "../../assets/svgs/success-toast.svg";
import warningIcon from "../../assets/svgs/warning-toast.svg";
import { toastProps } from "../../types/components/componetInterface";

const ToastAlert = ({ variant, message, closeFunc }: toastProps) => {
  return (
    <Flex
      justifyContent="space-between"
      padding="16px"
      borderRadius="8px"
      background="#fff"
      border="1px solid #F2F4F7"
      boxShadow="0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)"
    >
      <Box>
        <Image
          src={variant === "success" ? successIcon : warningIcon}
          alt="toast alert"
          marginBottom="12px"
        />
        <Text
          color="#101828"
          fontSize="14px"
          fontWeight="500"
          marginLeft="10px"
        >
          {message}
        </Text>
      </Box>
      <CgClose
        color="#667085"
        fontSize="20px"
        cursor="pointer"
        onClick={closeFunc}
      />
    </Flex>
  );
};

export default ToastAlert;
