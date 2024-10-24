import React from "react";
import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  ModalFooter,
  Button,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SubscriptionModal({ isOpen, onClose }: ModalProps) {
  const [formValue, setFormValue] = React.useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="md">
          <IconButton
            aria-label="Go Back"
            icon={<BiArrowBack />}
            onClick={onClose}
            background="none"
          />
          Make Payment
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <>
            <Box marginBottom={3}>
              <Text mb="8px" fontSize={14}>
                Card Holder Name:
              </Text>
              <Input
                value={formValue.name}
                onChange={handleChange}
                placeholder="Name"
                size="sm"
              />
            </Box>
            <Box marginBottom={3}>
              <Text mb="8px" fontSize={14}>
                Card Number:
              </Text>
              <Input
                value={formValue.cardNumber}
                onChange={handleChange}
                placeholder="XXXX XXXX XXXX XXXX"
                size="sm"
                type="number"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              marginBottom={10}
            >
              <Box marginBottom={3}>
                <Text mb="8px" fontSize={14}>
                  Expiry Date:
                </Text>
                <Input
                  value={formValue.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  size="sm"
                />
              </Box>
              <Box marginBottom={3}>
                <Text mb="8px" fontSize={14}>
                  CVV:
                </Text>
                <InputGroup>
                  <Input
                    value={formValue.cvv}
                    onChange={handleChange}
                    placeholder="CVV"
                    size="sm"
                    type="number"
                  />
                  <InputRightElement>
                    <InfoOutlineIcon />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Box>

            <Box>
              <Box display="flex" justifyContent="space-between">
                <Text>Sub Total</Text>
                <Text>₦5000</Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text>Total amount</Text>
                <Text>₦5000</Text>
              </Box>
            </Box>
          </>
        </ModalBody>
        <ModalFooter>
          <Button
            backgroundColor="rgba(123, 88, 244, 1)"
            color="white"
            fontSize={16}
            width="100%"
            fontWeight="normal"
            _hover={{
              bg: "white",
              borderColor: "rgba(123, 88, 244, 1)",
              borderWidth: "1px",
              color: "rgba(123, 88, 244, 1)",
            }}
          >
            Make Payment
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SubscriptionModal;
